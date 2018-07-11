<template>
    <div>
        <h1>交易合约群</h1>
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
        name: "ItemsFour",
        data() {
            return{
                tableData: [
                    {
                        number: 'JG-1',
                        name: '投资对赌合约',
                        date: '2018-05-01 12:59:59',
                        overview: '基于投资协议中对赌条款的约定（如经营业绩目标等），如若企业触发对赌条款，则企业银行账户自动按投资协议约定方式， 或者支付现金赔偿至基金托管行账户，或 者通过监管机构（工商）变更相应股权至 基金明下。'
                    },
                    {
                        number: 'JG-2',
                        name: '企业估值因财务报表调整合约',
                        date: '2018-05-01 12:59:59',
                        overview: '视企业的财务报表提供情况，酌情调增/ 调减企业估值。（待定，如连续 2/4/6/8 季度按时、如实提供财报，估值调增 2%/4%/6%/8%；反之亦反）'
                    },
                    {
                        number: 'JG-3',
                        name: '企业估值增誉合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如果 GP 与增誉方之间以高于/低于企业在公开前述方法下预估的估值进行交易，而推高/ 降低了项目的价值，则该部分增誉反应到 基金总价值（或者投元总价值）中。 同时，交易款由增誉方支付到基金托管银 行账户，监管部门（工商）变更企业的工商信息。'
                    },
                    {
                        number: 'JG-4',
                        name: '企业IPO估值调整合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如若企业实现 IPO 上市，则基金对该项目的投资最新价值为该企业在二级市场上的最新市值*基金在该企业最新持股比例，价值随二级市场表现每日波动。'
                    },
                    {
                        number: 'JG-5',
                        name: '上市公司并购估值调整合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如若企业被上市公司并购，则基金对该项目的投资最新价值为被上市公司在二级市场上的最新市值*基金在该企业最新持股比例，价值随二级市场表现每日波动。'
                    },
                    {
                        number: 'JG-6',
                        name: '非上市公司并购估值调整合约',
                        date: '2018-05-01 12:59:59',
                        overview: '如若企业被非上市公司购，则基金对该项目的投资最新价值为并购企业上一轮估值并*基金在该企业最新持股比例，价值随并购企业估值调整。'
                    },
                    {
                        number: 'JG-7',
                        name: '企业估值因利润调整合约',
                        date: '2018-05-01 12:59:59',
                        overview: '根据企业的利润增减情况调整企业的估值。如企业利润同比增长 20%，企业估值相应增长 20%。'
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
