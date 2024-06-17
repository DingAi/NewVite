<template>
    <div class="full">
        <el-row :gutter="20" class="base-row">
            <el-col :span="18" :xs="24" class="line-div p-2">
                <div class="base-div">
                    <LineChart :CO2="sensorData['carbon_dioxide']" :time="sensorData['time']" :pageName="page_name"
                               :linesData="sensorData"/>
                </div>
            </el-col>
            <el-col :span="6" :xs="24" class="p-2">
                <div class="base-div">
                    <SoilSensors :soil_data="soilData"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="base-row">
            <el-col :span="12" :xs="24" class="area-div p-2">
                <div class="base-div">
                    <AreaChart :illumination="sensorData['illumination']" :time="sensorData['time']"
                               :pageName="page_name"/>
                </div>
            </el-col>
            <el-col :span="6" :xs="24" class="gauge-div p-2">
                <div class="base-div">
                    <GaugeChart :ap="{ uap: apData.uap, dap: apData.dap }"/>
                </div>
            </el-col>
            <el-col :span="6" :xs="24" class="p-2">
                <div class="base-div">
                    <EquipmentsSwitch :equipments="switchData" :pageName="page_name"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import {ref, reactive, onMounted, onUnmounted} from "vue";
import LineChart from "@/components/echarts/LineChart.vue";
import AreaChart from "@/components/echarts/AreaChart.vue";
import GaugeChart from "@/components/echarts/GaugeChart.vue";
import EquipmentsSwitch from "@/components/slave-station/EquipmentsSwitch.vue";
import SoilSensors from "@/components/slave-station/SoilSensors.vue";
import {useEquipmentStore} from "@/store/stations.js";
import {getAPData, getSensorData, getSoilData} from '@/apis/request-api.js';
import {tiemstampHandle} from "@/util/data-generator.js";

const page_name = ref('Master 01 : Slave01');
const slaveNum = 1;
const masterNum = 'master01';
const use_switch = useEquipmentStore();
const switchData = use_switch.getSwitchData();
const sensorData = reactive({});
const apData = reactive({});
const soilData = reactive({});

const refresh = async () => {
    try {
        const sensorResponse = await getSensorData(slaveNum, masterNum);
        Object.assign(sensorData, {
            in_temperature: sensorResponse.data['inTemperature'],
            ex_temperature: sensorResponse.data['exTemperature'],
            in_humidity: sensorResponse.data['inHumidity'],
            ex_humidity: sensorResponse.data['exHumidity'],
            illumination: sensorResponse.data['illumination'],
            time: tiemstampHandle(sensorResponse.data['time']),
            carbon_dioxide: sensorResponse.data['carbonDioxide'],
        });
    } catch (error) {
        console.error('Error fetching sensor data:', error);
    }

    try {
        const soilResponse = await getSoilData(slaveNum, masterNum);
        Object.assign(soilData, {
            layer1: soilResponse.data['layer01'],
            layer2: soilResponse.data['layer02'],
            layer3: soilResponse.data['layer03'],
            layer4: soilResponse.data['layer04'],
            layer5: soilResponse.data['layer05'],
        });
    } catch (error) {
        console.error('Error fetching soil data:', error);
    }

    try {
        const apResponse = await getAPData(masterNum);
        Object.assign(apData, {
            uap: apResponse.data['UAP'],
            dap: apResponse.data['DAP'],
        });
    } catch (error) {
        console.error('Error fetching AP data:', error);
    }
};

let intervalId;

onMounted(() => {
    refresh();
    intervalId = setInterval(refresh, 5000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<style scoped>
/* Add your styles here */
</style>
