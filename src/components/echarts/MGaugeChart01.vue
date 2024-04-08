<template>
    <div class="full" id="be-dom" ref="mg-dom">
    </div>
</template>

<script setup>

import {setGaugeData} from "@/assets/js/echarts-option/gauges.js";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {watch} from "vue";


const props = defineProps({
    BETemperature: Array,
})

const refresh = async (dom, data) =>{
    try {
        let option = setGaugeData(data[0], data[1],'蓄电池温度', '设备温度');
      option.series[0].detail.formatter = '{value}℃'
        option && dom.setOption(option)
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {

    let dom = IdInitEcharts('be-dom');
    window.addEventListener('resize', function () {
        dom.resize();
    });
    if (props.BETemperature){
        refresh(dom, props.BETemperature);
    }

    watch(
        () => props.BETemperature,
        () => {
            if (props.BETemperature){
                refresh(dom, props.BETemperature);
            }
        }
    )
});
// dom.setOption(option);
</script>

<style scoped>

</style>