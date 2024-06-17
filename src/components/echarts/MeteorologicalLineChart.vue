<script setup>
import {getWeatherOtherData} from "@/apis/request-api.js";
import {lineOptionData, lineTemplateOption} from "@/assets/js/echarts-option/line-template.js";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {getTimeRange} from "@/util/data-generator.js";
import moment from "moment";

let option = lineTemplateOption;
let optionData = lineOptionData;
let dataList01 = []
let dataList02 = []
let timeList = []

option.dataZoom = [
    {
        show: false,
        start: 0,
        end: 100,
    },
    {
        type: 'inside',
        start: 0,
        end: 100,
    }
]

option.title.text = ""

// function convertToNumericTime(timeStr) {
//     // 使用moment解析时间字符串，并格式化为所需格式
//     return moment(timeStr).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')
// }

const refresh = async (dom) => {
    try {
        option.series = [];
        const response = await getWeatherOtherData(getTimeRange(6));
        dataList01 = response.data['values_list'][0]
        dataList02 = response.data['values_list'][1]
        let tempTimeList = response.data['values_list'][2]
        for (let item of tempTimeList){
            timeList.push(moment.utc(item).format('YYYY-MM-DD HH:mm:ss'));
        }
        let optionData01 = {
            ...optionData,
            name: "净辐射",
            data: dataList01
        };
        let optionData02 = {
            ...optionData,
            name: "土壤热辐射",
            data: dataList02
        };
        option.xAxis.data = timeList;
        option.series.push(optionData01)
        option.series.push(optionData02)
    } catch (error) {
        console.log(error)
    }
    dom.setOption(option);
    dom.hideLoading();
}


onMounted(() => {
    let dom = IdInitEcharts('m-line');
    refresh(dom)
    dom.showLoading();
    window.addEventListener('resize', function () {
        dom.resize();
    });
    // dom.showLoading();
})

</script>

<template>
    <div class="full" id="m-line"></div>
</template>

<style scoped>

</style>