import axios from "axios";
import {useUserStore} from "@/store/user.js";
import {reactive} from "vue";

const userStore = useUserStore()
let token = userStore.token

const getSensorData = (slave_num) => {
    let url = '/xu/' + slave_num;
    return axios({
        url: url,
        method: 'get'
    })
}
const getSoilData = () => {
    let url = 'xu/soilSensors'
    return axios({
        url: url,
        method: 'get'
    })
}
const getChartData = () => {
    return axios({
        url: '/api/chart',
        method: 'get'
    })
}

export  {
    getSensorData,
    getChartData,
    getSoilData
}