import axios from "axios";

const LocalServices = 'xu';
const cloudServices = 'online';
const SchoolServices = 'school';

const getSensorData = (slaveNum) => {
    let url = `${SchoolServices}/real_time_data`;
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
const getSoilData = (slaveNum) => {
    let url = `${SchoolServices}/soil`
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}

const getAPData = () => {
    let url = `${SchoolServices}/air_pressure`
    return axios({
        url: url,
        method: 'get'
    })
}

const getStationStatus = () => {
    let url = `${SchoolServices}/equipment`
    return axios({
        url: url,
        method: 'get'
    })
}

const getAnalysisData = (masterNum, slaveNum, timeRange, boxVolume, boxBottomArea) => {
    let url = `${SchoolServices}/data_analysis`
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
    let url = `${SchoolServices}/range_query`
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
    let url = `${SchoolServices}/meteorological_station`
    return axios({
        url: url,
        method: 'get'
    })
}

const getMeteorologicalHistory = () =>{
    let url = `${SchoolServices}/meteorological_station_history`
    return axios({
        url: url,
        method: 'get'
    })
}


const getDataList = (selected, timeRange) => {
    let url = `${LocalServices}/data_display`
    return axios({
        url: url,
        method: 'post',
        data: {
            selected: selected,
            timeRange: timeRange,
        },
    })
}


export {
    getSensorData,
    getAnalysisData,
    getStationStatus,
    getSoilData,
    getAPData,
    getHistoryData,
    getMeteorologicalData,
    getMeteorologicalHistory,
    getDataList,
}