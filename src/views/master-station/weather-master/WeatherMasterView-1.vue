<template>
    <el-row class="full">
        <el-col :span="16" class="p-2 vertically-averaged-container" :xs="24">
            <div class="h-50">
                <div class="full base-div">
                    <div class="div-header">
                        <h4>气象主站 0{{masterNum}}</h4>
                        <span class="gps-data">{{ gpsData }}</span>
                    </div>
                    <div class="data-container h-90 p-2">
                        <div class="left-3">
                            <el-table :data="switchTableData">
                                <el-table-column prop="station" label="子站" align="center">
                                </el-table-column>
                                <el-table-column prop="state" label="状态" align="center">
                                    <template #default="scope">
                                        <el-tag type="primary" effect="plain" v-if="scope.row.state" >运行</el-tag>
                                        <el-tag type="info" effect="plain" v-else >停止</el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column label="开关" align="center">
                                    <template #default="scope">
                                        <el-switch
                                            v-model="scope.row.state"
                                            size="large"
                                            @change="handleSwitchChange(scope.row, scope.$index)"
                                            style="--el-switch-on-color: #0d6efd;"
                                        ></el-switch>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="right-3 p-3">
                            <div class="top">
                                <div class="grid-item">
                                    <el-statistic :value="SDCardState">
                                        <template #title>
                                            <div style="display: inline-flex; align-items: center">
                                                SD卡状态
                                            </div>
                                        </template>
                                        <el-icon><Platform /></el-icon>
                                    </el-statistic>
                                </div>
                                <div class="grid-item">
                                    <el-text size="small">SD卡存储延时（秒）</el-text>
                                    <el-time-select v-model="SDCardWriteDelay" size="large" start="00:00" step="00:01"
                                                    end="00:30"
                                                    placeholder="SD卡写延时" @change="handleChange1"/>
                                </div>
                                <div class="grid-item">
                                    <el-text size="small">主站数据写延时（秒）</el-text>
                                    <el-time-select v-model="masterDataSendDelay" size="large" start="00:00"
                                                    step="00:01" end="00:30"
                                                    placeholder="主要数据发送延时" @change="handleChange2"/>
                                </div>
                                <div class="grid-item">
                                    <el-text size="small">子站数据写延时（分钟）</el-text>
                                    <el-time-select v-model="soilDataSendDelay" size="large" start="00:00" step="00:01"
                                                    end="00:30"
                                                    placeholder="土壤数据发送延时" @change="handleChange3"/>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="grid-item" v-for="(item,index) in masterDataValueList" :key="index">
                                    <el-statistic :value="item" :formatter="formatValue" :suffix="suffixList[index]">
                                        <template #title>
                                            <div style="display: inline-flex; align-items: center">
                                                {{ masterDataNameList[index] }}
                                            </div>
                                        </template>
                                    </el-statistic>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-3 h-50 phone-h">
                <div class="full base-div">
                    <MeteorologicalLineChart/>
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="vertically-container" :xs="24" style="max-height: 100%">
            <div class="p-2" v-for="(item, index) in seriesData" :key="index">
                <el-card class="full">
                    <div class="w-full transverse-average-container text-center">
                        <el-statistic title="电池电压" :value="item[0]/100" group-separator="," :formatter="formatValue" suffix="V"/>
                        <el-statistic title="太阳能板电压" :value="item[1]/1000" group-separator="," :formatter="formatValue" suffix="V"/>
                    </div>
                    <el-divider/>
                    <template #header>
                        <span :class="{'highlight': index === 0}">
                            {{ index === 0 ? '主站数据' : `子站 ${index} 数据` }}
                        </span>
                    </template>
                    <MeteorologicalSoilTab :soil_data="machiningFun(item)"/>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {ElMessage} from 'element-plus';
import {
    getWeatherMasterData,
    getWeatherMasterSwitchData,
    getWeatherTimeControl,
    weatherSwitch
} from "@/apis/request-api.js";
import MeteorologicalSoilTab from "@/components/MeteorologicalSoilTab.vue";
import MeteorologicalLineChart from "@/components/echarts/MeteorologicalLineChart.vue";
import {io} from "socket.io-client";



const masterNum = 1
// 右侧主站子站的土壤和设备数据
const seriesData = ref([]);
// 开关数据
const switchTableData = ref([]);
//GPS数据
const gpsData = ref("");
//主站独有数据
const masterDataNameList = ["空气温度", "空气湿度", "光照", "气压", "设备电流", "设备功率"];
const masterDataValueList = ref([])

//SD卡和之间设置
const SDCardWriteDelay = ref(null)
const SDCardState = ref(null)
const masterDataSendDelay = ref(null)
const soilDataSendDelay = ref(null)

// 数据单位数组
const suffixList = ['℃', '%', 'lux', 'KPa', 'A', 'W']

// 格式化函数，确保数字显示两位小数
const formatValue = (value) => {
    return value.toFixed(2);
};

// 数据处理函数
const machiningFun = (data) => {
    let result = [];
    data = data.slice(2);
    for (let i = 0; i < 5; i++) {
        result.push(data.slice(i * 4, (i + 1) * 4));
    }
    result = result.map(row => row.map(num => num / 100));
    return result;
}

