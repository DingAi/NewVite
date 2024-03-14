<script setup>
import {ref, watch, onMounted} from 'vue';
import LinearRegressionChart from "@/components/echarts/LinearRegressionChart.vue";
import FluxHistoryChart from "@/components/echarts/FluxHistoryChart.vue";
// import MathJax from 'mathjax'
let boxVolume = ref(0)

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
        <el-col :span="8" :xs="24" class="p-2" style="height: 100%;">
            <div class="base-div">
                <div class="timeline-div">
                    <div class="timeline-container">
                        <el-timeline>
                            <el-timeline-item center timestamp="2018/4/12" placement="top">
                                <el-card>
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/12 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/3" placement="top">
                                <el-card>
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/3 20:46</p>
                                </el-card>
                            </el-timeline-item>
                             <el-timeline-item center timestamp="2018/4/12" placement="top">
                                <el-card>
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/12 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/3" placement="top">
                                <el-card>
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/3 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item center timestamp="2018/4/2" placement="top">
                                Event start
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top">
                                Event end
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top">
                                Event end
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="16" :xs="24" class="p-2">
            <div class="base-div ">
                <div class="full charts-div">
                    <div class="chart-div">
                        <LinearRegressionChart/>
                    </div>
                    <div class="chart-div">
                        <FluxHistoryChart/>
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


.timeline-div {
    max-height: 100%;
    width: 100%;
    overflow: hidden;

    .timeline-container {
        height: 100%;
        overflow: auto; /* 显示滚动条 */
        padding-right: 10px; /* 为滚动条留出空间 */
    }

    .timeline-container::-webkit-scrollbar {
        display: none;
    }
}
</style>