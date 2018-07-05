<template>
    <div>
        <el-row class="count" :gutter="40">
            <el-col :span="6">
                <div class="count_box card clear">
                    <div class="fl">
                        <h1>当前节点数</h1>
                        <h2>Current Node</h2>
                        <h3>685</h3>
                    </div>
                    <img class="fr" src="../../../assets/img/platform/home/current_node.png" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="count_box card clear">
                    <div class="fl">
                        <h1>区块高度</h1>
                        <h2>Block Height</h2>
                        <h3>346,788</h3>
                    </div>
                    <img class="fr" src="../../../assets/img/platform/home/block_height.png" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="count_box card clear">
                    <div class="fl">
                        <h1>当前资金总额</h1>
                        <h2>Current Money</h2>
                        <h3>406,303</h3>
                    </div>
                    <img class="fr" src="../../../assets/img/platform/home/current_money.png" alt="">
                </div>
            </el-col>
            <el-col :span="6">
                <div class="count_box card clear">
                    <div class="fl">
                        <h1>最新警告</h1>
                        <h2>New Monitor</h2>
                        <h3>685<span>已处理<strong>45,354</strong></span></h3>
                    </div>
                    <img class="fr" src="../../../assets/img/platform/home/monitor.png" alt="">
                </div>
            </el-col>
        </el-row>
        <el-row class="statistics_chart" :gutter="34">
            <el-col :span="16"><div class="financing card" ref="financing"></div></el-col>
            <el-col :span="8">
                <div class="total_contract card">
                    <header>
                        <h1>合约总数</h1>
                        <h2>Total Contract</h2>
                    </header>
                    <section>
                        <p><span>40,33,89</span><s>&uarr;</s><strong>+34</strong></p>
                    </section>
                    <footer ref="total_contract"></footer>
                </div>
                <div class="total_user card">
                    <header>
                        <h1>合约总数</h1>
                        <h2>Total Contract</h2>
                    </header>
                    <section ref="total_user"></section>
                </div>
            </el-col>
        </el-row>
        <div class="table_list card">
            <header>
                <h1>节点</h1>
                <h2>Node</h2>
            </header>
            <el-table :data="nodeList" style="width: 100%">
                <el-table-column label="节点名称" prop="name"></el-table-column>
                <el-table-column label="节点位置" prop="location"></el-table-column>
                <el-table-column label="状态" prop="status"></el-table-column>
                <el-table-column label="区块高度" prop="height"></el-table-column>
                <el-table-column width="400" label="当前区块哈希值" prop="hash"></el-table-column>
                <el-table-column label="最新区块时间" prop="date"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope"><span style="color:#00e9bc;cursor: pointer" @click="toDetail">查看详情</span></template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return{
                nodeList: [
                    {
                        name: '投资节点',
                        location: '成都(192.10.10.22)',
                        status: '已同步',
                        height: '651,517',
                        hash: '0x02f568f1d000f42c19GDHDH55463666666666666666',
                        date: '2016-05-02 23:59:59'
                    },
                    {
                        name: '投资节点',
                        location: '成都(192.10.10.22)',
                        status: '已同步',
                        height: '651,517',
                        hash: '0x02f568f1d000f42c19GDHDH55463666666666666666',
                        date: '2016-05-02 23:59:59'
                    },
                    {
                        name: '投资节点',
                        location: '成都(192.10.10.22)',
                        status: '已同步',
                        height: '651,517',
                        hash: '0x02f568f1d000f42c19GDHDH55463666666666666666',
                        date: '2016-05-02 23:59:59'
                    }
                ]
            }
        },
        computed: {
            isShowDetail() {
                let show = false;
                this.$route.query.uuid && (show = true);
                return show;
            }
        },
        methods: {
            financing() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.financing);
                // 图表配置项
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: ['9月6日', '9月7日', '9月8日', '9月9日', '9月10日']
                    }],
                    yAxis: [{
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 14
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    series: [{
                        name: '平台融资统计',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1,
                                color: '#2871fe'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#2871fe'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(137,189,27)',
                                borderColor: 'rgba(137,189,2,0.27)',
                                borderWidth: 12
                            }
                        },
                        data: [65, 122, 89, 112, 34]
                    }]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            totalUser() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.total_user);
                // 图表配置项
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 250,
                        y: 80,
                        data:['LP','GP','项目方']
                    },
                    color: ['#f6ae2d','#36a7ff','#ff6687'],
                    series: [
                        {
                            name: '平台用户总数',
                            type:'pie',
                            radius: ['35%', '45%'],
                            center: [100, '50%'],
                            data:[
                                {value:335, name:'LP'},
                                {value:310, name:'GP'},
                                {value:234, name:'项目方'}
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            totalContract() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.total_contract);
                // 图表配置项
                let option = {
                    title: {
                        text: '47%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: "#a278ff",
                            fontSize: 20
                        }
                    },
                    backgroundColor: '#fff',
                    color: ['#a278ff'],
                    tooltip: {
                        show: false,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            mark: {
                                show: true
                            },
                            dataView: {
                                show: true,
                                readOnly: false
                            },
                            restore: {
                                show: true
                            },
                            saveAsImage: {
                                show: true
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Line 1',
                            type: 'pie',
                            clockWise: false,
                            radius: [40, 45],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                }
                            },
                            hoverAnimation: false,
                            data: [
                                {
                                    value: 53,
                                    name: 'invisible',
                                    itemStyle: {
                                        normal: {
                                            color: '#fff',//未完成的圆环的颜色
                                            label: {
                                                show: false
                                            },
                                            labelLine: {
                                                show: false
                                            }
                                        },
                                        emphasis: {
                                            color: '#fff'//未完成的圆环的颜色
                                        }
                                    }
                                },
                                {
                                    value: 47,
                                    name: '01'
                                }
                            ]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            toDetail() {
                this.$router.push({ path: '/platform/home/123456' });
            }
        },
        mounted() {
            this.financing();
            this.totalUser();
            this.totalContract();
        }
    }
