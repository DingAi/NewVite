import axios from "axios";

const LocalService = 'xu';
const cloudService = 'online';
const schoolService = 'school';
const currentService = schoolService;

const getSensorData = (slaveNum) => {
    let url = `${currentService}/real_time_data`;
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
    let url = `${currentService}/soil`
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}


const getAPData = () => {
    let url = `${currentService}/air_pressure`
    return axios({
        url: url,
        method: 'get'
    })
}

const getStationStatus = () => {
    let url = `${currentService}/equipment`
    return axios({
        url: url,
        method: 'get'
    })
}


const getAnalysisData = (masterNum, slaveNum, timeRange, boxVolume, boxBottomArea) => {
    let url = `${currentService}/data_analysis`
    // let url = `${LocalServices}/data_analysis`
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
    let url = `${currentService}/range_query`
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
    let url = `${currentService}/meteorological_station`
    return axios({
        url: url,
        method: 'get'
    })
}


const getMeteorologicalHistory = () =>{
    let url = `${currentService}/meteorological_station_history`
    return axios({
        url: url,
        method: 'get'
    })
}


const getDataList = (selected, timeRange) => {
    let url = `${currentService}/data_display`
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