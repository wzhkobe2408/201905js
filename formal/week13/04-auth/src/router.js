import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Edit from './views/Edit.vue'
import List from './views/List.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta: {
        // 把当前路由的权限信息写在 meta 里面
        needAuth: '/list'
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta: {
        needAuth: '/add'
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      meta: {
        needAuth: '/edit'
      }
    }
  ]
})

// 根据权限做全局导航守卫：
router.beforeEach((to, from, next) => {
  // 请求权限结束后权限已经存放在 ls 中
  let authStr = localStorage.getItem('AUTH')
  let auth = authStr ? JSON.parse(authStr) : []
  // console.log(to.meta) to.meta 中包含了要去往路由所需要的权限信息；我们需要从 auth 中查找是否有 to.meta 中要求的权限
  if (to.meta.needAuth) {
    let { needAuth } = to.meta
    let hasAuth = auth.some(item => item.auth === needAuth)
    if (hasAuth) {
      // 有权限
      next()
    } else {
      next(false)
    }
  } else {
    // to.meta.needAuth 不存在说明不需要验证权限；直接放行
    next()
  }
})

export default router

// 权限的实现：
// 1. 获取权限，把权限保存在 store 和 ls 中；
// 2. 如果是页面权限，使用导航守卫（如果是 vue 用 meta 保存权限信息，在导航守卫中验证；如果是 react ，需要用 Protected.js 验证）
// 3. 页面元素的权限，需要根据 store 中的权限做条件渲染：v-if，或者 react 的 if-else；
