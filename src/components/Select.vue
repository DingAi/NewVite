<template>
    <div class="full">
        <h1>图表数据选择器</h1>
        <el-row class="">
            <div class="m-4">
                <p>Master Station</p>
                <el-select v-model="master" multiple placeholder="Select" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
            </div>
            <div class="m-4">
                <p>Slavea Station</p>
                <el-select v-model="slave" multiple collapse-tags placeholder="Select" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
            </div>
            <div class="m-4">
                <p>Sensor</p>
                <el-select v-model="sensor" multiple collapse-tags collapse-tags-tooltip placeholder="Select"
                           style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
            </div>
            <div class="m-4">
                <p>Equipment</p>
                <el-select v-model="equipment" multiple collapse-tags collapse-tags-tooltip :max-collapse-tags="3"
                           placeholder="Select" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
            </div>
            <!--          这里是日期选择-->
            <div class="m-4">
                <p>Time</p>
                <el-date-picker
                        v-model="value2"
                        type="datetimerange"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        format="YYYY-MM-DD HH:mm:ss"
                        date-format="YYYY/MM/DD ddd"
                        time-format="A hh:mm:ss"
                />
            </div>
            <div class="m-4">
                <el-button type="primary">确认</el-button>
            </div>
        </el-row>
        <el-row class="sensor-pool">
            <h1>传感器池</h1>
            <p>经由选择器选择后，添加到传感器池，然后打包下载</p><br/>
            <p>日期选择</p><br/>
            <h2>{{ value1 }}</h2><br/>
            <h2>{{ value2 }}</h2>
        </el-row>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const selectedOption1 = ref('');
const selectedOption2 = ref('');
const selectedOption3 = ref('');
const selectedOption4 = ref('');

const options1 = reactive([
    { value: 'option1-1', label: 'master station 01' },
    { value: 'option1-2', label: 'master station 02' },
    // Add more options for the first selector
]);

const options2 = ref([]);
const options3 = ref([]);
const options4 = ref([]);

const updateOptions2 = () => {
    // 根据选项1的选择更新选项2的选项
    if (selectedOption1.value === 'option1-1') {
        options2.value = [
            { value: 'option2-1', label: 'slave station 1-1' },
            { value: 'option2-2', label: 'slave station 1-2' },
            // Add more options for the second selector based on option1-1
        ];
    } else if (selectedOption1.value === 'option1-2') {
        options2.value = [
            { value: 'option2-3', label: 'slave station 2-1' },
            { value: 'option2-4', label: 'slave station 2-2' },
            // Add more options for the second selector based on option1-2
        ];
    }
    // Reset the selected option for options 2, 3, and 4
    selectedOption2.value = '';
    selectedOption3.value = '';
    selectedOption4.value = '';
};

const updateOptions3 = () => {
    // 根据选项2的选择更新选项3的选项
    if (selectedOption2.value === 'option2-1') {
        options3.value = [
            { value: 'option3-1', label: '箱内温度传感器' },
            { value: 'option3-2', label: '箱内湿度传感器' },
            // Add more options for the third selector based on option2-1
        ];
    } else if (selectedOption2.value === 'option2-2') {
        options3.value = [
            { value: 'option3-3', label: '大气压传感器' },
            { value: 'option3-4', label: '二氧化碳传感器' },
            // Add more options for the third selector based on option2-2
        ];
    }
    // Reset the selected option for options 3 and 4
    selectedOption3.value = '';
    selectedOption4.value = '';
};

const updateOptions4 = () => {
    // 根据选项3的选择更新选项4的选项
    if (selectedOption3.value === 'option3-1') {
        options4.value = [
            { value: 'option4-1', label: 'Option 4-1' },
            { value: 'option4-2', label: 'Option 4-2' },
            // Add more options for the fourth selector based on option3-1
        ];
    } else if (selectedOption3.value === 'option3-2') {
        options4.value = [
            { value: 'option4-3', label: 'Option 4-3' },
            { value: 'option4-4', label: 'Option 4-4' },
            // Add more options for the fourth selector based on option3-2
        ];
    }
    // Reset the selected option for option 4
    selectedOption4.value = '';
};
</script>

<style scoped>

</style>