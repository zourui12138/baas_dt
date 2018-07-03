<template>
    <div>
        <header class="search clear card">
            <div class="fl">
                <el-select v-model="searchData.errorLevel" placeholder="请选择异常等级">
                    <el-option label="严重" value="严重"></el-option>
                    <el-option label="一般" value="一般"></el-option>
                    <el-option label="轻微" value="轻微"></el-option>
                    <el-option label="不限" value="不限"></el-option>
                </el-select>
            </div>
            <div class="fr">
                <el-input placeholder="请输入通知人" v-model="searchData.monitorObj" clearable></el-input>
                <el-button type="warning" round>查询</el-button>
            </div>
        </header>
        <el-table
            class="card"
            :data="monitorPolicyList"
            style="width: 100%"
            header-cell-class-name="table_title">
            <el-table-column label="告警对象" prop="object"></el-table-column>
            <el-table-column label="告警内容" prop="content"></el-table-column>
            <el-table-column label="发生时间" prop="date"></el-table-column>
            <el-table-column label="告警等级">
                <template slot-scope="scope"><p class="warning_level error">{{scope.row.level}}</p></template>
            </el-table-column>
            <el-table-column label="告警状态" prop="status"></el-table-column>
            <el-table-column width="90" label="操作">
                <template slot-scope="scope"><span style="color:#00e9bc;cursor: pointer">处理</span></template>
            </el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: "MonitorPolicy",
        data() {
            return{
                searchData: {
                    date: '',
                    monitorObj: '',
                    errorLevel: ''
                },
                monitorPolicyList: [
                    {
                        object: 'JWCD20170401815',
                        content: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        date: '2017-05-18 23:59:59',
                        level: '严重',
                        status: '启用'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search{
        padding: 30px;
        margin-bottom: 40px;
        .el-input {
            width: 250px;
            margin: 0 30px;
        }
    }
    .warning_level{
        width: 100px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        color: #fff;
        &.error{
            background-color: #ff6687;
        }
        &.warning{
            background-color: #f6ae2d;
        }
        &.success{
            background-color: #36a7ff;
        }
    }
</style>
