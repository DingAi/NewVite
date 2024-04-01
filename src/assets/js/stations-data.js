import {reactive, ref} from "vue";

const sensors = [
    {
        value: 'it',
        label: '箱内温度'
    },
    {
        value: 'et',
        label: '箱外温度'
    },
    {
        value: 'ih',
        label: '箱内湿度'
    },
    {
        value: 'eh',
        label: '箱外湿度'
    },
    {
        value: 'ill',
        label: '光照'
    },
    {
        value: 'co2',
        label: 'CO2'
    }
]

const translate = {
    'it': 'inTemperature',
    'et': 'exTemperature',
    'ih': 'inHumidity',
    'eh': 'exHumidity',
    'co2': 'CO2',
    'ill': 'illumination',
}

const trsnslateSlave = {
    "11": "Station 1 ",
    "12": "Station 2 ",
    "13": "Station 3 ",
    "14": "Station 4 ",
    "15": "Station 5 ",
    "16": "Station 6 ",
    "17": "Station 7 ",
    "18": "Station 8 ",
}

const trsnslateStationRunStep = {
    1: "关箱子",
    2: "关箱子延时",
    3: "风扇开",
    4: "风扇开延时",
    5: "气体搅拌",
    6: "气体搅拌延时",
    7: "读取二氧化碳",
    8: "读取二氧化碳延时 ",
    9: "抽真空",
    10: "抽真空延时",
    11: "开箱子",
    12: "开箱子延时",
    13: "开箱子断电",
    14: "开箱子断电延时",
    15: "同循环延时",
    16: "进入下一轮延时",
}

const stations = {
    "master01": [
        {"value": "11", "label": "从站 01"},
        {"value": "12", "label": "从站 02"},
        {"value": "13", "label": "从站 03"},
        {"value": "14", "label": "从站 04"},
        {"value": "15", "label": "从站 05"},
        {"value": "16", "label": "从站 06"},
        {"value": "17", "label": "从站 07"},
        {"value": "18", "label": "从站 08"}
    ],
    "master02": [
        {"value": "21", "label": "从站 01"},
        {"value": "22", "label": "从站 02"},
        {"value": "23", "label": "从站 03"},
        {"value": "24", "label": "从站 04"},
        {"value": "25", "label": "从站 05"},
        {"value": "26", "label": "从站 06"},
        {"value": "27", "label": "从站 07"},
        {"value": "28", "label": "从站 08"},
        {"value": "29", "label": "从站 09"},
        {"value": "210", "label": "从站 10"}
    ]
}

const masterStations = [
    {value: 'master01', label: '主站 01'},
    {value: 'master02', label: '主站 02'},
    {value: 'master03', label: '主站 03'},
];

const shortcuts = [
    {
        text: '3 小时',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 3)
            return [start, end]
        },
    },
    {
        text: '6 小时',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 6)
            return [start, end]
        },
    },
    {
        text: '12 小时',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 12)
            return [start, end]
        },
    },
    {
        text: '24 小时',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24)
            return [start, end]
        },
    },
    {
        text: '三天',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
            return [start, end]
        },
    },
    {
        text: '一周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        },
    },
    {
        text: '一个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        },
    },
    {
        text: '三个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
        },
    },
    {
        text: '六个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 180)
            return [start, end]
        },
    },
    {
        text: '一年',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
            return [start, end]
        },
    },
]


const soilData = [
    {name: '土壤含水量', value: Math.random().toFixed(2), unit: '%'},
    {name: '土壤温度', value: Math.floor(Math.random() * (40 - 10 + 1) + 10), unit: '℃'},
    {name: '土壤电导率', value: Math.random().toFixed(2), unit: 'dS/m'},
    {name: '土壤PH', value: Math.random().toFixed(1), unit: ''},
    {name: '土壤氮含量', value: Math.random().toFixed(2), unit: 'mg/kg'},
    {name: '土壤磷含量', value: Math.random().toFixed(2), unit: 'mg/kg'},
    {name: '土壤钾含量', value: Math.random().toFixed(2), unit: 'mg/kg'},
    {name: '土壤盐度', value: Math.random().toFixed(2), unit: '%'},
    {name: '土壤TDS', value: Math.floor(Math.random() * (2000 - 500 + 1) + 500), unit: 'ppm'},
    {name: '风速', value: Math.random().toFixed(2), unit: 'm/s'},
];

const weatherData = [
    {name: '净辐射', value: Math.random().toFixed(2), unit: 'W/m²'},
    {name: '温度', value: Math.floor(Math.random() * (40 - 10 + 1) + 10), unit: '℃'},
    {name: '湿度', value: Math.random().toFixed(2) * 100, unit: '%'},
    {name: 'CO₂', value: Math.floor(Math.random() * (1000 - 300 + 1) + 300), unit: 'ppm'},
    {name: '大气压力', value: Math.floor(Math.random() * (1050 - 950 + 1) + 950), unit: 'hPa'},
    {name: '光照', value: Math.floor(Math.random() * (1000 - 100 + 1) + 100), unit: 'lux'},
];

const solarData = [
    {name: '光伏板电压', value: Math.random().toFixed(2), unit: 'V'},
    {name: '光伏板电流', value: Math.random().toFixed(2), unit: 'A'},
    {name: '光伏板发电功率', value: (Math.random() * 100).toFixed(2), unit: 'W'},
    {name: '输出电压', value: Math.random().toFixed(2), unit: 'V'},
    {name: '输出电流', value: Math.random().toFixed(2), unit: 'A'},
    {name: '输出功率', value: (Math.random() * 1000).toFixed(2), unit: 'W'},
    {name: '蓄电池电压', value: (Math.random() * 12).toFixed(2), unit: 'V'},
    {name: '蓄电池电流', value: Math.random().toFixed(2), unit: 'A'},
];


export {
    stations,
    sensors,
    translate,
    trsnslateSlave,
    trsnslateStationRunStep,
    shortcuts,
    soilData,
    weatherData,
    solarData,
}