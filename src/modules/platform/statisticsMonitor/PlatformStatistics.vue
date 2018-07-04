<template>
    <div>
        <ul class="search card clear">
            <li class="fl">
                <el-button-group>
                    <el-button type="primary">本月</el-button>
                    <el-button type="primary" plain>上月</el-button>
                </el-button-group>
            </li>
            <li class="fr"><el-button type="warning" round>查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button></li>
            <li class="fr">
                <el-date-picker
                    v-model="searchData.date"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions">
                </el-date-picker>
            </li>
        </ul>
        <div class="card chartContainer">
            <el-row class="count">
                <el-col :span="4"><p>注册账户数</p></el-col>
                <el-col :span="4"><p>活跃账户</p></el-col>
                <el-col :span="4"><p>历史充值金额</p></el-col>
                <el-col :span="4"><p>用户平均充值金额</p></el-col>
                <el-col :span="4"><p>本月总充值金额</p></el-col>
                <el-col :span="4"><p>本月平充值金额</p></el-col>
                <el-col :span="4"><h1>105</h1></el-col>
                <el-col :span="4"><h1>79</h1></el-col>
                <el-col :span="4"><h1>14</h1></el-col>
                <el-col :span="4"><h1>12</h1></el-col>
                <el-col :span="4"><h1>14</h1></el-col>
                <el-col :span="4"><h1>0</h1></el-col>
            </el-row>
            <el-select class="select" v-model="searchData.selectData" placeholder="请选择">
                <el-option label="平台用户" value="平台用户"></el-option>
                <el-option label="平台资金" value="平台资金"></el-option>
                <el-option label="平台项目" value="平台项目"></el-option>
                <el-option label="本月融资金额" value="本月融资金额"></el-option>
            </el-select>
            <div class="chart" ref="chart"></div>
        </div>
        <el-table
            class="tableList card"
            :data="peerList"
            style="width: 100%">
            <el-table-column label="企业名称" prop="name"></el-table-column>
            <el-table-column label="企业类型" prop="type"></el-table-column>
            <el-table-column label="融资次数" prop="limit"></el-table-column>
            <el-table-column label="融资资金" prop="amount"></el-table-column>
            <el-table-column label="最新融资金额" prop="newAmount"></el-table-column>
            <el-table-column label="融资时间" prop="date"></el-table-column>
            <el-table-column label="融资GP" prop="GP"></el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: "PlatformStatistics",
        data() {
            return{
                searchData: {
                    nodeName: '',
                    date: '',
                    selectData: '本月融资金额'
                },
                pickerOptions: {
                    shortcuts: [
                        {
                            text: '最近一周',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                            text: '最近一个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                picker.$emit('pick', [start, end]);
                            }
                        },
                        {
                            text: '最近三个月',
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                picker.$emit('pick', [start, end]);
                            }
                        }
                    ]
                },
                peerList: [
                    {
                        name: '成都迅鳐科技',
                        type: '2',
                        limit: '1',
                        amount: '18,531.40',
                        newAmount: '18,531.40',
                        date: '2018-07-03 23:59:59',
                        GP: '18,531.40'
                    },
                    {
                        name: '成都迅鳐科技',
                        type: '2',
                        limit: '1',
                        amount: '18,531.40',
                        newAmount: '18,531.40',
                        date: '2018-07-03 23:59:59',
                        GP: '18,531.40'
                    },
                    {
                        name: '成都迅鳐科技',
                        type: '2',
                        limit: '1',
                        amount: '18,531.40',
                        newAmount: '18,531.40',
                        date: '2018-07-03 23:59:59',
                        GP: '18,531.40'
                    },
                    {
                        name: '成都迅鳐科技',
                        type: '2',
                        limit: '1',
                        amount: '18,531.40',
                        newAmount: '18,531.40',
                        date: '2018-07-03 23:59:59',
                        GP: '18,531.40'
                    }
                ]
            }
        },
        methods: {
            lineChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.chart);
                // 图表配置项
                let option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    grid: {
                        left: 40,
                        right: 40,
                        bottom: 20,
                        top: 100,
                        containLabel: true
                    },
                    series: [
                        {
                            data: [0, 0, 0, 0, 0, 0, 10000],
                            type: 'line',
                            areaStyle: {
                                color: '#fde7e8'
                            },
                            lineStyle: {
                                color: '#f6878d'
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        },
        mounted() {
            this.lineChart();
        }
    }
</script>

<style lang="scss" scoped>
    .search{
        padding: 30px;
        margin-bottom: 30px;
        li{
            .el-range-editor{
                margin-right: 30px;
            }
        }
    }
    .chartContainer{
        position: relative;
        .count{
            background-color: #f8f9fd;
            padding: 20px 0;
            p,h1{
                text-align: center;
                line-height: 26px;
            }
        }
        .chart{
            height: 330px;
        }
        .select{
            position: absolute;
            top: 110px;
            left: 40px;
            z-index: 100;
        }
    }
    .tableList{
        margin-top: 30px;
    }
</style>
