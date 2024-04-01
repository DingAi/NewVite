let lineOption = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: 'Title',
        left: 'left'
    },
    legend: {
        data: ['温度','湿度'],
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
            name: '温度',
            data: [],
            type: 'bar',
            smooth: false,  //曲线平滑
            // markPoint: {
            //     data: [
            //         { type: 'average', name: 'Avg' },
            //     ]
            // },
        },
        {
            name: '湿度',
            data: [],
            type: 'bar',
            smooth: false,  //曲线平滑
            // markPoint: {
            //     data: [
            //         { type: 'average', name: 'Avg' },
            //     ]
            // },
        },
    ]
};

export {
    lineOption
}