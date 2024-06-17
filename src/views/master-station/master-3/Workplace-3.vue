<script setup>
import {ref} from "vue";

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
            <el-menu default-active="/workplace/workplace-3/master-3" :router="true">
                <el-menu-item index="/workplace/workplace-3/master-3" @click="switch_drawer">
                    <el-icon>
                        <Platform/>
                    </el-icon>
                    <span> 主站 02 概览</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-1" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 01</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-2" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 02</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-3" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 03</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-4" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 04</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-5" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 05</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-6" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 06</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-7" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 07</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-3/slave-3-8" @click="switch_drawer">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 08</span>
                </el-menu-item>
            </el-menu>
        </el-drawer>
        <el-row class="full">
            <el-col :span="3" :xs="0" class="hidden-on-mobile p-2">
                <el-menu default-active="/workplace/workplace-3/master-3" :router="true"
                         active-text-color="#0d6efd">
                    <el-menu-item index="/workplace/workplace-3/master-3">
                        <el-icon>
                            <Platform/>
                        </el-icon>
                        <span class="text-style">主站 03 概览</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-1">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 01</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-3">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 02</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-3">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 03</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-4">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 04</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-5">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 05</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-6">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 06</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-7">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 07</span>
                    </el-menu-item>
                    <el-menu-item index="/workplace/workplace-3/slave-3-8">
                        <el-icon>
                            <Monitor/>
                        </el-icon>
                        <span class="text-style">从站 08</span>
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
.drawer-button {
    position: absolute;
    right: 10px;
    top: 10px;
}


</style>