<script setup>
import {reactive, ref} from "vue";
//抽屉收放状态码
const drawer = ref(false)

const switch_drawer = ()=>{
    drawer.value = false;
}

</script>

<template>
    <div class="full z-0">
        <el-row class="full z-0">
            <el-col :span="24" :xs="24" class="p-2">
                <div class="w-100 h-100">
                    <router-view/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.drawer-button{
    position: absolute;
    right: 0;
    top: 0;
}
</style>