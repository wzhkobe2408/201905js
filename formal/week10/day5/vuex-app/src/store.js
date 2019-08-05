import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// new Vuex.Store() 创建一个 store 这个 store 是用来托管数据的

export default new Vuex.Store({
  state: {
    num: 14
  },
  mutations: {
    // mutations中的方法是用来修改 store 中的状态的，这些方法只能通过commit mutation的方式得到调用
    addNum (state) {
      // 第一个参数是 上面的 state 对象，通过 state 可以修改state里面的状态
      state.num++
    },
    addNumByNum (state, payload) {
      // payload 称为 载荷 是提交mutation时传递过来的数据，通常payload是一个对象
      console.log(payload)
      state.num += payload.num
    }
  },
  actions: {
    // 在actions下面的方法称为action，action中可以有异步程序，例如ajax和定时器，
    // 在action中更新状态，仍然需要提交mutation
    asyncAdd (context, payload) {
      // context 对象上有commit方法，commit() 方法可以提交mutation
      // context 对象上还有dispatch 方法，用于分发其他的action
      console.log(payload)
      setTimeout(() => {
        context.commit('addNum') // 用context上的commit方法提交 addNum这个mutation
      }, 1000)
    }
  }
})
// Vuex 是专门为 vue.js 开发的状态管理模式（状态就是数据），采用集中式存储管理应用的状态；相当于把组件中的数据提升到一个全局的地方（所有的组件都能访问到），这个地方就是 vuex 的 store，如果某个组件需要这个数据，直接从 store 中获取（this.$store.state.数据名）；
// 存储在store中的状态同样是响应式的，当store中的状态发生变更时，所有用到这个状态的地方都会自动更新

// 如果想要修改 store 中的数据，只能提交mutation；但是mutation函数中只能写同步的程序的（修改state里面的状态不能写在异步程序中）

// 那么异步的处理写在哪里？写在actions中

// 使用 vuex 的步骤：
// 1. 安装vuex，并且配置 store.js 文件
// 2. 把需要 vuex 托管的数据放到 state 中
// 3. 如果 state 中的数据需要被修改，则创建相应的 mutation
// 4. 如果 state 中的数据会被异步修改，还需要创建 action，并且在 action 中使用 commit mutation 的方式修改 state 里面的数据
// 5. 最后导出一个 Vuex 的 Store 实例，并且在创建 Vue 的根实例的时候配置 store 属性，配置 store 属性以后，在组件中可以通过 this.$store 访问store实例，
// 6. 在整个 Vue 的应用中，任何地方都能访问状态，通过 this.$store.state.数据名 的方式
// 7. 更新数据，如果是同步更新，提交 mutation 【this.$store.commit(mutation的名字, 传给mutation的参数)】；如果是异步更新，分发 action 【this.$store.dispatch(action的名字, payload)】

// 个人建议，如果这些数据被多处依赖了，再放到 vuex 中；

// vuex 在项目中的应用，很多人都喜欢把数据都写在vuex中，不管是不是被多处依赖了；
