<template>
    <div class="full" id="co2-dom">

    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {co2Option} from "@/assets/js/echarts-option/co2s.js";
import {get24HTimeRange} from "@/util/data-generator.js";
import axios from "axios";


let co2Data = ref([]);
const timeRange = get24HTimeRange();

const refreshCO2History = async () => {
    try {
        axios.post('xu/range_query', {'masterNum': 'master01', 'sensorNum': ['co211', 'co212'], 'time': timeRange})
            .then(response => {
                co2Data.value = response.data;
                console.log(co2Data)
            })
    } catch (error) {
        console.error(error);
    }
}

const props = defineProps({
    co2Data: Array,
})

let option = co2Option

function refresh(dom, co2Data){
    option.series = [];
    option.xAxis.data = [];
    let nameList = [];
    for (let i=0; i < co2Data.length; i++){
        let newSeriesItem = {name: '', type: 'line', symbol: 'none', data: []};
        let sensorData = co2Data[i];
        console.log(sensorData)
        let dataList = [];
        let timeList = [];
        for(let item of sensorData){
            dataList.push(item['CO2']);
            timeList.push(item['timest']);
        }
        newSeriesItem.data = dataList;
        let name = '从站 '+ i + ' CO2';
        nameList.push(name)
        newSeriesItem.name = name
        newSeriesItem.data = dataList;
        option.xAxis.data = timeList;
        option.series.push(newSeriesItem)
    }
    option.legend.data = nameList;
    console.log(option)
    dom.setOption(option)
}

onMounted(()=>{
    let dom = IdInitEcharts('co2-dom');
    console.log(props.co2Data);
    window.addEventListener('resize', function () {
        dom.resize();
    });
    if(props.co2Data){
        refresh(dom, props.co2Data);
    }
})
</script>

<style scoped>

</style>