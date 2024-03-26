<script setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";
import ecStat from 'echarts-stat';
import {linearRegressionOption, regressionData} from "@/assets/js/echarts-option/linear-regression.js";

let data1 = [
  [1, 2],
  [2, 3],
  [3, 5],
  [4, 4],
  [5, 6],
  [6, 8]
];
// let data3 = regressionData;

let data2 = [
  [1, 1],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 4],
  [6, 7]
];

const result1 = ecStat.regression('linear', data1);
const result2 = ecStat.regression('linear', data2);

const option = {
  title: {
    text: 'Linear Regression Analysis with ecStat'
  },
  xAxis: {
    type: 'category',
    // data: ['A', 'B', 'C', 'D', 'E', 'F']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    name: 'Data 1',
    type: 'scatter',
    data: data1
  }, {
    name: 'Data 2',
    type: 'scatter',
    data: data2
  }, {
    name: 'Linear Regression 1',
    type: 'line',
    data: result1.points,
    markPoint: {
      data: [
        {coord: result1.parameter.start},
        {coord: result1.parameter.end}
      ]
    }
  }, {
    name: 'Linear Regression 2',
    type: 'line',
    data: result2.points,
    markPoint: {
      data: [
        {coord: result2.parameter.start},
        {coord: result2.parameter.end}
      ]
    }
  }]
};

onMounted(() => {
  let chartDom = document.getElementById('test');
  echarts.registerTransform(ecStat.transform.regression);
  let dom = echarts.init(chartDom);
  window.addEventListener('resize', function () {
    dom.resize();
  });
  dom.setOption(option)
})

</script>

<template>
  <div class="full" id="test">

  </div>
</template>

<style scoped>
#test {
  /*在手机端的属性*/
  @media (max-width: 769px) {
    width: 100%;
    height: 600px;
  }
}

</style>