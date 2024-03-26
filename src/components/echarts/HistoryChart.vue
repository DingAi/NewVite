<template>
  <div class="full" id="history-line"></div>
</template>

<script setup>
import {historyAreaOption} from '@/assets/js/echarts-option/history-area.js'
import {onMounted, watch} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {trsnslateSlave, translate} from '@/assets/js/stations-data.js'
import {timeHandle} from "@/util/data-generator.js";

const props = defineProps({
  historyData: Array,
  stations: Array,
  sensors: Array
})

let historyLineOption = historyAreaOption;

const refresh = (dom, option, historyData, slaveList, sensorsList) => {
  option.series = [];
  option.xAxis.data = [];
  let sensorNameIndex = 0;
  let slaveNameIndex = 0;
  for (let sensor of historyData) {
    let newData = {name: '', type: 'line', symbol: 'none', data: []};
    let dataList = new Array();
    let timeList = new Array();

    let slaveName = trsnslateSlave[slaveList[slaveNameIndex]]
    let sensorName = translate[sensorsList[sensorNameIndex]];
    if (sensorNameIndex + 1 == sensorsList.length) {
      sensorNameIndex = 0;
      slaveNameIndex++;
    } else {
      sensorNameIndex++;
    }
    for (let item of sensor) {
      dataList.push(item[sensorName]);
      timeList.push(timeHandle(item['timest']));
    }
    newData.name = slaveName + sensorName;
    newData.data = dataList;
    option.series.push(newData);
    option.xAxis.data = timeList;
  }
  dom.setOption(option, true);
  dom.hideLoading();
}

onMounted(() => {
  let dom = IdInitEcharts('history-line');
  dom.showLoading();
  window.addEventListener('resize', function () {
    dom.resize();
  });

  watch(
      () => props.historyData,
      () => {
        if (props.historyData) {

          refresh(dom, historyLineOption, props.historyData, props.stations, props.sensors);
        }
      },
      {deep: true}
  )
})
</script>

<style scoped>

</style>