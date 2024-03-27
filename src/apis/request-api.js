import axios from "axios";

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

const getAnalysisData = (masterNum, slaveNum, timeRange, boxVolume, boxBottomArea) => {
    let url = 'online/data_analysis'
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




export {
    getSensorData,
    getAnalysisData,
    getStationStatus,
    getSoilData,
    getAPData
}