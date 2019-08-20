import React, { Component } from 'react'

import { connect } from 'react-redux'

import actions from '../store/action/todo' // actions 就是 actionCreator 对象

class TodoHeader extends Component {
  getUnfinishedCount = () => {
    return this.props.list.filter(i => !i.isSelected).length
  }
  render () {
    return (<div>
      <h2>亲，你还有{this.getUnfinishedCount()}事没有做</h2>
      <input type="text" className="form-control" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.props.addTodo(e.target.value)
          e.target.value = ''
        }
      }}/>
    </div>)
  }
}

export default connect(state => ({...state}), actions)(TodoHeader)
