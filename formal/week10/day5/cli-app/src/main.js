import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全量引入
// 首先安装element-ui
// 然后再 main.js 中导入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 调用Vue.use 安装 ElementUI
Vue.use(ElementUI)

// 按需引入：需要哪个组件，就从element-ui 导出哪个组件
// import { Button, Select } from 'element-ui'
// Vue.use(Button)
// Vue.use(Select)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
