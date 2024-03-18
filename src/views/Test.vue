<script setup>
import { ApiClient } from '@/assets/js/js-sdk/ApiClient.js'
import { ref, onMounted } from 'vue'

const getApiData = new ApiClient()
getApiData.basePath = 'http://192.168.30.100:9006'
getApiData.setAccessToken("f2b59ccee90b45de91cfe45efa25d5e2")

const text = ref('')

onMounted(async () => {
    text.value = await getApiData.getVariantRealtimeValueList(["1"])
})
</script>

<template>
    <h1>{{text}}</h1>
</template>

<style>

</style>