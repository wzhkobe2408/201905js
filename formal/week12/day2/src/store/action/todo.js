// action/todo.js 导出一个 actionCreator 对象；
// actionCreator 返回一个 action 对象的函数
// action 带有 type 字段的对象

import * as Types from '../action-types'

export default {
  addTodo (title) {
    return {
      type: Types.ADD_TODO,
      title
    }
  },
  deleteTodo (id) {
    return {
      type: Types.DELETE_TODO,
      id
    }
  },
  changeSelected (id) {
    return {
      type: Types.CHANGE_SELECTED,
      id
    }
  },
  changeCurrentFilter (filter) {
    return {
      type: Types.CHANGE_CURRENT_FILTER,
      filter
    }
  }
}
