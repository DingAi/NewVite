<script setup>
import NavBar from "./components/NavBar.vue";
import WorkPlace from "@/views/WorkPlace.vue";
</script>

<template>
    <el-container class="full">
      <el-header class=""><NavBar/></el-header>
      <el-main class=""><router-view/></el-main>
    </el-container>
</template>

<style scoped>

</style>
