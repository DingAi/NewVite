<template>
    <div class="full" id="co2-dom">

    </div>
</template>

<script setup>
import {onMounted} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-option/echarts-package.js";
import {co2Option} from "@/assets/js/echarts-option/co2s.js";
import {generateRandomArray, generateRandomDatesArray} from "@/util/chart-refresh.js";


let option = co2Option

function refresh(dom){
    let nameList = []
    for (let i=0; i<10; i++){
        let dataList = generateRandomArray(300);
        let timeList = generateRandomDatesArray(300);
        let newData = {name: '', type: 'line', symbol: 'none', data: [], areaStyle: {}};
        let name = '从站 '+ i + ' CO2';
        nameList.push(name)
        newData.name = name
        newData.data = dataList;
        option.xAxis.data = timeList;
        option.series.push(newData)
    }
    console.log(option)
    option.legend.data = nameList;
    dom.setOption(option)
}

onMounted(()=>{
    let dom = IdInitEcharts('co2-dom');
    // setTitle(option, props.pageName)
    window.addEventListener('resize', function () {
        dom.resize();
    });
    refresh(dom);

})
</script>

<style scoped>

</style>