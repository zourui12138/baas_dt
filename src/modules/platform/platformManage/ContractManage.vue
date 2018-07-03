<template>
    <div>
        <ul class="search card clear">
            <li class="fl">
                <span>合约名称：</span>
                <el-input class="" placeholder="请输入合约名称" v-model="searchData.contractName" clearable></el-input>
            </li>
            <li class="fl">
                <span>类型：</span>
                <el-input placeholder="请输入合约类型" v-model="searchData.contractName" clearable></el-input>
            </li>
            <li class="fl">
                <span>创建时间：</span>
                <el-date-picker v-model="searchData.createTime" type="date" placeholder="请选择创建时间"></el-date-picker>
            </li>
            <li class="fr"><el-button type="warning" round>查&nbsp;&nbsp;&nbsp;&nbsp;询</el-button></li>
        </ul>
        <el-table
            class="contract_list card"
            :data="contractList"
            style="width: 100%"
            header-cell-class-name="table_title">
            <el-table-column width="170">
                <template slot-scope="scope">
                    <div class="contract_box" :style="{backgroundColor: scope.row.color}"></div>
                </template>
            </el-table-column>
            <el-table-column width="220" label="合约名称" prop="name"></el-table-column>
            <el-table-column width="220" label="创建时间" prop="createTime"></el-table-column>
            <el-table-column label="合约描述" prop="description"></el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: "ContractManage",
        data() {
            return{
                searchData: {
                    contractName: '',
                    createTime: ''
                },
                contractList: [
                    {
                        name: 'GP备案内容',
                        createTime: '2017-05-18 12:55:59',
                        description: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#36a7ff'
                    },
                    {
                        name: '股权转让协议',
                        createTime: '2017-05-18 12:55:59',
                        description: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#f6ae2d'
                    },
                    {
                        name: '基金产品备案内容',
                        createTime: '2017-05-18 12:55:59',
                        description: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#97c84f'
                    },
                    {
                        name: '基金份额转让协议',
                        createTime: '2017-05-18 12:55:59',
                        description: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#ff6687'
                    },
                    {
                        name: '托管协议',
                        createTime: '2017-05-18 12:55:59',
                        description: '0x02f568f1d000f42c19c86f02a3728c1cddf···',
                        color: '#36a7ff'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($name) {
        @return '../../../assets/img/platform/contractManage/'+$name;
    }
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
    .contract_list{
        .contract_box{
            height: 67px;
            width: 67px;
            margin: auto;
            background: url(imgUrl('contract_icon.png')) no-repeat center;
        }
    }
</style>
