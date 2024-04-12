const asiderJsonList = [
    {name:"从站 01", route: 'slave-1-1'},
    {name:"从站 02", route: 'slave-1-2'},
    {name:"从站 03", route: 'slave-1-3'},
    {name:"从站 04", route: 'slave-1-4'},
    {name:"从站 05", route: 'slave-1-5'},
    {name:"从站 06", route: 'slave-1-6'},
    {name:"从站 07", route: 'slave-1-7'},
    {name:"从站 08", route: 'slave-1-8'},
]

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
        {value: "11", label: "从站 01"},
        {value: "12", label: "从站 02"},
        {value: "13", label: "从站 03"},
        {value: "14", label: "从站 04"},
        {value: "15", label: "从站 05"},
        {value: "16", label: "从站 06"},
        {value: "17", label: "从站 07"},
        {value: "18", label: "从站 08"}
    ],
    "master02": [
        {value: "21", label: "从站 01"},
        {value: "22", label: "从站 02"},
        {value: "23", label: "从站 03"},
        {value: "24", label: "从站 04"},
        {value: "25", label: "从站 05"},
        {value: "26", label: "从站 06"},
        {value: "27", label: "从站 07"},
        {value: "28", label: "从站 08"},
        {value: "29", label: "从站 09"},
        {value: "210", label: "从站 10"}
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
    {name: '土壤含水量', value: 0, unit: '%'},
    {name: '土壤温度', value: 0, unit: '℃'},
    {name: '土壤电导率', value: 0, unit: 'dS/m'},
    {name: '土壤PH', value: 0, unit: ''},
    {name: '土壤氮含量', value: 0, unit: 'mg/kg'},
    {name: '土壤磷含量', value: 0, unit: 'mg/kg'},
    {name: '土壤钾含量', value: 0, unit: 'mg/kg'},
    {name: '土壤盐度', value: 0, unit: '%'},
    {name: '土壤TDS', value: 0, unit: 'ppm'},
];

const weatherData = [
    {name: '风速', value: 0, unit: 'm/s'},
    {name: '净辐射', value: 0, unit: 'W/m²'},
    {name: '温度', value: 0, unit: '℃'},
    {name: '湿度', value: 0, unit: '%'},
    {name: 'CO₂', value: 0, unit: 'ppm'},
    {name: '大气压力', value: 0, unit: 'hPa'},
    {name: '光照', value: 0, unit: 'lux'},
];

const solarData = [
    {name: '光伏板电压', value: 0, unit: 'V'},
    {name: '光伏板电流', value: 0, unit: 'A'},
    {name: '光伏板发电功率', value:0, unit: 'W'},
    {name: '输出电压', value: 0, unit: 'V'},
    {name: '输出电流', value: 0, unit: 'A'},
    {name: '输出功率', value: 0, unit: 'W'},
    {name: '蓄电池电压', value: 0, unit: 'V'},
    {name: '蓄电池电流', value: 0, unit: 'A'},
];

const dataOptionsSensors = [
    {value: 'it', label: '箱内温度'},
    {value: 'et', label: '箱外温度'},
    {value: 'ih', label: '箱内湿度'},
    {value: 'eh', label: '箱外湿度'},
    {value: 'co2', label: '二氧化碳'},
    {value: 'ill', label: '光照'},
]

