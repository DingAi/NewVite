<script setup>
import {ref, reactive, watch, onMounted} from 'vue';
import {stations, sensors, shortcuts} from "@/assets/js/stations-data.js"
import axios from "axios";
import {ElNotification} from 'element-plus'
import HistoryChart from "@/components/echarts/HistoryChart.vue";

const timeStr = ref('')
const masterStations = reactive([
    {value: 'master01', label: '主站 01'},
    {value: 'master02', label: '主站 02'},
    {value: 'master03', label: '主站 03'},
]);


const masterValue = ref('master01');
const slaveValue = ref([])
const sensorValue = ref('')
const sensorsList = reactive(sensors)
let slaveStations = ref({})
const allData = ref({})


const getSlaves = (masterNum) => {
    if (masterNum) {
        slaveStations.value = getMasterIndex(masterNum);
    } else {
        return {}
    }
}


const sendData = (slaveList, sensorsList, time) => {
    if (sensorsList && time) {
        let dataList = [];
        for (let slave of slaveList) {
            for (let sensor of sensorsList) {
                dataList.push(sensor + slave);
            }
        }
        let masterStr = masterValue.value.toString()
        axios.post('online/range_query', {'masterNum': masterStr, 'sensorNum': dataList, 'time': time})
            .then(response => {
                allData.value = response.data;
                if (allData.lenght != 0) {
                    ElNotification({
                        title: 'Success',
                        message: '数据查询成功！',
                        type: 'success',
                    })
                }
            })
    } else {
        ElNotification({
            title: 'Warning',
            message: '请选择完整数据！',
            type: 'warning',
        })
    }
}

const getMasterIndex = (masterValue) => {
    return stations[masterValue];
}


onMounted(() => {
    getSlaves(masterValue.value);
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
                            <el-option label="主站 01" value="master01" disabled/>
                            <el-option label="主站 01" value="master01" disabled/>
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
                                v-model="timeStr"
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
                        <el-button type="primary" plain @click="sendData(slaveValue, sensorValue, timeStr)">生成图表</el-button>
                        <el-button type="primary" plain>数据下载</el-button>
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
                <!--                <h1>{{ slaveStations }}</h1>-->
                <!--                <h1>{{ slaveValue }}</h1>-->
                <!--                <h1>{{ sensorValue }}</h1>-->
<!--                <h1>{{ timeStr }}</h1>-->
                <!--                                <h1>{{ allData }}</h1>-->
                <HistoryChart :historyData="allData" :stations="slaveValue" :sensors="sensorValue"/>
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