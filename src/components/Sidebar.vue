<template>
    <el-row class="full">
        <el-col>
            <el-menu default-active="2">
                <el-menu-item index="/workplace/workplace-2/master-2">
                    <el-icon><Platform /></el-icon>
                    <span>主站</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon><Operation /></el-icon>
                    <span>从站 01</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><Operation /></el-icon>
                    <span>从站 02</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
</script>

<style scoped>

</style>
