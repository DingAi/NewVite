<template>
  <div class="full">
    <el-row class="full">
<!--      <el-col :span="4" class="full">-->
<!--        <el-button @click="generateRandomPoints(100)">数据刷新</el-button>-->
<!--      </el-col>-->
      <el-col :span="24" class="full" id="3d"></el-col>
    </el-row>
  </div>
</template>

<script setup>
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import 'echarts-gl'
import {watch} from "vue";

let option = {};
let points = [];

// 生成随机点数据
function generateRandomPoints(numPoints) {
  for (let i = 0; i < numPoints; i++) {
    let x = Math.random() * 250; // x 坐标范围
    let y = Math.random() * 250; // y 坐标范围
    let z = Math.random() * 512; // z 坐标范围
    points.push([x, y, z]);
  }
  return points;
}

onMounted(() => {
  let img = new Image();

  let dom = IdInitEcharts('3d');
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  img.onload = function () {
    let width = (canvas.width = img.width / 2);
    let height = (canvas.height = img.height / 2);
    ctx.drawImage(img, 0, 0, width, height);
    let imgData = ctx.getImageData(0, 0, width, height);
    let data = [];
    for (let i = 0; i < imgData.data.length / 4; i++) {
      let r = imgData.data[i * 4];
      let g = imgData.data[i * 4 + 1];
      let b = imgData.data[i * 4 + 2];
      let lum = 255 - (0.2125 * r + 0.7154 * g + 0.0721 * b);
      lum = (lum - 125) / 20;
      // 定义范围和生成随机高度数据
      let minHeight = 0; // 最小高度
      let maxHeight = 30; // 最大高度

// 生成随机高度数据，限制在 minHeight 和 maxHeight 范围内
      let randomHeight = minHeight + Math.random() * (maxHeight - minHeight);
      data.push([i % width, height - Math.floor(i / width), 0]);
    }



// 随机生成 100 个点数据
    let numPoints = 100;
    let points = generateRandomPoints(numPoints);
    option = {
      visualMap: {
        show: false,
        min: 2,
        max: 6,
        inRange: {
          symbolSize: [0.5, 15],
          colorAlpha: [0.2, 10]
        }
      },
      tooltip: {},
      // backgroundColor: '#fff',
      xAxis3D: {
        type: 'value',
      },
      yAxis3D: {
        type: 'value',
      },
      zAxis3D: {
        type: 'value',
        // min: 100,
        // max: 1000
      },
      grid3D: {
        viewControl: {
          alpha: 20,
          beta: -30
        },
        postEffect: {
          enable: true,
          SSAO: {
            enable: true
          }
        },
        boxDepth: 120,
        light: {
          main: {
            shadow: false,
            intensity: 2
          },
        }
      },
      series: [
        {
          type: 'surface',
          shading: 'realistic',
          barSize: 1,
          wireframe: {
            show: false
          },
          itemStyle: {
            color: function (params) {
              let i = params.dataIndex;
              let r = imgData.data[i * 4];
              let g = imgData.data[i * 4 + 1];
              let b = imgData.data[i * 4 + 2];
              return 'rgb(' + [r, g, b].join(',') + ')';
            }
          },
          data: data
        },
        {
          type: 'scatter3D',
          symbolSize: [0.5, 15], // 点的大小
          data: points,
        },
      ]
    }
    dom.setOption(option)
  };
  img.src = 'public/IMG3.jpg'

  watch(
      () => points,
      () => {
        if (points) {
          option.series[0].data = points;
          dom.setOption(option)
          console.log('刷新执行')
        }
      },
      {deep: true}
  )
})
</script>

<style scoped>

</style>