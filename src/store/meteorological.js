import {defineStore} from "pinia";

import {getMeteorologicalData} from "@/apis/request-api.js";
import {soilData, solarData, weatherData} from "@/assets/js/stations-data.js";

const useMeteorological = defineStore('equipment', () => {
    const meteorologicalData = {
        soilData: [],
        weatherData: [],
        solarData: [],
    }

    const getData = () => {
        const response = getMeteorologicalData();

        solarData[i].data = text.data[0];
        solarData[i].data = text.data[1];
        solarData[i].data = text.data[2];
        solarData[i].data = text.data[4];
        solarData[i].data = text.data[5];
        solarData[i].data = text.data[6];
        solarData[i].data = text.data[11];
        solarData[i].data = text.data[12];
        for (let i = 0; i < soilData.lenght; i++) {
            soilData[i].data = text.data[14 + i];
        }
        for (let i = 0; i < weatherData.lenght; i++) {
            weatherData[i].data = text.data[25 + i];
        }
    }

    return {
        switchData,
        getSwitchData
    }
})

export {
    useMeteorological,
}