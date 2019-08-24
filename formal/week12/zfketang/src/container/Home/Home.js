import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import HomeSlider from './HomeSlider'
import HomeList from './HomeList'

import './index.less'

import actions from '../../store/actions/home'

import { connect } from 'react-redux'
import { loadMore, pullRefresh } from '../../utils'

class Home extends Component {
  componentDidMount () {
    // 请求轮播图需要的数据
    this.props.setSliders()

    // 请求课程列表数据
    this.props.setLessons()

    // 滑动到底加载更多
    loadMore(this.el, this.props.setLessons)

    // 下拉刷新
    pullRefresh(this.el, this.props.reRefresh)
  }
  changeType = (val) => {
    console.log(val)
    this.props.setCurrentLesson(val, this.props.setLessons)
  }
  render () {
    return (<div>
      <HomeHeader changeType={this.changeType} />
      <div className='content' ref={el => this.el = el}>
        <HomeSlider list={this.props.sliders.list} />
        <div className="container">
          <h3>
            <i className="iconfont icon-wode_kecheng"></i>
            我的课程
          </h3>
          <HomeList list={this.props.lessons.list} />
        </div>
      </div>
    </div>)
  }
}

export default connect(state => ({...state.home}), actions)(Home)
