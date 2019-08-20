import { createStore } from './redux'

import * as Types from './actionTypes'

// reducer
function counter(state = {num: 1}, action) {
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
  return state
}

let initTodo = {
  list: [],
  filter: 'all'
}

function todo(state = initTodo, action) {
  switch (action.type) {
    case Types.ADD_TODO:
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


export default createStore(counter)
