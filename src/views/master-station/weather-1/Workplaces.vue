<script setup>

// let slave_num = reactive(1);
import {ref} from "vue";
import Sidebar from "@/components/Sidebar.vue";

//抽屉收放状态码
const drawer = ref(false)
const switch_drawer = () => {
    drawer.value = false;
}


</script>

<template>
    <div class="full z-0">
        <el-affix :offset="0" class="z-1 drawer-button hidden-on-desktop">
            <el-button type="primary" @click="drawer = true">
                <el-icon>
                    <Expand/>
                </el-icon>
            </el-button>
        </el-affix>
        <el-drawer v-model="drawer" :with-header="false" :direction="'ltr'" :size="180">
            <el-menu default-active="/workplace/workplace-1/master-1" :router="true">
                <el-menu-item index="/workplace/workplace-1/master-1" @click="switch_drawer">
                    <el-icon>
                        <Platform/>
                    </el-icon>
                    <span> 主站概览</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-1" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 01</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-2" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 02</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-3" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 03</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-4" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 04</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-5" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 05</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-6" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 06</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-7" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 07</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-8" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 08</span>
                </el-menu-item>
            </el-menu>
        </el-drawer>
        <Sidebar/>
    </div>
</template>

<style scoped>
.drawer-button {
    position: absolute;
    right: 10px;
    top: 10px;
}


</style>