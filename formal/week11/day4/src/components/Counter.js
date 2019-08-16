import React, { Component } from 'react'
import Computed from './Computed'

import store from '../store'
window.__store = store

// 在组件中使用 store
// 1. 导入 store
// 2. 用 store 中的数据初始化组件的 state，store.getState() 方法可以获取 store 中托管的数据
// 3. 当要修改数据的时候需要 dispatch action
// 4. 如果需要视图更新，或者在 store 中的状态发生变化时有其他的操作，我们需要订阅状态变化

export default class Counter extends Component {
  constructor (props, context) {
    super()
    this.state = {
      num: store.getState().num
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      // 这个函数是添加到 store 更新后的订阅，当 store 中状态更新后，会执行这个函数
      // 如果要更新视图，只能通过修改组件的数据的方式
      this.setState({
        num: store.getState().num // 要把当前组件的 state 更新成 store 中的新值
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render () {
    return (<div className="container">
      <button onClick={(e) => store.dispatch({
        type: 'ADD',
        amount: 2
      })}>+2</button>
      <span>{this.state.num}</span>
      <button onClick={(e) => store.dispatch({
        type: 'MINUS',
        amount: 3
      })}>-3</button>
      <Computed />
    </div>)
  }
}

// 在 react 中数据通信，父子间通过 props 传递，如果数据很多不方便，而且非父子组件间无能为力；为了优化过程，我们使用 redux 来管理应用的状态；

