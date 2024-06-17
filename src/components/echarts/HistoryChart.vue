<template>
    <div class="full" id="history-line"></div>
</template>

<script setup>
import {historyAreaOption} from '@/assets/js/echarts-option/historys.js'
import {onMounted, onUnmounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {trsnslateSlave, translate, unitJSon} from '@/assets/js/stations-data.js'
import {timeHandle} from "@/util/data-generator.js";

const props = defineProps({
    historyData: Array,
    stations: Array,
    sensors: Array,
});

let historyLineOption = historyAreaOption;

const refresh = (dom, option, historyData, slaveList, sensorsList) => {
    option.series = [];
    option.xAxis.data = [];
    let sensorNameIndex = 0;
    let slaveNameIndex = 0;
    for (let sensor of historyData) {
        let newData = {
            name: '',
            type: 'line',
            symbol: 'none',
            data: [],
            smooth: false,

        };
        let dataList = [];
        let timeList = [];

        let slaveName = trsnslateSlave[slaveList[slaveNameIndex]];
        let sensorName = translate[sensorsList[sensorNameIndex]];

        sensorNameIndex = (sensorNameIndex + 1) % sensorsList.length;
        slaveNameIndex = sensorNameIndex === 0 ? slaveNameIndex + 1 : slaveNameIndex;

        for (let item of sensor) {
            dataList.push(item[sensorName]);
            timeList.push(timeHandle(item['timest']));
        }

        newData.name = slaveName + sensorName;
        newData.data = dataList;
        newData.unit = unitJSon[sensorName]; // 设置单位


        option.series.push(newData);
        console.log(option)
        option.xAxis.data = timeList;
    }

    dom.setOption(option, true);
    dom.hideLoading();
};

onMounted(() => {
    let dom = IdInitEcharts('history-line');
    const handleResize = () => {
        dom.resize();
    };

    window.addEventListener('resize', handleResize);
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    if (props.historyData.length > 0) {
        dom.showLoading();
        refresh(dom, historyLineOption, props.historyData, props.stations, props.sensors);
    }

    watch(
        () => props.historyData,
        () => {
            if (props.historyData) {
                dom.showLoading();
                refresh(dom, historyLineOption, props.historyData, props.stations, props.sensors);
            }
        },
        {deep: true}
    );
});
</script>

<style scoped>

</style>
