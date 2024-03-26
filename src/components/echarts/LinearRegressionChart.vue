<template>
    <div class="full" id="regression-dom"></div>
</template>

<script setup>
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {linearRegressionOption} from "@/assets/js/echarts-option/linear-regression.js";
import * as echarts from 'echarts';
import ecStat from 'echarts-stat';


const props = defineProps({
    selectedRegressionData: Array,
})
let option = linearRegressionOption;

function convertToCoordinates(list) {
    const coordinates = list.map((value, index) => [index + 1, value]);
    return coordinates;
}


const refresh = async (dom, selectedRegressionData) => {
    let dataList = []
    for (let item of selectedRegressionData) {
        dataList.push(item['CO2']);
    }
    const regressionData = convertToCoordinates(dataList);
    option.dataset[0].source = regressionData;
    dom.setOption(option)
}


onMounted(() => {
    let dom = IdInitEcharts('regression-dom');
    echarts.registerTransform(ecStat.transform.regression);
    window.addEventListener('resize', function () {
        dom.resize();
    });
    let newOption = refresh(dom, props.selectedRegressionData);
    dom.setOption(newOption)

    watch(
        () => props.selectedRegressionData,
        () => {
            if (props.selectedRegressionData) {
                console.log(props.selectedRegressionData)
                refresh(dom, props.selectedRegressionData);
            }
        },
        {deep: true}
    )
})
</script>

<style scoped></style>