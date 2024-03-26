<script setup>
import {ref } from "vue";
let data = ref([]);

// 定义三个一维数组
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// 将三个一维数组转换为一个二维数组
const twoDimArray = [array1, array2, array3].reduce(
    (acc, curr) => curr.map((item, i) => [...(acc[i] || []), item]),
    []
);

console.log(twoDimArray);


</script>

<template>
  <h1>{{ result }}</h1>
  <TestUnit :data="data.value" />
</template>

<style></style>