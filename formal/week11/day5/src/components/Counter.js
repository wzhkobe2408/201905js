import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../store/actions/counter'

class Counter extends Component {
  render () {
    return (<div>
      <button onClick={() => this.props.add1(1)}>+1</button>
      <span>{this.props.num}</span>
      <button onClick={() => this.props.minus1(1)}>-1</button>
    </div>)
  }
}

export default connect(state => ({...state}), actions)(Counter)
