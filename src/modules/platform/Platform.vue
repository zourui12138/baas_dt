<template>
    <div id="platform">
        <header class="header clear">
            <div class="logo fl"><img src="../../assets/img/platform/logo.png" alt=""><span>德同BAAS平台</span></div>
            <div class="system fl">
                <img class="fl" src="" alt="">
                <ul class="fr">
                    <li class="fl">你好！韩梅梅</li>
                    <li class="fl"><img src="" alt=""></li>
                    <li class="fl"><img src="" alt=""></li>
                    <li class="fl"><img src="" alt=""></li>
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
                    :default-active="$route.path">
                    <el-menu-item-group title="平台管理">
                        <el-menu-item index="/platform/home"><i class="el-icon-location"></i><span>平台总览</span></el-menu-item>
                        <el-menu-item index="/platform/nodeManage"><i class="el-icon-location"></i><span>节点管理</span></el-menu-item>
                        <el-menu-item index="/platform/contractManage"><i class="el-icon-location"></i><span>合约管理</span></el-menu-item>
                        <el-menu-item index="/platform/blockQuery"><i class="el-icon-location"></i><span>区块查询</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="平台监控">
                        <el-menu-item index="/platform/monitorMsg"><i class="el-icon-location"></i><span>监控信息</span></el-menu-item>
                        <el-menu-item index="/platform/monitorList"><i class="el-icon-location"></i><span>告警列表</span></el-menu-item>
                        <el-menu-item index="/platform/monitorPolicy"><i class="el-icon-location"></i><span>告警策略</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="平台配置">
                        <el-menu-item index="/platform/highAvailability"><i class="el-icon-location"></i><span>高可用管理</span></el-menu-item>
                        <el-menu-item index="/platform/systemParams"><i class="el-icon-location"></i><span>系统参数</span></el-menu-item>
                        <el-menu-item index="/platform/safetyConfig"><i class="el-icon-location"></i><span>安全配置</span></el-menu-item>
                        <el-menu-item index="/platform/peerConfig"><i class="el-icon-location"></i><span>Peer配置</span></el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="统计监管">
                        <el-menu-item index="/platform/platformStatistics"><i class="el-icon-location"></i><span>平台统计</span></el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </VuePerfectScrollbar>
            <VuePerfectScrollbar class="main fl" v-scroll>
                <div class="breadcrumb clear">
                    <header class="fl">所在位置：</header>
                    <el-breadcrumb class="fl" separator="/">
                        <el-breadcrumb-item>平台管理</el-breadcrumb-item>
                        <el-breadcrumb-item>平台总览</el-breadcrumb-item>
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
        components: {VuePerfectScrollbar}
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
