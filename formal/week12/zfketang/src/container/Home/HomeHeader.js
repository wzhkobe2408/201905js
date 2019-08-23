import React, { Component } from 'react'
import logo from '../../images/logo.png'

export default class HomeHeader extends Component {
  constructor (props, context) {
    super()
    this.state = {
      isShow: false
    }
  }
  changeShow = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  changeType = (e) => {
    // console.log(e.target.dataset.type)
    this.props.changeType(e.target.dataset.type)
    this.changeShow()
  }
  render () {
    return (<div className='home-header'>
      <div className="home-header-logo">
        <img src={logo} alt=""/>
        <div className="home-header-btn" onClick={this.changeShow}>
          {
            this.state.isShow
              ? <i className="iconfont icon-guanbi"></i>
              : <i className="iconfont icon-liebiao"></i>
          }
        </div>
      </div>
      {
        this.state.isShow ? (<ul className="home-header-list" onClick={this.changeType}>
          <li data-type="0">全部课程</li>
          <li data-type="1">React 课程</li>
          <li data-type="2">Vue 课程</li>
        </ul>) : null
      }
    </div>)
  }
}
