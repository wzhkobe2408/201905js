import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Collect from './views/Collect.vue'
import Add from './views/Add.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: Home
    // alias: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
    // alias: '/home'
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/collect',
    component: Collect
  },
  {
    path: '/add',
    component: Add
  }
]

export default new Router({
  routes
})