const dataOptons = [
    {
        value: 'master01',
        label: '主站1',
        children: [
            {value: "11", label: "从站 01",children:dataOptionsSensors},
            {value: "12", label: "从站 02",children:dataOptionsSensors},
            {value: "13", label: "从站 03",children:dataOptionsSensors},
            {value: "14", label: "从站 04",children:dataOptionsSensors},
            {value: "15", label: "从站 05",children:dataOptionsSensors},
            {value: "16", label: "从站 06",children:dataOptionsSensors},
            {value: "17", label: "从站 07",children:dataOptionsSensors},
            {value: "18", label: "从站 08",children:dataOptionsSensors}
        ]
    },
    {
        value: 'master02',
        label: '主站2',
        children: [
            {value: "21", label: "从站 01",children:dataOptionsSensors},
            {value: "22", label: "从站 02",children:dataOptionsSensors},
            {value: "23", label: "从站 03",children:dataOptionsSensors},
            {value: "24", label: "从站 04",children:dataOptionsSensors},
            {value: "25", label: "从站 05",children:dataOptionsSensors},
            {value: "26", label: "从站 06",children:dataOptionsSensors},
            {value: "27", label: "从站 07",children:dataOptionsSensors},
            {value: "28", label: "从站 08",children:dataOptionsSensors},
            {value: "29", label: "从站 09",children:dataOptionsSensors},
            {value: "210", label: "从站 10",children:dataOptionsSensors}
        ]
    },
    {
        value: 'master03',
        label: '主站3',
        children: [
            {value: "31", label: "从站 01",children:dataOptionsSensors},
            {value: "32", label: "从站 02",children:dataOptionsSensors},
            {value: "33", label: "从站 03",children:dataOptionsSensors},
            {value: "34", label: "从站 04",children:dataOptionsSensors},
            {value: "35", label: "从站 05",children:dataOptionsSensors},
            {value: "36", label: "从站 06",children:dataOptionsSensors},
            {value: "37", label: "从站 07",children:dataOptionsSensors},
            {value: "38", label: "从站 08",children:dataOptionsSensors},
            {value: "39", label: "从站 09",children:dataOptionsSensors},
            {value: "310", label: "从站 10",children:dataOptionsSensors}
        ]
    }
];

const meteorologicalOptions = [
    {
        value: 'weatherData',
        label: '天气数据',
        children: [
            {value: 'windVelocity', label: '风速', unit: 'm/s'},
            {value: 'netRadiation', label: '净辐射', unit: 'W/m²'},
            {value: 'temperature', label: '温度', unit: '℃'},
            {value: 'humidity', label: '湿度', unit: '%'},
            {value: 'CO₂', label: 'CO₂', unit: 'ppm'},
            {value: 'atmosphericPressure', label: '大气压力', unit: 'hPa'},
            {value: 'illumination', label: '光照', unit: 'lux'},
        ]
    },
    {
        value: 'soilData',
        label: '土壤数据',
        children: [
            { value: 'soilMoisture', label: '土壤含水量', unit: '%' },
            { value: 'soilTemperature', label: '土壤温度', unit: '℃' },
            { value: 'soilConductivity', label: '土壤电导率', unit: 'dS/m' },
            { value: 'soilPH', label: '土壤PH', unit: '' },
            { value: 'soilNitrogen', label: '土壤氮含量', unit: 'mg/kg' },
            { value: 'soilPhosphorus', label: '土壤磷含量', unit: 'mg/kg' },
            { value: 'soilPotassium', label: '土壤钾含量', unit: 'mg/kg' },
            { value: 'soilSalinity', label: '土壤盐度', unit: '%' },
            { value: 'soilTDS', label: '土壤TDS', unit: 'ppm' },
        ]
    },
    {
        value: 'solarData',
        label: '太阳能数据',
        children: [
            { value: 'solarPanelVoltage', label: '光伏板电压', unit: 'V' },
            { value: 'solarPanelCurrent', label: '光伏板电流', unit: 'A' },
            { value: 'solarPanelPower', label: '光伏板发电功率', unit: 'W' },
            { value: 'outputVoltage', label: '输出电压', unit: 'V' },
            { value: 'outputCurrent', label: '输出电流', unit: 'A' },
            { value: 'outputPower', label: '输出功率', unit: 'W' },
            { value: 'batteryVoltage', label: '蓄电池电压', unit: 'V' },
            { value: 'batteryCurrent', label: '蓄电池电流', unit: 'A' },
        ]
    }
]


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
    dataOptons,
    meteorologicalOptions,
    asiderJsonList
}