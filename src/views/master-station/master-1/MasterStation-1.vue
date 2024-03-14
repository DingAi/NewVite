<script setup>
import {reactive, ref} from "vue";
import APHistoryChart from "@/components/echarts/APHistoryChart.vue";
import CO2HistoryChart from "@/components/echarts/CO2HistoryChart.vue";

function generateData() {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let group = [];
        for (let j = 0; j < 4; j++) {
            let value = Math.random() < 0.5; // 随机生成布尔值
            group.push(value);
        }
        data.push(group);
    }
    return data;
}

let switchData = reactive(generateData())
let isAuto = ref(true)

</script>

<template>
    <el-row class="full">
        <el-col :span="18" :xs="24" class="data-div">
            <el-row class="equipment-page-h-20 p-2" id="master-div-1">
                <div class="base-div items">
                    <div class="item">
                        <el-switch
                                v-model="isAuto"
                                class="ml-2"
                                inline-prompt
                                size="large"
                                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #3ef3e7"
                                active-text="自动模式"
                                inactive-text="手动模式"
                        />
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
                </div>
            </el-row>
            <el-row class="equipment-page-h-60 p-2" id="master-div-2 ">
                <div class="base-div items">
                    <div class="item">
                        <CO2HistoryChart/>
                    </div>
                    <div class="item">
                        <APHistoryChart/>
                    </div>
                </div>
            </el-row>
            <el-row class="equipment-page-h-20 p-2" id="master-div-3">
                <div class="base-div items">
                    <div class="item">
                        <el-countdown title="总运行时间" :value="value"/>
                    </div>
                    <div class="item">
                        <div>
                            <p>采样时间设置</p>
                            <el-time-select
                                    v-model="value"
                                    style="width: 240px"
                                    start="00:00"
                                    step="00:10"
                                    end="10:00"
                                    placeholder="Select time"
                            />
                        </div>
                    </div>
                </div>
            </el-row>
        </el-col>
        <el-col :span="6" :xs="24" class="p-2" id="switch">
            <div class="base-div">
                <div class="switch-group-container">
                    <div class="switch_group re-text" v-for="(group, index) in switchData" v-if="isAuto">
                        <div class="station-name  text-center p-2">
                            <el-text class="mx-1 text-primary" type="primary" size="large">
                                {{ 'Slave Station : ' }}{{ index + 1 }}
                            </el-text>
                        </div>
                        <div class="switchs">
                            <!--                            <div class="switch" v-for="itemData in group">-->
                            <!--                                <p>风扇</p>-->
                            <!--                                <span v-if="group[0]" class="badge rounded-pill open-color-auto">Opening</span>-->
                            <!--                                <span v-else class="badge rounded-pill close-color-auto">关闭</span>-->
                            <!--                            </div>-->
                            <div class="switch text-center">
                                <p>风扇</p>
                                <span v-if="group[0]" class="badge rounded-pill open-color-auto">Opening</span>
                                <span v-else class="badge rounded-pill close-color-auto">Closed</span>
                            </div>
                            <div class="switch text-center">
                                <p>盖子</p>
                                <span v-if="group[1]" class="badge rounded-pill open-color-auto">Opening</span>
                                <span v-else class="badge rounded-pill close-color-auto">Closed</span>
                            </div>
                            <div class="switch text-center">
                                <p>电磁阀</p>
                                <span v-if="group[2]" class="badge rounded-pill open-color-auto">Opening</span>
                                <span v-else class="badge rounded-pill close-color-auto">Closed</span>
                            </div>
                            <div class="switch text-center">
                                <p>Other</p>
                                <span v-if="group[3]" class="badge rounded-pill open-color-auto">Opening</span>
                                <span v-else class="badge rounded-pill close-color-auto">Closed</span>
                            </div>
                        </div>
                    </div>

                    <div class="switch_group re-text" v-for="(group, index) in switchData" v-else>
                        <div class="station-name  text-center p-2">
                            <el-text class="mx-1 text-primary" type="primary" size="large">
                                {{ 'Slave Station : ' }}{{ index + 1 }}
                            </el-text>
                        </div>
                        <div class="switchs text-center">
                            <div class="switch">
                                <p>风扇</p>
                                <el-button type="default" round v-if="group[0]"> Close </el-button>
                                <el-button type="primary" round v-else> Enter </el-button>
                            </div>
                            <div class="switch">
                                <p>盖子</p>
                                <el-button type="default" round v-if="group[1]"> Close </el-button>
                                <el-button type="primary" round v-else> Enter </el-button>
                            </div>
                            <div class="switch">
                                <p>电磁阀</p>
                                <el-button type="default" round v-if="group[2]"> Close </el-button>
                                <el-button type="primary" round v-else> Enter </el-button>
                            </div>
                            <div class="switch">
                                <p>Other</p>
                                <el-button type="default" round v-if="group[4]"> Close </el-button>
                                <el-button type="primary" round v-else> Enter </el-button>
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

.open-color{
  background: #79bbff;
}

.open-color-auto{
  background: #79bbff;
}

.close-color-auto{
  background: #909399;
}
</style>