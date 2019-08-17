// actionCreator action 创建器
// 在 dispatch 或者 使用 react-redux 时需要 actionCreator 对象，所以我们在这里导出一个 actionCreator 对象
import * as Types from '../action-types'

export default {
  add1 (amount) {
    // 使用 redux-thunk 中间件可以使 actionCreator 返回一个函数；这个函数有两个参数：dispatch 和 getState；dispatch 就是 store.dispatch ，getState 就是 store.getState；就相当于 dispatch 的权利交给了这个函数，在这个函数中想什么时候更新状态就什么时候更新状态，所以就可以在定时器和ajax中更新 store 中的状态了
    return (dispatch, getState) => {
      // dispatch 就是 store.dispatch
      // getState 就是 store.getState

      setTimeout(() => {
        dispatch({
          type: Types.ADD,
          amount
        })
      }, 2000)
    }
  },
  minus1 (amount) {
    // 使用 redux-promise 以后，actionCreator 中使用 Promise 有两种用法：
    // 1. 直接在 actionCreator 中返回一个 Promise，这种用法只能处理 resolve 的情况，并且是在 resolve() 传入 action 对象；
    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          type: Types.MINUS,
          amount
        })
      }, 2000)
    })*/

    // 2. 如果 resolve 和 reject 都要处理，此时我们在 actionCreator 中返回一个 action 对象，这个 action 对象有一个 payload 属性，值是一个 Promise 实例；如果 Promise resolve 了，payload 属性的值就是 resolve() 时传入的值，如果 reject 了，payload 就是 reject() 执行传入的值；如果 reducer 用到了 resolve 或者 reject的值，对应的 reducer 也需要改

    return {
      type: Types.MINUS,
      payload: new Promise((resolve, reject) => {
        // resolve(3)
        reject(2)
      })
    }
  }
}
