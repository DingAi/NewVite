<script setup>
import APHistoryChart from "@/components/echarts/APHistoryChart.vue";
import CO2HistoryChart from "@/components/echarts/CO2HistoryChart.vue";
import {getSoilData, getWeatherData} from "@/apis/request-api.js";
import {onMounted, reactive} from "vue";
import {ref} from 'vue'
import SoilSensors from "@/components/slave-station/SoilSensors.vue";
import {soilSensorTable, soilSensorTypeList, weatherSations} from "@/assets/js/stations-data.js";
import {useWeatherStore} from "@/store/stations.js";


// 使用仓库
const weatherStore = useWeatherStore();

const weatherMasterValue = ref('master01');
const weatherSlaveValue = ref(["11"])
const weatherSlaveStationList = ref([])

const soilData = reactive({});
const soilSensorType = ref('')
const soilSensorSwitchList = ref(soilSensorTable)

let testData = reactive({})

let isLoading = ref(false);

const refresh = async () => {
    try {
        const response = await getSoilData(1, 'master01');
        soilData.layer1 = response.data['layer01'];
        soilData.layer2 = response.data['layer02'];
        soilData.layer3 = response.data['layer03'];
        soilData.layer4 = response.data['layer04'];
        soilData.layer5 = response.data['layer05'];
    } catch (error) {
        console.error(error);
    }

    try {
        const response = await getWeatherData();
        Object.assign(testData, response.data); // 使用 Object.assign 更新 testData
        weatherStore.setSoilSwitchList(response.data['sensing_switch']); // 假设服务器返回的数据包含 soilSwitchList 字段
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = true;
    }
}

const toggleSwitch = (index) => {
    console.log(soilSensorSwitchList[index-1])
    // soilSensorSwitchList[index-1].state = !soilSensorSwitchList[index].state;
    // console.log(soilSensorType.value + soilSensorTable[index-1].value)
}

// 根据选择的主站获取从站名
const getSlaves = (masterNum) => {
    if (masterNum) {
        weatherSlaveStationList.value = weatherSations[masterNum];
    } else {
        return {}
    }
}


onMounted(() => {
    // 加载的时候设定缺省值
    getSlaves(weatherMasterValue.value)
    refresh();
    setInterval(refresh, 5000);

});
</script>

<template>
    <el-row class="full" style="max-height: 100%">
        <el-col :span="8" class="p-2 vertically-averaged-container" :xs="24">
            <div class="p-2 h-50">
                <el-card class="full">
                    <template #header>
                        <el-text size="large" style="color: #0d6efd">主站选择</el-text>
                    </template>
                    <el-form>
                        <el-form-item>
                            <el-select v-model="weatherMasterValue" placeholder="Select">
                                <el-option label="气象站主站 01" value="master01"/>
                                <el-option label="气象站主站 02" value="master02" disabled/>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="weatherSlaveValue" clearable placeholder="子站编号" size="large">
                                <el-option v-for="item in weatherSlaveStationList" :key="item.value" :label="item.label"
                                           :value="item.value"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">数据加载</el-button>
                        </el-form-item>
                        <div class="w-full transverse-average-container h-50">
                            <div v-if="isLoading" v-for="(value, key) in testData" :key="key">
                                <p style="color: #8bb9fe">{{ key }}</p>
                                <el-text>{{ value }}</el-text>
                            </div>
                        </div>
                    </el-form>
                </el-card>
            </div>
            <div class="p-2 h-50">
                <el-card shadow="hover" class="full">
                    <template #header>传感器开关</template>
                    <el-form>
                        <el-form-item>
                            <el-select v-model="soilSensorType" clearable placeholder="土壤传感器类型">
                                <el-option v-for="item in soilSensorTypeList" :key="item.value" :label="item.label"
                                           :value="item.value"/>
                            </el-select>
                        </el-form-item>
                    </el-form>

                    <el-divider/>
                    <el-table :data="soilSensorSwitchList">
                        <el-table-column prop="layer" label="Layer" class="text-center"/>
                        <el-table-column prop="state" label="开关状态">
                            <template #default="scope">
                                <el-tag type="primary" v-if="weatherStore.state.soilSensorSwitchList[scope.row.layer-1]" >运行</el-tag>
                                <el-tag type="info" v-else >停止</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column #default="scope" v-if="isLoading">
                            <el-button :type="weatherStore.state.soilSensorSwitchList[scope.row.layer-1] ? 'primary' : 'info'" @click="toggleSwitch(scope.row.layer)">
                                {{ scope.row.state ? '运行' : '停止' }}
                            </el-button>
<!--                            <el-button @click="sensorsSwitch(scope.row.layer)">Switch{{}}</el-button>-->
                        </el-table-column>
                    </el-table>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8" class="vertically-averaged-container" :xs="24">
            <div class="p-2 h-50">
                <CO2HistoryChart/>
            </div>
            <div class="p-2 h-50">
                <APHistoryChart/>
            </div>
        </el-col>
        <el-col :span="8" class="vertically-container" :xs="24" style="max-height: 100%">
            <div class="p-2" v-for="_index in 5" :key="_index">
                <el-card class="full p-3">
                    <div class="w-full transverse-average-container text-center">
                        <el-statistic title="电池电压" :value="26850"/>
                        <el-statistic title="太阳能板电压" :value="26850"/>
                    </div>
                    <el-divider/>
                    <template #header>子站 {{ _index }} 数据</template>
                    <SoilSensors :soil_data="soilData"/>
                    <el-collapse accordion>
                        <el-collapse-item>
                            <el-card shadow="hover">
                                <template #header>子站 {{ _index }} 传感器开关</template>
                                <el-select v-model="soilSensorType" clearable placeholder="土壤传感器类型">
                                    <el-option v-for="item in soilSensorTypeList" :key="item.value" :label="item.label"
                                               :value="item.value"/>
                                </el-select>
                                <el-divider/>
                                <el-table :data="soilSensorTable">
                                    <el-table-column prop="layer" label="Layer"/>
                                    <el-table-column prop="state" label="State">
                                        <template #default="scope">
                                            <el-tag type="primary" v-if="scope.row.state" >运行</el-tag>
                                            <el-tag type="info" v-else >停止</el-tag>
                                        </template>
                                    </el-table-column>
                                    <el-table-column>
                                        <el-button>Switch</el-button>
                                    </el-table-column>
                                </el-table>
                            </el-card>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </div>

        </el-col>
    </el-row>
</template>

<style scoped lang="less">
@import "@/assets/css/anlysis-style";


</style>