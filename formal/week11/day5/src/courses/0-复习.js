import { createStore, combineReducers } from 'redux'
// 1. redux
// redux 是一种状态管理模式，就像 vue 中 vuex；是用来全局托管组件的状态，可以简化父子组件间数据传递，解决兄弟组件间无法共享数据的问题；

// redux 最终导出一个 store ，这个 store 中包含了我们托管给 redux 的状态，以及获取状态的方法、修改状态的方法

// 创建 store 需要使用 createStore 方法

// reducer 初始化状态、定义如何修改状态
// reducer 每次都会返回一个新的状态对象，以实现修改状态的目的
function counter(state = {num: 9}, action) {
  switch (action.type) {
    case 'ADD':
      return {
        num: state.num + action.amount
      }
    case 'MINUS':
      return {
        num: state.num - action.amount
      }
    default:
      return state
  }
  // return state
}

let initTodo = {
  list: ['今天吃药了吗', '今天吃饭了吗'],
  filter: 'all'
}
function todo(state = initTodo, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        list: [
          ...state.list,
          action.title
        ]
      }
  }
  return state
}

// 多个 reducer 需要合并 reducer
// combineReducers 接收一个对象作为参数，这个对象的属性名将会成为 store 所托管状态的命名空间；使用 combineReducers 以后，在组件中使用状态时需要在 getState 后 点一下命名空间：例如在Counter 中获取 num ：store.getState().counter.num

let zhengheReducers = combineReducers({
  counter,
  todo
})

let store = createStore(zhengheReducers)

export default store

/*store.dispatch({
  type: 'ADD',
  amount: 3
})*/

// 在组件中使用 redux（store） 托管的状态
// 1. 在组件中导入 store
// 2. 用 store 中的状态初始化组件中的 state；例如：
// Counter.js 中初始化状态
this.state = {
  num: store.getState().counter.num
}
// 3. 把状态映射到视图上，就是通过 this.state.num 绑定到 jsx 元素上
// 4. 当需要修改状态的时候调用：store.dispatch(action对象)，action 对象中要有 type 字段以及传递给 reducer 的 payload
// 5. 如果要更新视图，需要订阅状态更新：在 componentDidMount
this.unsub = store.subscribe(() => {
  this.setState({
    num: store.getState().counter.num
  })
}) // 在 componentWillUnmount 中调用上面的 this.unsub 取消订阅

// 我们发现用了 redux 代码组织起来更繁琐了，为了简化这一个过程，我们需要使用 react-redux

