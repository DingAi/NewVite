const historyAreaOption = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        left: 'center',
        text: 'Large Area Chart'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value',
    },
    dataZoom: [
        {
            start: 0,
            end: 5,
        },
        {
            start: 0,
            end: 5,
        },
    ],
    series: []
};

export  {historyAreaOption}