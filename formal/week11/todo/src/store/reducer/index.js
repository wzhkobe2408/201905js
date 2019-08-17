// reducer 函数：
// reducer 函数是用来初始化状态、定义如何修改状态
import * as Types from '../action-types'

let initTodo = {
  list: [
    {
      id: 1,
      title: '今天吃药了吗',
      isSelected: false
    },
    {
      id: 2,
      title: '今天吃饭了吗',
      isSelected: true
    }
  ],
  filter: 'all'
}

export default function todo(state = initTodo, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length ? state.list[state.list.length - 1].id + 1 : 1,
            title: action.title,
            isSelected: false
          }
        ]
      }
    case Types.DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      }
    case Types.CHANGE_SELECTED:
      return {
        ...state,
        list: state.list.map((item, index) => {
          if (item.id === action.id) {
            item.isSelected = !item.isSelected
            return item
          }
          return item
        })
      }
    case Types.CHANGE_CURRENT_FILTER:
      return {
        ...state,
        filter: action.filter
      }
  }
  return state
}
