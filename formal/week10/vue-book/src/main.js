// main.js 是 Vue 应用的主入口，这个文件就是创建 Vue 的实例，在创建实例的时候把该配置的属性都要配置，如router，store，el

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
