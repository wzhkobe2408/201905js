import React, { Component } from 'react'
import HomeHeader from './HomeHeader'

import './index.less'

import actions from '../../store/actions/home'

import { connect } from 'react-redux'

class Home extends Component {
  componentDidMount () {
    // 请求轮播图需要的数据
    this.props.setSliders()
  }
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

export default connect(state => ({...state.home}), actions)(Home)
