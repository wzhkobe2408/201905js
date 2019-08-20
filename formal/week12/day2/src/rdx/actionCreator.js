// actionCreator 是返回 action 对象的函数
import * as Types from './actionTypes'

export default {
  add (amount) {
    return {
      type: Types.ADD,
      amount
    }
  },
  minus (amount) {
    return {
      type: Types.MINUS,
      amount
    }
  }
}
