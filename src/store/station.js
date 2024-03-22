import {defineStore} from 'pinia';
import {reactive} from "vue";
import axios from "axios";

const sensorUrl = 'xu/real_time_data';
const equipmentUrl = 'xu/range_query';

const useSensorsStore2 = defineStore('slave1', () => {
    const stationName = 'Master 01 : Slave01';
    const slaveNum = 1;
    let sensorData = {};
    let equipmentData = {};

    const getSensorsData = async (slave_num) => {
        try {
            const response = await axios.post(sensorUrl,{slave_num:slaveNum, ids:[1,2,3,4]});
            sensorData = response.data;
            console.log(sensorData)
            return sensorData;
        } catch (error) {
            console.error(error);
        }
    };

    const getEquipmentData = async (slave_num) => {
        try {
            const response = await axios.get(equipmentUrl);
            equipmentData = response.data
        } catch (error) {
            console.error(error);
        }
    };

    return {
        slaveNum,
        sensorData,
        equipmentData,
        getSensorsData,
        getEquipmentData
    };
});

export {
    useSensorsStore2
}