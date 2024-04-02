<template>
    <div class="full" id="b-dom">
    </div>
</template>

<script setup>

import {batteryLevelOption} from "@/assets/js/echarts-option/gauges.js";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {watch} from "vue";

let option = batteryLevelOption;

const props = defineProps({
    batteryData: Number,
})

const refresh = (dom, data) => {
    option.series[0].data[0].value = data
    dom.setOption(option)
}

onMounted(() => {
    let dom = IdInitEcharts('b-dom');
    window.addEventListener('resize', function () {
        dom.resize();
    });
    refresh(dom, props.batteryData);

    console.log(props.batteryData)
    watch(
        () => props.batteryData,
        () => {
            if (props.batteryData) {
                refresh(dom, props.batteryData);
            }
        }
    )
});
// dom.setOption(option);
</script>

<style scoped>

</style>