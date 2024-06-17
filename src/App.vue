<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <el-container>
      <el-header><NavBar v-if="$route.meta.isShowNav" style="position: relative; z-index: 9999"/></el-header>
      <el-main class=""><router-view/></el-main>
    </el-container>
</template>

<style scoped>
:deep(.el-header ){
    --el-header-padding: 0;
}
</style>
