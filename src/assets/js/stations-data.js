import {reactive} from "vue";

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
    "11": "从站 1 ",
    "12": "从站 2 ",
    "13": "从站 3 ",
    "14": "从站 4 ",
    "15": "从站 5 ",
    "16": "从站 6 ",
    "17": "从站 7 ",
    "18": "从站 8 ",
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
        text: '24小时',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24)
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
]

export {
    stations,
    sensors,
    translate,
    trsnslateSlave,
    trsnslateStationRunStep,
    shortcuts
}