let solarOption = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: 'Title',
        left: 'left'
    },
    legend: {
        data: ['光伏板电压', '光伏板电流', '光伏板发电功率', '输出电压', '输出电流', '输出功率'],
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
    series: [
        {
            name: '光伏板电压',
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'average', name: 'Avg' },
                ]
            },
        },
        {
            name: '光伏板电流',
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'average', name: 'Avg' },
                ]
            },
        },
        {
            name: '光伏板发电功率',
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'average', name: 'Avg' },
                ]
            },
        },
        {
            name: '输出电压',
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'average', name: 'Avg' },
                ]
            },
        },
        {
            name: '输出电流',
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'average', name: 'Avg' },
                ]
            },
        },
        {
            name: '输出功率',
            data: [],
            type: 'line',
            smooth: false,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'average', name: 'Avg' },
                ]
            },
        },
    ]
};

export {
    solarOption
}