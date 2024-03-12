<script setup>
import {reactive, ref} from "vue";

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
        <el-col :span="18" :xs="24" id="data-div">
            <el-row class="equipment-page-h-20 p-2" id="master-div-1">
                <div class="base-div items">
                    <div class="item">
                        <el-countdown title="总运行时间" :value="value"/>
                    </div>
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
            <el-row class="equipment-page-h-40 p-2" id="master-div-2 ">
                <div class="base-div items">
                    <div class="item">
                        <h1>
                            图表（正气压，负气压）
                        </h1>
                    </div>
                    <div class="item">
                        <div style="width: 100%;">
                            <h1>开箱时间设定</h1>
                            <el-slider v-model="value1"/>
                        </div>
                    </div>

                </div>
            </el-row>
            <el-row class="equipment-page-h-20 p-2" id="master-div-3">
                <div class="base-div items">
                    <div class="item">
                        <el-countdown title="开关箱时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="风扇启动延时" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="气体搅拌时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="二氧化碳读取时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="同循环不同箱延时" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="不同循环延时" :value="value"/>
                    </div>
                </div>
            </el-row>
            <el-row class="equipment-page-h-20 p-2" id="master-div-4">
                <div class="base-div items">
                    <div class="item">
                        <el-countdown title="开箱时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="关箱时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="开风扇时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="搅拌时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="读碳时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="抽真空时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="同循环时间" :value="value"/>
                    </div>
                    <div class="item">
                        <el-countdown title="不同循环时间" :value="value"/>
                    </div>

                </div>
            </el-row>
        </el-col>
        <el-col :span="6" :xs="24" class="p-2" id="switch">
            <div class="base-div">
                <div class="switch-group-container">
                    <div class="switch_group re-text" v-for="(group, index) in switchData">
                        <div class="station-name">
                            <el-text class="mx-1 text-bg-light text-primary" type="primary" size="large">
                                {{ '从站：' }}{{ index + 1 }}
                            </el-text>
                        </div>
                        <div class="switchs">
                            <div class="switch">
                                <p>风扇</p>
                                <span v-if="group[0]" class="badge rounded-pill bg-primary">开启</span>
                                <span v-else class="badge rounded-pill bg-secondary">关闭</span>
                            </div>
                            <div class="switch">
                                <p>盖子</p>
                                <span v-if="group[1]" class="badge rounded-pill bg-primary">开启</span>
                                <span v-else class="badge rounded-pill bg-secondary">关闭</span>
                            </div>
                            <div class="switch">
                                <p>电磁阀</p>
                                <span v-if="group[2]" class="badge rounded-pill bg-primary">开启</span>
                                <span v-else class="badge rounded-pill bg-secondary">关闭</span>
                            </div>
                            <div class="switch">
                                <p>Other</p>
                                <span v-if="group[3]" class="badge rounded-pill bg-primary">开启</span>
                                <span v-else class="badge rounded-pill bg-secondary">关闭</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </el-col>
    </el-row>
</template>

<style lang="less" scoped>
#master-div-1 {
  @media (max-width: 767px) {
    height: 550px;
  }

  .item {
    height: 80px;
  }
}

#master-div-2 {
  @media (max-width: 767px) {
    height: 750px;
  }

  .item {
    height: 360px;
  }
}

#master-div-3 {
  @media (max-width: 767px) {
    height: 600px;
  }

  .item {
    height: 80px;
  }
}

#master-div-4 {
  @media (max-width: 767px) {
    height: 750px;
  }

  .item {
    height: 80px;
  }
}

#data-div {
  @media (max-width: 767px) {
    height: auto;

  }
}

#master-div-4 {
  @media (max-width: 767px) {
    height: 750px;
  }

  .item {
    height: 80px;
  }
}

.equipment-page-h-20 {
  height: 20%;
}

.equipment-page-h-40 {
  height: 40%;
}

.equipment-page-h-30 {
  height: 30%;
}

.equipment-page-h-50 {
  height: 50%;
}

.equipment-page-h-80 {
  height: 80%;
  background: #86b7fe;
}

.switchs {
  display: flex;
  align-items: center;
  justify-content: center;

  .switch {
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;

  .item {
    display: inline-block;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;

    .item {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
}

.switch_group {
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  //box-shadow: rgb(201, 204, 209) 0px 20px 30px -10px;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
}

#switch {
  width: 100%;
  max-height: 100%;
  overflow: hidden;

  //@media (max-width: 767px) {
  //  height: 1200px;
  //}
}

.switch-group-container {
  height: 100%;
  overflow: auto; /* 显示滚动条 */
  padding-right: 10px; /* 为滚动条留出空间 */
}

/* 隐藏滚动条 */
.switch-group-container::-webkit-scrollbar {
  display: none;
}

.vertical-div {
  display: flex;
  flex-direction: column;
  height: 100%; /* 设置容器的高度 */

  .box {
    flex: 1; /* 盒子占满剩余空间 */
    background-color: #f0f0f0;
  }
}

.station-name {
  width: 100%;
}
</style>