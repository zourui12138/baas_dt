<template>
    <div id="contract" class="clear">
        <aside class="fl aside">
            <h1>德同合约管理系统</h1>
            <ul>
                <li>基础合约群</li>
                <li class="current">投资合约群</li>
                <li>项目合约群</li>
                <li>交易合约群</li>
            </ul>
        </aside>
        <section class="fl section">
            <header class="header clear">
                <img class="fl" src="../../assets/img/contract/breadcrumb.png" alt="">
                <div class="fr">
                    <img src="../../assets/img/contract/logout.png" alt="">
                    <span>退出登陆</span>
                </div>
            </header>
            <VuePerfectScrollbar v-scroll class="main card">
                <h1>区块链数据信息详情</h1>
                <el-table
                    :data="tableData"
                    header-cell-class-name="tableTitle"
                    style="width: 100%">
                    <el-table-column width="60">
                        <template slot-scope="scope">
                            <img src="../../assets/img/contract/contract_icon.png" alt="">
                        </template>
                    </el-table-column>
                    <el-table-column width="120" prop="number" label="合约编号"></el-table-column>
                    <el-table-column width="200" prop="name" label="合约名称"></el-table-column>
                    <el-table-column width="200" prop="date" label="时间"></el-table-column>
                    <el-table-column prop="overview" label="合约概要"></el-table-column>
                    <el-table-column width="150" label="操作">
                        <template slot-scope="scope">
                            <span class="textBtnRed" @click="openDialog">在线编辑</span>
                            <span class="textBtnBlue">测试</span>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
            </VuePerfectScrollbar>
        </section>
        <el-dialog
            class="dialogContainer"
            title="代码编辑"
            :visible.sync="dialogVisible"
            width="80%">
            <img style="width: 100%;" src="../../assets/img/contract/editor.png" alt="">
        </el-dialog>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "Contract",
        components: {VuePerfectScrollbar},
        data() {
            return{
                tableData: [
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
                    },
                    {
                        number: '合约1',
                        name: 'GP备案内容',
                        date: '2018-05-01 12:59:59',
                        overview: '准 LP 提供银行账户、资产证明等合格投资人证明资料，承诺自己是合格投资人。'
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
    #contract{
        height: 100%;
        .aside{
            height: 100%;
            width: 276px;
            background-color: #fff;
            h1{
                text-align: center;
                color: #fff;
                font-size: 24px;
                height: 87px;
                line-height: 87px;
                background-color: #4877e6;
            }
            ul{
                li{
                    width: 222px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    border-radius: 21px;
                    margin: 20px auto;
                    cursor: pointer;
                    transition: all .2s;
                    &.current,&:hover{
                        background-color: #4877e6;
                        color: #fff;
                    }
                }
            }
        }
        .section{
            width: calc(100% - 276px);
            height: 100%;
            .header{
                height: 87px;
                line-height: 87px;
                color: #fff;
                background-color: #5a8bff;
                padding: 0 30px;
                >img{
                    margin-top: 32px;
                }
                div{
                    img{
                        margin-top: 36px;
                        margin-right: 4px;
                    }
                    span{
                        cursor: pointer;
                    }
                }
            }
            .main{
                margin: 30px;
                padding: 0 40px 40px;
                height: calc(100% - 189px);
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
            }
        }
    }
</style>
