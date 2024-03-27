const fluxOption = {
    title: {
        text: '通量历史记录',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        // axisLine: { onZero: true },
        boundaryGap: false,
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            dataVi水通量: { readOnly: true },
            magicType: { type: ['line', 'bar'] },
            restore: {},
        }
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
            // show: true,
            type: 'inside',
            start: 0,
            end: 100,
        }
    ],
    series: [
        {
            data: [],
            name: '碳通量',
            type: 'line',
            smooth: true,  //曲线平滑
            areaStyle: {}
        },
        {
            data: [],
            name: '水通量',
            type: 'line',
            smooth: true,  //曲线平滑
            areaStyle: {}
        }
    ]
};

export {
    fluxOption
}