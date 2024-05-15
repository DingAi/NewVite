import ecStat from "echarts-stat";

const data1 = [
    [1, 2],
    [2, 3],
    [3, 5],
    [4, 4],
    [5, 6],
    [6, 8]
];
// let data3 = regressionData;

const data2 = [
    [1, 1],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 4],
    [6, 7]
];

const result1 = ecStat.regression('linear', data1);
const result2 = ecStat.regression('linear', data2);

const newLinearRegressionOption = {
    color: ["#d32d3c", "#0d6efd", "#8e212b", "#074696"],
    title: {
        text: '线性回归数据',
        left: 'center'
    },
    legend: {
        top: '7%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
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
    xAxis: {
        type: 'category',
        // data: ['A', 'B', 'C', 'D', 'E', 'F']
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
            show: true,
            type: 'inside',
            start: 0,
            end: 100,
        }
    ],
    grad: {
        containLabel: true
    },
    series: [{
        name: 'CO₂ 数据',
        type: 'scatter',
        data: data1
    }, {
        name: 'H₂O 体积浓度',
        type: 'scatter',
        data: data2
    }, {
        name: 'CO₂ 线性回归',
        type: 'line',
        data: result1.points,
        markPoint: {
            data: [
                {coord: result1.parameter.start},
                {coord: result1.parameter.end}
            ]
        }
    }, {
        name: 'H₂O 线性回归',
        type: 'line',
        data: result2.points,
        markPoint: {
            data: [
                {coord: result2.parameter.start},
                {coord: result2.parameter.end}
            ]
        }
    }]
};

export {
    newLinearRegressionOption,
}