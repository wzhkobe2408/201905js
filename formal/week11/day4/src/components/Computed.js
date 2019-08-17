import React, { Component } from 'react'

import { connect } from 'react-redux'

class Computed extends Component {

  render () {
    return (<h2>
      {this.props.num % 2 === 0 ? '偶数': '奇数'}
    </h2>)
  }
}

export default connect(state => ({...state.counter}))(Computed)
