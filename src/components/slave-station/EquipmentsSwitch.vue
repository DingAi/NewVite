<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    equipments: Object,
});

</script>

<template>
    <div class="full p-2">
        <table v-if="props.equipments" class="table table-borderless full re-text">
            <thead>
            <tr>
                <th scope="col">设备</th>
                <th scope="col">状态</th>
                <th scope="col">开关</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, key) in props.equipments" :key="key">
                <td>
                    <span class="">{{ item[1] }}</span>
                </td>
                <td>
                    <span v-if="item[0]" class="badge rounded-pill bg-primary">开启</span>
                    <span v-else class="badge rounded-pill bg-secondary">关闭</span>
                </td>
                <td>
                    <el-button type="default" round v-if="item[0]"> Close </el-button>
                    <el-button type="primary" round v-else> Enter </el-button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
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