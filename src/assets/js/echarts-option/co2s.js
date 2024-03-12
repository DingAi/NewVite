const co2Option = {
    tooltip: {
        trigger: 'axis',
    },
    // title: {
    //     left: 'center',
    //     text: 'Large Area Chart'
    // },
    legend: {
        data: [],
    },
    toolbox: {
        feature: {
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10
        },
        {
            start: 0,
            end: 10
        }
    ],
    series: []
};

export {
    co2Option
}