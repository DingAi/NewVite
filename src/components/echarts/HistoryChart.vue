<template>
<div class="full" id="history-line"></div>
</template>

<script setup>
import {historyAreaOption} from '@/assets/js/echarts-option/history-area.js'
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {translate} from '@/assets/js/stations-data.js'

const props = defineProps({
    historyData: Array,
    tabs: Array
})

let option = historyAreaOption;
let nameList = [];
let num = 0;


const refresh = (dom, option, historyData, tablist) => {
    option.series = [];
    for(let sensor of historyData){
        let newData = {name: '', type: 'line', symbol: 'none', data: []};
        let dataList = new Array();
        let timeList = new Array();
        let tablength = tablist.length;
        let name = translate[tablist[num]];
        if (num+1 == tablength){
            num = 0;
        }else {
            num++;
        }
        newData.name = name
        for(let item of sensor){
            dataList.push(item[name]);
            timeList.push(item['timest']);
        }
        newData.data = dataList;
        option.series.push(newData);
        option.xAxis.data = timeList;
    }
    dom.setOption(option);
}

onMounted(() => {
    let dom = IdInitEcharts('history-line');

    window.addEventListener('resize', function () {
        dom.resize();
    });

    watch(
        () => props.historyData,
        () => {
            if (props.historyData) {
                refresh(dom, option, props.historyData, props.tabs);
                console.log(props.tabs);
                console.log(props.historyData.length);
            }
        },
        {deep: true}
    )
})
</script>

<style scoped>

</style>