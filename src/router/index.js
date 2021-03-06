import Vue from 'vue'
import Router from 'vue-router'
// 德同BAAS平台
import Platform from '../modules/platform/Platform'
// 平台管理
import Home from '../modules/platform/platformManage/Home'
import HomeDetail from '../modules/platform/platformManage/HomeDetail'
import NodeManage from '../modules/platform/platformManage/NodeManage'
import NodeManageDetail from '../modules/platform/platformManage/NodeManageDetail'
import ContractManage from '../modules/platform/platformManage/ContractManage'
import BlockQuery from '../modules/platform/platformManage/BlockQuery'
// 平台监控
import MonitorMsg from '../modules/platform/platformMonitor/MonitorMsg'
import MonitorList from '../modules/platform/platformMonitor/MonitorList'
import MonitorPolicy from '../modules/platform/platformMonitor/MonitorPolicy'
// 平台配置
import HighAvailability from '../modules/platform/platformConfig/HighAvailability'
import SystemParams from '../modules/platform/platformConfig/SystemParams'
import SafetyConfig from '../modules/platform/platformConfig/SafetyConfig'
import PeerConfig from '../modules/platform/platformConfig/PeerConfig'
// 统计监管
import PlatformStatistics from '../modules/platform/statisticsMonitor/PlatformStatistics'
// 德同开发者平台
import Developer from '../modules/developer/Developer'
// 德同合约管理系统
import Contract from '../modules/contract/Contract'
import ContractItemsOne from '../modules/contract/items/ItemsOne'
import ContractItemsTwo from '../modules/contract/items/ItemsTwo'
import ContractItemsThree from '../modules/contract/items/ItemsThree'
import ContractItemsFour from '../modules/contract/items/ItemsFour'
// 404处理
import NotFound from '../modules/error/NotFound'

Vue.use(Router);

export default new Router({
    routes: [
        // 路由不存在的时候出现页面
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        // 重定向
        {
            path: '/',
            redirect: '/developer'
        },
        // 德同BAAS平台路由
        {
            path: '/platform',
            name: 'platform',
            component: Platform,
            children: [
                // 平台管理
                {
                    path: '/platform/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/platform/home/:uuid',
                    name: 'homeDetail',
                    component: HomeDetail
                },
                {
                    path: '/platform/nodeManage',
                    name: 'nodeManage',
                    component: NodeManage
                },
                {
                    path: '/platform/nodeManage/:uuid',
                    name: 'nodeManageDetail',
                    component: NodeManageDetail
                },
                {
                    path: '/platform/contractManage',
                    name: 'contractManage',
                    component: ContractManage
                },
                {
                    path: '/platform/blockQuery',
                    name: 'blockQuery',
                    component: BlockQuery
                },
                // 平台监控
                {
                    path: '/platform/monitorMsg',
                    name: 'monitorMsg',
                    component: MonitorMsg
                },
                {
                    path: '/platform/monitorList',
                    name: 'monitorList',
                    component: MonitorList
                },
                {
                    path: '/platform/monitorPolicy',
                    name: 'monitorPolicy',
                    component: MonitorPolicy
                },
                // 平台配置
                {
                    path: '/platform/highAvailability',
                    name: 'highAvailability',
                    component: HighAvailability
                },
                {
                    path: '/platform/systemParams',
                    name: 'systemParams',
                    component: SystemParams
                },
                {
                    path: '/platform/safetyConfig',
                    name: 'safetyConfig',
                    component: SafetyConfig
                },
                {
                    path: '/platform/peerConfig',
                    name: 'peerConfig',
                    component: PeerConfig
                },
                // 统计监管
                {
                    path: '/platform/platformStatistics',
                    name: 'platformStatistics',
                    component: PlatformStatistics
                }
            ]
        },
        // 德同开发者平台
        {
            path: '/developer',
            name: 'developer',
            component: Developer
        },
        // 德同合约管理系统
        {
            path: '/contract',
            name: 'contract',
            component: Contract,
            children: [
                {
                    path: '/contract/contractItemsOne',
                    name: 'contractItemsOne',
                    component: ContractItemsOne
                },
                {
                    path: '/contract/contractItemsTwo',
                    name: 'contractItemsTwo',
                    component: ContractItemsTwo
                },
                {
                    path: '/contract/contractItemsThree',
                    name: 'contractItemsThree',
                    component: ContractItemsThree
                },
                {
                    path: '/contract/contractItemsFour',
                    name: 'contractItemsFour',
                    component: ContractItemsFour
                }
            ]
        }
    ]
});
