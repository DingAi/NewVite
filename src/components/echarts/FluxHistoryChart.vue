<template>
    <div className="full" id="flux-dom">

    </div>
</template>

<script setup>
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {fluxOption} from "@/assets/js/echarts-option/flux.js";
import {generateRandomArray, generateRandomDatesArray} from "@/util/chart-refresh.js";

let option = fluxOption;

onMounted(() => {
    let dom = IdInitEcharts('flux-dom');

    window.addEventListener('resize', function () {
        dom.resize();
    });
    option.series[0].data = generateRandomArray(300);
    option.series[1].data = generateRandomArray(300);
    option.xAxis.data = generateRandomDatesArray(300)
    dom.setOption(option)
})
</script>

<style scoped>

</style>