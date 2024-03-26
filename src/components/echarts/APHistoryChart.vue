<template>
  <div class="full" id="ap-history">

  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {apHistoryOption} from "@/assets/js/echarts-option/ap-history.js";
import {get12HTimeRange, timeHandle} from '@/util/data-generator.js'
import axios from "axios";

let option = apHistoryOption;
let apHistoryData = ref([]);
const timeRange = get12HTimeRange();

const refreshAPHistory = (dom, option) => {
  try {
    axios.post('online/range_query', {'masterNum': 'master01', 'sensorNum': ['qy11'], 'time': timeRange})
        .then(response => {
          apHistoryData.value = response.data;
          refresh(dom, apHistoryData.value, option)
        })
  } catch (error) {
    console.error(error);
  }
}

function refresh(dom, apData, option) {
  let sensorData = apData[0];
  let uapDataList = [];
  let dapDataList = [];
  let timeList = [];
  for (let item of sensorData) {
    uapDataList.push(Math.abs(item['UAP']));
    dapDataList.push(Math.abs(item['DAP']));
    timeList.push(timeHandle(item['timest']));
  }
  option.xAxis[0].data = timeList;
  option.xAxis[1].data = timeList;
  option.series[0].data = uapDataList;
  option.series[1].data = dapDataList;
  dom.setOption(option);
  dom.hideLoading();
}


onMounted(() => {
  let dom = IdInitEcharts('ap-history');
  dom.showLoading();
  refreshAPHistory(dom, option);
  window.addEventListener('resize', function () {
    dom.resize();
  });

})
</script>

<style scoped>

</style>