let linesOption = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: '箱体温湿度',
        left: 'left'
    },
    legend: {
        data: ['箱内温度', '箱外温度','箱内湿度','箱外湿度'],
        top: '6%'
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
            name: '箱内温度',
            data: [],
            type: 'line',
            smooth: true,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
        },
        {
            name: '箱外温度',
            data: [],
            type: 'line',
            smooth: true,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
        },
        {
            name: '箱内湿度',
            data: [],
            type: 'line',
            smooth: true,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
        },
        {
            name: '箱外湿度',
            data: [],
            type: 'line',
            smooth: true,  //曲线平滑
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
    linesOption
}