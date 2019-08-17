// actionCreator action 创建器
// 在 dispatch 或者 使用 react-redux 时需要 actionCreator 对象，所以我们在这里导出一个 actionCreator 对象
import * as Types from '../action-types'

export default {
  add1 (amount) {
    return {
      type: Types.ADD,
      amount
    }
  },
  minus1 (amount) {
    return {
      type: Types.MINUS,
      amount
    }
  }
}
