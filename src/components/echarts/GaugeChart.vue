<script setup>

import {setGaugeData} from "@/assets/js/echarts-option/gauges.js";
import {IdInitEcharts} from "@/assets/js/echarts-package.js";
import {onMounted, watch} from "vue";

const props = defineProps({
    ap: Object
})

const refresh = (uap, dap, dom) => {
    let option = setGaugeData(uap, dap, '输入气压', '输出气压');
    dom.setOption(option)
}

onMounted(() => {
    let dom = IdInitEcharts('gauge-dom');
    window.addEventListener('resize', function () {
        dom.resize();
    });


    watch(
        () => props.ap.dap,
        () => {
            refresh(props.ap.uap, props.ap.dap, dom);
        }
    )
})

</script>

<template>
    <div class="full" id="gauge-dom">
    </div>
</template>

<style scoped>

</style>