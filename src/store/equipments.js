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
        axios.get('xu/items').then(response => {
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

export {
    useEquipmentStore,
}