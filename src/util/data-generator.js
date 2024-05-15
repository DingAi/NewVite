import moment from "moment";
import {translate, trsnslateSlave} from "@/assets/js/stations-data.js";
import proj4 from 'proj4';

// 图表数据填充
const dataGenerator = (dataList, data, xIndex) => {
    dataList.push(data);
    if (dataList.length === xIndex) {
        dataList.shift()
    }
    return dataList;
}

// 时间格式转换
const timeHandle = (originalTime) => {
    const time = moment(originalTime, 'ddd, DD MMM YYYY HH:mm:ss [GMT]');
    const formattedTime = time.format('YYYY-MM-DD HH:mm:ss');
    return formattedTime;
}

// 时间戳转换成时间格式
const tiemstampHandle = (timestamp) =>{
    const formattedDateTime = moment(timestamp*1000).format('YYYY-MM-DD HH:mm:ss');
    return formattedDateTime
}


function generateData() {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let group = [];
        group.push({name: '风扇', value: Math.random() < 0.5});
        group.push({name: '盖子', value: Math.random() < 0.5});
        group.push({name: '电磁阀', value: Math.random() < 0.5});
        group.push({name: 'Other', value: Math.random() < 0.5});
        data.push(group);
    }
    return data;
}

// 返回从当前时间开始的时间范围（以小时为单位）
function getTimeRange(hour) {
    // 获取当前时间
    const currentTime = moment();
    // 获取24小时前的时间
    const twentyFourHoursAgo = moment().subtract(hour, 'hours');
    // 格式化时间为指定格式（年月日 时分秒）
    const formattedCurrentTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
    const formattedTwentyFourHoursAgo = twentyFourHoursAgo.format('YYYY-MM-DD HH:mm:ss');
    // 构建时间范围数组
    const timeRange = [formattedTwentyFourHoursAgo, formattedCurrentTime];
    return timeRange
}


function convertToCSV(headers, data) {
    const csvRows = [];

    // 添加表头
    csvRows.push(headers.join(','));

    // 确定最大行数
    const maxRows = Math.max(...data.map(column => column.length));

    // 添加数据行
    for (let rowIndex = 0; rowIndex < maxRows; rowIndex++) {
        const rowData = [];
        for (let columnIndex = 0; columnIndex < headers.length; columnIndex++) {
            const columnData = data[columnIndex];
            const value = columnData[rowIndex] !== undefined ? columnData[rowIndex] : '';
            const escaped = ('' + value).replace(/"/g, '\\"');
            rowData.push(`"${escaped}"`);
        }
        csvRows.push(rowData.join(','));
    }

    // 返回CSV格式的数据
    return csvRows.join('\n');
}


function downloadCSV(csvContent, fileName) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const dataProcessingAndDownload = (historyData, slaveList, sensorsList) =>{
    let sensorNameIndex = 0;
    let slaveNameIndex = 0;
    let nameList = [];
    let totalData = [];
    let timeList = [];

    for (let sensor of historyData) {
        let dataList = [];
        let tempTimeList = [];

        let slaveName = trsnslateSlave[slaveList[slaveNameIndex]]
        let sensorName = translate[sensorsList[sensorNameIndex]];

        sensorNameIndex = (sensorNameIndex + 1) % sensorsList.length;
        slaveNameIndex = sensorNameIndex === 0 ? slaveNameIndex + 1 : slaveNameIndex;

        for (let item of sensor) {
            dataList.push(item[sensorName]);
            tempTimeList.push(timeHandle(item['timest']));
        }
        totalData.push(dataList);
        nameList.push(slaveName + sensorName);
        timeList = tempTimeList;
    }
    nameList.push('Time');
    totalData.push(timeList);
    console.log(totalData);
    let csvContent = convertToCSV(nameList, totalData)
    downloadCSV(csvContent, `history(${timeList[0]} to ${timeList[timeList.length-1]}).csv`)
}

const timeDataTransform = (timeRangeList) => {
    let timeList = [];
    for(let timeItem of timeRangeList){
        let startTime = timeHandle(timeItem[0]);
        let endTime = timeHandle(timeItem[1]);
        let connectTime = startTime + " - " + endTime;
        timeList.push(connectTime)
    }
    return timeList;
}

const coordinateConversion = (originalCoordinate) =>{
// 定义 EPSG:4490 和 EPSG:3857 的坐标系参数
    const epsg4490Def = '+proj=longlat +ellps=GRS80 +no_defs';
    const webMercatorDef = '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs';
    // 创建坐标转换函数
    const epsg4490ToWebMercator = proj4(epsg4490Def, webMercatorDef);
    // 示例：将 EPSG:4490 坐标转换为天地图球面墨卡托投影坐标
    return epsg4490ToWebMercator.forward(originalCoordinate)
}


export {
    downloadCSV,
    timeDataTransform,
    dataProcessingAndDownload,
    dataGenerator,
    timeHandle,
    tiemstampHandle,
    generateData,
    getTimeRange,
    convertToCSV,
    coordinateConversion,
}