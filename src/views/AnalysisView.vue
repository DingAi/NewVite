<script setup>
import {ref, reactive} from 'vue';
import FluxHistoryChart from "@/components/echarts/FluxHistoryChart.vue";
import _ from 'lodash';
import {
    convertToCSV, downloadCSV, getTimeRange, timeDataTransform, timeHandle,
} from "@/util/data-generator.js";
import {stations, shortcuts} from "@/assets/js/stations-data.js";
import Loading from "@/components/echarts/Loading.vue";
import {getAnalysisData} from "@/apis/request-api.js";
import {ElNotification} from "element-plus";


//主站、从站、时间范围选择（已经包括了一部分缺省值）
const masterValue = ref('master01')
const slaveValue = ref('11')
let slaveStationList = ref([]) //用来做匹配的列表
const timeRangeStr = ref(getTimeRange(12)) //设置最初显示多少小时的数据

//从站气体箱体积、面积参数
const boxVolume = ref(3)
const boxBottomArea = ref(1)

//线性回归数据
let totalData = ref([]);
let timeRangeList = ref([]);
let regressionDataList = reactive({});
let selectedRegressionData = reactive({})
const fluxData = reactive({});
let isLoading = ref(false);

const isNullList = (originalList) => {
    if (originalList.length > 0) {
        return originalList;
    } else {
        return [];
    }
}

const getLoadData = async (masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea) => {
    //判断数组是否为空数组
    // const isNullList = listData => listData.length > 0 ? listData : [];
    try {
        isLoading.value = false;
        const response = await getAnalysisData(masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea);

        totalData = response.data
        console.log(totalData)
        timeRangeList.value = [];
        let itemNum = response.data[3].length;  // 获取到的时间段的数量
        let dataIndex = regressionDataList.indexList = _.range(itemNum)
        let timeList = response.data[3];

        selectedRegressionData.dataList = response.data[0][0]
        let CKvalueList = isNullList(response.data[1]);
        let CRvalueList = isNullList(response.data[2]);
        let WkvalueList = isNullList(response.data[6]);
        let WRvalueList = isNullList(response.data[7]);

        fluxData.ck = isNullList(response.data[1]);
        fluxData.cr = isNullList(response.data[2]);
        fluxData.timeList = isNullList(response.data[3]);
        fluxData.ec = isNullList(response.data[4]);
        fluxData.hk = isNullList(response.data[6]);
        fluxData.hr = isNullList(response.data[7]);
        fluxData.ew = isNullList(response.data[8]);
        fluxData.inTemperatureAve = isNullList(response.data[9]);
        fluxData.inHumidityAve = isNullList(response.data[10]);
        fluxData.exTemperatureAve = isNullList(response.data[11]);
        fluxData.exHumidityAve = isNullList(response.data[12]);
        fluxData.CO2Ave = isNullList(response.data[13]);
        fluxData.VPDAve = isNullList(response.data[14]);

        // 气象站数据
        if (response.data[15].length > 0) {
            fluxData.mAveCO2 = isNullList(response.data[15][0]);
            fluxData.mAveHumidity = isNullList(response.data[15][1]);
            fluxData.mAveTemperature = isNullList(response.data[15][2]);
            fluxData.mAveAP = isNullList(response.data[15][3]);
            fluxData.mAveWindSheep = isNullList(response.data[15][4]);
            fluxData.mAveRadiation = isNullList(response.data[15][5]);
            fluxData.mAveIllumination = isNullList(response.data[15][6]);
        } else {
            fluxData.mAveCO2 = isNullList([]);
            fluxData.mAveHumidity = isNullList([]);
            fluxData.mAveTemperature = isNullList([]);
            fluxData.mAveAP = isNullList([]);
            fluxData.mAveWindSheep = isNullList([]);
            fluxData.mAveRadiation = isNullList([]);
            fluxData.mAveIllumination = isNullList([]);
        }

        // 土壤数据（来自于从站）
        fluxData.volumetricMoistureContent1 = isNullList(response.data[16][0]);
        fluxData.soilTemperature1 = isNullList(response.data[16][1]);
        fluxData.volumetricMoistureContent2 = isNullList(response.data[16][2]);
        fluxData.soilTemperature2 = isNullList(response.data[16][3]);

        // 时间转换包装成数组
        for (let item of timeList) {
            timeRangeList.value.push([timeHandle(item[0]), timeHandle(item[1])]);
        }

        // 将几个数组转换为一个二维数组
        const dataPackageList = [dataIndex, CKvalueList, CRvalueList, timeList, WkvalueList, WRvalueList].reduce(
            (acc, curr) => curr.map((item, i) => [...(acc[i] || []), item]), []
        );

        // 选择初始的时间范围
        regressionDataList.indexList = dataPackageList;
        selectedRegressionData.CRegressionData = totalData[0][0]
        selectedRegressionData.WRegressionData = totalData[5][0]

        // 数据加载完毕，开始渲染
        isLoading.value = true
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = true;
    }
}


