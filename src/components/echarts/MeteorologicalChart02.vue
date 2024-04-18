<template>
  <div class="full" id="solar-dom"></div>
</template>

<script setup>
import {dataGenerator, timeHandle} from "@/util/data-generator.js";
import {IdInitEcharts, setTitle} from "@/assets/js/echarts-package.js";
import {onMounted, watch} from "vue";
import {areasOption} from "@/assets/js/echarts-option/areas.js";
import moment from "moment";

let option = areasOption;

const props = defineProps({
  solarData: Array,
})

let photovoltaicPanelVoltageList = [];
let photovoltaicPanelCurrentList = [];
let photovoltaicPanelPowerGenerationList = [];
let outputVoltageList = [];
let outputCurrentList = [];
let outputPowerList = [];
let timeList = [];

const refresh = async (dom, option, dataList) => {
  photovoltaicPanelVoltageList = dataGenerator(photovoltaicPanelVoltageList, dataList[0], 20);
  photovoltaicPanelCurrentList = dataGenerator(photovoltaicPanelCurrentList, dataList[1], 20);
  photovoltaicPanelPowerGenerationList = dataGenerator(photovoltaicPanelPowerGenerationList, dataList[2], 20);
  outputVoltageList = dataGenerator(outputVoltageList, dataList[3], 20);
  outputCurrentList = dataGenerator(outputCurrentList, dataList[4], 20);
  outputPowerList = dataGenerator(outputPowerList, dataList[5], 20);
  const now = moment();
  const nowString = now.toString();
  timeList.push(nowString)

  option.series[5].data = photovoltaicPanelVoltageList;
  option.series[4].data = photovoltaicPanelCurrentList;
  option.series[3].data = photovoltaicPanelPowerGenerationList;
  option.series[2].data = outputVoltageList;
  option.series[1].data = outputCurrentList;
  option.series[0].data = outputPowerList;
  option.xAxis.data = timeList;
  dom.setOption(option);
}


onMounted(() => {
  let dom = IdInitEcharts('solar-dom');
  option = setTitle(option, '光伏硬件数据');
  window.addEventListener('resize', function () {
    dom.resize();
  });

  refresh(dom, option, props.solarData);
  watch(
      () => props.solarData[0],
      () => {
        if (props.solarData) {
          console.log(props.solarData)
          refresh(dom, option, props.solarData);        }
      }
  )



})


</script>

<style scoped>

</style>