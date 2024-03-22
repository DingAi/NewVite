const areaOption = {
     tooltip: {
         trigger: 'axis'
     },
    title: {
        text: '光照数据',
        left: 'center'
    },
     toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '光照值',
            data: [],
            type: 'line',
            areaStyle: {},
            smooth: true,  //曲线平滑
            markPoint: {
                data: [
                    { type: 'max', name: 'Max' },
                    { type: 'min', name: 'Min' }
                ]
            },
            color: [],
            markLine: {
                data: [{ type: 'average', name: 'Avg' }]
            }
        }
    ]
};

export {
    areaOption
}