<template>
    <div id="platform">
        <header class="header clear">
            <div class="logo fl"><img src="../../assets/img/platform/logo.png" alt=""><span>德同BAAS平台</span></div>
            <div class="system fl">
                <img class="fl" src="../../assets/img/platform/breadcrumbs.png" alt="">
                <ul class="fr">
                    <li class="fl">你好！韩梅梅</li>
                    <li class="fl"><img src="../../assets/img/platform/portrait.png" alt=""></li>
                    <li class="fl">
                        <img src="../../assets/img/platform/monitor.png" alt="">
                        <div>2</div>
                    </li>
                    <li class="fl"><img src="../../assets/img/platform/system.png" alt=""></li>
                    <li class="fl"><img src="../../assets/img/platform/logout.png" alt=""></li>
                </ul>
            </div>
        </header>
        <section class="section clear">
            <VuePerfectScrollbar class="aside fl">
                <el-menu
                    background-color="#fff"
                    text-color="#92a1a6"
                    active-text-color="#2871fe"
                    router
                    :default-active="initCurrentMenu()">
                    <el-menu-item-group title="平台管理">
                        <el-menu-item index="/platform/home"><i class="el-icon-menu"></i><span>平台总览</span></el-menu-item>
                        <el-menu-item index="/platform/nodeManage"><i class="el-icon-share"></i><span>节点管理</span></el-menu-item>
                        <el-menu-item index="/platform/contractManage"><i class="el-icon-document"></i><span>合约管理</span></el-menu-item>
                        <el-menu-item index="/platform/blockQuery"><i class="el-icon-search"></i><span>区块查询</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="平台监控">
                        <el-menu-item index="/platform/monitorMsg"><i class="el-icon-bell"></i><span>监控信息</span></el-menu-item>
                        <el-menu-item index="/platform/monitorList"><i class="el-icon-document"></i><span>告警列表</span></el-menu-item>
                        <el-menu-item index="/platform/monitorPolicy"><i class="el-icon-edit-outline"></i><span>告警策略</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="平台配置">
                        <el-menu-item index="/platform/highAvailability"><i class="el-icon-view"></i><span>高可用管理</span></el-menu-item>
                        <el-menu-item index="/platform/systemParams"><i class="el-icon-setting"></i><span>系统参数</span></el-menu-item>
                        <el-menu-item index="/platform/safetyConfig"><i class="el-icon-circle-check-outline"></i><span>安全配置</span></el-menu-item>
                        <el-menu-item index="/platform/peerConfig"><i class="el-icon-more-outline"></i><span>Peer配置</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="统计监管">
                        <el-menu-item index="/platform/platformStatistics"><i class="el-icon-info"></i><span>平台统计</span></el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </VuePerfectScrollbar>
            <VuePerfectScrollbar class="main fl" v-scroll>
                <div class="breadcrumb clear">
                    <header class="fl">所在位置：</header>
                    <el-breadcrumb class="fl" separator="/">
                        <el-breadcrumb-item>{{breadcrumbGroup}}</el-breadcrumb-item>
                        <el-breadcrumb-item>{{breadcrumbName}}</el-breadcrumb-item>
                        <el-breadcrumb-item v-if="$route.name === 'homeDetail' || $route.name === 'nodeManageDetail'">详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <router-view/>
            </VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "Platform",
        components: {VuePerfectScrollbar},
        computed: {
            breadcrumbGroup() {
                let breadcrumb;
                switch (this.$route.name) {
                    case 'home' : breadcrumb = '平台管理';break;
                    case 'homeDetail' : breadcrumb = '平台管理';break;
                    case 'nodeManage' : breadcrumb = '平台管理';break;
                    case 'nodeManageDetail' : breadcrumb = '平台管理';break;
                    case 'contractManage' : breadcrumb = '平台管理';break;
                    case 'blockQuery' : breadcrumb = '平台管理';break;
                    case 'monitorMsg' : breadcrumb = '平台监控';break;
                    case 'monitorList' : breadcrumb = '平台监控';break;
                    case 'monitorPolicy' : breadcrumb = '平台监控';break;
                    case 'highAvailability' : breadcrumb = '平台配置';break;
                    case 'systemParams' : breadcrumb = '平台配置';break;
                    case 'safetyConfig' : breadcrumb = '平台配置';break;
                    case 'peerConfig' : breadcrumb = '平台配置';break;
                    case 'platformStatistics' : breadcrumb = '统计监管';break;
                }
                return breadcrumb;
            },
            breadcrumbName() {
                let breadcrumb;
                switch (this.$route.name) {
                    case 'home' : breadcrumb = '平台总览';break;
                    case 'homeDetail' : breadcrumb = '平台总览';break;
                    case 'nodeManage' : breadcrumb = '节点管理';break;
                    case 'nodeManageDetail' : breadcrumb = '节点管理';break;
                    case 'contractManage' : breadcrumb = '合约管理';break;
                    case 'blockQuery' : breadcrumb = '区块查询';break;
                    case 'monitorMsg' : breadcrumb = '监控信息';break;
                    case 'monitorList' : breadcrumb = '告警列表';break;
                    case 'monitorPolicy' : breadcrumb = '告警策略';break;
                    case 'highAvailability' : breadcrumb = '高可用管理';break;
                    case 'systemParams' : breadcrumb = '系统参数';break;
                    case 'safetyConfig' : breadcrumb = '安全配置';break;
                    case 'peerConfig' : breadcrumb = 'Peer配置';break;
                    case 'platformStatistics' : breadcrumb = '平台统计';break;
                }
                return breadcrumb;
            }
        },
        methods: {
            initCurrentMenu() {
                let index = this.$route.path;
                this.$route.name === 'homeDetail' && (index = '/platform/home');
                this.$route.name === 'nodeManageDetail' && (index = '/platform/nodeManage');
                return index;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #platform{
        height: 100%;
        .header{
            height: 90px;
            line-height: 90px;
            background-color: #fff;
            .logo{
                background-color: #2871fe;
                width: 382px;
                text-align: center;
                color: #fff;
                font-size: 24px;
                img{
                    margin-top: 31px;
                    margin-right: 15px;
                }
            }
            .system{
                padding: 0 45px;
                border-bottom: 1px solid #eaebef;
                height: 89px;
                line-height: 89px;
                width: calc(100% - 472px);
                >img{
                    margin-top: 33px;
                    cursor: pointer;
                }
                ul{
                    li{
                        margin-left: 20px;
                        position: relative;
                        div{
                            position: absolute;
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 16px;
                            color: #fff;
                            background-color: #8752ff;
                            top: 50px;
                            left: 20px;
                            font-size: 12px;
                        }
                        img{
                            vertical-align: middle;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .section{
            height: calc(100% - 90px);
            .aside{
                height: 100%;
                width: 382px;
                background-color: #fff;
            }
            .main{
                width: calc(100% - 472px);
                height: calc(100% - 45px);
                padding: 0 45px 45px;
            }
        }
    }
</style>
