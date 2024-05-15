const lineOption = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: 'Title',
        left: 'left'
    },
    legend: {
        data: ['温度','湿度'],
        top: '6%'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: true},
            magicType: { type: ['bar', 'line'] },
            saveAsImage: {},
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




const linesOption = {
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




const solarOption = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: 'Title',
        left: 'left'
    },
    legend: {
        data: ['光伏板电压', '光伏板电流', '光伏板发电功率', '输出电压', '输出电流', '输出功率'],
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
    lineOption,
    linesOption,
    solarOption
}