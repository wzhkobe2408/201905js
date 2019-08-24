import React, { Component } from 'react'
import './index.less'

import { withRouter } from 'react-router-dom'

// 不是路由渲染的组件，组件内的 props 中没有路由信息；如果需要用路由信息，需要使用 withRouter 包装该组件

class Header extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  back = () => {
    // 经过 withRouter 包装后才有 history 等路由信息
    this.props.history.go(-1)
  }
  render () {
    return (<div className='nav-header'>
      <i className="iconfont icon-fanhui" onClick={this.back} />
      {this.props.title}
    </div>)
  }
}

export default withRouter(Header)
