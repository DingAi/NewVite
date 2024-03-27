<script setup>
import {useUserStore} from "@/store/user.js";


const userStore = useUserStore()
</script>

<template>

  <el-menu
      class="el-menu-demo"
      :default-active="'/'"
      mode="horizontal"
      :router="true"
  >
      <el-menu-item index="/">主页</el-menu-item>
     <el-menu-item index="/test">Test</el-menu-item>
      <el-sub-menu>
          <template #title>工作台</template>
          <el-menu-item index="/workplace/workplace-1/master-1">气体箱</el-menu-item>
          <el-menu-item index="/workplace/workplace-2/master-2" disabled>气象站</el-menu-item>
          <el-menu-item index="/workplace/workplace-3/master-3" disabled>空间碳通量检测</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/history">历史</el-menu-item>
      <el-menu-item index="/analysis">数据分析</el-menu-item>
    <div class="flex-grow"/>
      <el-menu-item index="/login">
          <el-avatar> {{ userStore.user }} </el-avatar>
      </el-menu-item>
      <el-menu-item v-if="!userStore.isAuthenticated" index="/login">Login</el-menu-item>
      <el-menu-item v-if="userStore.isAuthenticated"><el-button @click="userStore.logout()">Logout</el-button></el-menu-item>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>