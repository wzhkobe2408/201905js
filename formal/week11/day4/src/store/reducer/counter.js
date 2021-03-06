import * as Types from '../action-types'

function counter(state = {num: 9, x: 777}, action) {

  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        num: state.num + action.amount
      }
    case Types.MINUS:
      return {
        ...state,
        num: state.num - action.amount
      }
  }

  // 写 reducer 函数首先要 return state
  return state
}

export default counter
