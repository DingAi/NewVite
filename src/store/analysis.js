import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios";
import {getAnalysisData} from "@/apis/master-api.js";


const useAnalysisStore = defineStore('analysis', () => {
    const originalData = reactive({
        data: {},
        isLoading : false
    });
    const timeRangeList = ref([]);
    const CRegressionData = ref([]);
    const WRegressionData = ref([]);
    const CKvaluueList = ref([]);
    const CRvalueList = ref([]);
    const WKvalueList = ref([]);
    const WRvalueList = ref([]);
    const HAvalueList = ref([]);

    const setOriginalData = async (data) =>{
        originalData.value = data;
    }

    const getOriginalData = async () =>{
        try {
            const response = await getAnalysisData();
            originalData.data = response.data;
            originalData.isLoading = true;
            console.log('测试一些Pinia的传输')
        }catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            originalData.isLoading = false;
        }
    }
    const getCRegressionData = async () => {
        CRegressionData.value = originalData.value[0];
    };

    const getWRegressionData = async () => {
        WRegressionData.value = originalData.value[0];
    };

    const getTimeRangeList = async () => {
        timeRangeList.value = originalData.value[0];
    };

    return {
        originalData,
        setOriginalData,
        getOriginalData,
        getCRegressionData,
        getWRegressionData,
        getTimeRangeList,
    };
});

// const useRegressionStore = defineStore('regression', () => {
//     const CRegressionData = ref([]);
//     const WRegressionData = ref([]);
//
//     const getCRegressionData = async () => {
//     };
//
//     return {
//         getCRegressionData,
//         getWRegressionData,
//     };
// });

// const useFluxHistoryStore = defineStore('fluxHistory', () => {
//     const CRegressionData = ref([]);
//     const WRegressionData = ref([]);
//
//     const getAnalysisData = async (masterNum, slaveNum) => {
//         try {
//             const response = await axios.get('api/' + slaveNum);
//             Object.assign(sensorData, response.data);
//         } catch (error) {
//             console.error(error);
//         }
//         return sensorData;
//     };
//
//     return {
//         getSensorsData
//     };
// });

export {
    useAnalysisStore,
};