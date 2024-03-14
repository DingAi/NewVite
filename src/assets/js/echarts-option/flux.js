const fluxOption = {
    title: {
        text: 'Flux History',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        axisLine: { onZero: true },
        boundaryGap: false,
        data: []
    },
    legend: {
        data: ['EC', 'EW'],
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
            type: 'line',
            smooth: false,  //曲线平滑
            areaStyle: {}
        },
        {
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            areaStyle: {}
        }
    ]
};

export {
    fluxOption
}