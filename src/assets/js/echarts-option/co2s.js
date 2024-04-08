const co2Option = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        left: 'center',
        text: '二氧化碳',
        subtext: '６小时历史',
    },
    legend: {
        data: [],
        top: '10%'
    },
    grad: {
        containLabel:true
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