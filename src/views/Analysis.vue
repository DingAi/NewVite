<script setup>
import {ref, reactive} from 'vue';
import FluxHistoryChart from "@/components/echarts/FluxHistoryChart.vue";
import _ from 'lodash';
import {
  convertToCSV,
  downloadCSV,
  get24HTimeRange,
  get6HTimeRange,
  timeDataTransform,
  timeHandle
} from "@/util/data-generator.js";
import {stations, shortcuts} from "@/assets/js/stations-data.js";
import Loading from "@/components/Loading.vue";
import {getAnalysisData} from "@/apis/request-api.js";
import {ElNotification} from "element-plus";

//主站、从站、时间范围选择
const masterValue = ref('master01')
const slaveValue = ref('11')
let slaveStations = ref({}) //用来做匹配的列表
const timeRangeStr = ref(get6HTimeRange())

//从站参数
const boxVolume = ref(3)
const boxBottomArea = ref(1)

//线性回归数据
let totalData = ref([]);
let timeRangeList = ref([]);
let regressionDataList = reactive({});
let selectedRegressionData = reactive({})
const fluxData = reactive({});
let isLoading = ref(false);

const getLoadData = async (masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea) => {
  try {
    isLoading.value = false;
    const response = await getAnalysisData(masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea);
    selectedRegressionData.dataList = response.data[0][0]
    totalData = response.data
    let itemNum = response.data[3].length;  // 获取到的时间段的数量
    let dataIndex = regressionDataList.indexList = _.range(itemNum)
    let CKvalueList = response.data[1];
    let CRvalueList = response.data[2];
    let WkvalueList = response.data[6];
    let WRvalueList = response.data[7];

    fluxData.ck = response.data[1];
    fluxData.cr = response.data[2];
    let timeList = response.data[3];
    fluxData.ec = response.data[4];
    fluxData.hk = response.data[6];
    fluxData.hr = response.data[7];
    fluxData.ew = response.data[8];
    fluxData.timeList = response.data[3]
    fluxData.inTemperatureAve = response.data[9];
    fluxData.inHumidityAve = response.data[10];
    fluxData.exTemperatureAve = response.data[11];
    fluxData.exHumidityAve = response.data[12];
    fluxData.CO2Ave = response.data[13];
    fluxData.VPDAve = response.data[14];
    fluxData.mAveCO2 = response.data[15][0];
    fluxData.mAveHumidity = response.data[15][1];
    fluxData.mAveTemperature = response.data[15][2];
    fluxData.mAveAP = response.data[15][3];
    fluxData.mAveWindSheep = response.data[15][4];
    fluxData.mAveRadiation = response.data[15][5];
    fluxData.mAveIllumination = response.data[15][6];
    for (let item of timeList) {
      timeRangeList.value.push([timeHandle(item[0]), timeHandle(item[1])]);
    }
    // 将几个数组转换为一个二维数组
    const dataPackageList = [dataIndex, CKvalueList, CRvalueList, timeList, WkvalueList, WRvalueList].reduce(
        (acc, curr) => curr.map((item, i) => [...(acc[i] || []), item]), []
    );
    regressionDataList.indexList = dataPackageList;
    selectedRegressionData.CRegressionData = totalData[0][0]
    selectedRegressionData.WRegressionData = totalData[5][0]
    console.log(totalData)
    isLoading.value = true
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = true;
  }
}


