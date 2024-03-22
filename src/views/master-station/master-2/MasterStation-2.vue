<script setup>
import {reactive, ref} from "vue";
import APHistoryChart from "@/components/echarts/APHistoryChart.vue";
import CO2HistoryChart from "@/components/echarts/CO2HistoryChart.vue";
import {timeSetNameList} from "@/assets/js/used-json.js";
import {generateData} from "@/util/data-generator.js";


let switchData = reactive(generateData());
let isAuto = ref(true);
let openPopup = ref(false);
const timeSetList = ref(timeSetNameList);

</script>

<template>
    <el-row class="z-0 full">
        <el-col :span="18" :xs="24" class="full">
            <el-row class="equipment-page-h-20 p-2" id="master-div-1">
                <div class="base-div items">
                    <div class="item">
                        <el-switch v-model="isAuto" class="ml-2" inline-prompt size="large"
                                   style="--el-switch-on-color: #13ce66; --el-switch-off-color: #3ef3e7"
                                   active-text="自动模式" inactive-text="手动模式"/>
                    </div>
                    <div class="item">
                        <el-statistic title="正在运行的子站" :value="268500"/>
                    </div>
                    <div class="item">
                        <el-statistic title="运行步骤" :value="268500"/>
                    </div>
                    <div class="item">
                        <el-statistic title="气泵状态" :value="268500"/>
                    </div>
                    <div class="item">
                        <el-button @click="openPopup = true" round>时间设置</el-button>
                        <div v-if="openPopup" class="popup-container z-1">
                            <div v-if="openPopup" class="popup z-2">
                                <h2>时间设置</h2>
                                <div class="items" v-for="nameList in timeSetNameList">
                                    <div class="item" v-for="name in nameList">
                                        <div>
                                            <p>{{ name }}</p>
                                            <el-time-select v-model="value" style="width: 240px"
                                                            start="00:00" step="00:10" end="10:00"
                                                            placeholder="Select time"/>
                                        </div>
                                    </div>
                                </div>
                                <el-icon class="close-button" color="#a7a8aa" size="30" @click="openPopup = false">
                                    <CloseBold/>
                                </el-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </el-row>
            <el-row class="equipment-page-h-80 p-2" id="master-div-2 ">
                <div class="base-div chart-container">
                    <div class="left">
                        <CO2HistoryChart/>
                    </div>
                    <div class="right">
                        <APHistoryChart/>
                    </div>
                </div>
            </el-row>
        </el-col>
        <el-col :span="6" :xs="24" class="p-2" id="switch">
            <div class="base-div" style="max-height: 100%">
                <div class="switch-group-container">
                    <!--                    自动模式-->
                    <div class="switch_group re-text" v-for="(group, index) in switchData" v-if="isAuto">
                        <div class="station-name  text-center p-2">
                            <el-text class="mx-1 text-primary" type="primary" size="large">
                                {{ 'Slave Station : ' }}{{ index + 1 }}
                            </el-text>
                        </div>
                        <div class="switchs">
                            <div class="switch text-center" v-for="(item, key) in group" :key="key">
                                <p class="text-color-1">{{ item.name }}</p>
                                <span v-if="item.value" class="badge rounded-pill open-color-auto">Opening</span>
                                <span v-else class="badge rounded-pill close-color-auto">Closed</span>
                            </div>
                        </div>
                    </div>

                    <!--                    手动模式-->
                    <div class="switch_group re-text" v-for="(group, index) in switchData" v-else>
                        <div class="station-name  text-center p-2">
                            <el-text  class="mx-1 text-primary" type="primary" size="large">
                                {{ 'Slave Station : ' }}{{ index + 1 }}
                            </el-text>
                        </div>
                        <div class="switchs text-center">
                            <div class="switch" v-for="item in group">
                                <p class="text-color-2">{{ item.name }}</p>
                                <el-button size="small" type="default" round v-if="item.value"> Close</el-button>
                                <el-button size="small" type="primary" round v-else> Enter</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<style lang="less" scoped>
@import "@/assets/css/master-style";

.text-color-1{
    color: #babbbc;
    font-size: 1rem;
}
.text-color-2{
    font-size: 1rem;
}
</style>