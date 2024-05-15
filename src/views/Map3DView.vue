<template>
    <el-row class="full" id="cesiumContainer">

    </el-row>
</template>

<script setup>
import * as Cesium from 'cesium'
import {onMounted} from 'vue';


const tdtUrl = 'https://t{s}.tianditu.gov.cn/';
// 服务负载子域
const subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];
// const tdtToken = "c43ea0a5ddb9877baa3572d316394787";
const tdtToken = "2b5d01753969ea5a135e221c4d6c3909";

onMounted(() => {
    const viewer = new Cesium.Viewer('cesiumContainer', {
        // imageryProvider: false,
        animation: false,//动画小部件
        baseLayerPicker: false,//地图图层组件
        fullscreenButton: false,//全屏组件
        geocoder: true,//地理编码搜索组件
        homeButton: false,//首页组件
        infoBox: false,//信息框
        sceneModePicker: false,//场景模式
        selectionIndicator: false,//选取指示器组件
        timeline: false,//时间轴
        navigationHelpButton: false,//帮助按钮
        navigationInstructionsInitiallyVisible: false,
    })

    // 隐藏logo信息
    viewer._cesiumWidget._creditContainer.style.display = 'none';
    viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

    //叠加天地图影像服务
    let mapImgLayer = new Cesium.UrlTemplateImageryProvider({
        url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + tdtToken,
        subdomains: subdomains,
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        maximumLevel: 18,
    });
    let ChineseNamelayer = new Cesium.WebMapTileServiceImageryProvider({
        url: "http://{s}.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=" + tdtToken,
        layer: "tdtAnnoLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],//天地图8个服务器
    })

    // let tdtTerrainProvider = new Cesium.TerrainProvider({
    //     url: 'https://t0.tianditu.gov.cn/mapservice/swdx?T=elv_c&tk=' + tdtToken,
    // })
    //
    // viewer.terrainProvider = tdtTerrainProvider;
    viewer.imageryLayers.addImageryProvider(mapImgLayer);
    viewer.imageryLayers.addImageryProvider(ChineseNamelayer);



    //将初始定位放在国内
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 17850000),
        orientation: {
            heading: Cesium.Math.toRadians(348.4202942851978),
            pitch: Cesium.Math.toRadians(-89.74026687972041),
            roll: Cesium.Math.toRadians(0)
        },
        complete: function callback() {
            // 定位完成之后的回调函数
        }
    });


    // 生成一组点的数据，每个点包括位置、值和颜色
    let pointsData = [
        {
            position: Cesium.Cartesian3.fromDegrees(107.999600, 34.244340, 100),
            value: 10,
            color: Cesium.Color.fromCssColorString('#d13686').withAlpha(0.9)
        },
        {
            position: Cesium.Cartesian3.fromDegrees(108.0, 34.24434, 150),
            value: 20,
            color: Cesium.Color.fromCssColorString('#ffee28').withAlpha(0.9)
        },
        {
            position: Cesium.Cartesian3.fromDegrees(108.0004, 34.24434, 200),
            value: 30,
            color: Cesium.Color.fromCssColorString('#1894ff').withAlpha(0.9)
        },
        {
            position: Cesium.Cartesian3.fromDegrees(108.005980, 34.238160, 200),
            value: 30,
            color: Cesium.Color.fromCssColorString('#ffbe2d').withAlpha(0.9)
        }
        // 可以添加更多点的数据
    ];


    // 创建每个点的Entity对象，并设置位置、值和颜色
    pointsData.forEach(function (pointData) {
        let entity = viewer.entities.add({
            position: pointData.position,
            point: {
                pixelSize: 10,
                color: pointData.color
            },
            label: {
                text: pointData.value.toString(),
                font: '14px sans-serif',
                pixelOffset: new Cesium.Cartesian2(0, -20),
                fillColor: Cesium.Color.WHITE,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                show: false // 默认不显示
            }
        });

        // 监听鼠标移入事件
        let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(function (movement) {
            let pickedObject = viewer.scene.pick(movement.endPosition);
            if (Cesium.defined(pickedObject) && pickedObject.id === entity) {
                entity.label.show = true; // 鼠标在点上时显示点的值
                entity.point.pixelSize = 20; // 放大点的像素大小为20
            } else {
                entity.label.show = false; // 鼠标不在点上时隐藏点的值
                entity.point.pixelSize = 10; // 恢复点的像素大小为10
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    });


    // 将相机焦点设置为这个点
    // viewer.zoomTo(pointsData[0].position);
})
</script>

<style scoped>

</style>