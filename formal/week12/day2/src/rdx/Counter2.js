import React, { Component } from 'react'

import store from './myStore'

import actions from './actionCreator'

window.__store = store

export default class Counter extends Component {
  constructor (props, context) {
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
    return (<div>
      <h1>{this.state.num}</h1>
      <button onClick={() => store.dispatch(actions.add(1))}>+</button>
      <button onClick={() => store.dispatch(actions.minus(1))}>-</button>
    </div>)
  }
}
