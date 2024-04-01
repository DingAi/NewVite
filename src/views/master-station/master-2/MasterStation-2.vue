<script setup>
import {reactive, ref} from "vue";
import {generateData} from "@/util/data-generator.js";


let switchData = reactive(generateData());
const soilData = ref([
    { name: '土壤含水量', value: Math.random().toFixed(2), unit: '%' },
    { name: '土壤温度', value: Math.floor(Math.random() * (40 - 10 + 1) + 10), unit: '℃' },
    { name: '土壤电导率', value: Math.random().toFixed(2), unit: 'dS/m' },
    { name: '土壤PH', value: Math.random().toFixed(1), unit: '' },
    { name: '土壤氮含量', value: Math.random().toFixed(2), unit: 'mg/kg' },
    { name: '土壤磷含量', value: Math.random().toFixed(2), unit: 'mg/kg' },
    { name: '土壤钾含量', value: Math.random().toFixed(2), unit: 'mg/kg' },
    { name: '土壤盐度', value: Math.random().toFixed(2), unit: '%' },
    { name: '土壤TDS', value: Math.floor(Math.random() * (2000 - 500 + 1) + 500), unit: 'ppm' },
    { name: '风速', value: Math.random().toFixed(2), unit: 'm/s' }
]);

const weatherData = ref([
    { name: '温度', value: Math.floor(Math.random() * (40 - 10 + 1) + 10), unit: '℃' },
    { name: 'CO₂', value: Math.floor(Math.random() * (1000 - 300 + 1) + 300), unit: 'ppm' },
    { name: '大气压力', value: Math.floor(Math.random() * (1050 - 950 + 1) + 950), unit: 'hPa' },
    { name: '湿度', value: Math.random().toFixed(2) * 100, unit: '%' },
    { name: '净辐射', value: Math.random().toFixed(2), unit: 'W/m²' },
    { name: '光照', value: Math.floor(Math.random() * (1000 - 100 + 1) + 100), unit: 'lux' }
]);

const solarData = ref([
    { name: '光伏板电压', value: Math.random().toFixed(2), unit: 'V' },
    { name: '光伏板电流', value: Math.random().toFixed(2), unit: 'A' },
    { name: '光伏板发电功率', value: (Math.random() * 100).toFixed(2), unit: 'W' },
    { name: '输出电压', value: Math.random().toFixed(2), unit: 'V' },
    { name: '输出功率', value: (Math.random() * 1000).toFixed(2), unit: 'W' },
    { name: '电池电压', value: (Math.random() * 12).toFixed(2), unit: 'V' },
    { name: '电池电流', value: Math.random().toFixed(2), unit: 'A' },
    { name: '输出电流', value: Math.random().toFixed(2), unit: 'A' }
]);

</script>

<template>
    <el-row class="z-0 full" :gutter="20">
        <el-col :span="6">
            <el-descriptions title="土壤数据"
                             direction="vertical"
                             :column="4"
                             :size="'large'"
                             border>
                <el-descriptions-item v-for="item in soilData" :label="item.name" :key="item.name">
                    {{ item.value }}{{ item.unit }}
                </el-descriptions-item>
            </el-descriptions>
            <el-descriptions title="天气数据"
                             direction="vertical"
                             :column="4"
                             :size="'large'"
                             border>
                <el-descriptions-item v-for="item in weatherData" :label="item.name" :key="item.name">
                    {{ item.value }}{{ item.unit }}
                </el-descriptions-item>
            </el-descriptions>
            <el-descriptions title="光伏设备"
                             direction="vertical"
                             :column="4"
                             :size="'large'"
                             border>
                <el-descriptions-item v-for="item in solarData" :label="item.name" :key="item.name">
                    {{ item.value }}{{ item.unit }}
                </el-descriptions-item>
            </el-descriptions>
        </el-col>
        <el-col :span="12" class="base-div">

        </el-col>
        <el-col :span="6" class="base-div">

        </el-col>
    </el-row>
</template>

<style lang="less" scoped>
@import "@/assets/css/master-style";

.text-color-1 {
  color: #babbbc;
  font-size: 1rem;
}

.text-color-2 {
  font-size: 1rem;
}
</style>