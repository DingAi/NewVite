const historyAreaOption = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        left: 'center',
        text: '历史图像'
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
            type: 'inside',
            start: 30,
            end: 70,
        }
    ],
    series: []
};

export  {historyAreaOption}