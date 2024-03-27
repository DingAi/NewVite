<template>
    <div class="full">
        <el-row :gutter="20" class="base-row">
            <el-col :span="18" :xs="24" class="line-div p-2">
                <div class="base-div">
                    <LineChart :in_temperature="sensorData.in_temperature"/>
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
                <!--                这里的area-div类要写在外侧-->
                <div class="base-div">
                    <AreaChart :illumination="sensorData.illumination"/>
                </div>
            </el-col>
            <el-col :span="6" :xs="24" class="gauge-div p-2">
                <div class="base-div">
                    <GaugeChart :ap="{'uap':sensorData.up_atmospheric_pressure, 'dap':sensorData.down_atmospheric_pressure}"/>
                </div>
            </el-col>
            <el-col :span="6" :xs="24" class="p-2">
                <div class="base-div">
                    <EquipmentsSwitch :equipments="switchData"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import LineChart from "@/components/echarts/LineChart.vue";
import { onMounted, reactive } from "vue";
import { useEquipmentStore } from "@/store/equipments.js";
import { useSensorsStore } from "@/store/sensors.js";
import GaugeChart from "@/components/echarts/GaugeChart.vue";
import { getSensorData, getSoilData } from '@/apis/request-api.js'
import AreaChart from "@/components/echarts/AreaChart.vue";
import EquipmentsSwitch from "@/components/slave-station/EquipmentsSwitch.vue";
import SoilSensors from "@/components/slave-station/SoilSensors.vue";

const slave_num = 'erzong/yicong'
const use_switch = useEquipmentStore()
const use_sensors = useSensorsStore()
const switchData = use_switch.getSwitchData()
let sensorData = reactive({})
const soilData = reactive({})

const refresh = async () => {
    try {
        const response = await getSensorData(slave_num);
        sensorData.in_temperature = response.data[5].inTemperature;
        sensorData.ex_temperature = response.data[4].exTemperature;
        sensorData.in_humidity = response.data[1].inHumidity;
        sensorData.ex_humidity = response.data[3].exHumidity;
        sensorData.illumination = response.data[6].illumination;
        sensorData.carbon_dioxide = response.data[2].CO2;
        sensorData.up_atmospheric_pressure = response.data[0].UAP;
        sensorData.down_atmospheric_pressure = response.data[0].DAP;
    } catch (error) {
        console.error(error);
    }

    try {
        const response = await getSoilData();
        soilData.layer1 = response.data['layer01'];
        soilData.layer2 = response.data['layer02'];
        soilData.layer3 = response.data['layer03'];
        soilData.layer4 = response.data['layer04'];
        soilData.layer5 = response.data['layer05'];
    } catch (error) {
        console.error(error);
    }
}

onMounted(() =>{
    setInterval(() => {
        refresh()
    }, 2000);
});
</script>

<style scoped>

</style>