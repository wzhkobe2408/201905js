import React, { Component } from 'react'
import Computed from './Computed'

import store from '../store'

import * as Types from '../action-types'
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
      <button onClick={(e) => store.dispatch({
        type: Types.ADD,
        amount: 2
      })}>+2</button>
      <span>{this.state.num}</span>
      <button onClick={(e) => store.dispatch({
        type: Types.MINUS,
        amount: 3
      })}>-3</button>
      <Computed />
    </div>)
  }
}

// 在 react 中数据通信，父子间通过 props 传递，如果数据很多不方便，而且非父子组件间无能为力；为了优化过程，我们使用 redux 来管理应用的状态；

