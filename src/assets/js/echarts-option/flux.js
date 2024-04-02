const fluxOption = {
    title: {
        text: '通量历史记录',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        // axisLine: { onZero: true },
        boundaryGap: true,
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            magicType: { type: ['bar', 'line'] },
            restore: {},
        }
    },
    grad: {
        containLabel:true
    },
    legend: {
        top: '7%',
        data: ['碳通量', '水通量'],
    },
    tooltip: {
        trigger: 'axis',
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {
            show: true,
            start: 0,
            end: 100,
        },
        {
            type: 'inside',
            start: 0,
            end: 100,
        }
    ],
    series: [
        {
            data: [],
            name: '碳通量',
            type: 'bar',
            smooth: false,  //曲线平滑
            areaStyle: {}
        },
        {
            data: [],
            name: '水通量',
            type: 'bar',
            smooth: false,  //曲线平滑
            areaStyle: {}
        }
    ]
};

export {
    fluxOption
}