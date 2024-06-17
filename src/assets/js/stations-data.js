const upstr = 'ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ  ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾';
const  downstr = '₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎'

const asiderJsonList = [
    {name: "从站 01", route: 'slave-1-1'},
    {name: "从站 02", route: 'slave-1-2'},
    {name: "从站 03", route: 'slave-1-3'},
    {name: "从站 04", route: 'slave-1-4'},
    {name: "从站 05", route: 'slave-1-5'},
    {name: "从站 06", route: 'slave-1-6'},
    {name: "从站 07", route: 'slave-1-7'},
    {name: "从站 08", route: 'slave-1-8'},
]

const sensors = [
    {
        value: 'co2',
        label: 'CO2'
    },
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
    // {
    //     value: 'ill',
    //     label: '光照'
    // },
]

const unitJSon = {
    Temperature: '℃',
    Humidity: '%',
    illumination: 'Lux',
    Illumination: 'Lux',
    inTemperature: '℃',
    inHumidity: '%',
    exTemperature: '℃',
    exHumidity: '%',
    Battery_voltage: 'V',
    Solar_voltage: 'V',
    Device_current: 'A',
    Device_power: 'W',
    Moisture_content: '%',
    Electric_conductivity: 'μs/cm',
    Salinity: '%',
}

const translate = {
    'it': 'inTemperature',
    'et': 'exTemperature',
    'ih': 'inHumidity',
    'eh': 'exHumidity',
    'co2': 'CO2',
    'ill': 'illumination',
    
    'm1_air_t': 'Temperature',
    'm1_air_h': 'Humidity',
    'm1_ap': 'Air_pressure',
    'm1_ill': 'Illumination',
    'm1_bv': 'Battery_voltage',
    'm1_sv': 'Solar_voltage',
    'm1_c': 'Device_current',
    'm1_p': 'Device_power',
    'm1_s_l1_t': 'Temperature',
    'm1_s_l1_w': 'Moisture_content',
    'm1_s_l1_e': 'Electric_conductivity',
    'm1_s_l1_s': 'Salinity',
    'm1_s_l2_t': 'Temperature',
    'm1_s_l2_w': 'Moisture_content',
    'm1_s_l2_e': 'Electric_conductivity',
    'm1_s_l2_s': 'Salinity',
    'm1_s_l3_t': 'Temperature',
    'm1_s_l3_w': 'Moisture_content',
    'm1_s_l3_e': 'Electric_conductivity',
    'm1_s_l3_s': 'Salinity',
    'm1_s_l4_t': 'Temperature',
    'm1_s_l4_w': 'Moisture_content',
    'm1_s_l4_e': 'Electric_conductivity',
    'm1_s_l4_s': 'Salinity',
    'm1_s_l5_t': 'Temperature',
    'm1_s_l5_w': 'Moisture_content',
    'm1_s_l5_e': 'Electric_conductivity',
    'm1_s_l5_s': 'Salinity',
    
    's1_bv': 'Battery_voltage',
    's1_sv': 'Solar_voltage',
    's1_s_l1_t': 'Temperature',
    's1_s_l1_w': 'Moisture_content',
    's1_s_l1_e': 'Electric_conductivity',
    's1_s_l1_s': 'Salinity',
    's1_s_l2_t': 'Temperature',
    's1_s_l2_w': 'Moisture_content',
    's1_s_l2_e': 'Electric_conductivity',
    's1_s_l2_s': 'Salinity',
    's1_s_l3_t': 'Temperature',
    's1_s_l3_w': 'Moisture_content',
    's1_s_l3_e': 'Electric_conductivity',
    's1_s_l3_s': 'Salinity',
    's1_s_l4_t': 'Temperature',
    's1_s_l4_w': 'Moisture_content',
    's1_s_l4_e': 'Electric_conductivity',
    's1_s_l4_s': 'Salinity',
    's1_s_l5_t': 'Temperature',
    's1_s_l5_w': 'Moisture_content',
    's1_s_l5_e': 'Electric_conductivity',
    's1_s_l5_s': 'Salinity',
    
    's2_bv': 'Battery_voltage',
    's2_sv': 'Solar_voltage',
    's2_s_l1_t': 'Temperature',
    's2_s_l1_w': 'Moisture_content',
    's2_s_l1_e': 'Electric_conductivity',
    's2_s_l1_s': 'Salinity',
    's2_s_l2_t': 'Temperature',
    's2_s_l2_w': 'Moisture_content',
    's2_s_l2_e': 'Electric_conductivity',
    's2_s_l2_s': 'Salinity',
    's2_s_l3_t': 'Temperature',
    's2_s_l3_w': 'Moisture_content',
    's2_s_l3_e': 'Electric_conductivity',
    's2_s_l3_s': 'Salinity',
    's2_s_l4_t': 'Temperature',
    's2_s_l4_w': 'Moisture_content',
    's2_s_l4_e': 'Electric_conductivity',
    's2_s_l4_s': 'Salinity',
    's2_s_l5_t': 'Temperature',
    's2_s_l5_w': 'Moisture_content',
    's2_s_l5_e': 'Electric_conductivity',
    's2_s_l5_s': 'Salinity',
    
    's3_bv': 'Battery_voltage',
    's3_sv': 'Solar_voltage',
    's3_s_l1_t': 'Temperature',
    's3_s_l1_w': 'Moisture_content',
    's3_s_l1_e': 'Electric_conductivity',
    's3_s_l1_s': 'Salinity',
    's3_s_l2_t': 'Temperature',
    's3_s_l2_w': 'Moisture_content',
    's3_s_l2_e': 'Electric_conductivity',
    's3_s_l2_s': 'Salinity',
    's3_s_l3_t': 'Temperature',
    's3_s_l3_w': 'Moisture_content',
    's3_s_l3_e': 'Electric_conductivity',
    's3_s_l3_s': 'Salinity',
    's3_s_l4_t': 'Temperature',
    's3_s_l4_w': 'Moisture_content',
    's3_s_l4_e': 'Electric_conductivity',
    's3_s_l4_s': 'Salinity',
    's3_s_l5_t': 'Temperature',
    's3_s_l5_w': 'Moisture_content',
    's3_s_l5_e': 'Electric_conductivity',
    's3_s_l5_s': 'Salinity',
    
    's4_bv': 'Battery_voltage',
    's4_sv': 'Solar_voltage',
    's4_s_l1_t': 'Temperature',
    's4_s_l1_w': 'Moisture_content',
    's4_s_l1_e': 'Electric_conductivity',
    's4_s_l1_s': 'Salinity',
    's4_s_l2_t': 'Temperature',
    's4_s_l2_w': 'Moisture_content',
    's4_s_l2_e': 'Electric_conductivity',
    's4_s_l2_s': 'Salinity',
    's4_s_l3_t': 'Temperature',
    's4_s_l3_w': 'Moisture_content',
    's4_s_l3_e': 'Electric_conductivity',
    's4_s_l3_s': 'Salinity',
    's4_s_l4_t': 'Temperature',
    's4_s_l4_w': 'Moisture_content',
    's4_s_l4_e': 'Electric_conductivity',
    's4_s_l4_s': 'Salinity',
    's4_s_l5_t': 'Temperature',
    's4_s_l5_w': 'Moisture_content',
    's4_s_l5_e': 'Electric_conductivity',
    's4_s_l5_s': 'Salinity',
    
    's5_bv': 'Battery_voltage',
    's5_sv': 'Solar_voltage',
    's5_s_l1_t': 'Temperature',
    's5_s_l1_w': 'Moisture_content',
    's5_s_l1_e': 'Electric_conductivity',
    's5_s_l1_s': 'Salinity',
    's5_s_l2_t': 'Temperature',
    's5_s_l2_w': 'Moisture_content',
    's5_s_l2_e': 'Electric_conductivity',
    's5_s_l2_s': 'Salinity',
    's5_s_l3_t': 'Temperature',
    's5_s_l3_w': 'Moisture_content',
    's5_s_l3_e': 'Electric_conductivity',
    's5_s_l3_s': 'Salinity',
    's5_s_l4_t': 'Temperature',
    's5_s_l4_w': 'Moisture_content',
    's5_s_l4_e': 'Electric_conductivity',
    's5_s_l4_s': 'Salinity',
    's5_s_l5_t': 'Temperature',
    's5_s_l5_w': 'Moisture_content',
    's5_s_l5_e': 'Electric_conductivity',
    's5_s_l5_s': 'Salinity'
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
    "m1": "Master ",
    "s1": "Station 1 ",
    "s2": "Station 2 ",
    "s3": "Station 3 ",
    "s4": "Station 4 ",
    "s5": "Station 5 ",
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
        {value: "11", label: "从站 01"},
        {value: "12", label: "从站 02"},
        {value: "13", label: "从站 03"},
        {value: "14", label: "从站 04"},
        {value: "15", label: "从站 05"},
        {value: "16", label: "从站 06"},
        {value: "17", label: "从站 07"},
        {value: "18", label: "从站 08"},
        {value: "19", label: "从站 09"},
        {value: "110", label: "从站 10"}
    ],
    "master03": [
        {value: "11", label: "从站 01"},
        {value: "12", label: "从站 02"},
        {value: "13", label: "从站 03"},
        {value: "14", label: "从站 04"},
        {value: "15", label: "从站 05"},
        {value: "16", label: "从站 06"},
        {value: "17", label: "从站 07"},
        {value: "18", label: "从站 08"},
    ],
    "master04": [
        {value: "11", label: "从站 01"},
        {value: "12", label: "从站 02"},
        {value: "13", label: "从站 03"},
        {value: "14", label: "从站 04"},
        {value: "15", label: "从站 05"},
        {value: "16", label: "从站 06"},
        {value: "17", label: "从站 07"},
        {value: "18", label: "从站 08"},
    ],
    "weather_erdai1": [
        {value: "m1", label: "主站数据"},
        {value: "s1", label: "从站 01"},
        {value: "s2", label: "从站 02"},
        {value: "s3", label: "从站 03"},
        {value: "s4", label: "从站 04"},
        {value: "s5", label: "从站 05"},
    ],
    "weather_erdai2": [
        {value: "m1", label: "主站数据"},
        {value: "s1", label: "从站 01"},
        {value: "s2", label: "从站 02"},
        {value: "s3", label: "从站 03"},
        {value: "s4", label: "从站 04"},
        {value: "s5", label: "从站 05"},
    ],
}

