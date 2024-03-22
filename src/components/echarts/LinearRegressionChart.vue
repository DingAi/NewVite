<template>
    <div class="full" id="regression-dom">

    </div>
</template>

<script setup>
import {onMounted} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {linearRegressionOption} from "@/assets/js/echarts-option/linear-regression.js";
import * as echarts from 'echarts';
import ecStat from 'echarts-stat';

let option = linearRegressionOption;

onMounted(() => {
    let dom = IdInitEcharts('regression-dom');
    echarts.registerTransform(ecStat.transform.regression);
    window.addEventListener('resize', function () {
        dom.resize();
    });
    dom.setOption(option)
})
</script>

<style scoped>

</style>