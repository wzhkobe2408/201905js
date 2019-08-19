// context 组件间共享数据的一种方式，使用context共享数据可以不用逐层在组件树中显式传递 props
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ThemeButton extends Component {
  render () {
    return <button className={`btn btn-${this.props.theme}`}>充值</button>
  }
}

class Toolbar extends Component {
  render () {
    return <ThemeButton theme={this.props.theme} />
  }
}

export default class App extends Component {
  render () {
    return <Toolbar theme='success' />
  }
}

