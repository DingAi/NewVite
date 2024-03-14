<script setup>
import {ref, watch, onMounted} from 'vue';
import LinearRegressionChart from "@/components/echarts/LinearRegressionChart.vue";
import FluxHistoryChart from "@/components/echarts/FluxHistoryChart.vue";
// import MathJax from 'mathjax'
let boxVolume = ref(0)
let templist = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])

onMounted(() => {

});


</script>

<template>
    <el-row :gutter="20" class="analysis-div-1">
        <el-col :span="24" class="p-2">
            <div class="base-div items">
                <div class="item">
                    <div class="text-center" style="width: 240px">
                        <p>主站选择</p>
                        <el-select v-model="masterValue" placeholder="Select">
                            <el-option v-for="item in masterStations" :label="item.label" :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center" style="width: 240px">
                        <p>从站选择</p>
                        <el-select v-model="masterValue" placeholder="Select">
                            <el-option v-for="item in masterStations" :label="item.label" :value="item.value"/>
                        </el-select>
                    </div>
                </div>
                <div class="item">
                    <div class="text-center">
                        <p>时间范围选择</p>
                        <el-date-picker
                                v-model="timeStr"
                                type="datetimerange"
                                value-format="YYYY-MM-DD HH:mm:ss"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                        />
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
                                <el-timeline-item v-for="item in templist" center timestamp="2018/4/12" placement="top">
                                    <el-card>
                                        <el-text type="success">{{item}}</el-text>
                                        <h4>K: 1.3 AH:123 EC:656 EW:979</h4>
                                        <p>2018/4/12 20:46</p>
                                    </el-card>
                                </el-timeline-item>
                            </el-timeline>
                        </div>
                    </div>
                    <div class="right">
                        <div class="full charts-div p-2">
                            <div class="chart-div p-2">
                                <LinearRegressionChart/>
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

</style>