const TBGuageValue = [
    {
        value: 20,
        name: '蓄电池温度',
        title: {
            offsetCenter: ['0%', '-30%']
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%']
        }
    },
    {
        value: 40,
        name: '设备温度',
        title: {
            offsetCenter: ['0%', '0%']
        },
        detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '10%']
        }
    },
];

const TBGuageOption = {
    series: [
        {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
                show: false
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                    borderWidth: 1,
                }
            },
            axisLine: {
                lineStyle: {
                    width: 40
                }
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                distance: 50
            },
            data: [],
            // pointer: {
            //     show: false
            // },
            title: {
                fontSize: 14
            },
            detail: {
                width: 50,
                height: 14,
                fontSize: 14,
                color: 'inherit',
                borderColor: 'inherit',
                borderRadius: 20,
                borderWidth: 1,
                formatter: '{value}%'
            },

        }
    ]
};

export {
    TBGuageOption,
    TBGuageValue
}