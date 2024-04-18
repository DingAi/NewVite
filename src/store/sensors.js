import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";


const useSensorsStore = defineStore('equipment', () => {
    let sensorData = reactive({});

    const getSensorsData = async (slave_num) => {
        try {
            const response = await axios.get('api/' + slave_num);
            Object.assign(sensorData, response.data);
        } catch (error) {
            console.error(error);
        }
        return sensorData;
    };

    return {
        sensorData,
        getSensorsData
    };
});


export {
    useSensorsStore,
    // useSensorsStore2
};