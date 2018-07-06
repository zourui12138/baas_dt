<template>
    <VuePerfectScrollbar v-scroll id="developer">
        <header class="header">
            <ul class="clear common_width">
                <li class="fl">
                    <img src="../../assets/img/developer/logo.png" alt="">
                    <span>德同开发者平台</span>
                </li>
                <li class="fl" @click="toBaas">Baas平台</li>
                <li class="fl" @click="toContract">智能合约系统</li>
                <li class="fl">技术文档</li>
                <li class="fl" @click="toBrowser">区块浏览器</li>
                <li class="fr">
                    <button type="button">注册</button>
                    <strong>登陆</strong>
                </li>
            </ul>
            <div>
                <h2>协助开发者快速开发区块链应用</h2>
                <p>项目开发，迅疾如飞</p>
            </div>
        </header>
        <div class="understand common_width">
            <h1>认识智能合约</h1>
            <h2>智能合约是人与区块链的媒介，要借助智能合约我们才能向区块链中写入或读取数据。为了让开发者更容易理解，我们提供了一些智能合约模版给开发者进行参考。</h2>
            <ul class="clear">
                <li class="fl">
                    <div><img src="../../assets/img/developer/wallet.png" alt=""></div>
                    <h3>电子钱包</h3>
                    <p>通过智能合约可以创建属于自己的数字资产并设定发行数量，同时也可以通过转账，将资产转移给其他用户。</p>
                </li>
                <li class="fl">
                    <div><img src="../../assets/img/developer/integral.png" alt=""></div>
                    <h3>数据积分流通</h3>
                    <p>由多个机构共同构成一个积分联盟，消费者经任一机构消费获得该机构发行的积分，并可以在联盟中任一机构进行使用。</p>
                </li>
                <li class="fl">
                    <div><img src="../../assets/img/developer/trace.png" alt=""></div>
                    <h3>供应链溯源</h3>
                    <p>厂商将出厂商品登记到区块链，然后由经销商将商品进行上链登记，最终在零售商处由消费者购买，区块链记录整个供应链流程。</p>
                </li>
            </ul>
        </div>
        <div class="create">
            <h1>智能合约创建</h1>
            <h2>免费的智能合约IDE，用户可以随时编写、编译、调试智能合约</h2>
            <img src="../../assets/img/developer/editor.png" alt="">
            <h3><img src="" alt="">德同智能合约</h3>
            <h2>基于浏览器的智能合约编辑器，集成编译器和Solidity运行时的环境，无需服务器端组件。</h2>
            <button type="button">立即使用</button>
        </div>
        <div class="deploy common_width">
            <h1>部署到区块链</h1>
            <h2>智能合约编写完成后，可以将智能合约部署到平台搭建的联盟链上</h2>
            <div class="deployImg">
                <div class="application"><img src="../../assets/img/developer/application.png" alt=""></div>
                <div class="platform"><img src="../../assets/img/developer/platform.png" alt=""></div>
                <div class="arrow_bottom"><img src="../../assets/img/developer/arrow_bottom.png" alt=""></div>
                <div class="nodes"><img src="../../assets/img/developer/nodes.png" alt=""></div>
                <div class="hyper_chain_grey"><img src="../../assets/img/developer/hyper_chain_grey.png" alt=""></div>
                <div class="hyper_chain_word"><img src="../../assets/img/developer/hyper_chain_word.png" alt=""></div>
                <div class="ledger_word"><img src="../../assets/img/developer/ledger_word.png" alt=""></div>
                <div class="smart_contract"><img src="../../assets/img/developer/smart_contract.png" alt=""></div>
                <div class="smart_contract_word"><img src="../../assets/img/developer/smart_contract_word.png" alt=""></div>
                <div class="bills bills_one"></div>
                <div class="bills bills_two"></div>
                <div class="bills bills_three"></div>
                <div class="bills bills_four"></div>
                <div class="blue blue_one"></div>
                <div class="blue blue_two"></div>
                <div class="blue blue_three"></div>
                <div class="blue blue_four"></div>
                <div class="blue blue_five"></div>
                <div class="blue blue_six"></div>
            </div>
            <h2>联盟链依据Hyperchain底层架构进行搭建，提供高效的性能和多方的信用背书</h2>
        </div>
        <div class="join">
            <h1>联盟链加盟</h1>
            <h2>提供联盟链加盟服务，用户可以提供自己的节点，让联盟链更加稳定、可靠！</h2>
            <div class="joinImg">
                <div class="five_node"><img src="../../assets/img/developer/five_node.png" alt=""></div>
                <div class="cube_one"><img src="../../assets/img/developer/cube_one.png" alt=""></div>
                <div class="cube_two"><img src="../../assets/img/developer/cube_two.png" alt=""></div>
                <div class="cube_three"><img src="../../assets/img/developer/cube_three.png" alt=""></div>
                <div class="small_thing_one"><img src="../../assets/img/developer/small_thing_one.png" alt=""></div>
                <div class="small_thing_two"><img src="../../assets/img/developer/small_thing_two.png" alt=""></div>
                <div class="shining"><img src="../../assets/img/developer/shining.png" alt=""></div>
                <div class="blue_node"><img src="../../assets/img/developer/blue_node.png" alt=""></div>
                <div class="grey_node"><img src="../../assets/img/developer/grey_node.png" alt=""></div>
            </div>
        </div>
        <div class="benefit">
            <h1>加入联盟链的好处</h1>
            <ul class="clear">
                <li class="fl">
                    <img style="margin-top: 1px" src="../../assets/img/developer/bonus.png" alt="">
                    <p>联盟链收益分成</p>
                </li>
                <li class="fl">
                    <img style="margin-top: 7px" src="../../assets/img/developer/support.png" alt="">
                    <p>项目开发技术优先支持</p>
                </li>
                <li class="fl">
                    <img src="../../assets/img/developer/share.png" alt="">
                    <p>区块链最新技术分享</p>
                </li>
                <li class="fl">
                    <img style="margin-top: 11px" src="../../assets/img/developer/corporate_image.png" alt="">
                    <p>企业形象提升</p>
                </li>
            </ul>
            <button type="button">申请加入</button>
        </div>
        <div class="footer">
            <div class="footer_link clear">
                <div class="fl"><h1>趣链官网</h1></div>
                <div class="fl">
                    <h1>资源</h1>
                    <p>SDK</p>
                    <p>API</p>
                    <p>在线IDE</p>
                </div>
                <div class="fl">
                    <h1>帮助网站</h1>
                    <p>Solidity语言</p>
                    <p>趣链帮助中心</p>
                </div>
                <div class="fl">
                    <h1>联系我们</h1>
                    <p>招聘与咨询：0571-87203334</p>
                    <p>邮箱：support.dev@hyperchain.cn</p>
                    <p>QQ交流群：516840101</p>
                    <p>微信公众号</p>
                </div>
            </div>
            <div class="footer_copy">版权所有&copy;成都迅鳐科技有限公司 － 川ICP备16033604号-1 成都市高新区天府五街200菁蓉国际广场1B325号</div>
        </div>
    </VuePerfectScrollbar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "Developer",
        components: {VuePerfectScrollbar},
        methods: {
            toBaas() {
                this.$router.push({ path: '/platform/home' });
            },
            toContract() {
                this.$router.push({ path: '/contract' });
            },
            toBrowser() {
                window.location.href = 'http://210.13.50.98:10145/app/mrray/baasPlatform/html/main.html#!/home';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .common_width{
        width: 1200px;
        margin: auto;
    }
    @keyframes longLine {
        0% {
            height: 0;
        }

        100% {
            height: 400px;
        }
    }
    @keyframes shortLine {
        0% {
            height: 0;
        }

        100% {
            height: 260px;
        }
    }
    @keyframes show {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,-120%,0);
            transform: translate3d(0,-120%,0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,120%,0);
            transform: translate3d(0,120%,0);
        }
        100% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }
    @keyframes fadeInDownOut {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0,-120%,0);
            transform: translate3d(0,-120%,0);
        }
        60% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes showBill {
        0% {
            height: 0;
        }
        100% {
            height: 177px;
        }
    }
    #developer{
        height: 100%;
        .header{
            background-color: #0784ee;
            ul{
                height: 72px;
                line-height: 72px;
                li{
                    color: hsla(0,0%,100%,.8);
                    cursor: pointer;
                    &:not(:last-child){
                        margin-right: 30px;
                    }
                    img{
                        margin-top: 22px;
                        margin-right: 6px;
                    }
                    span{
                        font-size: 20px;
                        font-weight: bold;
                        color: #fff;
                    }
                    button{
                        width: 80px;
                        background-color: transparent;
                        border: 2px solid hsla(0,0%,100%,.8);
                        padding: 4px 0;
                        text-align: center;
                        color: hsla(0,0%,100%,.8);
                        margin-right: 32px;
                        cursor: pointer;
                    }
                }
            }
            div{
                padding: 164px 0;
                h2{
                    width: 560px;
                    margin: auto;
                    border-bottom: 6px solid #fff;
                    padding-bottom: 32px;
                    position: relative;
                    font-size: 40px;
                    font-weight: 400;
                    color: #fff;
                    &:before {
                        content: "";
                        position: absolute;
                        bottom: -6px;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-bottom: 8px solid #228ce5;
                        border-right: 18px solid transparent;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        bottom: -6px;
                        right: 50%;
                        width: 0;
                        height: 0;
                        border-top: 8px solid #228ce5;
                        border-left: 18px solid transparent;
                    }
                }
                p{
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    font-size: 18px;
                    margin-top: 40px;
                    color: #fff;
                }
            }
        }
        .understand {
            padding-top: 80px;
            padding-bottom: 120px;
            h1{
                margin-bottom: 24px;
                color: #2a2f33;
                font-weight: 500;
                font-size: 36px;
                text-align: center;
            }
            h2{
                font-size: 16px;
                color: #545e66;
                text-align: center;
                width: 608px;
                margin: auto;
                line-height: 30px;
            }
            ul{
                width: 1128px;
                margin: 48px auto 0;
                li{
                    width: 318px;
                    margin: 0 28px;
                    border: 1px solid #e1e3e5;
                    transition: all .3s ease;
                    overflow: hidden;
                    cursor: pointer;
                    &:hover{
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
                        img{
                            transform: scale(1.2);
                        }
                    }
                    div{
                        width: 318px;
                        height: 160px;
                        overflow: hidden;
                        img{
                            width: 318px;
                            height: 160px;
                            transition: all .3s ease;
                        }
                    }
                    h3{
                        color: #2a2f33;
                        margin: 24px 20px 12px;
                        text-align: left;
                    }
                    p{
                        font-size: 14px;
                        color: #545e66;
                        text-align: left;
                        margin: 0 20px 46px;
                        height: 80px;
                        line-height: 26px;
                    }
                }
            }
        }
        .create{
            background-color: #34383b;
            text-align: center;
            color: #fff;
            padding-top: 80px;
            padding-bottom: 100px;
            h1{
                margin-bottom: 16px;
                font-weight: 400;
                font-size: 30px;
            }
            h2{
                font-size: 14px;
                opacity: .8;
            }
            >img{
                margin-top: 48px;
                width: 1000px;
            }
            h3{

            }
            h4{

            }
            button{
                font-size: 16px;
                margin-top: 48px;
                height: 44px;
                width: 200px;
                border: 2px solid #fff;
                background-color: transparent;
                transition: all .1s linear;
                color: #fff;
                cursor: pointer;
                &:hover{
                    background-color: #229aff;
                    border-color: #229aff;
                }
            }
        }
        .deploy{
            text-align: center;
            padding-top: 80px;
            padding-bottom: 100px;
            h1{
                font-size: 30px;
                margin-bottom: 16px;
                color: #292d31;
                font-weight: 400;
            }
            h2{
                font-size: 16px;
                color: #545e66;
            }
            .deployImg{
                width: 735px;
                height: 750px;
                margin: auto;
                position: relative;
                transform: scale(.9);
                div{
                    position: absolute;
                    &.application{
                        top: 0;
                        left: 345px;
                        z-index: 2;
                        opacity: 0;
                        animation: show .2s 1s forwards linear;
                        img{
                            width: 123px;
                            height: 165px;
                        }
                    }
                    &.arrow_bottom{
                        top: 148px;
                        left: 368px;
                        z-index: 1;
                        opacity: 0;
                        animation: fadeInDown .3s 1.6s forwards linear;
                        img{
                            width: 8px;
                            height: 84px;
                        }
                    }
                    &.smart_contract{
                        top: 234px;
                        left: 345px;
                        z-index: 5;
                        opacity: 0;
                        animation: fadeInDown .6s .3s forwards linear;
                        img{
                            width: 44px;
                            height: 95px;
                        }
                    }
                    &.smart_contract_word{
                        left: 418px;
                        top: 254px;
                        opacity: 0;
                        animation: show .6s .6s forwards linear;
                        img{
                            width: 66px;
                            height: 51px;
                        }
                    }
                    &.platform{
                        top: 258px;
                        z-index: 2;
                        opacity: 1;
                        img{
                            width: 735px;
                            height: 427px;
                        }
                    }
                    &.nodes{
                        top: 276px;
                        left: 72px;
                        z-index: 4;
                        opacity: 1;
                        img{
                            width: 585px;
                            height: 361px;
                        }
                    }
                    &.hyper_chain_grey{
                        top: 318px;
                        left: 126px;
                        z-index: 3;
                        opacity: 1;
                        img{
                            width: 489px;
                            height: 286px;
                        }
                    }
                    &.hyper_chain_word{
                        top: 543px;
                        left: 433px;
                        opacity: 1;
                        z-index: 5;
                        img{
                            width: 122px;
                            height: 125px;
                        }
                    }
                    &.ledger_word{
                        left: 130px;
                        top: 592px;
                        opacity: 0;
                        animation: show .3s 3.6s forwards linear;
                        img{
                            width: 94px;
                            height: 96px;
                        }
                    }
                    &.bills{
                        height: 0;
                        width: 36px;
                        background-color: #e9e9e9;
                        opacity: 1;
                        transform: skewY(30deg);
                        animation: showBill .4s 3s forwards linear;
                        &.bills_one{
                            top: 433px;
                            left: 126px;
                        }
                        &.bills_two{
                            top: 305px;
                            left: 349px;
                        }
                        &.bills_three{
                            top: 433px;
                            left: 575px;
                        }
                        &.bills_four{
                            top: 569px;
                            left: 349px;
                         }

                    }
                    &.blue{
                        width: 6px;
                        height: 1px;
                        transform-origin: 0 3px;
                        background-color: #3fa7ff;
                        z-index: 3;
                        opacity: 1;
                        animation: shortLine .6s 2.8s forwards linear;
                        &.blue_one{
                            top: 323px;
                            left: 365px;
                            transform: rotate(60deg);
                            animation: shortLine .6s 2.2s forwards linear;
                        }
                        &.blue_two{
                            top: 334px;
                            left: 365px;
                            transform: rotate(-60deg);
                            animation: shortLine .6s 2.2s forwards linear;
                        }
                        &.blue_three{
                            top: 323px;
                            left: 365px;
                            animation: shortLine .6s 2.2s forwards linear;
                        }
                        &.blue_four{
                            top: 579px;
                            left: 355px;
                            transform: rotate(120deg);
                            animation: shortLine .6s 2.8s forwards linear;
                        }
                        &.blue_five{
                            top: 455px;
                            left: 590px;
                            transform: rotate(60deg);
                            animation: shortLine .6s 2.8s forwards linear;
                        }
                        &.blue_six{
                            top: 459px;
                            left: 160px;
                            transform: rotate(-90deg);
                            animation: longLine .6s 2.8s forwards linear;
                        }
                    }
                }
            }
        }
        .join{
            background-color: #1d9df3;
            text-align: center;
            color: #fff;
            padding-top: 80px;
            padding-bottom: 100px;
            h1{
                font-size: 30px;
                margin-bottom: 16px;
                font-weight: 400;
            }
            h2{
                font-size: 16px;
            }
            .joinImg{
                width: 650px;
                height: 600px;
                position: relative;
                margin: auto;
                top: 10px;
                div{
                    position: absolute;
                    opacity: 0;
                    &.five_node{
                        top: 186px;
                        left: 50px;
                        z-index: 2;
                        opacity: 1;
                        img{
                            width: 576px;
                            height: 280px;
                        }
                    }
                    &.cube_one{
                        top: 280px;
                        animation: fadeInUp .6s 1.6s forwards ease-out;
                        img{
                            width: 22px;
                            height: 76px;
                        }
                    }
                    &.cube_two{
                        top: 440px;
                        left: 540px;
                        animation: fadeInUp .4s 1.6s forwards ease-out;
                        img{
                            width: 30px;
                            height: 102px;
                        }
                    }
                    &.cube_three{
                        top: 217px;
                        left: 640px;
                        animation: fadeInUp .5s 1.6s forwards ease-out;
                        img{
                            width: 17px;
                            height: 59px;
                        }
                    }
                    &.small_thing_one{
                        top: 436px;
                        left: 50px;
                        animation: fadeInUp .7s 1.6s forwards ease-out;
                        img{
                            width: 15px;
                            height: 53px;
                        }
                    }
                    &.small_thing_two{
                        top: 394px;
                        left: 590px;
                        animation: fadeInUp .4s 1.6s forwards ease-out;
                        img{
                            width: 15px;
                            height: 15px;
                        }
                    }
                    &.shining{
                        top: 36px;
                        left: 122px;
                        z-index: 1;
                        animation: show .6s 1.5s forwards ease-in;
                        img{
                            width: 408px;
                            height: 297px;
                        }
                    }
                    &.blue_node{
                        top: 126px;
                        left: 271px;
                        z-index: 3;
                        animation: show .5s 1.2s forwards linear;
                        img{
                            width: 130px;
                            height: 98px;
                        }
                    }
                    &.grey_node{
                        top: 125px;
                        left: 271px;
                        z-index: 4;
                        animation: fadeInDownOut 1.2s .5s forwards linear;
                        img{
                            width: 130px;
                            height: 98px;
                        }
                    }
                }
            }
        }
        .benefit{
            text-align: center;
            padding-bottom: 100px;
            padding-top: 80px;
            h1{
                color: #292d31;
                font-size: 30px;
            }
            ul{
                margin: 80px auto 0;
                width: 858px;
                li{
                    text-align: center;
                    margin: 0 50px;
                    img{
                        margin-bottom: 24px;
                    }
                    p{
                        color: #292d31;
                        font-size: 14px;
                    }
                    &:nth-child(1){
                        img{
                            width: 100px;
                            height: 93px;
                        }
                    }
                    &:nth-child(2){
                        img{
                            width: 82px;
                            height: 87px;
                        }
                    }
                    &:nth-child(3){
                        img{
                            width: 81px;
                            height: 94px;
                        }
                    }
                    &:nth-child(4){
                        img{
                            width: 92px;
                            height: 83px;
                        }
                    }
                }
            }
            button{
                width: 200px;
                padding: 12px 0;
                margin-top: 48px;
                color: #525b63;
                background-color: transparent;
                border: 2px solid #525b63;
                font-size: 16px;
                transition: all .1s linear;
                cursor: pointer;
                &:hover{
                    background-color: #229aff;
                    border-color: #229aff;
                    color: #fff;
                }
            }
        }
        .footer{
            background-color: #292e36;
            .footer_link{
                width: 1000px;
                margin: auto;
                padding-bottom: 30px;
                padding-top: 48px;
                color: #fff;
                div{
                    height: 180px;
                    h1{
                        font-size: 16px;
                        margin-bottom: 20px;
                        font-weight: 400;
                    }
                    p{
                        font-size: 14px;
                        color: hsla(0,0%,100%,.6);
                        margin-bottom: 12px;
                    }
                }
                div:nth-child(1){
                    width: 189px;
                    border-right: 1px solid hsla(0,0%,100%,.1);
                }
                div:nth-child(2){
                    width: 160px;
                    padding-left: 60px;
                }
                div:nth-child(3){
                    width: 160px;
                }
                div:nth-child(4){
                    width: 430px;
                }
            }
            .footer_copy{
                text-align: center;
                font-size: 14px;
                height: 60px;
                line-height: 60px;
                color: hsla(0,0%,100%,.5);
                background-color: #20242b;
            }
        }
    }
</style>
