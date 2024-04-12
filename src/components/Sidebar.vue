<template>
    <el-row class="full">
        <el-col :span="3" :xs="0" class="hidden-on-mobile p-2">
            <el-menu default-active="/workplace/workplace-1/master-1" :router="true">
                <el-menu-item index="/workplace/workplace-1/master-1">
                    <el-icon>
                        <Platform/>
                    </el-icon>
                    <span>主站概览</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-1">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 01</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-2">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 02</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-3">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 03</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-4">
                    <el-icon>
                        <Monitor/>
                    </el-icon>
                    <span>从站 04</span>
                </el-menu-item>
                <el-menu-item index="/workplace/workplace-1/slave-1-5">
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
        </el-col>
        <el-col :span="21" :xs="24" class="full">
            <router-view/>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
