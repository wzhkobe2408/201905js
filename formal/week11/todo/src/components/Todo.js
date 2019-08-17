// Todo 负责把组件拼装好
import React, { Component } from 'react'

// 导入 actions （ connect 的时候要用到，充当 mapDispatchToProps）
import actions from '../store/action'

import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

class Todo extends Component {
  render () {
    return (<div className="container">
      <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <TodoHeader />
          </div>
          <div className="panel-body">
            <TodoList />
          </div>
          <div className="panel-footer">
            <TodoFooter />
          </div>
        </div>
      </div>
    </div>)
  }
}

export default connect(state => ({...state}), actions)(Todo)
