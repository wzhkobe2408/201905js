// main.js 是 Vue 页面的主入口
// components 下面放的都是 .vue 文件（一个文件就是一个组件）

// 这个js主要的任务就是创建 Vue 实例

import App from './components/app.vue';

import Vue from 'vue';

import router from './router';

// 创建Vue 实例

new Vue({
  el: '#app',
  // template: `<App />`,
  render: (h) => h(App), // h 是 createElement 方法，render函数是用来替代template属性的，webpack+配置vue的时候不能template，
  router
});

// 现阶段目标：main.js app.vue router.js 这三者是如何联系起来的；

// main.js 是创建一个vue实例，最终只把 app.vue 这个组件挂载到 DOM 节点上； 而app.vue 中有 router-view ，而router-view 可以根据路由展示组件；组件通过路由映射表和路由关联起来，最后把路由映射表传给new VueRouter；

// 最后把VueRouter的实例传给 Vue的实例；




