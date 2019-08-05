import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, // 配置 store 属性以后，组件实例 this 可以通过this.$store访问store实例
  render: h => h(App)
}).$mount('#app')
