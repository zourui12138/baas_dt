<template>
    <div>
        <el-row class="count" :gutter="74">
            <el-col :span="12">
                <div class="clear card count_box">
                    <p class="fl">当前时刻节点服务器不可用</p>
                    <div class="fr servers"><span>2455</span>台</div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="clear card count_box">
                    <p class="fl">当前时刻服务器Ping不可达</p>
                    <div class="fr ping"><span>5555</span>台</div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="25">
            <el-col :span="16">
                <div class="chart card">
                    <header class="clear">
                        <span class="fl">CPU使用率</span>
                        <ul class="fr">
                            <li class="fl"><span class="current">近1小时</span></li>
                            <li class="fl"><span>近7天</span></li>
                            <li class="fl"><span>近14天</span></li>
                        </ul>
                    </header>
                    <section ref="cpu"></section>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="chart card">
                    <header>已使用内存</header>
                    <section ref="ram"></section>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="chart card io_chart">
                    <header class="clear">
                        <span class="fl">IO Await</span>
                        <ul class="fr">
                            <li class="fl"><span class="current">近1小时</span></li>
                            <li class="fl"><span>近7天</span></li>
                            <li class="fl"><span>近14天</span></li>
                        </ul>
                    </header>
                    <section ref="io"></section>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "MonitorMsg",
        methods: {
            cpuChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.cpu);
                // 图表配置项
                let option = {
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ['#5171fa'],
                    xAxis: [
                        {
                            type: 'category',
                            data: [
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35'
                            ],
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 1,
                                    type: "solid"
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    width: 1,
                                    type: "solid"
                                },
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#063374",
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66, 20, 50, 80, 58, 83, 68, 57, 80],
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            ioChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.io);
                // 图表配置项
                let option = {
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    color: ['#ffc74a'],
                    xAxis: [
                        {
                            type: 'category',
                            data: [
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35','01:35','01:35',
                                '01:35','01:35'
                            ],
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 1,
                                    type: "solid"
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    width: 1,
                                    type: "solid"
                                },
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "#063374",
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            symbolSize: 15,
                            data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66, 20, 50, 80, 58, 83, 68, 57, 80],
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            RAMChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.ram);
                // 图表配置项
                let option = {
                    title: {
                        text: '总内存',
                        textStyle: {
                            fontSize: 30,
                            color: '#92a1a6',
                            fontWeight: 'normal'
                        },
                        subtext: '48G',
                        subtextStyle: {
                            fontSize: 48,
                            color: '#92a1a6'
                        },
                        top: 170,
                        left: 205
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 30,
                        y: 350,
                        data:['已使用内存','未使用内存']
                    },
                    color: ['#5171fa','#ffc74a'],
                    series: [
                        {
                            name:'内存使用率',
                            type:'pie',
                            radius: ['50%', '60%'],
                            center: ['55%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'已使用内存'},
                                {value:310, name:'未使用内存'}
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        },
        mounted() {
            this.cpuChart();
            this.ioChart();
            this.RAMChart();
        }
    }
</script>

<style lang="scss" scoped>
    .count{
        margin-bottom: 50px;
        .count_box{
            padding: 10px;
            p{
                height: 113px;
                line-height: 113px;
                text-align: center;
                width: calc(100% - 226px);
                font-size: 24px;
            }
            div{
                height: 113px;
                line-height: 113px;
                text-align: center;
                width: 226px;
                color: #fff;
                &.servers{
                    background: linear-gradient(to top right, #51aff5, #1062fe);
                }
                &.ping{
                    background: linear-gradient(to top right, #ff6c98 , #ff8273);
                }
                span{
                    font-size: 48px;
                }
            }
        }
    }
    .chart{
        header{
            height: 50px;
            line-height: 50px;
            padding: 0 30px;
            ul{
                li{
                    span{
                        margin-left: 20px;
                        cursor: pointer;
                        &.current,&:hover{
                            background: -webkit-linear-gradient(left, #6e68fc , #b353f2);
                            -webkit-background-clip: text;         /* 规定背景的划分区域 */
                            -webkit-text-fill-color: transparent;  /* 防止字体颜色覆盖 */
                        }
                    }
                }
            }
        }
        section{
            height: 430px;
        }
        &.io_chart{
            margin-top: 25px;
        }
    }
</style>
