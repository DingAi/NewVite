<template>
    <div class="full" id="text"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import 'echarts-gl'

// 生成随机散点数据
function generateRandomData(count) {
    let data = [];
    for (let x = 0; x < count; x++) {
        for(let y = 0; y <count; y++){
            for(let z = 0; z <count; z++){
                data.push([x, y, z, Math.random()*10]);
            }
        }
    }
    return data;
}

function generateRandomMapData(width, height) {
    const data = [];

    for (let i = 0; i < width * height; i++) {
        const x = i % width;
        const y = Math.floor(i / width);
        const value = Math.random() * 100; // 生成 0 到 100 之间的随机数

        data.push([x, y, value]);
    }

    return data;
}

// 随机生成散点数据
const data = generateRandomData(10);

// 设置散点图配置项
const options = {
    visualMap: {
        show: false,
        min: 2,
        max: 6,
        inRange: {
            symbolSize: [0.5, 20],
            color: [
                '#313695',
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
            ],
            colorAlpha: [0.2, 1]
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        axisLine: {
            // lineStyle: { color: '#fff' }
        },
        axisPointer: {
            // lineStyle: { color: '#fff' }
        },
    },
    series: [
        // {
        //     type: 'surface',
        //     shading: 'realistic',
        //     barSize: 1,
        //     wireframe: { show: true },
        //     data: generateRandomMapData(10,10) // 替换为实际的数据
        // },
        {
            type: 'scatter3D',
            symbolSize: 10,
            data: data,
        },
    ],
};


onMounted(() => {
    let theDiv = document.getElementById('text');
    const dom = echarts.init(theDiv);
    dom.setOption(options)
})
</script>

<style scoped>

</style>