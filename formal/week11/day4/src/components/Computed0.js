import React, { Component } from 'react'



export default class Computed extends Component {
  render () {
    return (<h2>
      {this.props.num % 2 === 0 ? '偶数': '奇数'}
    </h2>)
  }
}
