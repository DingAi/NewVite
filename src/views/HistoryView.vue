<script setup>
import {ref, reactive, watch, onMounted} from 'vue';
import {stations, sensors, shortcuts, trsnslateSlave, translate} from "@/assets/js/stations-data.js"
import {ElNotification} from 'element-plus'
import HistoryChart from "@/components/echarts/HistoryChart.vue";
import Loading from "@/components/echarts/Loading.vue";
import {getHistoryData} from "@/apis/request-api.js";
import {dataProcessingAndDownload, getTimeRange} from "@/util/data-generator.js";

const timeRange = ref(getTimeRange(6))
const masterStations = reactive([
    {value: 'master01', label: '主站 01'},
    {value: 'master02', label: '主站 02'},
    {value: 'master03', label: '主站 03'},
]);


const masterValue = ref('master01');
const slaveValue = ref(["11"])
const sensorValue = ref(["co2"])
const sensorsList = reactive(sensors)
let slaveStations = ref({})
const historyData = ref({})
const isLoading = ref(true);


const getSlaves = (masterNum) => {
    if (masterNum) {
        slaveStations.value = getMasterIndex(masterNum);
    } else {
        return {}
    }
}


const sendData = async (slaveList, sensorsList, time) => {
    if (sensorsList.length > 0 && slaveList.length > 0 && time) {
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
        });
    }
};


const download = async (slaveList, sensorsList) => {
    if (slaveList.length > 0 && sensorsList.length > 0 && timeRange.value) {
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
    } else {
        ElNotification({
            title: 'Warning',
            message: '请选择完整数据！',
            type: 'warning',
        });
    }
}

const getMasterIndex = (masterValue) => {
    return stations[masterValue];
}


onMounted(() => {
    getSlaves(masterValue.value);
    sendData(["11"], ["co2"], getTimeRange(6));
    watch(
        () => masterValue.value,
        () => {
            if (masterValue.value) {
                getSlaves(masterValue.value);
            }
            slaveValue.value = [];
            sensorValue.value = [];
        }
    );
});
</script>

<template>
    <el-row :gutter="20" class="history-select">
        <el-col :span="24" class="p-2">
            <div class="base-div items">
                <div class="item">
                    <div class="text-center" style="width: 200px">
                        <p>主站选择</p>
                        <el-select v-model="masterValue" placeholder="Select" default-first-option>
                            <el-option label="主站 01" value="master01"/>
                            <el-option label="主站 02" value="master02" disabled/>
                            <el-option label="主站 03" value="master03" disabled/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center " style="width: 200px">
                        <p>从站选择</p>
                        <el-select v-model="slaveValue" multiple collapse-tags placeholder="Select">
                            <el-option v-for="item in slaveStations" :label="item.label" :key="item"
                                       :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center" style="width: 200px">
                        <p>传感器选择</p>
                        <el-select v-model="sensorValue" multiple collapse-tags placeholder="Select">
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
                            value-format="YYYY-MM-DD HH:mm:ss"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            :shortcuts="shortcuts"
                        />
                    </div>
                </div>
                <div class="item">
                    <div class="buttons text-center" style="width: 200px">
                        <el-button type="primary" plain @click="sendData(slaveValue, sensorValue, timeRange)">生成图表
                        </el-button>
                        <el-button type="primary" plain @click="download(slaveValue, sensorValue)">数据下载</el-button>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="history-chart">
        <el-col :span="24" class="p-2">
            <div class="base-div">
                <!--                <h1>数据图表</h1>-->
                <!--                <h1>{{ masterValue }}</h1>-->
                <!--                            <h1>{{ slaveStations }}</h1>-->
                <!--                            <h1>{{ slaveValue }}</h1>-->
                <!--                            <h1>{{ sensorValue }}</h1>-->
                <!--                            <h1>{{ timeStr }}</h1>-->
                <!--                                            <h1>{{ historyData }}</h1>-->
                <HistoryChart :historyData="historyData" :stations="slaveValue" :sensors="sensorValue"
                              v-if="isLoading"/>
                <Loading v-else/>
            </div>
        </el-col>
    </el-row>
</template>

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