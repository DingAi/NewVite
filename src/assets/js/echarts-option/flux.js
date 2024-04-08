const fluxOption = {
    title: {
        text: '通量历史记录',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        // axisLine: { onZero: true },
        // boundaryGap: true,
        data: []
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: true},
            magicType: { type: ['bar', 'line'] },
            restore: {},
            saveAsImage: {},
        }
    },
    grad: {
        containLabel:true
    },
    legend: {
        top: '7%',
        // data: ['CO₂通量', 'H₂O通量'],
    },
    tooltip: {
        trigger: 'axis',
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
            data: [],
            // label: {show: true, fontSize: 16},
            name: 'CO₂ 通量',
            type: 'line',
            smooth: false,  //曲线平滑
            areaStyle: {}
        },
        {
            data: [],
            name: 'H₂O 通量',
            type: 'line',
            smooth: false,  //曲线平滑
            areaStyle: {}
        }
    ]
};

export {
    fluxOption
}