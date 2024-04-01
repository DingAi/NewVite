<template>
    <div class="full" id="solar-dom"></div>
</template>

<script setup>
import {timeHandle} from "@/util/data-generator.js";
import {IdInitEcharts, setTitle} from "@/assets/js/echarts-package.js";
import {onMounted, ref,} from "vue";
import {solarOption} from "@/assets/js/echarts-option/solar.js";
import {getMeteorologicalHistory} from "@/apis/request-api.js";

let option = solarOption;
let totalData = ref()


const refresh = async (dom, option) => {
    let photovoltaicPanelVoltageList = [];
    let photovoltaicPanelCurrentList = [];
    let photovoltaicPanelPowerGenerationList = [];
    let outputVoltageList = [];
    let outputCurrentList = [];
    let outputPowerList = [];
    let timeList = [];
    try {
        const response = await getMeteorologicalHistory();
        console.log(response)
        for (let item of response.data){
            photovoltaicPanelVoltageList.push(item['photovoltaic_panel_voltage']);
            photovoltaicPanelCurrentList.push(item['photovoltaic_panel_current']);
            photovoltaicPanelPowerGenerationList.push(item['photovoltaic_panel_power_generation']);
            outputVoltageList.push(item['output_voltage']);
            outputCurrentList.push(item['output_current']);
            outputPowerList.push(item['output_power']);
            timeList.push(timeHandle(item['timest']))
        }
    } catch (error) {
        console.error(error);
    }

    option.series[0].data = photovoltaicPanelVoltageList;
    option.series[1].data = photovoltaicPanelCurrentList;
    option.series[2].data = photovoltaicPanelPowerGenerationList;
    option.series[3].data = outputVoltageList;
    option.series[4].data = outputCurrentList;
    option.series[5].data = outputPowerList;
    option.xAxis.data = timeList;
    dom.setOption(option);
}


onMounted(() => {
    let dom = IdInitEcharts('solar-dom');
    option = setTitle(option, '光伏硬件数据');
    window.addEventListener('resize', function () {
        dom.resize();
    });

    refresh(dom, option);

    // watch(
    //     () => props.solarTransmissionData,
    //     () => {
    //         if (props.solarTransmissionData) {
    //             refresh(dom, option);
    //         }
    //     }
    // )
})
</script>

<style scoped>

</style>