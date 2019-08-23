import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'

// NavLink 和 Link 的作用一样，只不过当前导航激活时（NavLink 的 to 和页面 url 中的路径相同时导航被激活）会给当前被激活的 NavLink 添加一个 active 类名；如果设置 高亮当前激活的导航 给 active 类名添加样式就可以了


import './index.less'

export default class TabBar extends Component {
  render () {
    return (<nav className='nav-bar'>
      <NavLink to='/home'>
        <i className="iconfont icon-xingqiu"></i>
        <span>首页</span>
      </NavLink>
      <NavLink to='/lessons'>
        <i className="iconfont icon-react"></i>
        <span>我的课程</span>
      </NavLink>
      <NavLink to='/profile'>
        <i className="iconfont icon-xiaolian"></i>
        <span>个人中心</span>
      </NavLink>
    </nav>)
  }
}
