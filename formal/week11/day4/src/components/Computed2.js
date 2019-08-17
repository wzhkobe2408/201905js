import React, { Component } from 'react'

import store from '../store'


export default class Computed extends Component {
  constructor () {
    super()
    this.state = {
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
    return (<h2>
      {this.state.num % 2 === 0 ? '偶数': '奇数'}
    </h2>)
  }
}
