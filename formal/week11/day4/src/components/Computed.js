import React, { Component } from 'react'

import store from '../store'


export default class Computed extends Component {
  constructor () {
    super()
    this.state = {
      num: store.getState().num
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        num: store.getState().num
      })
    })
    // store.subscribe() 会返回取消该订阅的方法，当需要取消订阅时执行取消订阅的方法就可以了
  }
  componentWillUnmount () {
    // 一般在组件销毁时取消订阅
    this.unsub()
  }

  render () {
    return (<h2>
      {this.state.num % 2 === 0 ? '偶数': '奇数'}
    </h2>)
  }
}
