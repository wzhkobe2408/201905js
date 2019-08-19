import React, { Component } from 'react'

import { connect } from 'react-redux'

import actions from '../store/action/todo'

class TodoFooter extends Component {
  render () {
    let { filter, changeCurrentFilter } = this.props
    return (<nav className="nav nav-pills" onClick={(e) => {
      // 点击 a 标签的时候，修改 store 中的 filter 属性为对应的值
      // let filter = e.target.getAttribute('data-filter')
      // console.log(e.target.dataset)
       // dataset 是 h5 新增的获取元素行内以 data- 开头的行内属性的属性值；dataset 是一个对象，属性名是不含 data- 的属性名；
      let filter = e.target.dataset.filter
      changeCurrentFilter(filter)
    }}>
      <li className={filter === 'all' ? 'active' : ''}>
        <a data-filter="all" data-x="x" data-y="y">全部</a>
      </li>
      <li className={filter === 'unfinished' ? 'active' : ''}>
        <a data-filter="unfinished">未完成</a>
      </li>
      <li className={filter === 'finished' ? 'active' : ''}>
        <a data-filter="finished">完成</a>
      </li>
    </nav>)
  }
}

export default connect(state => ({...state}), actions)(TodoFooter)
