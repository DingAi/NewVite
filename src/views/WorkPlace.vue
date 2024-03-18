<script setup>
import {reactive, ref} from "vue";
//抽屉收放状态码
const drawer = ref(false)

const switch_drawer = () => {
    drawer.value = false;
}

</script>

<template>
    <el-row class="full z-0">
        <el-col :span="24" :xs="24" class="p-2 full">
            <router-view/>
        </el-col>
    </el-row>
</template>

<style scoped>
.drawer-button {
    position: absolute;
    right: 0;
    top: 0;
}
</style>