<script setup>
import {ref} from "vue";
import {getCO2History} from "@/apis/master-api.js";
import {get24HTimeRange} from "@/util/data-generator.js";

const timeRange = get24HTimeRange();
const resData = ref(getCO2History('master01', ['co211'], timeRange));
console.log(resData)
const text = ref(resData.data);
</script>

<template>
    <h1>{{ text.value }}</h1>
</template>

<style>

</style>