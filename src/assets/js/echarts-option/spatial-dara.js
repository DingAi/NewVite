const spatialDataOption= {
    visualMap: {
        show: false,
        min: 2,
        max: 6,
        inRange: {
            symbolSize: [0.5, 25],
            colorAlpha: [0.2, 1]
        }
    },
    tooltip: {},
    backgroundColor: '#fff',
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value',
        min: 100,
        max: 1000
    },
    grid3D: {
        viewControl: {
            alpha: 20,
            beta: -30
        },
        postEffect: {
            enable: true,
            SSAO: {
                enable: true
            }
        },
        boxDepth: 120,
        light: {
            main: {
                shadow: true,
                intensity: 2
            },
            ambientCubemap: {
                texture: ROOT_PATH + '/data-gl/asset/canyon.hdr',
                exposure: 2,
                diffuseIntensity: 0.2,
                specularIntensity: 1
            }
        }
    },
    series: [
        {
            type: 'surface',
            shading: 'realistic',
            barSize: 1,
            wireframe: {
                show: false
            },
            itemStyle: {
                color: function (params) {
                    let i = params.dataIndex;
                    let r = imgData.data[i * 4];
                    let g = imgData.data[i * 4 + 1];
                    let b = imgData.data[i * 4 + 2];
                    return 'rgb(' + [r, g, b].join(',') + ')';
                }
            },
            data: data
        },
        {
            type: 'scatter3D',
            symbolSize: 5, // 点的大小
            data: []
        }
    ]
}

export {
    spatialDataOption,
}