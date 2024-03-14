<script setup>
import {ref, reactive, watch, onMounted, h} from 'vue';
import {stations, sensors} from "@/assets/js/stations-data.js"
import axios from "axios";
import {ElNotification} from 'element-plus'
import HistoryChart from "@/components/echarts/HistoryChart.vue";


const timeStr = ref('')
const masterStations = reactive([
    {value: 'master1', label: '主站 01'},
    {value: 'master2', label: '主站 02'},
    {value: 'master3', label: '主站 03'},
]);


const masterValue = ref('')
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
    if (sensorsList && sensorsList && time) {
        let dataList = [];
        for (let slave of slaveList) {
            for (let sensor of sensorsList) {
                dataList.push(sensor + slave);
            }
        }
        let masterStr = masterValue.value.toString()
        axios.post('xu/range_query', {'masterNum': masterStr, 'sensorNum': dataList, 'time': time})
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

onMounted(() => {

})

const getMasterIndex = (masterValue) => {
    return stations[masterValue];
}


onMounted(() => {

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
            <div class="base-div">
                <h1>图表数据选择器</h1>
                <el-row class="">
                    <div class="m-4 select">
                        <span class="demonstration">主站选择</span>
                        <el-select v-model="masterValue" placeholder="Select">
                            <el-option v-for="item in masterStations" :label="item.label" :value="item.value"/>
                        </el-select>
                    </div>
                    <div class="m-4 select">
                        <span class="demonstration">从站选择</span>
                        <el-select v-model="slaveValue" multiple collapse-tags placeholder="Select">
                            <el-option v-for="item in slaveStations" :label="item.label" :key="item"
                                       :value="item.value"/>
                        </el-select>
                    </div>
                    <div class="m-4 select">
                        <span class="demonstration">传感器选择</span>
                        <el-select v-model="sensorValue" multiple collapse-tags placeholder="Select">
                            <el-option v-for="item in sensorsList" :label="item.label" :key="item" :value="item.value"/>
                        </el-select>
                    </div>
                    <div class="m-4 select" style="width: 400px">
                        <span class="demonstration">时间范围</span>
                        <el-date-picker
                                v-model="timeStr"
                                type="datetimerange"
                                value-format="YYYY-MM-DD HH:mm:ss"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                        />
                    </div>
                    <div class="m-4 buttons">
                        <el-button type="primary" @click="sendData(slaveValue, sensorValue, timeStr)">确认</el-button>
                        <el-button type="primary">下载</el-button>
                    </div>
                </el-row>
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
                <h1>{{ sensorValue }}</h1>
                <!--                <h1>{{timeStr}}</h1>-->
                <h1>{{ allData }}</h1>
                <HistoryChart :historyData="allData" :tabs="sensorValue"/>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="less" scoped>
.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.select {
  height: auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 240px;  // 在电脑端的属性
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}
</style>