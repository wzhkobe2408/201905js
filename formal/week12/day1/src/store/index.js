// store/index.js 负责导出一个 store
import { createStore, combineReducers, applyMiddleware } from 'redux'

import todoReducer from './reducer/todo'

let store = createStore(todoReducer)

export default store

// 修改状态？？？
// 修改的具体的行动是由 reducer 完成的；dispatch 负责发布变更状态的指令
/*store.dispatch({
  type: 'ADD_TODO',
  title: 'hello world'
})*/
