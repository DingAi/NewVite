<template>
    <el-row :gutter="20" class="history-select">
        <el-col :span="24" class="p-2">
            <div class="base-div items">
                <div class="item">
                    <div class="text-center" style="width: 200px">
                        <p>主站选择</p>
                        <el-select v-model="masterValue"
                                   placeholder="Select"
                                   default-first-option
                                   size="large"
                                   @change="masterHandleSelectChange"
                        >
                            <el-option label="气体箱主站 01" value="master01"/>
                            <el-option label="气体箱主站 02" value="master02"/>
                            <el-option label="气体箱主站 03" value="master03" disabled/>
                            <el-option label="气体箱主站 04" value="master04" disabled/>
                            <el-option label="气象主站 01" value="weather_erdai1"/>
                            <el-option label="气象主站 02" value="weather_erdai2"/>

                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center " style="width: 200px">
                        <p>从站选择</p>
                        <el-select v-model="slaveValue"
                                   multiple collapse-tags
                                   placeholder="Select"
                                   size="large"
                                   @change="slaveHandleSelectChange"
                        >
                            <el-option v-for="item in slaveStations" :label="item.label" :key="item"
                                       :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center" style="width: 200px">
                        <p>传感器选择</p>
                        <el-cascader
                            v-if="masterValue === 'weather_erdai1' || masterValue === 'weather_erdai2'"
                            :options="wsOptions"
                            v-model="sensorValue"
                            :props="props"
                            size="large"
                            collapse-tags
                            collapse-tags-tooltip
                            clearable
                            @change="handleSelectChange"
                        />
                        <el-select v-else v-model="sensorValue" size="large" multiple collapse-tags
                                   placeholder="Select">
                            <el-option v-for="item in sensorsList" :label="item.label" :key="item" :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <p>时间选择</p>
                        <el-date-picker
                            style="width: 320px"
                            v-model="timeRange"
                            type="datetimerange"
                            size="large"
                            value-format="YYYY-MM-DD HH:mm:ss"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            :shortcuts="shortcuts"
                        />
                    </div>
                </div>
                <div class="item">
                    <div class="buttons text-center" style="width: 200px">
                        <el-button size="large" plain
                                   @click="sendData(slaveValue, sensorValue, timeRange)">
                            生成图表
                        </el-button>
                        <el-button size="large" plain
                                   @click="download(slaveValue, sensorValue)">
                            数据下载
                        </el-button>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="history-chart">
        <el-col :span="24" class="p-2">
            <div class="base-div">
                <!--                <h1>数据图表</h1>-->
                <!--                                <h1>{{ masterValue }}</h1>-->
                <!--                                            <h1>{{ slaveStations }}</h1>-->
                <!--                                            <h1>{{ slaveValue }}</h1>-->
                <!--                                            <h1>{{ sensorValue }}</h1>-->
                <!--                                            <h1>{{ timeStr }}</h1>-->
                <!--                                            <h1>{{ historyData }}</h1>-->
                <HistoryChart :historyData="historyData" :stations="slaveValue" :sensors="sensorValue"
                              v-if="isLoading"/>
                <Loading v-else/>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue';
import {stations, sensors, shortcuts, buildOptions} from "@/assets/js/stations-data.js"
import {ElNotification} from 'element-plus'
import HistoryChart from "@/components/echarts/HistoryChart.vue";
import Loading from "@/components/echarts/Loading.vue";
import {getHistoryData} from "@/apis/request-api.js";
import {dataProcessingAndDownload, getTimeRange} from "@/util/data-generator.js";


//四个选择器绑定的数值
const masterValue = ref('master02');
const slaveValue = ref(["11"])
const sensorValue = ref(["co2"])
const timeRange = ref(getTimeRange(6))

//这两个是选择器的下拉选择列表数据
const sensorsList = reactive(sensors)
let slaveStations = ref({})
const wsOptions = ref([])

//
const props = {multiple: true}

const historyData = ref({})
const isLoading = ref(true);


//根据选择的主站，显示不同的从站序列
const getSlaves = (masterNum) => {
    if (masterNum) {
        slaveStations.value = getMasterIndex(masterNum);
    } else {
        return {}
    }
}

