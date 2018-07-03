<template>
    <div>
        <ul class="search card clear">
            <li class="fl">
                <span>节点名称：</span>
                <el-input class="" placeholder="请输入节点名称" v-model="searchData.nodeName" clearable></el-input>
            </li>
            <li class="fl">
                <span>监听端口：</span>
                <el-input placeholder="请输入监听端口" v-model="searchData.port" clearable></el-input>
            </li>
            <li class="fr"><el-button type="warning" round>查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button></li>
        </ul>
        <el-table
            class="card"
            :data="peerList"
            style="width: 100%"
            header-cell-class-name="table_title">
            <el-table-column label="节点名称" prop="nodeName"></el-table-column>
            <el-table-column label="监听端口号" prop="port"></el-table-column>
            <el-table-column label="数据存放路径" prop="path"></el-table-column>
            <el-table-column label="密码库配置">
                <template slot-scope="scope">
                    <p>加密方式：{{scope.row.encryptType}}</p>
                    <p>签名算法：{{scope.row.algorithm}}</p>
                </template>
            </el-table-column>
            <el-table-column label="分析数据库" prop="databaseType"></el-table-column>
            <el-table-column label="日志等级" prop="logLevel"></el-table-column>
            <el-table-column label="启用TLS">
                <template slot-scope="scope">
                    <h1 :class="scope.row.TLS">{{scope.row.TLS === 'enable' ? '已启用' : '已停用'}}</h1>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: "PeerConfig",
        data() {
            return{
                searchData: {
                    nodeName: '',
                    port: ''
                },
                peerList: [
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'enable'
                    },
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'disable'
                    },
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'enable'
                    },
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'disable'
                    },
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'enable'
                    },
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'disable'
                    },
                    {
                        nodeName: 'JWCD20170401815',
                        port: '3306',
                        path: 'C://dataStorage',
                        encryptType: '软件',
                        algorithm: 'sha256',
                        databaseType: 'HBase',
                        logLevel: 'critical',
                        TLS: 'enable'
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
    p{
        font-size: 14px;
    }
    h1{
        height: 26px;
        line-height: 26px;
        width: 100px;
        color: #fff;
        text-align: center;
        font-size: 14px;
        &.enable{
            background-color: #36a7ff;
        }
        &.disable{
            background-color: #f6ae2d;
        }
    }
</style>
