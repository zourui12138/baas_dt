// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
// 按需引入element-ui
import {
    Menu, MenuItem, MenuItemGroup, Submenu,
    Breadcrumb, BreadcrumbItem,
    Row,Col,
    Table, TableColumn,
    Button, ButtonGroup, Input, DatePicker, Select, Option, Switch,
    Pagination,
    Form, FormItem
} from 'element-ui';
// 引入Menu组件
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
// 引入Breadcrumb
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
// 引入layout布局
Vue.use(Row);
Vue.use(Col);
// 引入Table
Vue.use(Table);
Vue.use(TableColumn);
// 引入Button
Vue.use(Button);
Vue.use(ButtonGroup);
// 引入Input
Vue.use(Input);
// 引入DatePicker
Vue.use(DatePicker);
// 引入分页Pagination
Vue.use(Pagination);
// 引入选择器
Vue.use(Select);
Vue.use(Option);
// 引入表单
Vue.use(Form);
Vue.use(FormItem);
// 引入switch开关
Vue.use(Switch);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
