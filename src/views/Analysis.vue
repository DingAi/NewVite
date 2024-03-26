<script setup>
import {ref, reactive} from 'vue';
import FluxHistoryChart from "@/components/echarts/FluxHistoryChart.vue";
import {linearRegressionOption} from "@/assets/js/echarts-option/linear-regression.js";
import _ from 'lodash';
import axios from "axios";
import {timeHandle} from "@/util/data-generator.js";
import {stations, shortcuts} from "@/assets/js/stations-data.js";
import {useAnalysisStore} from "@/store/analysis.js";


const analysisStore = useAnalysisStore()

//主站、从站、时间范围选择
const masterValue = ref('')
const slaveValue = ref([])
const timeStr = ref('')

//线性回归数据
let option = linearRegressionOption;
let totalData = ref([]);
let timeRangeList = ref([]);
let regressionDataList = reactive({});
let selectedRegressionData = reactive({})
let isLoading = ref(false);


const timeDataTransform = (start, end) => {
    let startTime = timeHandle(start);
    let endTime = timeHandle(end);
    let connectTime = startTime + "-" + endTime;
    return connectTime;
}

const getLoadData = () => {
    axios.get('xu/data_analysis').then(response => {
        selectedRegressionData.dataList = response.data[0][0]
        totalData = response.data
        let itemNum = response.data[3].length;  // 获取到的时间段的数量
        let dataIndex = regressionDataList.indexList = _.range(itemNum)
        let CKvalueList = response.data[1];
        let CRvalueList = response.data[2];
        let timeList = response.data[3];
        for (let item of timeList) {
            timeRangeList.value.push([timeHandle(item[0]), timeHandle(item[1])]);
        }
        // 将几个数组转换为一个二维数组
        const dataPackageList = [dataIndex, CKvalueList, CRvalueList, timeList].reduce(
            (acc, curr) => curr.map((item, i) => [...(acc[i] || []), item]), []
        );
        regressionDataList.indexList = dataPackageList;
        console.log(selectedRegressionData)
        isLoading.value = true
    })
}

const selectRegression = (regressionIndex) => {
    selectedRegressionData.dataList = totalData[0][regressionIndex]
    console.log(selectedRegressionData)
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


getLoadData();
console.log(selectedRegressionData.value)

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
                        <el-select v-model="slaveValue" multiple collapse-tags placeholder="Select">
                            <el-option v-for="item in slaveStations" :label="item.label" :key="item"
                                       :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <p>日期范围选择</p>
                        <el-date-picker style="width:320px"
                                        v-model="timeStr"
                                        type="datetimerange"
                                        value-format="YYYY-MM-DD HH:mm:ss" start-placeholder="开始时间"
                                        end-placeholder="结束时间"
                                        :shortcuts="shortcuts"/>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <el-button @click="getDetailedata()">发送请求</el-button>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="analysis-div-2">
        <el-col :span="24" class="p-2" style="max-height: 100%">
            <div class="base-div">
                <div class="data-container">
                    <div class="left">
                        <div class="timeline-div p-1">
                            <el-timeline>
                                <el-timeline-item v-for="item in regressionDataList.indexList" center
                                                  :timestamp="timeHandle(item[3][0])+' - '+timeHandle(item[3][1])"
                                                  placement="top">
                                    <el-card>
                                        <div style="width: 100%;">
                                            <el-text type="success">INDEX：{{ item[0] + 1 }}</el-text>
                                            <el-text type="info" class="right-text hover-text"
                                                     @click="selectRegression(item[0])">展示 INDEX：{{item[0] + 1 }}线性回归图表 >
                                            </el-text>
                                        </div>

                                        <h4>
                                            <el-tooltip content="二氧化碳线性回归K值" placement="top" effect="light">
                                                <span class="badge open-color-auto m-1 bg-primary">CK: {{item[1] }}</span>
                                            </el-tooltip>
                                            <el-tooltip content="线性回归K值拟合度" placement="top" effect="light">
                                                <span class="badge open-color-auto m-1 bg-secondary">CR: {{item[2] }}</span>
                                            </el-tooltip>
                                        </h4>
                                        <el-collapse accordion>
                                            <el-collapse-item>
                                                <template #title>
                                                    气象站数据数据
                                                </template>
                                                <div>
                                                    <!--                                                    <p>平均净辐射</p>-->
                                                    <!--                                                    <p>平均开启温湿度</p>-->
                                                    <p>
                                                        {{ selectedRegressionData }}
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
                                                       :selectedRegressionData="selectedRegressionData.dataList"/>
                            </div>
                            <div class="chart-div p-2">
                                <FluxHistoryChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="analysis-div-3">
        <el-col :span="24" class="p-2">
            <div class="base-div items">
                <div class="item">
                    <div class="text-center">
                        <p>箱体体积（V）</p>
                        <el-statistic :value="268500"/>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <el-statistic title="二氧化碳标准密度（ρ）" :value="268500"/>
                        <el-statistic title="水标准密度（ρ）" :value="268500"/>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <p>箱体体积（V）</p>
                        <el-input-number v-model="boxVolume" :precision="2" :step="1" size="large"/>
                    </div>
                </div>


                <div class="item">
                    <div class="text-center">
                        <p>箱底土壤面积（S）</p>
                        <el-input-number v-model="boxVolume" :precision="2" :step="1" size="large"/>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <p>采样时间转换系数（t）</p>
                        <el-time-select v-model="value" style="width: 240px" start="00:00" step="00:10" end="10:00"
                                        placeholder="Select time"/>
                    </div>
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

.hover-text {
  transition: color 0.3s; /* 添加过渡效果 */
  cursor: pointer; /* 鼠标指针样式为小手 */
}

.hover-text:hover {
  color: #0073ff; /* 鼠标悬停时的颜色 */
}
</style>