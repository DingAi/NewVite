<template>
    <div class="full" id="regression-dom">

    </div>
</template>

<script setup>
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {linearRegressionOption} from "@/assets/js/echarts-option/linear-regression.js";

let option = linearRegressionOption;

onMounted(() => {
    let dom = IdInitEcharts('regression-dom');

    window.addEventListener('resize', function () {
        dom.resize();
    });
    dom.setOption(option)
})
</script>

<style scoped>

</style>