const historyAreaOption = {
    tooltip: {
        // backgroundColor: '#ffffff',
        trigger: 'axis',
    },
    // title: {
    //     left: 'center',
    //     text: '历史图像'
    // },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
            dataView: {readOnly: true},
            restore: {},
        }
    },
    grad: {
        containLabel:true
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