const shortcuts = [
    {
        text: '1 小时',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 1)
            return [start, end]
        },
    },
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
        text: '今天',
        value: () => {
            const start = new Date()
            start.setHours(0, 0, 0, 0)
            const end = new Date()
            // end.setHours(23, 59, 59, 999)
            return [start, end]
        },
    },
    {
        text: '昨天',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setDate(start.getDate() - 1)
            start.setHours(0, 0, 0, 0)
            end.setDate(end.getDate() - 1)
            end.setHours(23, 59, 59, 999)
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
    {name: '光伏板发电功率', value: 0, unit: 'W'},
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
            {value: "11", label: "从站 01", children: dataOptionsSensors},
            {value: "12", label: "从站 02", children: dataOptionsSensors},
            {value: "13", label: "从站 03", children: dataOptionsSensors},
            {value: "14", label: "从站 04", children: dataOptionsSensors},
            {value: "15", label: "从站 05", children: dataOptionsSensors},
            {value: "16", label: "从站 06", children: dataOptionsSensors},
            {value: "17", label: "从站 07", children: dataOptionsSensors},
            {value: "18", label: "从站 08", children: dataOptionsSensors}
        ]
    },
    {
        value: 'master02',
        label: '主站2',
        children: [
            {value: "21", label: "从站 01", children: dataOptionsSensors},
            {value: "22", label: "从站 02", children: dataOptionsSensors},
            {value: "23", label: "从站 03", children: dataOptionsSensors},
            {value: "24", label: "从站 04", children: dataOptionsSensors},
            {value: "25", label: "从站 05", children: dataOptionsSensors},
            {value: "26", label: "从站 06", children: dataOptionsSensors},
            {value: "27", label: "从站 07", children: dataOptionsSensors},
            {value: "28", label: "从站 08", children: dataOptionsSensors},
            {value: "29", label: "从站 09", children: dataOptionsSensors},
            {value: "210", label: "从站 10", children: dataOptionsSensors}
        ]
    },
    {
        value: 'master03',
        label: '主站3',
        children: [
            {value: "31", label: "从站 01", children: dataOptionsSensors},
            {value: "32", label: "从站 02", children: dataOptionsSensors},
            {value: "33", label: "从站 03", children: dataOptionsSensors},
            {value: "34", label: "从站 04", children: dataOptionsSensors},
            {value: "35", label: "从站 05", children: dataOptionsSensors},
            {value: "36", label: "从站 06", children: dataOptionsSensors},
            {value: "37", label: "从站 07", children: dataOptionsSensors},
            {value: "38", label: "从站 08", children: dataOptionsSensors},
            {value: "39", label: "从站 09", children: dataOptionsSensors},
            {value: "310", label: "从站 10", children: dataOptionsSensors}
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
            {value: 'soilMoisture', label: '土壤含水量', unit: '%'},
            {value: 'soilTemperature', label: '土壤温度', unit: '℃'},
            {value: 'soilConductivity', label: '土壤电导率', unit: 'dS/m'},
            {value: 'soilPH', label: '土壤PH', unit: ''},
            {value: 'soilNitrogen', label: '土壤氮含量', unit: 'mg/kg'},
            {value: 'soilPhosphorus', label: '土壤磷含量', unit: 'mg/kg'},
            {value: 'soilPotassium', label: '土壤钾含量', unit: 'mg/kg'},
            {value: 'soilSalinity', label: '土壤盐度', unit: '%'},
            {value: 'soilTDS', label: '土壤TDS', unit: 'ppm'},
        ]
    },
    {
        value: 'solarData',
        label: '太阳能数据',
        children: [
            {value: 'solarPanelVoltage', label: '光伏板电压', unit: 'V'},
            {value: 'solarPanelCurrent', label: '光伏板电流', unit: 'A'},
            {value: 'solarPanelPower', label: '光伏板发电功率', unit: 'W'},
            {value: 'outputVoltage', label: '输出电压', unit: 'V'},
            {value: 'outputCurrent', label: '输出电流', unit: 'A'},
            {value: 'outputPower', label: '输出功率', unit: 'W'},
            {value: 'batteryVoltage', label: '蓄电池电压', unit: 'V'},
            {value: 'batteryCurrent', label: '蓄电池电流', unit: 'A'},
        ]
    }
]

