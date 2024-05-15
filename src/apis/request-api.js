import axios from "axios";

const LocalService = 'xu';
const cloudService = 'online';
const newService = 'new';
const currentService = newService;

let midVar = "master01"

const getSensorData = (slaveNum, masterNum) => {
    let url = `${currentService}/${masterNum}/real_time_data`;
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
            ids: [1, 2, 3, 4]
        },
    })
}

//获取一个站点的传感器数据
//slave_num为从站编号
const getSoilData = (slaveNum, masterNum) => {
    let url = `${currentService}/${masterNum}/soil`
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}


const getAPData = (masterNum) => {
    let url = `${currentService}/${masterNum}/air_pressure`
    return axios({
        url: url,
        method: 'get'
    })
}

//数据分析
const getAnalysisData = (masterNum, slaveNum, timeRange, boxVolume, boxBottomArea) => {
    let url = `${currentService}/${midVar}/data_analysis`
    // let url = `xu/data_analysis`
    return axios({
        url: url,
        method: 'post',
        data: {
            masterNum: masterNum,
            slave_num: slaveNum,
            time: timeRange,
            boxVolume: boxVolume,
            boxBottomArea: boxBottomArea,
        },
    })
}


const getHistoryData = (masterNum, tabList, timeRange) => {
    let url = `${currentService}/${masterNum}/range_query`
    return axios({
        url: url,
        method: 'post',
        data: {
            masterNum: masterNum,
            sensorNum: tabList,
            time: timeRange,
        },
    })
}


const getMeteorologicalData = () =>{
    let url = `${currentService}/${midVar}/meteorological_station`
    return axios({
        url: url,
        method: 'get'
    })
}


const getDataList = (selected, timeRange) => {
    let url = `${currentService}/${midVar}/data_display`
    return axios({
        url: url,
        method: 'post',
        data: {
            selected: selected,
            timeRange: timeRange,
        },
    })
}

const getRunningEquipment = () =>{
    let url = `${currentService}/${midVar}/equipment`
    return axios({
        url: url,
        method: "get",
    })
}

const getWeatherData = () => {
    let url = 'weather/real_time_data';
    return axios({
        url: url,
        method: 'get',
    })
}


export {
    getSensorData,
    getAnalysisData,
    getSoilData,
    getAPData,
    getHistoryData,
    getMeteorologicalData,
    getDataList,
    getRunningEquipment,
    getWeatherData
}