<template>
  <div class="full">
    <el-row :gutter="20" class="base-row">
      <el-col :span="18" :xs="24" class="line-div p-2">
        <div class="base-div">
          <LineChart :CO2="sensorData['carbon_dioxide']" :time="sensorData['time']" :pageName="page_name" :linesData="sensorData"/>
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
          <AreaChart :illumination="sensorData['illumination']" :time="sensorData['time']" :pageName="page_name"/>
        </div>
      </el-col>
      <el-col :span="6" :xs="24" class="gauge-div p-2">
        <div class="base-div">
          <GaugeChart :ap="{'uap':apData['uap'], 'dap':apData['dap']}"/>
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
import LineChart from "@/components/echarts/LineChart.vue";
import {onMounted, reactive, ref} from "vue";
import { useEquipmentStore } from "@/store/stations.js";
import GaugeChart from "@/components/echarts/GaugeChart.vue";
import {getAPData, getSensorData, getSoilData} from '@/apis/request-api.js'
import AreaChart from "@/components/echarts/AreaChart.vue";
import EquipmentsSwitch from "@/components/slave-station/EquipmentsSwitch.vue";
import SoilSensors from "@/components/slave-station/SoilSensors.vue";
import {tiemstampHandle, timeHandle} from "@/util/data-generator.js";

const page_name = ref('Master 01 : Slave01');
const slaveNum = 5;
const masterNum = 'master03'
const use_switch = useEquipmentStore();
const switchData = use_switch.getSwitchData();
let sensorData = reactive({});
let apData = reactive({})
const soilData = reactive({});

const refresh = async () => {
  try {
    const response = await getSensorData(slaveNum, masterNum);
    sensorData.in_temperature = response.data['inTemperature'];
    sensorData.ex_temperature = response.data['exTemperature'];
    sensorData.in_humidity = response.data['inHumidity'];
    sensorData.ex_humidity = response.data['exHumidity'];
    sensorData.illumination = response.data['illumination'];
    sensorData.time = tiemstampHandle(response.data['time']);

  } catch (error) {
    console.error(error);
  }

  try {
    const response = await getSoilData(slaveNum, masterNum);
    soilData.layer1 = response.data['layer01'];
    soilData.layer2 = response.data['layer02'];
    soilData.layer3 = response.data['layer03'];
    soilData.layer4 = response.data['layer04'];
    soilData.layer5 = response.data['layer05'];
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await getAPData(masterNum);
    apData.uap = response.data['UAP']
    apData.dap = response.data['DAP']
  } catch (error) {
    console.error(error);
  }
}

refresh();

onMounted(() =>{
  setInterval(() => {
    refresh();
  }, 5000);
});
</script>

<style scoped>

</style>