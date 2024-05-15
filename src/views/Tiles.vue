<template>
    <div class="full p-5" id="tiles-map"></div>
</template>

<script setup>
import L from "leaflet";
import 'leaflet/dist/leaflet.css'

const initMap = () => {
  // 创建地图实例，将其绑定到 id 参数为 "map" 的 DOM 元素上※
  const map = L.map("tiles-map",);
  // 使用 setView() 方法设置地图中心点坐标（维度，经度）和初始缩放级别※
  map.setView([223935.4, 3792967.2], 3);
  // 创建 Stamen 图层，并添加到地图上※

  let stamenLayer = L.tileLayer("public/ndvi/{z}/{x}/{y}.png", {
    minZoom: 1, // 最小缩放级别※
    maxZoom: 5, // 最大缩放级别※
    tms: true,
  }).addTo(map)
}

onMounted(()=>{
  initMap();
})
</script>