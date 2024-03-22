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

const translate= {
    'it': 'inTemperature',
    'et': 'exTemperature',
    'ih': 'inHumidity',
    'eh': 'exHumidity',
    'co2': 'CO2',
    'ill': 'illumination',
}

const trsnslateSlave = {
    "11": "s1 - ",
    "12": "s2 - ",
    "13": "s3 - ",
    "14": "s4 - ",
    "15": "s5 - ",
    "16": "s6 - ",
    "17": "s7 - ",
    "18": "s8 - ",
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

export {
    stations,
    sensors,
    translate,
    trsnslateSlave
}