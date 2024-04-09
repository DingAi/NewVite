<script setup>


import {dataOptons, meteorologicalOptions, shortcuts} from "@/assets/js/stations-data.js";
import {ref} from "vue";
import {getDataList} from "@/apis/request-api.js";
import _ from 'lodash';

const options01 = dataOptons
const options02 = meteorologicalOptions
const props = { multiple: true }
const selectValue01 = ref([]);
const selectValue02 = ref([]);
const timeRange01 = ref([])
const timeRange02 = ref([])
const boxReturnData = ref([])
const indexList = ref([])

const getData = async  () =>{
  const response = await getDataList(selectValue01.value, timeRange01.value)
  indexList.value = [];
  boxReturnData.value = response.data['data'][0];
  for (let item of response.data['index_name_list']) {
    indexList.value.push(item[0]['COLUMN_NAME'])
  }
  // let convertData = []
  // for (let items of response.data['data']) {
  //   let itemDataList = [];
  //   let count = 0;
  //   for (let item of items) {
  //     itemDataList.push(item[indexList.value[count]]);
  //   }
  //   count++;
  //   convertData.push(itemDataList);
  // }
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<template>
<el-row class="full" :gutter="20">
  <el-col :span="6" :xs="24" class="p-2">
    <div class="base-div">
      <el-divider content-position="left"><h3>气体箱传感器选择</h3></el-divider>
      <div class="data-div p-5">
        <el-cascader style="width: 325px" v-model="selectValue01" :options="options01" :props="props" collapse-tags clearable />
      </div>
      <div class="data-div p-5">
        <p>时间选择</p>
        <el-date-picker
            style="width: 325px"
            v-model="timeRange01"
            type="datetimerange"
            value-format="YYYY-MM-DD HH:mm:ss"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :shortcuts="shortcuts"
        />
      </div>
      <div class="data-div p-5">
        <el-button type="primary" plain size="large" @click="getData">站点数据查询</el-button>
      </div>
      <el-divider content-position="left"><h3>气象站数据选择</h3></el-divider>
      <div class="data-div p-5">
        <el-cascader style="width: 325px" v-model="selectValue02" :options="options02" :props="props" collapse-tags clearable />
      </div>
      <div class="data-div p-5">
        <p>时间选择</p>
        <el-date-picker
            style="width: 325px"
            v-model="timeRange02"
            type="datetimerange"
            value-format="YYYY-MM-DD HH:mm:ss"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :shortcuts="shortcuts"
        />
      </div>
      <div class="data-div p-5">
        <el-button size="large" type="primary" plain>气象站数据查询</el-button>
      </div>
    </div>
  </el-col>
  <el-col :span="18" :xs="24" class="p-2">
    <div class="base-div">
      <div class="demo-pagination-block">
        <div class="demonstration">All combined</div>
        <el-pagination
            v-model:current-page="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 325, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
      <el-table :data="boxReturnData.value" style="width: 100%" height="250">
        <el-table-column fixed prop="id" label="Date" width="150"/>
      </el-table>
      <h2>{{timeRange01}}</h2>
      <h2>{{ selectValue01 }}</h2>
      <h2>{{ indexList }}</h2>
    </div>
  </el-col>
</el-row>
</template>

<style scoped lang="less">
@phone-max-width: 767px; // 假设手机端的最大宽度是767px
.data-div{
  width: 100%;
  height: 120px;
  align-content: center;
  color: #2b2f32;

  @media (max-width: @phone-max-width) {
    width: 100%;
  }
}
</style>