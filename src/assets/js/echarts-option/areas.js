const areasOption = {
    title: {
        text: 'Stacked Area Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        top: '7%',
        data: ['光伏板电压', '光伏板电流', '光伏板发电功率', '输出电压', '输出电流','输出功率'],
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '光伏板电压',
            type: 'line',
            stack: 'Total',
            // areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '光伏板电流',
            type: 'line',
            stack: 'Total',
            // areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '光伏板发电功率',
            type: 'line',
            stack: 'Total',
            // areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '输出电压',
            type: 'line',
            stack: 'Total',
            // areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '输出电流',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            // areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        },
        {
            name: '输出功率',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            // areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: []
        }
    ]
};

export {
    areasOption,
}