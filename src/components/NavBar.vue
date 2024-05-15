<script setup>
import {useUserStore} from "@/store/user.js";


const userStore = useUserStore();

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

</script>

<template>
    <el-menu :default-active="$route.path"
             mode="horizontal"
             :router="true"
             active-text-color="#ffc107"
             background-color="#005eeb"
             text-color="#fff"
    >
        <el-sub-menu index="1">
            <template #title>
                <el-avatar style="background: #ffffff; color: #0d6efd"><b>{{ userStore.user }}</b></el-avatar>
            </template>
            <el-menu-item v-if="!userStore.isAuthenticated" index="/login">Login</el-menu-item>
            <el-menu-item v-if="userStore.isAuthenticated">
                <el-text type="info" style="color: #ffffff" class="right-text hover-text"
                         @click="userStore.logout()"><b>Logout</b>
                </el-text>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/" text-color="#fff">
            <el-text class="mx-1 nav-text" size="large">主页</el-text>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-text class="mx-1 nav-text" size="large">工作台</el-text>
            </template>
            <el-menu-item index="/workplace/workplace-1/master-1">
                <el-text class="mx-1 nav-text" size="large">气体箱总站 01</el-text>
            </el-menu-item>
            <el-menu-item index="/workplace/workplace-1/master-2" disabled>
                <el-text class="mx-1 nav-text" size="large">气体箱总站 02</el-text>
            </el-menu-item>
            <el-menu-item index="/workplace/workplace-1/master-3" disabled>
                <el-text class="mx-1 nav-text" size="large">气体箱总站 03</el-text>
            </el-menu-item>
            <el-menu-item index="/meteorological">
                <el-text class="mx-1 nav-text" size="large">气象站</el-text>
            </el-menu-item>
            <el-menu-item index="/spatial">
                <el-text class="mx-1 nav-text" size="large">空间碳通量检测</el-text>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/history">
            <el-text class="mx-1 nav-text" size="large">历史</el-text>
        </el-menu-item>
        <el-menu-item index="/analysis">
            <el-text class="mx-1 nav-text" size="large">数据分析</el-text>
        </el-menu-item>
        <el-menu-item index="/weather">
            <el-text class="mx-1 nav-text" size="large">Weather</el-text>
        </el-menu-item>
        <el-menu-item index="/map">
            <el-text class="mx-1 nav-text" size="large">2D 地图</el-text>
        </el-menu-item>
        <el-menu-item index="/map-3d">
            <el-text class="mx-1 nav-text" size="large">3D 地图</el-text>
        </el-menu-item>
        <!--        <el-menu-item index="/data-list">数据列表</el-menu-item>-->
    </el-menu>
</template>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.nav-text{
    color: white;
}

</style>