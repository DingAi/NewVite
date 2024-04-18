<script setup>
import {useUserStore} from "@/store/user.js";


const userStore = useUserStore();

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>

<template>
    <el-menu :default-active="$route.path" mode="horizontal" :router="true">
        <el-sub-menu index="1">
          <template #title>
            <el-avatar> {{ userStore.user }}</el-avatar>
          </template>
          <el-menu-item v-if="!userStore.isAuthenticated" index="/login">Login</el-menu-item>
          <el-menu-item v-if="userStore.isAuthenticated">
            <el-text type="info" class="right-text hover-text"
                     @click="userStore.logout()">Logout
            </el-text>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/test">地图服务</el-menu-item>
        <el-sub-menu index="2">
            <template #title>工作台</template>
            <el-menu-item index="/workplace/workplace-1/master-1">气体箱</el-menu-item>
            <el-menu-item index="/meteorological">气象站</el-menu-item>
            <el-menu-item index="/spatial">空间碳通量检测</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/history">历史</el-menu-item>
        <el-menu-item index="/analysis">数据分析</el-menu-item>
<!--        <el-menu-item index="/data-list">数据列表</el-menu-item>-->
        <el-menu-item index="/other">Other</el-menu-item>
    </el-menu>
</template>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>