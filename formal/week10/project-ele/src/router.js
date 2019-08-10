import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: []
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, form, next) => {
  let token = localStorage.getItem('ACCESS_TOKEN')
  if (token || to.fullPath === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router
