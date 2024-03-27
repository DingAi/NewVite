<template>
    <div class="full" id="regression-dom"></div>
</template>

<script setup>
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {linearRegressionOption} from "@/assets/js/echarts-option/linear-regression.js";
import * as echarts from 'echarts';
import ecStat from 'echarts-stat';
import {newLinearRegressionOption} from "@/assets/js/echarts-option/new-linear-regression.js";


const props = defineProps({
    selectedRegressionData: Object,
})
let option = linearRegressionOption;
let option2 = newLinearRegressionOption

function convertToCoordinates(list) {
    const coordinates = list.map((value, index) => [index + 1, value]);
    return coordinates;
}


const refresh = async (dom, C, W) => {
    let CDataList = [];
    let WDataList = [];
    for (let item of C) {
        CDataList.push(item['CO2']);
    }
    for (let item of W) {
        WDataList.push(item);
    }
    const CRegressionData = convertToCoordinates(CDataList);
    const WRegressionData = convertToCoordinates(WDataList);
    option.dataset[0].source = CRegressionData;
    option2.series[0].data = CRegressionData
    option2.series[1].data = WRegressionData
    const result1 = ecStat.regression('linear', CRegressionData);
    const result2 = ecStat.regression('linear', WRegressionData);
    option2.series[2].data = result1.points;
    option2.series[2].markPoint.data[0].coord = result1.parameter.start;
    option2.series[2].markPoint.data[1].coord = result1.parameter.start;
    option2.series[3].data = result2.points;
    option2.series[3].markPoint.data[0].coord = result2.parameter.start;
    option2.series[3].markPoint.data[1].coord = result2.parameter.start;
    dom.setOption(newLinearRegressionOption)
}


onMounted(() => {
    let dom = IdInitEcharts('regression-dom');
    echarts.registerTransform(ecStat.transform.regression);
    window.addEventListener('resize', function () {
        dom.resize();
    });
    let newOption = refresh(dom, props.selectedRegressionData.CRegressionData, props.selectedRegressionData.WRegressionData);
    dom.setOption(newOption)

    watch(
        () => props.selectedRegressionData,
        () => {
            if (props.selectedRegressionData) {
                refresh(dom, props.selectedRegressionData.CRegressionData, props.selectedRegressionData.WRegressionData);
            }
        },
        {deep: true}
    )
})
</script>

<style scoped></style>