import moment from "moment";
import {translate, trsnslateSlave} from "@/assets/js/stations-data.js";

const dataGenerator = (dataList, data, xIndex) => {
    dataList.push(data);
    if (dataList.length === xIndex) {
        dataList.shift()
    }
    return dataList;
}

const timeHandle = (originalTime) => {
    const time = moment(originalTime, 'ddd, DD MMM YYYY HH:mm:ss [GMT]');
    const formattedTime = time.format('YYYY-MM-DD HH:mm:ss');
    return formattedTime;
}

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

function generateRandomArray(fixedLength) {
    const array = [];
    let consecutiveZeros = 0;
    for (let i = 0; i < fixedLength; i++) {
        const randomValue = Math.random();
        if (randomValue <= 0.7) {
            array.push(0);
            consecutiveZeros++;
        } else {
            array.push(Math.floor(Math.random() * 100) + 1);
            consecutiveZeros = 0;
        }
        if (consecutiveZeros >= 10) {
            consecutiveZeros = 0;
            i -= 9;
        }
    }
    return array;
}

function generateRandomDatesArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        // 生成一个随机的日期
        const randomDate = moment().add(Math.floor(Math.random() * 365), 'days');
        array.push(randomDate.toString());
    }
    return array;
}

function get24HTimeRange() {
    // 获取当前时间
    const currentTime = moment();
    // 获取24小时前的时间
    const twentyFourHoursAgo = moment().subtract(24, 'hours');
    // 格式化时间为指定格式（年月日 时分秒）
    const formattedCurrentTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
    const formattedTwentyFourHoursAgo = twentyFourHoursAgo.format('YYYY-MM-DD HH:mm:ss');
    // 构建时间范围数组
    const timeRange = [formattedTwentyFourHoursAgo, formattedCurrentTime];
    return timeRange
}

function get12HTimeRange() {
    // 获取当前时间
    const currentTime = moment();
    // 获取24小时前的时间
    const twentyFourHoursAgo = moment().subtract(12, 'hours');
    // 格式化时间为指定格式（年月日 时分秒）
    const formattedCurrentTime = currentTime.format('YYYY-MM-DD HH:mm:ss');
    const formattedTwentyFourHoursAgo = twentyFourHoursAgo.format('YYYY-MM-DD HH:mm:ss');
    // 构建时间范围数组
    const timeRange = [formattedTwentyFourHoursAgo, formattedCurrentTime];
    return timeRange
}

// 生成线性回归数据
function generateLinearData(numPoints, slope, intercept, noiseLevel) {
    let data = [];
    for (let i = 0; i < numPoints; i++) {
        let x = i;
        let noise = noiseLevel * (Math.random() - 0.5);
        let y = slope * x + intercept + noise;
        data.push({ x: x, y: y });
    }
    return data;
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
            const value = columnData[rowIndex] || '';
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
    downloadCSV(csvContent, 'historyDownLoadFile.csv')
}

const timeDataTransform = (timeRangeList) => {
    let timeList = [];
    for(let timeItem of timeRangeList){
        let startTime = timeHandle(timeItem[0]);
        let endTime = timeHandle(timeItem[1]);
        let connectTime = startTime + "-" + endTime;
        timeList.push(connectTime)
    }
    return timeList;
}




export {
    downloadCSV,
    timeDataTransform,
    dataProcessingAndDownload,
    dataGenerator,
    timeHandle,
    tiemstampHandle,
    generateData,
    generateRandomArray,
    generateRandomDatesArray,
    get24HTimeRange,
    get12HTimeRange,
    generateLinearData,
    convertToCSV
}