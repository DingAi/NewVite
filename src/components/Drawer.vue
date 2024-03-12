<template>
    <el-row>
        <el-menu
                default-active="2"
        >
            <el-sub-menu index="1" disabled>
                <template #title>
                    <el-icon>
                        <location/>
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item @click="handleClick('congzhan1')">
                <el-icon>
                    <icon-menu/>
                </el-icon>
                <span>Slave 01</span>
            </el-menu-item>
            <el-menu-item @click="handleClick('congzhan2')">
                <el-icon>
                    <document/>
                </el-icon>
                <span>Slave 02</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
                <el-icon>
                    <setting/>
                </el-icon>
                <span>Slave 03</span>
            </el-menu-item>
        </el-menu>
    </el-row>
</template>

<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { defineEmits } from 'vue'

// 定义一个名为 'button-click' 的事件
const emits = defineEmits(['button-click'])

const handleClick = (slave) => {
    // 向父组件触发 'button-click' 事件，并传递数据
    emits('button-click', slave)

}
</script>