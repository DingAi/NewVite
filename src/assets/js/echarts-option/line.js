let lineOption = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: 'Title',
        left: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            restore: {},
        }
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
        },
    ]
};

export {
    lineOption
}