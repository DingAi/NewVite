import moment from "moment";

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


export {
    dataGenerator,
    timeHandle,
    tiemstampHandle,
    generateData,
    generateRandomArray,
    generateRandomDatesArray,
    get24HTimeRange,
    get12HTimeRange,
}