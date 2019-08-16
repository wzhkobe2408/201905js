// action/todo.js 放的是 Todo.js 需要的 actionCreator

import * as Types from '../action-types'

function addTodo(text) {
  return {
    type: Types.ADD_TODO,
    text
  }
}

// 一般在 actionCreator 中导出一个对象
export default {
  addTodo
}
