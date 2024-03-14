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
    series: []
};

export  {historyAreaOption}