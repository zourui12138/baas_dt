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
            <el-col :span="16"><div class="chart card" ref="cpu"></div></el-col>
            <el-col :span="8"><div class="chart card"></div></el-col>
            <el-col :span="24"><div class="chart card io_chart" ref="io"></div></el-col>
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
            }
        },
        mounted() {
            this.cpuChart();
            this.ioChart();
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
        height: 480px;
        &.io_chart{
            margin-top: 25px;
        }
    }
</style>
