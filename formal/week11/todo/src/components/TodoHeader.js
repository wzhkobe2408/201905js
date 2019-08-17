import React, { Component } from 'react'

import { connect } from 'react-redux'

import actions from '../store/action'

class TodoHeader extends Component {
  getUnfinishedCount = () => {
    // 获取未处理事项的条数：从状态中的 list 中过滤出 isSelected 为 false 的项，然后求出个数
    return this.props.list.filter(item => !item.isSelected).length
  }
  render () {
    return (<div>
      <h2>亲，你还有 {this.getUnfinishedCount()} 件事情没有处理</h2>
      <input type="text" className="form-control" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          // 在这里面我要更改状态了
          this.props.addTodo(e.target.value)
          e.target.value = ''
        }
      }} />
    </div>)
  }
}

export default connect(state => ({...state}), actions)(TodoHeader)
