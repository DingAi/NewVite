<script setup>
import {ref, onMounted} from 'vue';
import {ElMessage} from 'element-plus';
import {getWeatherMasterData, weatherSwitch} from "@/apis/request-api.js";
import MeteorologicalSoilTab from "@/components/slave-station/MeteorologicalSoilTab.vue";
import MeteorlogicalLineChart from "@/components/echarts/MeteorlogicalLineChart.vue";


const masterNum = 1
// 右侧主站子站的土壤和设备数据
const seriesData = ref([]);
// 开关数据
const switchTableData = ref([]);
//GPS数据
const gpsData = ref("");

// 数据处理函数
const machiningFun = (data) => {
    let result = [];
    data = data.slice(2);
    for (let i = 0; i < 5; i++) {
        result.push(data.slice(i * 4, (i + 1) * 4));
    }
    return result;
}

// 刷新数据
const refresh = async () => {
    try {
        const response = await getWeatherMasterData();
        console.log(response.data);
        seriesData.value = response.data;
        gpsProcess(response.data[0].reverse())
        // 设置开关数据
        switchTableData.value = response.data[7].map((state, index) => ({
            station: `从站${index + 1}`,
            state,
        }));

        // 移除第一和最后一个元素
        seriesData.value.shift();
        seriesData.value.pop();
    } catch (error) {
        console.error('Error fetching sensor data:', error);
        ElMessage.error('Failed to fetch data');
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
    gpsData.value = `定位状态: ${data[0]} 卫星数量: ${data[1]} 坐标: (${data[4]}, ${data[3]}, ${data[2]})`;
}

const handleClick = (tab, event) => {
    console.log(tab, event)
}

onMounted(() => {
    refresh();
});
</script>

<template>
    <el-row class="full" style="max-height: 100%">
        <el-col :span="16" class="p-2 vertically-averaged-container" :xs="24">
            <div class="h-50">
                <div class="full base-div">
                    <div class="div-header">
                        <h4>主站布局</h4>
                        <span class="gps-data">{{ gpsData }}</span>
                    </div>
                    <div class="data-container h-90 p-2">
                        <div class="left-3">
                            <el-table :data="switchTableData" class="full">
                                <el-table-column prop="station" label="Name" align="center">
                                </el-table-column>
                                <el-table-column prop="state" label="状态" align="center">
                                </el-table-column>
                                <el-table-column label="开关" align="center">
                                    <template #default="scope">
                                        <el-switch
                                            v-model="scope.row.state"
                                            size="large"
                                            @change="handleSwitchChange(scope.row, scope.$index)"
                                        ></el-switch>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="right-3 bg-info"></div>
                    </div>
                </div>
            </div>
            <div class="pt-3 h-50">
                <div class="full base-div">
                    <MeteorlogicalLineChart />
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="vertically-container" :xs="24" style="max-height: 100%">
            <div class="p-2" v-for="(item, index) in seriesData" :key="index">
                <el-card class="full">
                    <div class="w-full transverse-average-container text-center">
                        <el-statistic title="电池电压" :value="item[0]"/>
                        <el-statistic title="太阳能板电压" :value="item[1]"/>
                    </div>
                    <el-divider/>
                    <template #header>子站 {{ index + 1 }} 数据</template>
                    <MeteorologicalSoilTab :soil_data="machiningFun(item)"/>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<style scoped lang="less">
@import "anlysis-style";


//:deep(.el-tabs__content){
//    height: 100%;
//}

.div-header {
    display: flex;
    height: 10%; /* 可以根据需要调整高度 */
    color: #2b2f32;
    justify-content: space-between;
    flex-shrink: 0; /* 防止 header 被压缩 */
}

.h-90 {
    height: 90%;
}

.data-container {
    display: flex;
    flex: 1;

    .left-3,
    .right-3 {
        flex: 1;
        overflow: hidden; /* 防止内容溢出 */
    }

    .left-3 {
        padding: 10px; /* 添加内边距 */
    }
}


.el-tabs__content {
    width: 100%;
    height: 100%;
}

.gps-data {
    display: inline-block;
    text-align: right;
}
</style>
