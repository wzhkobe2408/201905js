import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Input1 from './views/Input1.vue'
import Select from './views/Select.vue'
import DatePicker from './views/DatePicker.vue'
import Form from './views/Form.vue'
import Table from './views/Table.vue'
import Dialog from './views/Dialog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/input1',
      component: Input1
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/date',
      component: DatePicker
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/dialog',
      component: Dialog
    }
  ]
})
