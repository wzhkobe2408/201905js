import React, { Component } from 'react'
import Computed from './Computed'

export default class Counter extends Component {
  constructor (props, context) {
    super()
    this.state = {
      num: 1
    }
  }
  render () {
    return (<div className="container">
      <button onClick={(e) => this.setState({num: this.state.num + 1})}>+</button>
      <span>{this.state.num}</span>
      <button onClick={(e) => this.setState({num: this.state.num - 1})}>-</button>
      <Computed num={this.state.num} />
    </div>)
  }
}

// 在 react 中数据通信，父子间通过 props 传递，如果数据很多不方便，而且非父子组件间无能为力；为了优化过程，我们使用 redux 来管理应用的状态；

