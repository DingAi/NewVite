<script setup>
import {onMounted} from "vue";
import * as echarts from "echarts";

const option = {
  graphic: {
    elements: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: new Array(7).fill(0).map((val, i) => ({
          type: 'rect',
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 10,
            height: 80
          },
          style: {
            fill: '#4c5d85'
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: 'cubicIn'
              },
              {
                percent: 1,
                scaleY: 1,
                easing: 'cubicOut'
              }
            ]
          }
        }))
      }
    ]
  }
};

onMounted(() => {
  let chartDom = document.getElementById('loading');
  let myChart = echarts.init(chartDom);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
  myChart.setOption(option)
})
</script>

<template>
  <div class="full" id="loading">

  </div>
</template>

<style scoped>

</style>