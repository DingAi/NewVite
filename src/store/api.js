import {defineStore} from 'pinia'
import axios from "axios";

const useApiStore = defineStore('equipment', () => {
    const apiToken = ref('');

    const getRealtimeData = () => {
        axios.get('xu/items').then(response => {
        })
        return switchData
    }

    return {
        switchData,
        getRealtimeData
    }
})

export {
    useApiStore,
}