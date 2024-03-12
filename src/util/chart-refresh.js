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



export  {
    chartRefresh,
    timeHandle
}