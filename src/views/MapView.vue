<template>
    <el-row class="full">
        <el-col class="full p-2" :span="5">
            <h1>
                {{ eventPoint }}
            </h1>
        </el-col>
        <el-col class="full p-2" :span="19" id="map-div">

        </el-col>
    </el-row>
</template>

<script setup>
import '@/assets/js/image-overlay.js'

let map;
let zoom = 15;
const leftUpPoint = ref([]);
const RightBottomPoint = ref([]);
const eventPoint = ref("坐标点");


function onLoad() {
    //初始化地图对象
    map = new T.Map('map-div', {
        projection: 'EPSG:4490'
    });
    //设置显示地图的中心点和级别
    map.centerAndZoom(new T.LngLat(108.002680, 34.241550), zoom);
    //允许鼠标滚轮缩放地图
    map.enableScrollWheelZoom();

    let cp = new T.CoordinatePickup(map, {callback: getLngLat})
    cp.addEvent();

    //创建比例尺控件对象
    let scale = new T.Control.Scale();
    //添加比例尺控件
    //创建对象
    let ctrl = new T.Control.MapType();
    //添加控件

    let bd = new T.LngLatBounds(
        new T.LngLat(107.999600, 34.244340),
        new T.LngLat(108.005980, 34.238160),
        "108.006020", "34.238130"
    );
    let img = new T.ImageOverlay("new/photo", bd, {
        opacity: 1,
        alt: "渭河",
    });
    let rect = new T.Rectangle(bd);
    map.addControl(ctrl);
    map.addControl(scale);
    map.addOverLay(img);

    // 监听 wheel 事件来控制缩放
    document.getElementById('map-div').addEventListener('wheel', (e) => {
        let direction = e.deltaY > 0 ? 'up' : 'down';
        direction === 'up' ? map.zoomOut() : map.zoomIn();
        // 防止页面滚动
        e.preventDefault();
    });

}

function getLngLat(lnglat) {
    eventPoint.value = lnglat.lng.toFixed(6) + "," + lnglat.lat.toFixed(6)
}

onMounted(() => {
    onLoad();
})
</script>
