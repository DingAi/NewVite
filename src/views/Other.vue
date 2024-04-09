<template>
    <div class="full" id="text">
      <el-button @click="getData">
        数组测试
      </el-button>
      <el-text>
        {{text}}
      </el-text>
    </div>
</template>

<script setup>
import {getDataList} from "@/apis/request-api.js";
import {ref} from "vue";
const indexList = ref([])
const total = ref([])
import _ from 'lodash';

const text = ref([])
const getData = async  () => {
  const response = await getDataList([ [ "master01", "11", "it" ], [ "master01", "11", "et" ] ], [ "2024-04-09 08:49:33", "2024-04-09 11:49:33" ])
  text.value = response.data['data']
  for (let item of response.data['index_name_list']) {
    indexList.value.push(item[0]['COLUMN_NAME'])
  }
  for(let i = 0; i < response.data['data'].length; i++) {
    for(let j = 0; j < response.data['data'][0].length; j++) {
      let rowData =  _.defaults(response.data[i][j], response.data[i+1][j]);
      console.log(rowData)
    }
  }
  // console.log(text.value)
}
</script>

<style scoped>

</style>