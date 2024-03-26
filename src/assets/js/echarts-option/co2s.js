const co2Option = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        left: 'center',
        text: '二氧化碳12小时历史'
    },
    legend: {
        data: [],
        top: '5%'
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
        boundaryGap: [0, '100%'],
    },
    dataZoom: [
        {
            type: 'inside',
            start: 30,
            end: 70,
        },
        {
            start: 30,
            end: 70,
        }
    ],
    series: []
};

export {
    co2Option
}