</script>

<style lang="scss" scoped>
    .count{
        margin-bottom: 34px;
        .count_box{
            height: 164px;
            div{
                padding-left: 26px;
                padding-top: 20px;
                h1{
                    font-size: 18px;
                }
                h2{
                    height: 30px;
                    line-height: 30px;
                }
                h3{
                    margin-top: 10px;
                    color: #1d1d1d;
                    font-size: 46px;
                    span{
                        font-size: 18px;
                        color: #92a1a6;
                        margin-left: 10px;
                        strong{
                            color: #e83151;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
    .statistics_chart{
        margin-bottom: 34px;
        .financing{
            height: 486px;
        }
        .total_contract{
            height: 110px;
            margin-bottom: 34px;
            padding: 20px 50px;
            position: relative;
            header{
                h1{
                    height: 26px;
                    line-height: 26px;
                    font-size: 18px;
                }
                h2{
                    height: 24px;
                    line-height: 24px;
                    font-size: 16px;
                }
            }
            section{
                margin-top: 10px;
                p{
                    height: 40px;
                    line-height: 40px;
                    font-size: 30px;
                    border-left: 11px solid #085bff;
                    padding-left: 16px;
                    overflow: hidden;
                    s{
                        color: #ff6687;
                        text-decoration: none;
                        position: relative;
                        top: -3px;
                        margin: 0 6px;
                    }
                    strong{
                        font-size: 30px;
                        color: #ff6687;
                    }
                }
            }
            footer{
                position: absolute;
                width: 100px;
                height: 100px;
                top: 25px;
                right: 50px;
            }
        }
        .total_user{
            padding: 20px 50px;
            header{
                h1{
                    height: 26px;
                    line-height: 26px;
                    font-size: 18px;
                }
                h2{
                    height: 24px;
                    line-height: 24px;
                    font-size: 16px;
                }
            }
            section{
                height: 210px;
            }
        }
    }
    .table_list{
        padding: 0 40px 20px;
        header{
            padding: 20px 0 10px;
            h1{
                font-size: 18px;
                font-weight: bold;
                height: 26px;
                line-height: 26px;
            }
            h2{
                font-size: 16px;
                height: 26px;
                line-height: 26px;
            }
        }
    }
</style>
