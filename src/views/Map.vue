<template>
  <div class="full" id="map-div">

  </div>
</template>

<script setup>
import '@/assets/js/image-overlay.js'

let map;
let zoom = 15;
let geojsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [107.99961088611737, 34.24446666958088],
            [108.0076245873468, 34.23931968975652],
            [107.99961088611737, 34.23931968975652],
            [108.0076245873468, 34.23931968975652]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}


function onLoad() {
  //初始化地图对象
  map = new T.Map('map-div');
  //设置显示地图的中心点和级别
  map.centerAndZoom(new T.LngLat(107.99961088611737, 34.24446666958088), zoom);
  //允许鼠标滚轮缩放地图
  map.enableScrollWheelZoom();
  //创建比例尺控件对象
  let scale = new T.Control.Scale();
  //添加比例尺控件
  //创建对象
  let ctrl = new T.Control.MapType();
  //添加控件

  // let points = [];
  // //
  // points.push(new T.LngLat(107.999861111111, 35.0001388888889));
  // points.push(new T.LngLat(110.36180555555545, 35.0001388888889));
  // points.push(new T.LngLat(110.36180555555545, 32.1251388888889));
  // points.push(new T.LngLat(107.999861111111, 32.1251388888889));
  // //创建面对象
  // let polygon = new T.Polygon(points, {
  //   // color: "blue", weight: 3, opacity: 0.5, fillColor: "rgba(236,77,77,0.71)", fillOpacity: 0.5
  //   color: "blue", weight: 3, opacity: 0.5, fillOpacity: 0
  // });
  let bd = new T.LngLatBounds(
      new T.LngLat(107.99961088611737, 34.24446666958088),
      new T.LngLat(108.00625959801144, 34.238143499346606)
  );
  let img = new T.ImageOverlay("school/photo", bd, {
    opacity: 1,
    alt: "渭河",
  });
  map.addControl(ctrl);
  map.addControl(scale);
  map.addOverLay(img);
  map.addOverLay(bd);

}


onMounted(() => {
  onLoad();
})
</script>
