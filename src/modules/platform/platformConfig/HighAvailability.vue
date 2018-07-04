<template>
    <div id="highAvailability">
        <header class="card">
            <span>网关</span>
            <ul class="clear">
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/yellow_arrow.png" alt=""></li>
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/blue_arrow.png" alt=""></li>
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/green_arrow.png" alt=""></li>
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/red_arrow.png" alt=""></li>
            </ul>
        </header>
        <section class="card">
            <ul class="clear">
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/icon.png" alt=""></li>
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/icon.png" alt=""></li>
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/icon.png" alt=""></li>
                <li class="fl"><img src="../../../assets/img/platform/highAvailability/icon.png" alt=""></li>
                <li class="fr">负载方法：轮循</li>
            </ul>
        </section>
        <footer class="card">区块链</footer>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "HighAvailability",
        methods: {
            graphCharts() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chart);
                // 图表配置项
                let option = {
                    xAxis: {
                        show: false,
                        type: 'value'
                    },
                    yAxis: {
                        show: false,
                        type: 'value'
                    },
                    grid: {
                        left: 80,
                        right: 80,
                        bottom: 80,
                        containLabel: true
                    },
                    series: [
                        {
                            type: 'graph',
                            layout: 'none',
                            coordinateSystem: 'cartesian2d',
                            symbolSize: 116,
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 16
                                }
                            },
                            itemStyle: {
                                color: '#c6c6c6'
                            },
                            data: [
                                {
                                    name: 'A网关节点',
                                    value: [5, 95],
                                    itemStyle: {
                                        color: '#f6a10a'
                                    }
                                },
                                {
                                    name: 'B网关节点',
                                    value: [25, 95],
                                    itemStyle: {
                                        color: '#36a7ff'
                                    }
                                },
                                {
                                    name: 'C网关节点',
                                    value: [70, 95],
                                    itemStyle: {
                                        color: '#97c84f'
                                    }
                                },
                                {
                                    name: 'D网关节点',
                                    value: [90, 95],
                                    itemStyle: {
                                        color: '#ff6687'
                                    }
                                },
                                {
                                    name: '节点1',
                                    value: [30, 55]
                                },
                                {
                                    name: '节点4',
                                    value: [65, 55]
                                },
                                {
                                    name: '节点2',
                                    value: [15, 30]
                                },
                                {
                                    name: '节点5',
                                    value: [80, 30]
                                },
                                {
                                    name: '节点6',
                                    value: [30, 5]
                                },
                                {
                                    name: '节点3',
                                    value: [65, 5]
                                }
                            ]
                        },
                        {
                            type: 'lines',
                            coordinateSystem: 'cartesian2d',
                            lineStyle: {
                                normal: {
                                    color: '#c6c6c6',
                                    width: 4,
                                    opacity: 1
                                }
                            },
                            data: [
                                {coords: [[30, 55],[65, 55]]},
                                {coords: [[15, 30],[80, 30]]},
                                {coords: [[30, 5],[65, 5]]},
                                {coords: [[30, 55],[15, 30]]},
                                {coords: [[15, 30],[30, 5]]},
                                {coords: [[65, 55],[80, 30]]},
                                {coords: [[65, 5],[80, 30]]},
                                {coords: [[30, 55],[65, 5]]},
                                {coords: [[65, 55],[30, 5]]},
                                {
                                    coords: [[5, 95],[15, 30]],
                                    lineStyle: {
                                        normal: {
                                            color: '#f6a10a',
                                            type: 'dotted'
                                        }
                                    }
                                },
                                {
                                    coords: [[25, 95],[30, 55]],
                                    lineStyle: {
                                        normal: {
                                            color: '#36a7ff',
                                            type: 'dotted'
                                        }
                                    }
                                },
                                {
                                    coords: [[70, 95],[65, 55]],
                                    lineStyle: {
                                        normal: {
                                            color: '#97c84f',
                                            type: 'dotted'
                                        }
                                    }
                                },
                                {
                                    coords: [[90, 95],[80, 30]],
                                    lineStyle: {
                                        normal: {
                                            color: '#ff6687',
                                            type: 'dotted'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        },
        mounted() {
            this.graphCharts();
        }
    }
</script>

<style lang="scss" scoped>
    #highAvailability{
        position: relative;
        margin-top: 50px;
        header{
            height: 200px;
            line-height: 50px;
            padding-left: 20px;
            position: relative;
            ul{
                position: absolute;
                top: -35px;
                left: 0;
                li{
                    &:nth-child(1){margin-left: 160px;}
                    &:nth-child(2){margin-left: 235px;}
                    &:nth-child(3){margin-left: 545px;}
                    &:nth-child(4){margin-left: 235px;}
                }
            }
        }
        section{
            height: 60px;
            line-height: 60px;
            margin: 20px 0;
            ul{
                padding-left: 190px;
                padding-right: 30px;
                li{
                    img{
                        margin: 10px 105px;
                    }
                }
            }
        }
        footer{
            height: 570px;
            line-height: 100px;
            padding-left: 20px;
        }
        .chart{
            width: 100%;
            height: 920px;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>
