<template>
    <div class="full" id="ap-history">

    </div>
</template>

<script setup>

import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {apHistoryOption} from "@/assets/js/echarts-option/ap-history.js";
import {generateRandomArray, generateRandomDatesArray} from '@/util/chart-refresh.js'

let option = apHistoryOption;

let upApList = generateRandomArray(300);
let downApList = generateRandomArray(300);
let timeList = generateRandomDatesArray(300);

function refresh(option, dom){
    option.series[0].data = upApList;
    option.series[1].data = downApList;;
    option.xAxis[0].data = timeList;
    option.xAxis[1].data = timeList;
    dom.setOption(option);
}


onMounted(() =>{
    let dom = IdInitEcharts('ap-history');
    // setTitle(option, props.pageName)
    window.addEventListener('resize', function () {
        dom.resize();
    });

    refresh(option, dom)

})
</script>

<style scoped>

</style>