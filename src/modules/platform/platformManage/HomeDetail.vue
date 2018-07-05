<template>
    <div>
        <el-row class="node_msg card">
            <el-col :span="24"><h1>四川省节点Peer01</h1></el-col>
            <el-col :span="8"><p>节点位置：<span>成都</span><strong>202.12.11.10</strong></p></el-col>
            <el-col :span="8"><p>节点状态：<span>数据已同步</span></p></el-col>
            <el-col :span="8"><p>节点加入时间：<span>2016-05-08 12:59:59</span></p></el-col>
            <el-col :span="8"><p>节点描述：<span>金融投资数据中心区块链服务</span></p></el-col>
        </el-row>
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
            <el-table-column label="哈希值" prop="hash"></el-table-column>
            <el-table-column width="220" label="生成时间" prop="date"></el-table-column>
            <el-table-column label="父哈希值" prop="parentHash"></el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: "HomeDetail",
        data() {
            return{
                blockList: [
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#f6ae2d'
                    },
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#36a7ff'
                    },
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#97c84f'
                    },
                    {
                        height: 328654,
                        hash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        date: '2017-05-18 23:59:59',
                        parentHash: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#ff6687'
                    }
                ]
            }
        },
        mounted() {
            console.log(this.$route.path);
        }
    }
</script>

<style lang="scss" scoped>
    .node_msg{
        padding: 10px 30px;
        margin-bottom: 40px;
        h1{
            height: 50px;
            line-height: 50px;
            color: #4e4e4e;
        }
        p{
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            strong{
                color: #36a7ff;
                margin-left: 10px;
                font-size: 14px;
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
