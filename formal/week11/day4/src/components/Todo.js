import React, { Component } from 'react'

// 从 store/action/ 中导入 actionCreator
import actions from '../store/action/todo'
import { connect } from 'react-redux'

class Todo extends Component {
  render () {
    return (<div>
      <input type="text" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          this.props.addTodo(e.target.value)
          e.target.value = ''
        }
      }
      }/>
      <ol>
        {
          this.props.list.map((item, index) => <li key={index}>{item}</li>)
        }
      </ol>
    </div>)
  }
}

export default connect(state => ({...state.todo}), actions)(Todo)
