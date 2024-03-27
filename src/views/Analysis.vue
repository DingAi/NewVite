<script setup>
import {ref, reactive} from 'vue';
import FluxHistoryChart from "@/components/echarts/FluxHistoryChart.vue";
import {linearRegressionOption} from "@/assets/js/echarts-option/linear-regression.js";
import _ from 'lodash';
import {get12HTimeRange, timeHandle} from "@/util/data-generator.js";
import {stations, shortcuts, sensors} from "@/assets/js/stations-data.js";
import Loading from "@/components/Loading.vue";
import {getAnalysisData} from "@/apis/request-api.js";

//主站、从站、时间范围选择
const masterValue = ref('master01')
const slaveValue = ref('')
let slaveStations = ref({}) //用来做匹配的列表
const timeRangeStr = ref('')

//从站参数
const boxVolume = ref(3)
const boxBottomArea = ref(1)

//线性回归数据
let option = linearRegressionOption;
let totalData = ref([]);
let timeRangeList = ref([]);
let regressionDataList = reactive({});
let selectedRegressionData = reactive({})
let fluxData = reactive({});
let isLoading = ref(false);

const getLoadData = async (masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea) => {
    try {
        const response = await getAnalysisData(masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea);
        selectedRegressionData.dataList = response.data[0][0]
        totalData = response.data
        let itemNum = response.data[3].length;  // 获取到的时间段的数量
        let dataIndex = regressionDataList.indexList = _.range(itemNum)
        let CKvalueList = response.data[1];
        let CRvalueList = response.data[2];
        let WkvalueList = response.data[6];
        let WRvalueList = response.data[7];
        let timeList = response.data[3];
        fluxData.ec = response.data[4];
        fluxData.ew = response.data[8];
        fluxData.timeList = response.data[3]
        for (let item of timeList) {
            timeRangeList.value.push([timeHandle(item[0]), timeHandle(item[1])]);
        }
        // 将几个数组转换为一个二维数组
        const dataPackageList = [dataIndex, CKvalueList, CRvalueList, timeList, WkvalueList, WRvalueList].reduce(
            (acc, curr) => curr.map((item, i) => [...(acc[i] || []), item]), []
        );
        regressionDataList.indexList = dataPackageList;
        selectedRegressionData.CRegressionData = totalData[0][0]
        selectedRegressionData.WRegressionData = totalData[5][1]
        isLoading.value = true
    } catch (error) {
        console.error(error);
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
    getLoadData(masterValue.value, '11', get12HTimeRange(),3,1);
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
                        <el-button @click="getLoadData(masterValue, slaveValue, timeRangeStr, boxVolume, boxBottomArea)">发送请求</el-button>
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
                                                     @click="selectRegression(item[0])">TO INDEX：{{ item[0] + 1 }} >
                                            </el-text>
                                        </div>

                                        <h4>
                                            <el-tooltip content="二氧化碳线性回归K值" placement="top" effect="light">
                                                <span class="badge open-color-auto m-1 bg-warning">CK: {{
                                                    item[1].toFixed(2)
                                                    }}</span>
                                            </el-tooltip>
                                            <el-tooltip content="二氧化碳线性回归K值拟合度" placement="top"
                                                        effect="light">
                                                <span class="badge open-color-auto m-1 bg-secondary">CR: {{
                                                    item[2].toFixed(2)
                                                    }}</span>
                                            </el-tooltip>
                                            <el-tooltip content="水蒸汽浓度线性回归K值" placement="top" effect="light">
                                                <span class="badge open-color-auto m-1 bg-primary">WK: {{
                                                    item[4].toFixed(2)
                                                    }}</span>
                                            </el-tooltip>
                                            <el-tooltip content="水蒸汽浓度线性回归K值拟合度" placement="top"
                                                        effect="light">
                                                <span class="badge open-color-auto m-1 bg-secondary">WR: {{
                                                    item[5].toFixed(2)
                                                    }}</span>
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
                                                        如果你看到了这句话，说明这里的内容还在商榷或编写进行中
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
                                <Loading v-else/>
                            </div>
                            <div class="chart-div p-2">
                                <FluxHistoryChart v-if="fluxData" :fluxData="fluxData"/>
                                <Loading v-else/>
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
                        <el-input-number v-model="boxBottomArea" :precision="2" :step="1" size="large"/>
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