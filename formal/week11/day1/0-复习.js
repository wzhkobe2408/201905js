// 1. Vue MVVM 的框架: 数据驱动，双向数据绑定（视图是数据的映射）

// 2. Vue 的模板语法：小胡子语法（moustache）{{‘变量’或者表达式}}， 变量 是指data中的数据、methods中的方法、computed里面的属性.. 以上这些属性最终都会被 Vue的实例 vm 所代理



// 3. 指令：以 v- 开头的特殊的行内属性，Vue 赋予了这些属性特殊的能力；
// 3.1 v-for 列表渲染
// 3.2 v-if/ v-else 条件渲染
// 3.3 v-show 条件渲染
// 3.4 v-html
// 3.5 v-bind
// 3.6 v-on
// 3.7 v-model
// 3.8 v-text

// 4. 自定义指令：
// 全局指令：Vue.directive('指令名字', 配置对象或者函数)
// 局部指令：directives

// 5. 过滤器：
// 全局过滤器：Vue.filter('过滤器名字', (val) => {val 是管道符前面的数据})
// 局部过滤器：

// 6. computed: 处理单个或者多个数据的复杂展示逻辑
// 'hello' 可以 => split / reverse / join
// 如果不让用 split / reverse / join ，倒着循环

// 7. watch 侦听器属性

// 8. vue-router:
// 8.1 安装 vue-router
// 8.2 使用它（script/ import 然后Vue.use() ）
// 8.3 配置路由映射表
// 8.4 创建 vue-router 的实例，传入 路由映射表，然后导出实例
// 8.5 给 Vue 的根实例，配置 router 属性，属性的值就是上一步导出的 vue-router 的实例
// 8.6 在 App.vue 中写 <router-view />，如果有嵌套路由，还需要在有嵌套路由的组件中 写一个 router-view; ？？？ router-view 是根据路由渲染组件的；（组件和路由的对应关系，已经在路由映射表中配置了）

// 8.7 router-link 编程式导航 to 指定路由，tag 属性指定 router-link 渲染成何种标签；to="/list"（to 的属性值是一个path），:to="{name: 'list', params: {动态路由的参数}, query: {问号传参} }"

// 8.8 用方法切换路由：this.$router.push() 方法接受的参数和 router-link 的 to 属性的值一样，可以是 path 还可以是一个路由对象
// 8.9 this.$router.go(-1) 返回上一页
// 8.10 用来做登录状态或者权限验证的；导航守卫：全局导航守卫、路由独享守卫、组件内导航守卫

// 9. 生命周期：Vue 在实例化的时候，在特定的阶段会调用特定的函数，这些函数就是生命周期的钩子函数；
// 9.1 beforeCreate 不能 通过this访问实例属性
// 9.2 created 可以访问this，可以发送 ajax 请求
// 9.3 beforeMount
// 9.4 mounted 挂载后 ；也可以发 ajax 请求；可以操作 DOM ；（关于操作DOM，ref、数据更新后 DOM 是异步更新的、$nextTick）
// 9.5 beforeUpdate
// 9.6 updated
// 9.7 beforeDestroy 组件实例销毁前调用，此时实例上的所有东西都可以用，我们一般在这里清除定时器
// 9.8 destroyed 组件实例销毁后调用该钩子，数据也不是响应式的

// 10 组件通信：Vue 是单向数据流
// 父 -> 子：props （属性），父组件在使用子组件时，写在子组件标签的行内属性；<Header content="头信息" :back="back"></Header>
// 子 -> 父：事件和 sync 修饰符；谁的数据被修改谁监听事件，谁发起修改谁触发事件；子 -> 父，父组件监听事件、子组件触发事件；
// 非父子通信：eventBus，利用一个 空的 Vue 实例来监听和触发事件；遵循谁的数据被修改，谁监听事件，谁发起修改谁触发事件

// 11. vuex 为 vue.js 应用开发的状态（数据）管理模式；全局托管 vue 组件中的数据，如果数据存放在 vuex 中，在任何组件中都可以拿得到；而且 Vuex 中的数据是响应式的，一旦被修改，所有依赖这个数据的地方都会自动被更新

// 11.1 使用 vuex：
// 11.1.1 导入过来，还需要 Vue.use()
// 11.1.2 导出 new Vuex.Store() store 实例
// 11.1.3 实例化的时候传入几个属性：state 里面放的是全局托管的数据（state中的数据不能直接修改）；如果组件中要使用 state 中的数据：this.$store.state.xxx
// 11.1.4 如果要修改 state 里面的数据，需要创建修改这个数据的 mutation；当修改的时候 commit mutation；this.$store.commit(mutation名字, payload)；mutation 中修改状态必须是同步的，不能使用异步方式；
// 11.1.5 actions 里面可以放异步，如果有 ajax 和定时器，要创建action；如果在 action 中修改数据，仍然需要提交 mutation
// 11.2 最后不要忘记给 Vue 的根实例配置 store 属性，配置完以后 才能使用 this.$store

let str = 'hello'
for (let i = str.length - 1; i >= 0; i--) {

}


let vm = new Vue({
  el: '#app',
  data () {
    return {
      // 数据
      name: ''
    }
  },
  computed: {
    // 计算属性
    total () {
      // 函数形式的 计算属性相当于 get 形式；不能修改 total
      return 'xyz'
    },
    checked: {
      // 对象形式的 计算属性 可以获取，也可以修改
      get () {
        // 当获取 checked 属性时会执行 get 方法
      },
      set (val) {
        // 当设置 checked 属性（给 checked 属性重新赋值），就会执行 set 方法
      }
    }
  },
  methods: {
    // 方法
  },
  components: {
    // 注册子组件
  },
  directives: {
    // 局部指令
  },
  filters: {
    // 局部过滤器
  },
  watch: {
    // 监听 data 中的属性，如果 data 中属性发生变化，就会执行对应的方法
    name (newVal, oldVal) {
      // newVal name 属性的新值
      // oldVal name 属性上一次的值
    }
  },
  router: router, // router 是 vue-router 的实例
  store // store 是 Vuex 的 store 实例
})
