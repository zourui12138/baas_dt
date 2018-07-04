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
            <el-table-column label="通知人" prop="notifier"></el-table-column>
            <el-table-column label="账号" prop="account"></el-table-column>
            <el-table-column label="手机号" prop="phone"></el-table-column>
            <el-table-column label="邮箱" prop="email"></el-table-column>
            <el-table-column label="异常等级">
                <template slot-scope="scope"><p class="warning_level error">{{scope.row.level}}</p></template>
            </el-table-column>
            <el-table-column width="90" label="操作">
                <template slot-scope="scope"><span style="color:#00e9bc;cursor: pointer">删除</span></template>
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
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
                    },
                    {
                        notifier: 'JWCD20170401815',
                        account: 'xxxxxxxxxxxxxxxxxxxxxxx',
                        phone: '18728053221',
                        email: '18728053221@163.com',
                        level: '严重'
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
