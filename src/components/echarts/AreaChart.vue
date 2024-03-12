<script setup>

import {onMounted, ref, watch, watchEffect} from "vue";
import {IdInitEcharts, setOptionXAxis, setSeriesData, setTitle} from "@/assets/js/echarts-option/echarts-package.js";
import {areaOption} from "@/assets/js/echarts-option/area.js";
import {chartRefresh} from "@/util/chart-refresh.js";

const props = defineProps({
    illumination: Number,
    time: String,
    pageName: String
})

let option = areaOption;
let data_list = new Array()
let time_list = new Array()

const refresh = (dom, option ,data, time) => {
    data_list = chartRefresh(data_list,data,20)
    time_list = chartRefresh(time_list,time,20)
    setSeriesData(option, data_list)
    option = setOptionXAxis(option, time_list)
    dom.setOption(option)
}

onMounted(() => {
    let dom = IdInitEcharts('area-dom');
    // setTitle(option, props.pageName)
    window.addEventListener('resize', function () {
        dom.resize();
    });

    watch(
        () => props.illumination,
        () => {
            if (props.illumination) {
                refresh(dom, option, props.illumination, props.time)
            }
        }
    )
})
</script>

<template>
    <div class="full" id="area-dom">
    </div>
</template>

<style scoped>

</style>