import React, { Component } from 'react'
import HomeHeader from './HomeHeader'

import './index.less'

export default class Home extends Component {
  changeType = (val) => {
    console.log(val)
  }
  render () {
    return (<div>
      <HomeHeader changeType={this.changeType} />
      HOME
    </div>)
  }
}
