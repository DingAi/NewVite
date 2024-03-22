//此处写的是一些公用的方法，比如调用Echarts的图表样式可以写在这里
import * as echarts from 'echarts';
import 'echarts/theme/roma.js'
import 'echarts/theme/forest.js'
import 'echarts/theme/infographic.js'
import 'echarts/theme/inspired.js'
import 'echarts/theme/london.js'
import 'echarts/theme/vintage.js'
import 'echarts/theme/macarons.js'

const IdInitEcharts = (id) => {
    let theDiv = document.getElementById(id);
    const dom = echarts.init(theDiv, 'roma');
    return dom;
}

export const refInitEcharts = (ref,) => {
    let dom = echarts.init(ref, 'roma');
    return dom;
}

const setOptionXAxis = (option, XAxisData) => {
    option.xAxis.data = XAxisData;
    return option;
}

const setSeriesData = (option, data) => {
    option.series[0].data = data;
    return option;
}

const setSeriesMoreData = (option, dataLists) => {
    for(let dataList of dataLists){
        option.series.push(
            {
                data: dataList,
                type: 'line',
                smooth: false,  //曲线平滑
                markPoint: {
                    data: [
                        {type: 'max', name: 'Max'},
                        {type: 'min', name: 'Min'}
                    ]
                },
            }
        )
    }
    option.series[0].data = datas;
    return option;
}

const setTitle = (option, text) => {
    option.title.text = text;
    return option
}

//x轴data的调用：option.xAxis.data
//option.series[0].data


export {
    IdInitEcharts,
    setTitle,
    setOptionXAxis,
    setSeriesData
}