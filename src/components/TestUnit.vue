<template>
    <div class="full">
        <h1>{{ data }}</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";


const props = defineProps({
    data: Array,
})

onMounted(() => {
    let data = ref([]);
    console.log(props.data);
    data.value = props.data;
})

</script>

<style lang="less" scoped></style>