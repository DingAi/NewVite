const fluxOption = {
    title: {
        text: '通量历史记录',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        axisLine: { onZero: true },
        boundaryGap: false,
        data: []
    },
    legend: {
        top: '7%'
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {
            show: true,
            start: 30,
            end: 70,
        },
        {
            // show: true,
            type: 'inside',
            start: 30,
            end: 70,
        }
    ],
    series: [
        {
            data: [],
            name: 'EC',
            type: 'line',
            smooth: false,  //曲线平滑
            areaStyle: {}
        },
        {
            data: [],
            name: 'EW',
            type: 'line',
            smooth: false,  //曲线平滑
            areaStyle: {}
        }
    ]
};

export {
    fluxOption
}