import axios from "axios";

const LocalServices = 'xu';
const cloudServices = 'online';

const getSensorData = (slaveNum) => {
    let url = `${cloudServices}/real_time_data`;
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
    let url = `${cloudServices}/soil`
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}

const getAPData = () => {
    let url = `${cloudServices}/air_pressure`
    return axios({
        url: url,
        method: 'get'
    })
}

const getStationStatus = () => {
    let url = `${cloudServices}/equipment`
    return axios({
        url: url,
        method: 'get'
    })
}

const getAnalysisData = (masterNum, slaveNum, timeRange, boxVolume, boxBottomArea) => {
    let url = `${cloudServices}/data_analysis`
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
    let url = `${cloudServices}/range_query`
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
    let url = `${cloudServices}/meteorological_station`
    return axios({
        url: url,
        method: 'get'
    })
}

const getMeteorologicalHistory = () =>{
    let url = `${cloudServices}/meteorological_station_history`
    return axios({
        url: url,
        method: 'get'
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
    getMeteorologicalHistory
}