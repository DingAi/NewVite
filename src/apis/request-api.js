import axios from "axios";
import apiClient from './apis'

const LocalService = 'xu';
const cloudService = 'online';
const newService = 'new';
const currentService = newService;

let midVar = "master01"

const userLogin = (credentials) =>{
    let url = "new/user/user/dl";
    return axios({
        url: url,
        method: "POST",
        data: {
            credentials: credentials
        }
    })
}

const getSensorData = (slaveNum, masterNum) => {
    let url = `/${masterNum}/real_time_data`;
    return apiClient({
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
    let url = `/${masterNum}/soil`
    return apiClient({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}


const getAPData = (masterNum) => {
    let url = `/${masterNum}/air_pressure`
    return apiClient({
        url: url,
        method: 'get'
    })
}

//数据分析
const getAnalysisData = (masterNum, slaveNum, timeRange, boxVolume, boxBottomArea) => {
    let url = `/${midVar}/data_analysis`
    // let url = `xu/data_analysis`
    return apiClient({
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
    let url = `/master01/range_query`
    return apiClient({
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
    let url = `/${midVar}/meteorological_station`
    return apiClient({
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

const getRunningEquipment = (masterNum) =>{
    let url = `/${masterNum}/equipment`
    return apiClient({
        url: url,
        method: "get",
    })
}

const getWeatherMasterData = (urlStr) => {
    let url = `mqtt/${urlStr}`;
    return axios({
        url: url,
        method: 'get',
    })
}

// 获取气象主站的开关状态数据
const getWeatherMasterSwitchData = (masterNum) => {
    let url = 'mswitch/disposable_switch';
    return axios({
        url: url,
        method: 'post',
        data: {
            masterNum: masterNum
        },
    })
}

// 气象主站的开关控制
const weatherSwitch = (hexString, masterNum) => {
    let url = 'mswitch/switch_station';
    return axios({
        url: url,
        method: 'post',
        data: {
            masterNum: masterNum,
            hexString: hexString,
        }
        
    })
}

// 气象主站的ECharts数据
const getWeatherOtherData = (timeRange) => {
    let url = `${currentService}/master01/weather_other_data`
    return axios({
        url: url,
        method: 'post',
        data: {
            timeRange: timeRange,
        },
    })
}

const getWeatherTimeControl = (masterNum, index, timeValue) => {
    let url = `mswitch/control_time`
    return axios({
        url: url,
        method: 'post',
        data: {
            masterNum: masterNum,
            index: index,
            timeValue: timeValue,
        },
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
    getWeatherMasterData,
    getWeatherMasterSwitchData,
    userLogin,
    getWeatherOtherData,
    weatherSwitch,
    getWeatherTimeControl,
}