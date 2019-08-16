// action/counter.js 是 Counter.js 中的 actionCreator 函数
import * as Types from "../action-types"

function add(amount) {
  return {
    type: Types.ADD,
    amount
  }
}

function minus(amount) {
  return {
    type: Types.MINUS,
    amount
  }
}

export default {
  add,
  minus
}
