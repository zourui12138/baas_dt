<template>
    <div>
        <div class="nodeMap card" ref="map"></div>

    </div>
</template>

<script>
    import 'echarts/map/js/china.js';

    export default {
        name: "NodeManage",
        data() {
            return{
                coordinates: [
                    {symbolSize: 30,node:'成都(超级节点)',color:'#01c273',name: '成都',value: [103.9526, 30.7617]},
                    {symbolSize: 15,node:'拉萨(异常节点)',color:'#fa3271',name: '拉萨',value: [91.1865, 30.1465]},
                    {symbolSize: 15,node:'西宁',color:'#01c273',name: '西宁',value: [101.4038, 36.8207]},
                    {symbolSize: 15,node:'武汉',color:'#01c273',name: '武汉',value: [114.3896, 30.6628]},
                    {symbolSize: 15,node:'西安',color:'#01c273',name: '西安',value: [109.1162, 34.2004]},

                    {symbolSize: 30,node:'贵阳(超级节点)',color:'#faab42',name: '贵阳',value: [106.6992, 26.7682]},
                    {symbolSize: 15,node:'昆明(异常节点)',color:'#fa3271',name: '昆明',value: [102.9199, 25.4663]},
                    {symbolSize: 15,node:'广州',color:'#faab42',name: '广州',value: [113.5107, 23.2196]},
                    {symbolSize: 15,node:'南宁',color:'#faab42',name: '南宁',value: [108.479, 23.1152]},
                    {symbolSize: 15,node:'南昌',color:'#faab42',name: '南昌',value: [116.0046, 28.6633]},

                    {symbolSize: 30,node:'北京(超级节点)',color:'#0d5fff',name: '北京',value: [116.4551, 40.2539]},
                    {symbolSize: 15,node:'合肥',color:'#0d5fff',name: '合肥',value: [117.29, 32.0581]},
                    {symbolSize: 15,node:'太原',color:'#0d5fff',name: '太原',value: [112.3352, 37.9413]},
                    {symbolSize: 15,node:'上海(异常节点)',color:'#fa3271',name: '上海',value: [121.4648, 31.2891]},
                    {symbolSize: 15,node:'郑州',color:'#0d5fff',name: '郑州',value: [113.4668, 34.6234]},
                ],
                lineData: [
                    {
                        name: '成都--拉萨',
                        coords:[
                            {coord: [103.9526, 30.7617]},
                            {coord: [91.1865, 30.1465]}
                        ]
                    },
                    {
                        name: '成都--西宁',
                        coords:[
                            {coord: [103.9526, 30.7617]},
                            {coord: [101.4038, 36.8207]}
                        ]
                    },
                    {
                        name: '成都--武汉',
                        coords:[
                            {coord: [103.9526, 30.7617]},
                            {coord: [114.3896, 30.6628]}
                        ]
                    },
                    {
                        name: '成都--西安',
                        coords:[
                            {coord: [103.9526, 30.7617]},
                            {coord: [109.1162, 34.2004]}
                        ]
                    },

                    {
                        name: '贵阳--昆明',
                        coords:[
                            {coord: [106.6992, 26.7682]},
                            {coord: [102.9199, 25.4663]}
                        ]
                    },
                    {
                        name: '贵阳--广州',
                        coords:[
                            {coord: [106.6992, 26.7682]},
                            {coord: [113.5107, 23.2196]}
                        ]
                    },
                    {
                        name: '贵阳--南宁',
                        coords:[
                            {coord: [106.6992, 26.7682]},
                            {coord: [108.479, 23.1152]}
                        ]
                    },
                    {
                        name: '贵阳--南昌',
                        coords:[
                            {coord: [106.6992, 26.7682]},
                            {coord: [116.0046, 28.6633]}
                        ]
                    },

                    {
                        name: '北京--合肥',
                        coords:[
                            {coord: [116.4551, 40.2539]},
                            {coord: [117.29, 32.0581]}
                        ]
                    },
                    {
                        name: '北京--太原',
                        coords:[
                            {coord: [116.4551, 40.2539]},
                            {coord: [112.3352, 37.9413]}
                        ]
                    },
                    {
                        name: '北京--上海',
                        coords:[
                            {coord: [116.4551, 40.2539]},
                            {coord: [121.4648, 31.2891]}
                        ]
                    },
                    {
                        name: '北京--郑州',
                        coords:[
                            {coord: [116.4551, 40.2539]},
                            {coord: [113.4668, 34.6234]}
                        ]
                    },

                    {
                        name: '北京--成都',
                        coords:[
                            {coord: [116.4551, 40.2539]},
                            {coord: [103.9526, 30.7617]}
                        ]
                    },
                    {
                        name: '成都--贵阳',
                        coords:[
                            {coord: [103.9526, 30.7617]},
                            {coord: [106.6992, 26.7682]}
                        ]
                    },
                    {
                        name: '贵阳--北京',
                        coords:[
                            {coord: [106.6992, 26.7682]},
                            {coord: [116.4551, 40.2539]}
                        ]
                    },
                ]
            }
        },
        methods: {
            mapChart() {
                let series = [
                    {
                        type: 'lines',
                        zlevel: 1,
                        animation: false,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#64d644' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ddbb27' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        effect: {
                            show: true,
                            period: 4,
                            trailLength: 0.02,
                            symbol: 'arrow',
                            symbolSize: 5,
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                opacity: 0.6,
                                curveness: 0.2
                            }
                        },
                        data: []
                    }
                ],legendData = [];
                this.coordinates.forEach((item) => {
                    series.push({
                        name: item.node,
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        rippleEffect: {
                            period: 4,
                            brushType: 'stroke',
                            scale: 4
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                offset: [5, 0],
                                formatter: '{b}'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        symbol: 'circle',
                        symbolSize: item.symbolSize,
                        itemStyle: {normal: {show: false, color: item.color}},
                        data: [{name: item.name, value: item.value}]
                    });
                    legendData.push(item.node);
                });
                this.lineData.forEach((item) => series[0].data.push(item.coords));
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.map);
                // 图表配置项
                let option = {
                    title: {
                        text: '平台项目投资区块链节点',
                        textStyle: {
                            fontSize: 24,
                            color: '#525252'
                        },
                        x: 'center',
                        top: 40
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 50,
                        x: 100,
                        height: 120,
                        data:legendData,
                        selectedMode: 'multiple',
                    },
                    geo: {
                        map: 'china',
                        top: 100,
                        label: {
                            emphasis: {
                                show: false,
                                color:'#fff'
                            }
                        },
                        roam: false,
                        zoom: 1.1,
                        itemStyle: {
                            normal: {
                                areaColor: '#f7faff',
                                borderColor: '#4576d3',
                                borderWidth: 2,
                                opacity: .9
                            },
                            emphasis: {
                                areaColor: '#e4e6ea'
                            }
                        }
                    },
                    series: series
                };
                // 绘制图表
                myChart.setOption(option);
                let me = this;
                myChart.on('click', (params) => {
                    params.componentSubType === 'effectScatter'
                        && (me.$router.push({ path: '/platform/nodeManage/123456' }));
                });
            }
        },
        mounted() {
            this.mapChart();
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($name) {
        @return '../../../assets/img/platform/nodeManage/'+$name;
    }
    .nodeMap{
        height: 882px;
    }
</style>
