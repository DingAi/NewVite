<script setup>
import {reactive} from "vue";

const props = defineProps({
    soil_data: Object,
});

const sensorNames = reactive([
    {name: "VWC", tooltip: "体积含水量"},
    {name: "ST", tooltip: "土壤温度"},
    {name: "SDC", tooltip: "土壤介电常数"},
]);
</script>


<template>
    <table class="table table-borderless full re-text">
        <thead>
        <tr>
            <th scope="col">Layer</th>
            <th v-for="(sensor, index) in sensorNames" :key="index" scope="col">
                <el-tooltip :content="sensor.tooltip" placement="top">
                    {{ sensor.name }}
                </el-tooltip>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in soil_data" :key="index">
            <th scope="row">
                <span class="badge bg-dark">{{ index }}</span>
            </th>
            <td v-for="(sensor, i) in ['sensor03', 'sensor02', 'sensor01']" :key="i">
          <span class="badge bg-warning">
            {{ item[sensor] }}{{ i === 0 ? ' %' : i === 1 ? ' ℃' : ' μs' }}
          </span>
            </td>
        </tr>
        </tbody>
    </table>
</template>


<style scoped>
.table {
    background-color: transparent;
    height: 100%;
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