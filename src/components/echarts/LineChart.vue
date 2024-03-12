<template>
    <div class="full" id="line-dom" ref="chartDom">
    </div>
</template>

<script setup>
import {
    IdInitEcharts,
    setOptionXAxis,
    setSeriesData, setTitle
} from '@/assets/js/echarts-option/echarts-package.js'
import {linesOption} from '@/assets/js/echarts-option/lines.js'
import {onMounted, ref, watch} from "vue";
import {chartRefresh} from "@/util/chart-refresh.js";

const Dom = ref(null)
let chartDom = Dom.value;

const props = defineProps({
    linesData: Object
})
let option = linesOption


let inTDataList = new Array()
let exTDataList = new Array()
let inHDataList = new Array()
let exHDataList = new Array()
let CO2DataList = new Array()
let dataList = new Array()
let timeList = new Array()

const refresh = (dom, option, data, time) => {
    dataList = chartRefresh(dataList, data, 20)
    timeList = chartRefresh(timeList, time, 20)
    option = setSeriesData(option, dataList)
    option = setOptionXAxis(option, timeList)
    dom.setOption(option)
}

const moreDataRefresh = (dom, option, dataLists, time) => {
    CO2DataList = chartRefresh(CO2DataList, dataLists[0], 20)
    inTDataList = chartRefresh(inTDataList, dataLists[1], 20)
    exTDataList = chartRefresh(exTDataList, dataLists[2], 20)
    inHDataList = chartRefresh(inHDataList, dataLists[3], 20)
    exHDataList = chartRefresh(exHDataList, dataLists[4], 20)
    timeList = chartRefresh(timeList, time, 20)
    option.series[0].data = CO2DataList;
    option.series[1].data = inTDataList;
    option.series[2].data = exTDataList;
    option.series[3].data = inHDataList;
    option.series[4].data = exHDataList;
    option = setOptionXAxis(option, timeList)
    dom.setOption(option)
}

onMounted(() => {
    let dom = IdInitEcharts('line-dom');
    setTitle(option, props.pageName)
    window.addEventListener('resize', function () {
        dom.resize();
    });

    watch(
        () => props.linesData.carbon_dioxide,
        () => {
            if (props.linesData.carbon_dioxide) {
                console.log(props.linesData.carbon_dioxide)
                moreDataRefresh(dom, option, [props.linesData.carbon_dioxide, props.linesData.in_temperature, props.linesData.ex_temperature, props.linesData.in_humidity, props.linesData.ex_humidity], props.linesData.time)
            }
        }
    )
})

</script>

<style scoped>

</style>