<template>
    <div class="full" id="line-dom" ref="chartDom">
    </div>
</template>

<script setup>
import {
    IdInitEcharts,
    setOptionXAxis,
    setSeriesData, setTitle
} from '@/assets/js/echarts-package.js';
import {linesOption} from '@/assets/js/echarts-option/lines.js';
import {onMounted, ref, watch} from "vue";
import {dataGenerator} from "@/util/data-generator.js";

const Dom = ref(null);
let chartDom = Dom.value;

const props = defineProps({
    linesData: Object
})

let option = linesOption;


let inTDataList = new Array();
let exTDataList = new Array();
let inHDataList = new Array();
let exHDataList = new Array();
let dataList = new Array();
let timeList = new Array();

const refresh = (dom, option, data, time) => {
    dataList = dataGenerator(dataList, data, 20);
    timeList = dataGenerator(timeList, time, 20);
    option = setSeriesData(option, dataList);
    option = setOptionXAxis(option, timeList);
    dom.setOption(option);
}

const moreDataRefresh = (dom, option, dataLists, time) => {
    inTDataList = dataGenerator(inTDataList, dataLists[0], 20);
    exTDataList = dataGenerator(exTDataList, dataLists[1], 20);
    inHDataList = dataGenerator(inHDataList, dataLists[2], 20);
    exHDataList = dataGenerator(exHDataList, dataLists[3], 20);
    timeList = dataGenerator(timeList, time, 20);
    option.series[0].data = inTDataList;
    option.series[1].data = exTDataList;
    option.series[2].data = inHDataList;
    option.series[3].data = exHDataList;
    option = setOptionXAxis(option, timeList);
    option = setTitle(option, '箱体温湿度')
    dom.setOption(option);
}

onMounted(() => {
    let dom = IdInitEcharts('line-dom');
    setTitle(option, props.pageName);
    window.addEventListener('resize', function () {
        dom.resize();
    });

    watch(
        () => props.linesData.ex_humidity,
        () => {
            if (props.linesData.ex_humidity) {
                moreDataRefresh(dom, option, [props.linesData.in_temperature, props.linesData.ex_temperature, props.linesData.in_humidity, props.linesData.ex_humidity], props.linesData.time)
            }
        }
    )
})

</script>

<style scoped>

</style>