// 刷新数据
const refresh = async () => {
    try {
        const response = await getWeatherMasterData('real_time_data');
        // console.log(response);
        masterDataValueList.value = [];
        masterDataValueList.value.push(parseFloat(response.data[0][0]) / 100);
        masterDataValueList.value.push(parseFloat(response.data[0][1]) / 100);
        masterDataValueList.value.push(response.data[0][6]);
        masterDataValueList.value.push(response.data[0][7]/1000);
        masterDataValueList.value.push(response.data[0][4]/100000);
        masterDataValueList.value.push(response.data[0][5]/10000);
        seriesData.value = response.data;
        gpsProcess(response.data[0].reverse())
        // 移除第一和最后两个元素
        seriesData.value.shift();
        seriesData.value.pop();
        seriesData.value.pop();
    } catch (error) {
        // 弹出错误提示框
        console.error('Error fetching sensor data:', error);
        ElMessage.error('Failed to fetch data');
    }
}

const switchRefresh = async () => {
    // 设置开关数据
    try {
        const response = await getWeatherMasterSwitchData(masterNum);
        console.log(response.data)
        switchTableData.value = response.data[0].map((state, index) => ({
            station: `从站${index + 1}`,
            state,
        }));
        console.log(response.data[1][2])
        SDCardWriteDelay.value = response.data[1][0].length===1? '00:0'+ response.data[1][0] : '00:'+ response.data[1][0];
        masterDataSendDelay.value = response.data[1][1].length===1? '00:0'+ response.data[1][1] : '00:'+ response.data[1][1];
        soilDataSendDelay.value = response.data[1][2].length===1? '00:0'+ response.data[1][2] : '00:'+ response.data[1][2];

    } catch (error) {
        console.error('Error fetching sensor data:', error);
        ElMessage.error('Failed to fetch switch');
    }
}

// 处理开关变化
const handleSwitchChange = (row, index) => {
    console.log(`开关状态变化：从站${index + 1}，状态：${row.state}`);
    // 根据开关状态生成对应的二进制字符串
    const binaryString = switchTableData.value.map(item => item.state ? '1' : '0').join('');
    // 将二进制字符串转换为十六进制字符串
    const hexString = parseInt(binaryString, 2).toString(16);
    weatherSwitch(hexString, masterNum)
    console.log(`生成的十六进制字符串：0x${hexString}`);
};

const gpsProcess = (data) => {
    gpsData.value = `定位状态: ${data[0]} 卫星数量: ${data[1]} 坐标: (${data[4] / 10000000}, ${data[3] / 10000000}, ${data[2]})`;
}

const handleChange1 = (value) => {
    console.log(value)
    let hexString = parseInt(value.slice(-2), 10).toString(16)
    console.log(masterNum)
    getWeatherTimeControl(masterNum, "01", hexString)
}
const handleChange2 = (value) => {
    console.log(value)
    let hexString = parseInt(value.slice(-2), 10).toString(16)
    getWeatherTimeControl(masterNum, "02", hexString)
}
const handleChange3 = (value) => {
    console.log(value)
    let hexString = parseInt(value.slice(-2), 10).toString(16)
    getWeatherTimeControl(masterNum, "03", hexString)
}

// const ws = ref(null);
onMounted(() => {
    switchRefresh()
    refresh();

    // 监听来自WebSocket的消息
    // ws.value = new WebSocket('ws://127.0.0.1:8000/ws');
    //
    // ws.value.onopen = () => {
    //     console.log('WebSocket connection established');
    //     // 连接成功后可以在这里发送数据
    //     ws.value.send('Hello, server!');
    // };
    //
    // ws.value.onmessage = (event) => {
    //     console.log('Received message:', event.data);
    //     // 处理服务器发送的消息
    // };
    //
    // ws.value.onerror = (event) => {
    //     console.error('WebSocket error:', event);
    // };
    //
    // ws.value.onclose = () => {
    //     console.log('WebSocket connection closed');
    // };
    setInterval(() => {
        refresh();
    }, 2000)
});

// onBeforeUnmount(() => {
//     socket.disconnect()
// })
</script>

<style scoped lang="less">
@import "@/assets/css/anlysis-style";

.el-statistic {
    --el-statistic-content-font-size: 25px;
    --el-statistic-title-font-size: 15px;
    --el-statistic-content-color: rgb(255, 190, 45);
}

.phone-h {
    @media (max-width: 768px) {
        height: 600px;  // 在电脑端的属性
    }
}

.div-header {
    display: flex;
    height: 10%; /* 可以根据需要调整高度 */
    color: #2b2f32;
    justify-content: space-between;
    flex-shrink: 0; /* 防止 header 被压缩 */
}

.h-90 {
    max-height: 90%;
}

.data-container {
    display: flex;
    flex: 1;
    gap: 1rem;

    .left-3,
    .right-3 {
        flex: 1;
        overflow: hidden; /* 防止内容溢出 */
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border-radius: 0.5rem;
    }

    .right-3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .top {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            gap: 1rem; /* 设置网格项之间的间距 */
            flex: 1;
            overflow: auto; /* 使内容可滚动 */
            margin-bottom: 0.5rem; /* 分隔上、下部分 */
        }

        .bottom {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            gap: 1rem; /* 设置网格项之间的间距 */
            flex: 1;
            overflow: auto; /* 使内容可滚动 */
            margin-bottom: 0.5rem; /* 分隔上、下部分 */
            text-align: center;
        }
    }


}

.gps-data {
    display: inline-block;
    text-align: right;
}

.highlight {
    font-weight: bold;
    color: #005eeb; /* 可以根据需要调整颜色 */
}
</style>
