// 配置路由映射表，导出 VueRouter 实例
// 路由映射表是路由和组件的映射关系，所以在这里，我们把组件导入进来；

import VueRouter from 'vue-router'; // vue-router已经安装在 node_modules 中，使用yarn或者npm装的

// 同在页面中使用script标签引入不同的地方
import Vue from 'vue';
Vue.use(VueRouter); // 调用Vue.use(VueRouter) 使用VueRouter

import home from './components/home.vue';
import list from './components/list.vue';

let routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/list',
    component: list
  }
];

export default new VueRouter({
  routes
})