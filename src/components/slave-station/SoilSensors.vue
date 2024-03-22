<script setup>
import {ref} from "vue";

const props = defineProps({
    soil_data: Object,
});
let sensorName = ref(['VWC', 'ST', 'SDC'])
let chineseName = ref(['体积含水量', '土壤温度', '土壤介电常数'])
</script>

<template>
    <table class="table table-borderless full re-text">
        <thead>
        <tr>
            <th scope="col">Layer</th>
            <th scope="col">
                <el-tooltip content="体积含水量" placement="top">
                    {{ sensorName[0] }}
                </el-tooltip>
            </th>
            <th scope="col">
                <el-tooltip content="土壤温度" placement="top">
                    {{ sensorName[1] }}
                </el-tooltip>
            </th>
            <th scope="col">
                <el-tooltip content="土壤介电常数" placement="top">
                    {{ sensorName[2] }}
                </el-tooltip>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in soil_data" :key="item">
            <th scope="row">
                    <span class="badge bg-dark">
                        {{ index }}
                    </span>
            </th>
            <td>
                    <span class="badge bg-warning">
                        {{ item.sensor03 }}%
                    </span>
            </td>
            <td>
                    <span class="badge bg-warning">
                        {{ item.sensor02 }}℃
                    </span>
            </td>
            <td>
                    <span class="badge bg-warning">
                        {{ item.sensor01 }}μs
                    </span>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<style scoped>
.table {
    background-color: transparent;
}

.table tr {
    background-color: transparent;
    text-align: center !important;
}

.table th,
.table td {
    background-color: transparent;
    vertical-align: middle;
    text-align: center !important;
}
</style>