const fluxDataDownload = (fluxData) => {
    if (slaveValue && timeRangeStr) {
        try {
            let tabHeader = ['CO2 flux', 'H2O flux', 'CO2 K', 'CO2 RS', 'H2O K', 'H2O RS',
                'Ave inTemperature', 'Ave inHumidity', 'Ave exTemperature', 'Ave exHumidity', 'Ave inBox CO2', 'Ave VPD',
                'Ave M CO2', 'Ave temperature', 'Ave humidity', 'Ave atmospheric pressure', 'Ave wind speed',
                'Ave net radiation ', 'Ave illumination', 'Layer1 VolumetricMoistureContent', 'Layer1 Soil Temperature',
                'Layer2 VolumetricMoistureContent', 'Layer2 Soil Temperature', 'Time',];
            let totalData = [fluxData.ec, fluxData.ew, fluxData.ck, fluxData.cr, fluxData.hk, fluxData.hr,
                fluxData.inTemperatureAve, fluxData.inHumidityAve, fluxData.exTemperatureAve, fluxData.exHumidityAve, fluxData.CO2Ave, fluxData.VPDAve,
                fluxData.mAveCO2, fluxData.mAveTemperature, fluxData.mAveHumidity, fluxData.mAveAP, fluxData.mAveWindSheep,
                fluxData.mAveRadiation, fluxData.mAveIllumination, fluxData.volumetricMoistureContent1,
                fluxData.soilTemperature1, fluxData.volumetricMoistureContent2, fluxData.soilTemperature2,
                timeDataTransform(fluxData.timeList),];

            // 页面提示
            ElNotification({
                title: 'Info',
                message: '下载正在进行，请不要关闭页面！',
                type: 'info',
                position: 'bottom-right',
            });

            // 把表头和对应的数据组装好，下载
            let csvContent = convertToCSV(tabHeader, totalData)
            downloadCSV(csvContent, `Slave ${slaveValue.value} Analysis (${timeRangeStr.value[0]} to ${timeRangeStr.value[1]}).csv`)
        } catch (error) {
            console.error(error);
        } finally {
            ElNotification({
                title: 'Success',
                message: '数据下载完成！',
                type: 'success',
                position: 'bottom-right',
            });
        }
    } else {
        ElNotification({
            title: 'Warning',
            message: '请选择完整数据！',
            type: 'warning',
        });
    }
}

// 根据给出Index值选择线性回归的数据段
const selectRegression = (regressionIndex) => {
    selectedRegressionData.CRegressionData = totalData[0][regressionIndex]
    selectedRegressionData.WRegressionData = totalData[5][regressionIndex]
}

// 根据选择的主站获取从站名
const getSlaves = (masterNum) => {
    if (masterNum) {
        slaveStationList.value = stations[masterNum];
    } else {
        return {}
    }
}


onMounted(() => {
    // 加载的时候设定缺省值
    getSlaves(masterValue.value)
    getLoadData(masterValue.value, '11', getTimeRange(12), 3, 1);
})


</script>