const fluxDataDownload = (fluxData) => {
  if (slaveValue && timeRangeStr) {
    // slaveValue.value
    try {
      let tabHeader = ['CO2 flux', 'H2O flux', 'CO2 K', 'CO2 RS', 'H2O K', 'H2O RS',
        'Ave inTemperature','Ave inHumidity','Ave exTemperature', 'Ave exHumidity', 'Ave inBox CO2', 'Ave VPD',
        'Ave M CO2','Ave temperature', 'Ave humidity', 'Ave atmospheric pressure', 'Ave wind speed',
        'Ave net radiation ', 'Ave illumination','Time', ];
      let totalData = [fluxData.ec, fluxData.ew, fluxData.ck, fluxData.cr, fluxData.hk, fluxData.hr,
        fluxData.inTemperatureAve, fluxData.inHumidityAve,  fluxData.exTemperatureAve, fluxData.exHumidityAve, fluxData.CO2Ave, fluxData.VPDAve,
        fluxData.mAveCO2, fluxData.mAveTemperature, fluxData.mAveHumidity, fluxData.mAveAP, fluxData.mAveWindSheep,
        fluxData.mAveRadiation, fluxData.mAveIllumination, timeDataTransform(fluxData.timeList),];
      ElNotification({
        title: 'Info',
        message: '下载正在进行，请不要关闭页面！',
        type: 'info',
        position: 'bottom-right',
      });
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


const selectRegression = (regressionIndex) => {
  selectedRegressionData.CRegressionData = totalData[0][regressionIndex]
  selectedRegressionData.WRegressionData = totalData[5][regressionIndex]
}


const getSlaves = (masterNum) => {
  if (masterNum) {
    slaveStations.value = getMasterIndex(masterNum);
  } else {
    return {}
  }
}


const getMasterIndex = (masterValue) => {
  return stations[masterValue];
}


onMounted(() => {
  getSlaves(masterValue.value)
  getLoadData(masterValue.value, '11', get6HTimeRange(), 3, 1);
})


</script>

<template>
  <el-row :gutter="20" class="analysis-div-1">
    <el-col :span="24" class="p-2" style="max-height: 100%">
      <div class="base-div items">
        <div class="item">
          <div class="text-center" style="width: 200px">
            <p>主站选择</p>
            <el-select v-model="masterValue" placeholder="Select">
              <el-option label="主站 01" value="master01"/>
              <el-option label="主站 01" value="master01" disabled/>
              <el-option label="主站 01" value="master01" disabled/>
            </el-select>
          </div>
        </div>
        <div class="item">
          <div class="text-center" style="width: 240px">
            <p>从站选择</p>
            <el-select v-model="slaveValue" collapse-tags placeholder="Select">
              <el-option v-for="item in slaveStations" :label="item.label" :key="item"
                         :value="item.value"/>
            </el-select>
            <!--                        <p>{{ slaveValue }}</p>-->
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
          <!--                    <p>{{ timeRangeStr }}</p>-->
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
                      <span class="badge open-color-auto m-1 text-bg-danger">K<sub>(CO<sub>2</sub>) </sub>：{{
                          item[1].toFixed(2)
                        }}</span>
                      <span class="badge open-color-auto m-1 text-bg-danger"></span>
                      <span class="badge open-color-auto m-1 bg-secondary">R<sup>2</sup><sub>(CO<sub>2</sub>)</sub>：{{
                          item[2].toFixed(2)
                        }}</span>
                      <span class="badge open-color-auto m-1 bg-primary">K<sub>(H<sub>2</sub>O)</sub>：{{
                          item[4].toFixed(2)
                        }}</span>
                      <span class="badge open-color-auto m-1 bg-secondary">R<sup>2</sup><sub>(H<sub>2</sub>O)</sub>：{{
                          item[5].toFixed(2)
                        }}</span>
                    </h4>
                    <el-collapse accordion>
                      <el-collapse-item>
                        <template #title>
                          其他数据
                        </template>
                        <div v-if="totalData">
                          <el-text class="mx-1" type="primary">{{ fluxData.inTemperatureAve}}</el-text>
                          <el-text class="mx-1" type="primary">{{ fluxData.inHumidityAve }}</el-text>
                          <el-text class="mx-1" type="primary">{{ fluxData.exTemperatureAve }}</el-text>
                          <el-text class="mx-1" type="primary">{{ fluxData.inHumidityAve }}</el-text>
                          <el-text class="mx-1" type="primary">{{ fluxData.CO2Ave }}</el-text>
                          <el-text class="mx-1" type="primary">{{ fluxData.VPDAve }}</el-text>
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
<!--                <Loading v-else/>-->
              </div>
              <div class="chart-div p-2">
                <FluxHistoryChart v-if="isLoading" :fluxData="fluxData"/>
<!--                <Loading v-else/>-->
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