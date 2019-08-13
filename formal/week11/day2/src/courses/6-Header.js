import React, { Component } from 'react'

// 导出 Header
export default class Header extends Component {
  constructor (props) {
    super()
  }

  render () {
    return (<div>
      <h1>{this.props.news}|{this.props.time}</h1>
    </div>)
  }
}
