<template>
  <div style="width: 100%;height: 100%">
    <div class="map" ref="map"></div>
    <el-card id="popup" class="popup">
      <div class="popupContainer"></div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import 'ol';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import markerImg from '@/assets/img/markerIcon.png';

const mapObj = ref(null);
const mapDom = ref(null);
const mapPointList = ref([]);
const pointLayerSource = ref(null);
const pointLayer = ref(null);
const markerIcon = markerImg;

onMounted(() => {
  initMap();
});

onBeforeUnmount(() => {
  mapClear();
});

// 清除地图
function mapClear() {
  if (mapDom.value) {
    mapDom.value.innerHTML = '';
    mapDom.value = null;
  }
}

// 初始化地图
function initMap() {
  // 先尝试清除
  mapClear();
  // 获取地图容器
  mapDom.value = document.getElementById('map');

  // 初始化地图配置
  mapObj.value = new Map({
    target: mapDom.value, // 地图容器
    view: new View({
      //设置你的地图初始中心点
      center: [117.990969, 36.635013], // 地图中心点
      zoom: 10, // 缩放
      projection: 'EPSG:4326', // 坐标系
    }),
  });

  // 添加一个使用离线瓦片地图的层
  const offlineMapLayer = new TileLayer({
    source: new XYZ({
      //这里的url就是你要改的地方
      url: 'http://192.168.3.6:8081' + '/{z}/{x}/{y}.png', // 设置本地离线瓦片所在路径
    }),
  });
  // 将图层添加到地图
  mapObj.value.addLayer(offlineMapLayer);

  // 加载地理坐标
  addPoint();
}

// 添加地理坐标
function addPoint() {
  delPointAll();
  // 地理坐标数组
  const pointData = [{ longitude: 117.990969, latitude: 36.635013 }];

  pointData.forEach((item) => {
    // 创建点
    const point = new Feature({
      geometry: new Point([item.longitude, item.latitude]),
      data: item,
    });

    // 点的样式
    const iconStyle = new Style({
      image: new Icon({
        color: '#ffffff',
        crossOrigin: 'anonymous',
        src: markerIcon,
      }),
    });
    // 设置样式
    point.setStyle(iconStyle);
    // 保存到数据  方便删除
    mapPointList.value.push(point);
  });

  // 创建geojson据源
  pointLayerSource.value = new VectorSource({ features: mapPointList.value });
  // 创建图层 并加载数据
  pointLayer.value = new VectorLayer({ source: pointLayerSource.value });
  // 将图层添加地图上
  mapObj.value.addLayer(pointLayer.value);
}

// 地理点位删除
function delPointAll() {
  // 判断 删除的数据源是否存在
  if (pointLayerSource.value) {
    // 遍历删除
    mapPointList.value.forEach((item) => {
      pointLayerSource.value.removeFeature(item);
    });

    // 删除图层 重置数据
    mapObj.value.removeLayer(pointLayer.value);
    pointLayerSource.value = null;
    pointLayer.value = null;
    mapPointList.value = [];
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>