const getSensors = (slaveValue)


const sendData = async (slaveList, sensorsList, time) => {
    let isWeather = (masterValue.value === 'weather_erdai1' || masterValue.value === 'weather_erdai2')
    if (sensorsList.length > 0 && slaveList.length > 0 && time && !isWeather) {
        isLoading.value = false;
        let dataList = [];
        for (let slave of slaveList) {
            for (let sensor of sensorsList) {
                dataList.push(sensor + slave);
            }
        }
        let masterStr = masterValue.value.toString();
        try {
            const response = await getHistoryData(masterStr, dataList, time)
            historyData.value = response.data;
            if (historyData.value.length !== 0) {
                ElNotification({
                    title: 'Success',
                    message: '图表生成完成！',
                    type: 'success',
                    offset: 100,
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = true;
        }
    } else if (sensorsList.length > 0 && slaveList.length > 0 && time && isWeather) {
        isLoading.value = false;
        let masterStr = masterValue.value.toString();
        try {
            const response = await getHistoryData(masterStr, sensorsList, time)
            historyData.value = response.data;
            if (historyData.value.length !== 0) {
                ElNotification({
                    title: 'Success',
                    message: '图表生成完成！',
                    type: 'success',
                    offset: 100,
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = true;
        }
    } else {
        ElNotification({
            title: 'Warning',
            message: '请选择完整数据！',
            type: 'warning',
            offset: 100,
        });
    }
};


const download = async (slaveList, sensorsList) => {
    let isWeather = (masterValue.value === 'weather_erdai1' || masterValue.value === 'weather_erdai2')
    if (slaveList.length>0 && sensorsList.length>0 && timeRange.value && !isWeather) {
        try {
            let dataList = [];
            for (let slave of slaveList) {
                for (let sensor of sensorsList) {
                    dataList.push(sensor + slave);
                }
            }
            ElNotification({
                title: 'Info',
                message: '下载正在进行，请不要关闭页面！',
                type: 'info',
                position: 'bottom-right',
            });
            const response = await getHistoryData(masterValue.value, dataList, timeRange.value)
            let downloadHistoryData = response.data;
            dataProcessingAndDownload(downloadHistoryData, slaveList, sensorsList)
        } catch (error) {
            console.error(error);
        } finally {
            ElNotification({
                title: 'Success',
                message: '数据下载完成！',
                type: 'success',
                position: 'bottom-right',
            });
            isLoading.value = true;
        }
        // }
    } else if (sensorsList.length>0 && slaveList.length>0 && timeRange.value && isWeather) {
        try {
            ElNotification({
                title: 'Info',
                message: '下载正在进行，请不要关闭页面！',
                type: 'info',
                position: 'bottom-right',
            });
            const response = await getHistoryData(masterValue.value, sensorsList, timeRange.value)
            let downloadHistoryData = response.data;
            dataProcessingAndDownload(downloadHistoryData, slaveList, sensorsList)
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = true;
        }
    } else {
        ElNotification({
            title: 'Warning',
            message: '请选择完整数据！',
            type: 'warning',
            offset: 100
        });
    }
}

const getMasterIndex = (masterValue) => {
    return stations[masterValue];
}

const masterHandleSelectChange = (value) => {
    getSlaves(value);
    //清空之前的选择
    slaveValue.value = [];
    sensorValue.value = [];
}

const slaveHandleSelectChange = (value) => {
    wsOptions.value = buildOptions(value);
}

const handleSelectChange = (value) => {
    if (Object.keys(value).length === 0) {
        sensorValue.value = [];
    } else {
        sensorValue.value = value.map(inner => inner[1]);
    }
}


onMounted(() => {
    getSlaves(masterValue.value);
    sendData(["11"], ["co2"], getTimeRange(6));
});
</script>

<style lang="less" scoped>
@import "@/assets/css/master-style";

.select {
    height: auto;
    width: 100%;

    @media (min-width: 768px) {
        width: 240px;  // 在电脑端的属性
    }
}

.buttons {
    display: flex;
    justify-content: center;
}
</style>