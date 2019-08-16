// 1. 引入 createStore 方法，createStore 是用来创建 store 的方法
import { createStore, combineReducers } from 'redux'

import * as Types from './action-types' // {ADD: 'ADD', MINUS: 'MINUS'}

// counter 是托管和修改计数器的状态的 reducer
function counter(state = {num: 9}, action) {

  switch (action.type) {
    case Types.ADD:
      return {
        num: state.num + action.amount
      }
    case Types.MINUS:
      return {
        num: state.num - action.amount
      }
  }

  // 写 reducer 函数首先要 return state
  return state
}

// todo 是托管任务列表状态的 reducer
let initState = {
  list: ['今天吃药了吗', '今天吃饭了吗'],
  filter: 'all'
} // initState 是 redux 托管的任务列表状态的初始值
function todo(state = initState, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        list: [ // 这个 list 会覆盖掉上面 ... 展开出来的 list
          ...state.list,
          action.text // action.text 是dispatch的时候传来的载荷
        ]
      }
  }
  return state
}

// redux 是单一状态树，整个应用中只能有一个 store，但是有一个组件就有一个reducer，而 createStore 只能接收一个 reducer，此时我们需要合并这些 reducer，合并 reducer 需要一个 combineReducers 方法，这个方法在 redux 上，导入即可

// 使用 combineReducers
// 1. combineReducers 接收一个对象，对象中的属性名将会成为对应被托管状态的命名空间，如果获取状态需要通过命名空间获取：store.getState().命名空间
// 2. combineReducers 会返回一个整合后的 reducer
let zhengheReducers = combineReducers({
  counter: counter,
  todo: todo
})


// 创建 store ：给 createStore 传入整合后的 reducer
let store = createStore(zhengheReducers)

// 导出 store
export default store
