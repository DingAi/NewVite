const historyAreaOption = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        left: 'center',
        text: '历史图像'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: true},
            magicType: {type: ['line', 'bar']},
            restore: {},
        }
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: [
        {
            type: 'value',
        },
    ],
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
    series: []
};

export {historyAreaOption}