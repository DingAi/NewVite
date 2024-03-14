import moment from "moment/moment.js";

const chartRefresh = (dataList, data, xIndex) => {
    dataList.push(data);
    if (dataList.length === xIndex){
        dataList.shift()
    }
    return dataList;
}

const timeHandle = (time) =>{
    const dateTime = new Date(time);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // 注意，月份从 0 开始，所以要加 1
    const day = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime
}


function generateData() {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let group = [];
        group.push({name:'风扇', value: Math.random() < 0.5});
        group.push({name:'盖子', value: Math.random() < 0.5});
        group.push({name:'电磁阀', value: Math.random() < 0.5});
        group.push({name:'Other', value: Math.random() < 0.5});
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


export  {
    chartRefresh,
    timeHandle,
    generateData,
    generateRandomArray,
    generateRandomDatesArray
}