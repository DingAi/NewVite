<script setup>
import {reactive, ref} from "vue";
import {getMeteorologicalData} from "@/apis/request-api.js";
import {shortcuts, soilData, solarData, weatherData} from "@/assets/js/stations-data.js";
import MeteorologicalChart01 from "@/components/echarts/MeteorologicalChart01.vue";
import MeteorologicalChart02 from "@/components/echarts/MeteorologicalChart02.vue";
import TGaugeChart from "@/components/echarts/TBGaugeChart.vue";


const soil = reactive({
    data: soilData
})
const weather = reactive({
    data: weatherData
})
const solar = reactive({
    data: solarData
})

const timeRangeStr = ref('')
const solarTransmissionData = ref([])
const BETemperature = ref([])


const refresh = async () => {
    try {
        const response = await getMeteorologicalData();
        solar.data[0].value = response.data[0];
        solar.data[1].value = response.data[1];
        solar.data[2].value = response.data[2];
        solar.data[3].value = response.data[4];
        solar.data[4].value = response.data[5];
        solar.data[5].value = response.data[6];
        solar.data[6].value = response.data[11];
        solar.data[7].value = response.data[12];
        for (let i = 0; i < soil.data.length-2; i++) {
            solarTransmissionData.value[i] = soil.data[i].value
        }
        for (let i = 0; i < soilData.length-1; i++) {
            soil.data[i].value = response.data[14 + i];
        }
        soil.data[9] = response.data[24];
        for (let i = 0; i < weatherData.length; i++) {
            weather.data[i].value = response.data[25 + i];
        }
        BETemperature.value[0] = response.data[7];
        BETemperature.value[1] = response.data[8];
    } catch (error) {
        console.error(error);
    }
}


// isLoad.value = true;
refresh();

onMounted(() => {
    setInterval(refresh, 5000)
    // refresh();
})
</script>

<template>
    <el-row class="z-0 full" :gutter="10">
        <el-col :span="6" :xs="24" class="full">
            <div class="item" style="height: 25%">
                <div class="full p-3">
                    <el-descriptions title="天气数据" direction="vertical" :column="3" :size="'large'" border>
                        <el-descriptions-item v-for="item in weather.data" :label="item.name" :key="item.name">
                            <b>{{ item.value }}{{ item.unit }}</b>
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="item" style="height: 40%">
                <div class="full p-3">
                    <el-divider border-style="dashed"/>
                    <el-descriptions title="土壤数据" direction="vertical" :column="4" :size="'large'" border>
                        <el-descriptions-item v-for="item in soil.data" :label="item.name" :key="item.name">
                            <b>{{ item.value }}{{ item.unit }}</b>
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
<!--                <div v-else>-->
<!--                    <Loading/>-->
<!--                </div>-->
            </div>

            <div class="item" style="height: 35%">
                <div class="full p-3">
                    <el-divider border-style="dashed"/>
                    <el-descriptions title="光伏设备" direction="vertical" :column="4" :size="'large'" border>
                        <el-descriptions-item v-for="item in solar.data" :label="item.name" :key="item.name">
                            <b>{{ item.value }}{{ item.unit }}</b>
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-col>
        <el-col :span="12" :xs="24" class="">
            <div class="item base-div" style="height: 50%">
                <MeteorologicalChart01 :temperature="weather.data[1].value" :humidity="weather.data[2].value"/>
            </div>
            <div class="item base-div" style="height: 50%">
                <MeteorologicalChart02/>
            </div>
        </el-col>
        <el-col :span="6" :xs="24" class="">
            <div class="item base-div" style="height: 50%">
                <TGaugeChart :equipmetTemperature="BETemperature"/>
            </div>
            <div class="item base-div" style="height: 50%">
                <TGaugeChart :equipmetTemperature="BETemperature"/>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="less" scoped>
@import "@/assets/css/master-style";

.item {
  flex-grow: 1;
  margin-bottom: 10px; /* 设置相邻div之间的间距 */
}

</style>