const timeSetNameList = [
    ['开关箱时间', '开箱时间', '关箱时间', '风扇展开延时'],
    ['开风扇时间', '气体搅拌时间', '搅拌时间', '读二氧化碳时间'],
    ['读碳时间', '抽真空时间', '同循环不同箱延时', '同循环时间'],
    ['不同循环延时', '不同循环时间'],
]

function buildOptions(deviceNum) {
    function generateLayerOptions(station, layer) {
        let options = [];
        options.push({
            value: `${station}_s_l${layer}_t`,
            label: `土壤温度`,
            type: 'Temperature'
        });
        options.push({
            value: `${station}_s_l${layer}_w`,
            label: `土壤湿度`,
            type: 'Moisture_content'
        });
        options.push({
            value: `${station}_s_l${layer}_e`,
            label: `土壤电导率`,
            type: 'Electric_conductivity'
        });
        options.push({
            value: `${station}_s_l${layer}_s`,
            label: `土壤盐度`,
            type: 'Salinity'
        });
        return options;
    }
    
    let WSOption = [
        {
            label: "设备数据",
            children: [
                {
                    value: `${deviceNum}_bv`,
                    label: '电池电压'
                },
                {
                    value: `${deviceNum}_sv`,
                    label: '太阳能电压'
                }
            ]
        },
        {
            label: '土壤层01',
            children: generateLayerOptions(deviceNum, 1)
        },
        {
            label: '土壤层02',
            children: generateLayerOptions(deviceNum, 2)
        },
        {
            label: '土壤层03',
            children: generateLayerOptions(deviceNum, 3)
        },
        {
            label: '土壤层04',
            children: generateLayerOptions(deviceNum, 4)
        },
        {
            label: '土壤层05',
            children: generateLayerOptions(deviceNum, 5)
        }
    ];
    if (deviceNum == "m1" || deviceNum == "m2") {
        WSOption[0].children.unshift(
            {
                value: `${deviceNum}_air_t`,
                label: '空气温度'
            },
            {
                value: `${deviceNum}_air_h`,
                label: '空气湿度'
            },
            {
                value: `${deviceNum}_ap`,
                label: '气压'
            },
            {
                value: `${deviceNum}_ill`,
                label: '光照'
            },
            {
                value: `${deviceNum}_c`,
                label: '设备电流'
            },
            {
                value: `${deviceNum}_p`,
                label: '设备功率'
            })
    }
    return WSOption
}


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
    asiderJsonList,
    timeSetNameList,
    buildOptions,
    unitJSon
}