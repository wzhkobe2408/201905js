import React, { Component } from 'react'

import store from './myStore'

import actions from './actionCreator'

import { connect } from './react-redux'

window.__store = store

class Counter extends Component {

  render () {
    return (<div>
      <h1>{this.props.num}</h1>
      <button onClick={() => this.props.add(1)}>+</button>
      <button onClick={() => this.props.minus(1)}>-</button>
    </div>)
  }
}
let mapStateToProps = (state) => {
  // state 就是 store.getState() 的返回值

  return {
    num: state.counter.num
  }
}

let mapDispatchToProps = (dispatch) => {
  // dispatch 是 store.dispatch

  return {
    add (amount) {
      dispatch(actions.add(amount))
    },
    minus (amount) {
      dispatch(actions.minus(amount))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connect(mapStateToProps, actions)(Counter)
