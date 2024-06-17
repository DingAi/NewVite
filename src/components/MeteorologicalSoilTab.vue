<script setup>
import {reactive} from "vue";

const props = defineProps({
    soil_data: Object,
});

const machiningFun = (data) =>{
    let result = [];
    data.slice(2);
    for (let i = 0; i < 5; i++) {
        result.push(data.slice(i * 4, (i + 1) * 4));
    }
    return result;
}

let processedData = ref([])

const sensorNames = reactive([
    {name: "SM", tooltip: "土壤含水率", field: "sensor02", unit: "%"},
    {name: "ST", tooltip: "土壤温度", field: "sensor01", unit: "℃"},
    {name: "SEC", tooltip: "土壤电导率", field: "sensor04", unit: "μs/cm"},
    {name: "SS", tooltip: "土壤盐度", field: "sensor03", unit: "‰"}
]);

onMounted(()=>{
})
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
        <tr v-for="(items, index) in soil_data" :key="index">
            <th scope="row">
                <span class="badge bg-black">{{ index }}</span>
            </th>
            <td v-for="(sensor, i) in sensorNames" :key="i">
          <span class="badge bg-warning">
            {{ items[i] }} {{ sensor.unit }}
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