<script setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";

onMounted(() => {
    let chartDom = document.getElementById('home');
    let myChart = echarts.init(chartDom);
    window.addEventListener('resize', function () {
        myChart.resize();
    });
    myChart.setOption(option)
})

let option = {
    graphic: {
        elements: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    // text: 'Home page is building',
                    text: '春眠不觉晓',
                    fontSize: 80,
                    fontWeight: 'bold',
                    lineDash: [0, 200],
                    lineDashOffset: 0,
                    fill: 'transparent',
                    stroke: '#000',
                    lineWidth: 1
                },
                keyframeAnimation: {
                    duration: 3000,
                    // loop: true,
                    keyframes: [
                        {
                            percent: 0.7,
                            style: {
                                fill: 'transparent',
                                lineDashOffset: 200,
                                lineDash: [200, 0]
                            }
                        },
                        {
                            // Stop for a while.
                            percent: 0.8,
                            style: {
                                fill: 'transparent'
                            }
                        },
                        {
                            percent: 1,
                            style: {
                                fill: 'black'
                            }
                        }
                    ]
                }
            }
        ]
    }
};

</script>

<template>
    <div class="full" id="home">
        <!--  <h1>-->
        <!--    主页面正在施工-->
        <!--  </h1>-->
    </div>
</template>

<style scoped>
#home{
    /*在手机端的属性*/
    @media (max-width: 769px) {
        width: 100%;
        height: 600px;
    }
}

</style>