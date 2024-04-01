<template>
    <div class="full" id="te-dom">
    </div>
</template>

<script setup>

import {TBGuageOption, TBGuageValue} from "@/assets/js/echarts-option/meteorological-gauge.js";
import {IdInitEcharts, setTitle} from "@/assets/js/echarts-package.js";

let option = TBGuageOption;
let optionValue = TBGuageValue;

const props = defineProps({
    BETemperature: Array,
})

onMounted(()=>{
    let dom = IdInitEcharts('te-dom');
    // option = setTitle(option, '气象站温湿度');
    window.addEventListener('resize', function () {
        dom.resize();
    });

    try {
        optionValue[0].value = props.BETemperature[0];
        optionValue[1].value = props.BETemperature[1];
    } catch (error) {
        console.error(error);
    }

    option.series.data = optionValue;
    dom.setOption(option);
})
</script>

<style scoped>

</style>