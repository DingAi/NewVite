import axios from "axios";
// import {useUserStore} from "@/store/user.js";

// const userStore = useUserStore()
// let token = userStore.token

const getSensorData = (slaveNum) => {
    let url = 'online/real_time_data';
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
    let url = 'online/soil'
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}

const getAPData = () => {
    let url = 'online/air_pressure'
    return axios({
        url: url,
        method: 'get'
    })
}

const getStationStatus = () => {
    let url = 'online/equipment'
    return axios({
        url: url,
        method: 'get'
    })
}

const getAnalysisData = () => {
    let url = 'xu/data_analysis'
    return axios({
        url: url,
        method: 'get'
    })
}

const getCO2History = (masterName, sensorNum, timeRange) => {
    let url = 'online/co2_history'
    return axios({
        url: url,
        method: 'post',
        data: {
            masterNum: masterName,
            sensorNum: sensorNum,
            time: timeRange
        }
    })
}




export {
    getSensorData,
    getCO2History,
    getAnalysisData,
    getStationStatus,
    getSoilData,
    getAPData
}