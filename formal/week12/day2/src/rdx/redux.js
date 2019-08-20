function createStore(reducer) {
  let state;
  let listeners = []

  // 因为 state 的初始值是 reducer 函数的第一个参数的默认值
  // state = reducer(state, {}) // {num: 1}
  dispatch({}) // 这行代码是由上面一行代码进化来的，初始化 state

  function getState() {
    return JSON.parse(JSON.stringify(state))
  }

  // dispatch 发布更改状态指令的；修改状态的具体操作是由 reducer 完成的；reducer 函数每次都会返回一个全新的状态对象；拿到reducer 返回的新的状态对象覆盖掉原有的状态
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(i => i())
  }

  function subscribe(fn) {
    listeners.push(fn)

    return () => {
      listeners = listeners.filter(i => i !== fn)
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

function combineReducers(reducers) {
  // reducers: {counter: counter, todo: todo }
  // 合并之前:
  // counter: {num: 1}
  // todo: {list: [], filter: 'all'}
  // 合并之后：
  // {counter: {num: 1}, todo: {list: [], filter}}

  // combineReducers 函数的返回值可以直接传给 createStore，说明它 combineReducer 的返回值是一个新的 reducer；而 reducer 是会返回状态对象的函数；
  return (state = {}, action) => {
    let obj = {}
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action)
    }
    return obj
  }
}

export { createStore, combineReducers }
