<template>
    <div>
        <h1>基础合约群</h1>
        <el-table
            :data="tableData"
            header-cell-class-name="tableTitle"
            style="width: 100%">
            <el-table-column width="60">
                <template slot-scope="scope">
                    <img src="../../../assets/img/contract/contract_icon.png" alt="">
                </template>
            </el-table-column>
            <el-table-column width="100" prop="number" label="合约编号"></el-table-column>
            <el-table-column width="220" prop="name" label="合约名称"></el-table-column>
            <el-table-column width="200" prop="date" label="时间"></el-table-column>
            <el-table-column prop="overview" label="合约概要"></el-table-column>
            <el-table-column width="150" label="操作">
                <template slot-scope="scope">
                    <span class="textBtnRed" @click="openDialog">在线编辑</span>
                    <span class="textBtnBlue">测试</span>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="page" background layout="prev, pager, next" :total="10"></el-pagination>
        <el-dialog
            class="dialogContainer"
            title="代码编辑"
            :visible.sync="dialogVisible"
            width="80%">
            <img style="width: 100%;" src="../../../assets/img/contract/editor.png" alt="">
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ItemsOne",
        data() {
            return{
                tableData: [
                    {
                        number: 'TY-1',
                        name: '募资资格备案合约',
                        date: '2018-05-01 12:59:59',
                        overview: 'GP提供工商基本信息、出资人信息、高管人员等完备信息，才能通过监管机构（中国基金业协会）认证备案'
                    },
                    {
                        number: 'TY-2',
                        name: '投元兑换合约',
                        date: '2018-05-01 12:59:59',
                        overview: '从需兑换投元的托管账户中将人民币资金汇入平台托管银行账户，兑换链上等值的投元，用于后续的平台投资等活动'
                    },
                    {
                        number: 'TY-3',
                        name: '投元提取合约',
                        date: '2018-05-01 12:59:59',
                        overview: '需将投元换回人民币资金时，合约自动扣除投元后，将平台托管银行账户中等值人民币资金划转到制定账户'
                    },
                    {
                        number: 'TY-4',
                        name: 'LP资格认证合约',
                        date: '2018-05-01 12:59:59',
                        overview: '准LP提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人'
                    },
                    {
                        number: 'TY-5',
                        name: 'LPA合约',
                        date: '2018-05-01 12:59:59',
                        overview: 'GP、LP签订有限合伙协议协议（LPA），并向监管机构（工商）备案'
                    },
                    {
                        number: 'TY-6',
                        name: '出资份额认证合约',
                        date: '2018-05-01 12:59:59',
                        overview: '募资工作完成，GP、LP签订有限合伙协议（LPA），监管机构（工商）确认GP、LP出资份额'
                    },
                    {
                        number: 'TY-7',
                        name: '基金托管账户建立合约',
                        date: '2018-05-01 12:59:59',
                        overview: '基于LPA协议，GP、LP、托管银行签订托管协议，托管银行为基金开立托管账户'
                    },
                    {
                        number: 'TY-8',
                        name: '投元池建立合约',
                        date: '2018-05-01 12:59:59',
                        overview: '前述事项/条件均达成或满足，则系统自动按照LPA协议约定的出资人从LP银行账户将出资额划转至基金托管账户。同时，监管部门（工商）完成基金的工商信息变更。'
                    }
                ],
                dialogVisible: false
            }
        },
        methods: {
            openDialog() {
                this.dialogVisible = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        height: 50px;
        line-height: 50px;
        color: #0377ff;
        font-size: 18px;
        border-bottom: 1px solid #dfe4ef;
        margin-bottom: 20px;
    }
    .textBtnRed{
        font-size: 14px;
        color: #f06761;
        cursor: pointer;
        margin-right: 20px;
        &:hover{
            text-decoration: underline;
        }
    }
    .textBtnBlue{
        font-size: 14px;
        color: #5a8bff;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    .page{
        background-color: #f3f3f3;
        padding: 10px 0;
    }
</style>
