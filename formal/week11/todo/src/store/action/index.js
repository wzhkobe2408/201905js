import * as Types from '../action-types'

// action/index.js 是 actionCreator ，actionCreator 是返回 action 对象的函数

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
