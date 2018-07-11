<template>
    <div>
        <h1>投资合约群</h1>
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
        name: "ItemsTwo",
        data() {
            return{
                tableData: [
                    {
                        number: 'TZ-1',
                        name: '管理费合约',
                        date: '2018-05-01 12:59:59',
                        overview: '基于LPA中对管理费用的约定，托管银行每年将管理费 xx 万元定期支付到GP银行账户。'
                    },
                    {
                        number: 'TZ-2',
                        name: '投前资料验证合约',
                        date: '2018-05-01 12:59:59',
                        overview: '在投前阶段，GP 团队需上传项目立项报告、框架协议、投资意向书、财务模型、第三方尽调文件等完备投资文件，方可申请后续投资决策及打款事宜。'
                    },
                    {
                        number: 'TZ-3',
                        name: '投资合约',
                        date: '2018-05-01 12:59:59',
                        overview: 'GP 的 IC 委员会决议投资该企业，同时与企业签订正式投资协议，出具划款指令。托管行根据托管协议内容，验证投前资料文件投元池建立中投资文件齐全，便将投资协议中约定的投资款 xx 万元支付到企业的银行账户。监管部门（工商）根据投资协议内容变更企业的工商信息。'
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
