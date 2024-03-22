import axios from "axios";
import {useUserStore} from "@/store/user.js";
import {reactive} from "vue";

const userStore = useUserStore()
let token = userStore.token

const getSensorData = (slaveNum) => {
    let url = 'xu/real_time_data';
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
    let url = 'xu/soil'
    return axios({
        url: url,
        method: 'post',
        data: {
            slave_num: slaveNum,
        },
    })
}

const getAPData = () => {
    let url = 'xu/air_pressure'
    return axios({
        url: url,
        method: 'get'
    })
}

const getAPHistory = () => {
    let url = 'xu/xxx'
    return axios({
        url: url,
        method: 'get'
    })
}

const getCO2History = (masterName, sensorNum, timeRange) => {
    let url = 'xu/co2_history'
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
    getAPHistory,
    getSoilData,
    getAPData
}