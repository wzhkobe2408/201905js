// 导航守卫：验证用户到底该不该看到它想看到的页面，验证权限和登录状态；
// 1. 全局前置导航守卫：router.beforeEach((to, from, next) => {
//  to 要去往路由的信息
//  from 当前正要离开的路由的信息，to 和 from 都是路由对象，动态路由的参数和问号传参、当前的路由都可以获取到
// next 控制权函数：
// next() 校验通过时执行
// next(false) 中断导航，如果路由发生变化，则回退到当前页面的路由
// next('/login') 重定向到某个路由
// })

// 2. 路由独享的导航守卫：在路由映射表中配置独享的守卫
let home = {};
let user = {};
let routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/user',
    component: user,
    beforeEnter (to, from, next) {
      // 路由独享守卫
    }
  }
];

// 3. 组件内的导航守卫:
// 3.1 beforeRouteEnter (to, from, next) {} 不能访问this实例
// 3.2 beforeRouteUpdate (to, from, next) {} 动态路由，组件被复用，路由参数发生改变时调用
// 3.3 beforeRouteLeave (to, from, next) {} 离开当前页时触发，提醒用户数据已经保存了；

// webpack-vue 需要以下东西：
// 安装 vue-template-compiler 依赖
// 配置 vue-loader 和 vue-loader的插件
// * 修改 webpack 配置文件后如果是开发中，要重启dev-server；如果生产环境，要重新打包；

// npm run dev 是因为 在 package.json 的 scripts下面配置了；
// scripts 下面的 start 命令比较特殊，直接 npm start （不用写run）

// vue-cli vue 官方的脚手架，可以快速搭建项目，默认了很多的webpack配置