<template>
    <el-row :gutter="20" class="analysis-div-1">
        <el-col :span="24" class="p-2" style="max-height: 100%">
            <div class="base-div items">
                <div class="item">
                    <div class="text-center" style="width: 240px">
                        <p>主站选择</p>
                        <el-select v-model="masterValue" placeholder="Select">
                            <el-option label="主站 01" value="master01"/>
                            <el-option label="主站 02" value="master02"/>
                            <el-option label="主站 03" value="master03" disabled/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center" style="width: 240px">
                        <p>从站选择</p>
                        <el-select v-model="slaveValue" collapse-tags placeholder="Select">
                            <el-option v-for="item in slaveStationList" :label="item.label" :key="item"
                                       :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <p>日期范围选择</p>
                        <el-date-picker style="width:320px"
                                        v-model="timeRangeStr"
                                        type="datetimerange"
                                        value-format="YYYY-MM-DD HH:mm:ss" start-placeholder="开始时间"
                                        end-placeholder="结束时间"
                                        :shortcuts="shortcuts"/>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <el-button
                            @click="getLoadData(masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea)">
                            图表加载
                        </el-button>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="analysis-div-2">
        <el-col :span="24" class="p-2" style="max-height: 100%">
            <div class="base-div">
                <div class="data-container" v-if="isLoading">
                    <div class="left">
                        <div class="timeline-div p-1">
                            <el-timeline>
                                <h5 style="color: #8bb9fe">共{{ regressionDataList.indexList.length }}段数据</h5>
                                <el-timeline-item v-for="(item) in regressionDataList.indexList" center
                                                  :timestamp="timeHandle(item[3][0])+' - '+timeHandle(item[3][1])"
                                                  placement="top">
                                    <el-card>
                                        <div style="width: 100%;">
                                            <el-text type="success">INDEX：{{ item[0] + 1 }}</el-text>
                                            <el-text type="info" class="right-text hover-text"
                                                     @click="selectRegression(item[0])">TO INDEX：{{ item[0] + 1 }} >
                                            </el-text>
                                        </div>
                                        <h4>
                                            <span class="badge open-color-auto m-1 text-bg-danger">K<sub>(CO<sub>2</sub>) </sub>：{{item[1].toFixed(4) }}</span>
                                            <span class="badge open-color-auto m-1 text-bg-danger"></span>
                                            <span class="badge open-color-auto m-1 bg-secondary">R<sup>2</sup><sub>(CO<sub>2</sub>)</sub>：{{item[2].toFixed(4) }}</span>
                                            <span class="badge open-color-auto m-1 bg-primary">K<sub>(H<sub>2</sub>O)</sub>：{{item[4].toFixed(4) }}</span>
                                            <span class="badge open-color-auto m-1 bg-secondary">R<sup>2</sup><sub>(H<sub>2</sub>O)</sub>：{{item[5].toFixed(4) }}</span>
                                        </h4>
                                        <el-collapse accordion>
                                            <el-collapse-item>
                                                <template #title>
                                                    其他数据
                                                </template>
                                                <div v-if="totalData" style="color: #8bb9fe">
                                                    <p class="mx-1">inTemperatureAve {{
                                                            fluxData.inTemperatureAve
                                                        }}
                                                    </p>
                                                    <p class="mx-1">inHumidityAve
                                                        {{ fluxData.inHumidityAve }}
                                                    </p>
                                                    <p class="mx-1" type="primary">exTemperatureAve {{
                                                            fluxData.exTemperatureAve
                                                        }}
                                                    </p>
                                                    <p class="mx-1" type="primary">inHumidityAve
                                                        {{ fluxData.inHumidityAve }}
                                                    </p>
                                                    <p class="mx-1" type="primary">CO2Ave {{
                                                            fluxData.CO2Ave
                                                        }}
                                                    </p>
                                                    <p class="mx-1" type="primary">VPDAve {{
                                                            fluxData.VPDAve
                                                        }}
                                                    </p>
                                                </div>
                                            </el-collapse-item>
                                        </el-collapse>
                                    </el-card>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                    </div>
                    <div class="right">
                        <div class="full charts-div p-2">
                            <div class="chart-div p-2">
                                <linearRegressionChart v-if="isLoading"
                                                       :selectedRegressionData="selectedRegressionData"/>
                            </div>
                            <div class="chart-div p-2">
                                <FluxHistoryChart v-if="isLoading" :fluxData="fluxData"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Loading v-else/>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="analysis-div-3">
        <el-col :span="24" class="p-2">
            <div class="base-div items">
                <div class="item">
                    <div class="text-center">
                        <p>箱体体积（V）</p>
                        <el-input-number v-model="boxVolume" :precision="2" :step="1" size="large"/>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <p>箱底土壤面积（S）</p>
                        <el-input-number v-model="boxBottomArea" :precision="2" :step="1" size="large"/>
                    </div>
                </div>
                <div class="item" v-if="isLoading">
                    <el-button type="primary" plain @click="fluxDataDownload(fluxData)">通量数据下载</el-button>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="less" scoped>
@import "@/assets/css/master-style";
@import "@/assets/css/anlysis-style";

.right-text {
    position: absolute;
    top: 0;
    right: 0;
}


</style>