<template>
    <el-row class="full">
        <div class="block">
            <span class="demonstration">Default</span>
            <el-date-picker
                v-model="selectedDates"
                type="dates"
                placeholder="Pick a day"
                :size="'large'"
            />
        </div>
    </el-row>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const selectedDates = ref([])
</script>

<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
