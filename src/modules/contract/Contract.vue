<template>
    <div id="contract" class="clear">
        <aside class="fl aside">
            <h1>德同合约管理系统</h1>
            <ul>
                <li @click="href('contractItemsOne')" :class="$route.name === 'contractItemsOne' ? 'current' : ''">基础合约群</li>
                <li @click="href('contractItemsTwo')" :class="$route.name === 'contractItemsTwo' ? 'current' : ''">投资合约群</li>
                <li @click="href('contractItemsThree')" :class="$route.name === 'contractItemsThree' ? 'current' : ''">项目合约群</li>
                <li @click="href('contractItemsFour')" :class="$route.name === 'contractItemsFour' ? 'current' : ''">交易合约群</li>
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
            <VuePerfectScrollbar v-scroll class="main card"><router-view/></VuePerfectScrollbar>
        </section>
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
            },
            href(arg) {
                this.$router.push({path: '/contract/'+arg});
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
            }
        }
    }
</style>
