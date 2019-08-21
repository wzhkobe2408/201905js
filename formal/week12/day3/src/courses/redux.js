// store 是 redux createStore 执行时传入 reducer 的结果；状态是被托管在 store，store 是一个单一状态树，整个应用中只有一个 store

// reducer 是一个函数，用来初始化状态、定义如何修改状态；

// action 是一个带有 type 字段的对象；指明如何修改状态和 reducer 函数中的每个 case 相对应的；

// dispatch 派发，在需要修改状态时，通过 dispatch 派发一个 action 来发一个修改状态的命令，但是最终去做修改状态这件事的是 reducer

// getState 从 store 中获取状态的方法

// subscribe 订阅状态更新，给 subscribe 传一个回调函数，就是订阅状态更新，redux 会在状态更新后执行你的回调
function createStore (reducer) {
  let state;
  let listeners = [] // 事件池

  dispatch({}) // 初始化 state

  function getState() {
    return JSON.parse(JSON.stringify(state))
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(fn => fn())
  }

  function subscribe(fn) {
    listeners.push(fn)

    return () => {
      listeners = listeners.filter(i => i !== fn)
    }
  }


  return {
    getState,
    subscribe,
    dispatch
  }
}

function counter (state = {num: 1}, action) {
  switch (action.type) {
    case 'ADD':
      return {
        num: state.num + action.amount
      }
    case 'MINUS':
      return {
        num: state.num - action.amount
      }
  }
  return state
}

function todo (state = {list: [], filter: 'all'}, action) {
  switch (action.type) {
    case 'ADD_TODO':
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



function combineReducers (reducers) {
  // reducers {counter: counter, todo: todo}
  // 整合前:
  // counter: {num: 1}
  // todo: {list: [], filter: 'all'}

  // 整合后 state
  // {counter: {num: 1}, todo: {list: [], filter: 'all'}}

  return (state = {}, action) => {
    let obj = {}
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action)
    }

    return obj
  }
}
// let store = createStore(zhengheReducer)


/*
let zhengheReducer = combineReducers({
  counter: counter,
  todo: todo
})
store.getState()
store.subscribe()
store.dispatch()
*/

export { createStore, combineReducers }




