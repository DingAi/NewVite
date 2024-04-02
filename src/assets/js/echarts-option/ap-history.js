const apHistoryOption = {
    title: {
        text: '气压数据',
        subtext: '12小时历史',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        top: '7%',
        data: ['正气压', '负气压'],
    },
    toolbox: {
        feature: {
            restore: {},

        }
    },
    axisPointer: {
        link: [
            {
                xAxisIndex: 'all'
            }
        ]
    },
    dataZoom: [
        {
            show: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        },
        {
            // show: true,
            type: 'inside',
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [
        {
            left: 60,
            right: 50,
            height: '35%',
            containLabel:true
        },
        {
            left: 60,
            right: 50,
            top: '55%',
            height: '35%',
            containLabel:true
        }
    ],
    xAxis: [
        {
            type: 'category',
            show: true,
            boundaryGap: false,
            axisLine: {onZero: true},
            data: []
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            axisLine: {onZero: true},
            data: [],
            position: 'top'
        }
    ],
    yAxis: [
        {
            type: 'value',
        },
        {
            gridIndex: 1,
            type: 'value',
            inverse: true
        }
    ],
    series: [
        {
            name: '正气压',
            type: 'line',
            symbolSize: 8,
            data: [],
            areaStyle: {}
        },
        {
            name: '负气压',
            type: 'line',
            data: [],
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            areaStyle: {}
        }
    ]
};

export {
    apHistoryOption
}