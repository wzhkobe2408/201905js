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



