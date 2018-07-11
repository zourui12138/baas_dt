<template>
    <div>
        <h1>项目合约群</h1>
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
        name: "ItemsThree",
        data() {
            return{
                tableData: [
                    {
                        number: 'JY-1',
                        name: 'GP间股权转让合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如果 GP 之间交易其所持有的某企业股份，则 GP1（买方）、GP2（卖方）及企业签订股权转让协议。GP1 的托管行账户根据股权转让协议约定,支付相应转让款 xx 万元至 GP2 托管行账户。同时，监管部门（工商）根据股权转让协议进行相应工商变更。'
                    },
                    {
                        number: 'JY-2',
                        name: '新LP资格认证合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如果 LP 份额交易中的一方为新 LP，需要对其合格投资者身份进行认证。需要新 LP提供银行账号、身份证明、资产证明等文件。'
                    },
                    {
                        number: 'JY-3',
                        name: 'LP间股权转让合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如果 LP 之间交易其所持有的基金份额，则需买卖 LP 双方、GP 签订基金份额转让协议。LP1（买方）根据基金份额转让协议约定价格支付转让款至 LP2（卖方）银行账户。同时，监管机构（工商）根据基金份额转让协议对基金出资人、出资额做相应变更。'
                    },
                    {
                        number: 'JY-4',
                        name: 'LP间收益权交易合约',
                        date: '2018-05-01 12:59:59',
                        overview: 'LP 间部分收益权的交易是指：LP 将基金所投资的 N 个项目中的 M 个项目的收益权交易给其他 LP。'
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
