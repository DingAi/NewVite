<template>
    <div class="full" id="stacked-area" ref="chartDom"></div>
</template>

<script setup>
import {dataGenerator} from "@/util/data-generator.js";
import {IdInitEcharts, setTitle} from "@/assets/js/echarts-package.js";
import {onMounted, watch} from "vue";
import moment from "moment";
import {lineOption} from "@/assets/js/echarts-option/line.js";

const props = defineProps({
    temperature: Number,
    humidity: Number
})

let option = lineOption;

let temperatureDataList = [];
let humidityDataList = [];
let timeList = [];

let dataFormat = {name: '', data: [], type: 'line', markPoint: {data: [{ type: 'average', name: 'Avg' },]},}

const refresh = (dom, option, data, time) => {
    temperatureDataList = dataGenerator(temperatureDataList, data[0], 20);
    humidityDataList = dataGenerator(humidityDataList, data[1], 20);
    timeList = dataGenerator(timeList, time, 20);
    option.series[0].data = temperatureDataList;
    option.series[1].data = humidityDataList;
    option.xAxis.data = timeList;
    dom.setOption(option);
}


onMounted(() => {
    let dom = IdInitEcharts('stacked-area');
    option = setTitle(option, '气象站温湿度');
    window.addEventListener('resize', function () {
        dom.resize();
    });

    if (props.temperature && props.humidity) {
        refresh(dom, option, [props.temperature, props.humidity], moment().format('YYYY-MM-DD HH:mm:ss'));
    }

    watch(
        () => props.temperature,
        () => {
            if (props.temperature && props.humidity) {
                refresh(dom, option, [props.temperature, props.humidity], moment().format('YYYY-MM-DD HH:mm:ss'));
            }
        }
    )
})
</script>

<style scoped>

</style>