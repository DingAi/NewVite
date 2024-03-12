import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

const useSensorsStore = defineStore('equipment', () => {
    let sensorData = reactive({});

    const getSensorsData = async (slave_num) => {
        try {
            const response = await axios.get('api/' + slave_num);
            sensorData = response.data
            // sensorData.in_temperature = response.data[5].inTemperature;
            // sensorData.ex_temperature = response.data[4].exTemperature;
            // sensorData.in_humidity = response.data[1].inHumidity;
            // sensorData.ex_humidity = response.data[3].exHumidity;
            // sensorData.illumination = response.data[6].illumination;
            // sensorData.carbon_dioxide = response.data[2].CO2;
            // sensorData.up_atmospheric_pressure = response.data[0].UAP;
            // sensorData.down_atmospheric_pressure = response.data[0].DAP;
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

export { useSensorsStore };