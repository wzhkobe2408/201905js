import React, { Component } from 'react'
import Computed from './Computed'

import store from '../store'

// 创建 action 对象的函数，叫做 actionCreator，导入
import actions from '../store/action/counter'

window.__store = store

export default class Counter extends Component {
  constructor (props, context) {
    super()
    this.state = {
      // 使用 combineReducers 之后获取状态需要通过命名空间
      num: store.getState().counter.num
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        num: store.getState().counter.num
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render () {
    return (<div className="container">
      {/*如果某个 action 会被 dispatch 多次，用 actionCreator 可以简化代码；在需要action 的地方，调用 actionCreator 函数，并且传入 payload */}
      <button onClick={(e) => store.dispatch(actions.add(1))}>+1</button>
      <button onClick={(e) => store.dispatch(actions.add(2))}>+2</button>
      <button onClick={(e) => store.dispatch(actions.add(3))}>+3</button>
      <span>{this.state.num}</span>
      <button onClick={(e) => store.dispatch(actions.minus(3))}>-3</button>
      <Computed />
    </div>)
  }
}

// 在 react 中数据通信，父子间通过 props 传递，如果数据很多不方便，而且非父子组件间无能为力；为了优化过程，我们使用 redux 来管理应用的状态；

