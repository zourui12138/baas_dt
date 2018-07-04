<template>
    <div>
        <ul class="search card clear">
            <li class="fl">
                <span>区块名称：</span>
                <el-input class="" placeholder="请输入区块名称" v-model="searchData.contractName" clearable></el-input>
            </li>
            <li class="fl">
                <span>哈希值：</span>
                <el-input placeholder="请输入哈希值" v-model="searchData.contractName" clearable></el-input>
            </li>
            <li class="fl">
                <span>创建时间：</span>
                <el-date-picker v-model="searchData.createTime" type="date" placeholder="请选择创建时间"></el-date-picker>
            </li>
            <li class="fr"><el-button type="warning" round>查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button></li>
        </ul>
        <el-table
            class="card"
            :data="blockList"
            style="width: 100%"
            header-cell-class-name="table_title">
            <el-table-column width="220" label="区块名称">
                <template slot-scope="scope">
                    <div class="block_box" :style="{backgroundColor: scope.row.color}">
                        <h1>Block</h1>
                        <h2>{{scope.row.height}}</h2>
                    </div>
                </template>
            </el-table-column>
            <el-table-column width="120" label="区块高度" prop="height"></el-table-column>
            <el-table-column width="190" label="生成时间" prop="date"></el-table-column>
            <el-table-column label="哈希值" prop="hash"></el-table-column>
            <el-table-column label="父哈希值" prop="parentHash"></el-table-column>
            <el-table-column width="120" label="大小" prop="size"></el-table-column>
            <el-table-column width="90" label="操作">
                <template slot-scope="scope"><span style="color:#00e9bc;cursor: pointer">查看详情</span></template>
            </el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: "BlockQuery",
        data() {
            return{
                searchData: {
                    contractName: '',
                    createTime: ''
                },
                blockList: [
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        size: '3124 bytes',
                        color: '#f6ae2d'
                    },
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        size: '3124 bytes',
                        color: '#36a7ff'
                    },
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        size: '3124 bytes',
                        color: '#97c84f'
                    },
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        size: '3124 bytes',
                        color: '#ff6687'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search{
        padding: 30px;
        margin-bottom: 40px;
        li{
            .el-input{
                width: 250px;
                margin-right: 30px;
            }
        }
    }
    .block_box{
        height: 80px;
        width: 160px;
        color: #fff;
        text-align: center;
        line-height: 30px;
        padding: 10px 0;
    }
</style>
