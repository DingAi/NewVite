import {defineStore} from 'pinia'
import {reactive} from "vue";
import axios from "axios";

const useEquipmentStore = defineStore('equipment', () => {
    const switchData = reactive({
        lid: [],
        radiotube: [],
        fan: [],
        Other: []
    })

    const getSwitchData = () => {
        axios.get('new/master01/items').then(response => {
            switchData.lid = response.data['lid'];
            switchData.radiotube = response.data['radiotube'];
            switchData.fan = response.data['fan'];
            switchData.Other = response.data['Other'];
        })
        return switchData
    }

    return {
        switchData,
        getSwitchData
    }
})

const useWeatherStore = defineStore('weather', () => {
    // 定义状态对象
    const state = {
        soilSensorSwitchList: [],
        slaveStationSwitchList: [],
        slaveStationStateData: {}
    };
    
    const setSoilSwitchList = (binaryStr) => {
        const lastFiveBits = binaryStr.slice(-5).padStart(5, '0');
        // 将每一位转换为布尔值并存储在数组中
        state.soilSensorSwitchList = Array.from(lastFiveBits).map(bit => bit === '1');
    };
    
    return {
        state,
        setSoilSwitchList
    };
});

export {
    useEquipmentStore,
    useWeatherStore,
}