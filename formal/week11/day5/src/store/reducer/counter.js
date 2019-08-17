import * as Types from '../action-types'

export default function counter (state = {num: 9}, action) {
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
