<script setup>

// let slave_num = reactive(1);
import {ref} from "vue";
import {Document, Setting} from "@element-plus/icons-vue";

//抽屉收放状态码
const drawer = ref(false)
const switch_drawer = ()=>{
    drawer.value = false;
}
</script>

<template>
    <div class="full z-0">
        <el-affix :offset="0" class="z-1 drawer-button hidden-on-desktop">
            <el-button type="primary" @click="drawer = true">
                <el-icon><Expand /></el-icon>
            </el-button>
        </el-affix>
        <el-drawer v-model="drawer" :with-header="false" :direction="'ltr'" :size="180">
            <el-row>
                <el-menu default-active="/workplace/workplace-1/master-2" :router="true">
                    <el-menu-item index="/workplace/workplace-1/master-2" @click="switch_drawer">
                        <el-icon><Platform /></el-icon>
                        <span>主站概览</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-1/slave-2-1" @click="switch_drawer">
                        <el-icon><Platform /></el-icon>
                        <span>从站 01</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-1/slave-2-2" @click="switch_drawer">
                        <el-icon><Platform /></el-icon>
                        <span>从站 02</span>
                    </el-menu-item>
                    <el-menu-item index="4" disabled>
                        <el-icon><Platform /></el-icon>
                        <span>从站 03</span>
                    </el-menu-item>
                </el-menu>
            </el-row>
        </el-drawer>
        <el-row class="full">
            <el-col :span="3" :xs="0" class="hidden-on-mobile p-2">
                <el-menu default-active="/workplace/workplace-1/master-1" :router="true">
                    <el-menu-item index="/workplace/workplace-1/master-1" @click="switch_drawer">
                        <el-icon><Platform /></el-icon>
                        <span>主站概览</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-1/slave-1-1" @click="switch_drawer">
                        <el-icon><Operation /></el-icon>
                        <span>从站 01</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-1/slave-1-2" @click="switch_drawer">
                        <el-icon><Operation /></el-icon>
                        <span>从站 02</span>
                    </el-menu-item>
                    <el-menu-item index="4" disabled>
                        <el-icon><Operation /></el-icon>
                        <span>从站 03</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="21" :xs="24" class="full">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.drawer-button{
    position: absolute;
    right: 10px;
    top: 10px;
}


</style>