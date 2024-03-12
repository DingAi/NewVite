<script setup>
import {ref} from "vue";

const props = defineProps({
    soil_data: Object,
});
let sensorName = ref(['体积含水量','土壤温度','土壤介电常数'])
</script>

<template>
    <table class="table table-borderless full re-text">
        <thead>
        <tr>
            <th scope="col">土壤层</th>
            <th scope="col">
                {{ sensorName[0] }}
            </th>
            <th scope="col">{{ sensorName[1] }}</th>
            <th scope="col">{{ sensorName[2] }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in soil_data" :key="item">
            <th scope="row">
                    <span class="badge rounded-pill bg-dark">
                        {{ index }}
                    </span>
            </th>
            <td>
                    <span class="badge rounded-pill bg-warning">
                        {{ item.sensor01 }}
                    </span>
            </td>
            <td>
                    <span class="badge rounded-pill bg-warning">
                        {{ item.sensor01 }}
                    </span>
            </td>
            <td>
                    <span class="badge rounded-pill bg-warning">
                        {{ item.sensor01 }}
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