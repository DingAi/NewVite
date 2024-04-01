<template>
    <div className="full" id="flux-dom">

    </div>
</template>

<script setup>
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {fluxOption} from "@/assets/js/echarts-option/flux.js";
import {generateRandomArray, generateRandomDatesArray, timeDataTransform, timeHandle} from "@/util/data-generator.js";

const props = defineProps({
    fluxData: Object,
})

let option = fluxOption;


const refresh = (dom, ec, ew, timeRangeList) => {
    option.series[0].data = ec;
    option.series[1].data = ew;
    option.xAxis.data = timeDataTransform(timeRangeList);
    dom.setOption(option)
}

onMounted(() => {
    let dom = IdInitEcharts('flux-dom');
    window.addEventListener('resize', function () {
        dom.resize();
    });

    watch(
        () => props.fluxData,
        () => {
            if (props.fluxData) {
                refresh(dom, props.fluxData.ec, props.fluxData.ew, props.fluxData.timeList);
            }
        },
        {deep: true}
    )
})
</script>

<style scoped>

</style>