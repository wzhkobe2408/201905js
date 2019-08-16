// 1. 引入 createStore 方法，createStore 是用来创建 store 的方法
import { createStore } from 'redux'

// 2. 创建 store，需要告诉 store 托管的数据和修改这些数据的方法；
// 告知 store 托管的数据和修改数据方法通过一种叫做 reducer 的函数完成；

// 被 redux 托管的状态（数据）不允许直接修改，如果要修改通过 reducer；

function reducer(state = {num: 9}, action) {
  // state 是当前redux托管的数据，state 在 reducer 函数中的默认值就是 state 的初始值
  // action 是修改状态具体的动作以及修改状态需要的参数；action 是一个带有 type 属性的对象，而 reducer 就是根据不同的 action.type 返回一个新的状态对象，以此实现修改状态的目的
  switch (action.type) {
    case 'ADD':
      return {
        num: state.num + action.amount
      }
    case 'MINUS':
      return {
        num: state.num - action.amount
      }

  }

  // 写 reducer 函数首先要 return state
  return state
}

// 创建 store ：给 createStore 传入 reducer
let store = createStore(reducer)

// 导出 store
export default store

// reducer 是修改状态的方法，但是不是用来直接执行的，如果需要修改 状态，我们需要 dispatch(actionObj)，传给 dispatch 的对象叫做 action，action 是一个必须带有 type 字段的对象，这个 action 将来会传给 reducer 函数；

/*store.dispatch({
  type: 'MINUS',
  // 除了 type 以外的其他属性称为 payload （载荷）
  amount: 1
})*/
