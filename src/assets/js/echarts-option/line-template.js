const lineTemplateOption = {
    title: {
        text: 'TITLE'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
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
    series: []
};

const lineOptionData = {
    name: '',
    type: 'line',
    stack: 'Total',
    data: []
}

export {
    lineTemplateOption,
    lineOptionData
}