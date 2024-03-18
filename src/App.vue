<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
    <el-container>
      <el-header class=""><NavBar/></el-header>
      <el-main class=""><router-view/></el-main>
    </el-container>
</template>

<style scoped>

</style>
