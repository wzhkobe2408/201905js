import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../store/action/todo'

class TodoHeader extends Component {
  getUnfinishedCount = () => {
    return this.props.list.filter(i => !i.isSelected).length
  }
  render () {
    return (<div>
      <h2>亲，你还有{this.getUnfinishedCount()}件事没处理</h2>
      <input type="text" className="form-control" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          // mapDispatchToProps 已经把变更状态的方法已经放到了 this.props 上
          this.props.addTodo(e.target.value)
          e.target.value = ''
        }
      }}/>
    </div>)
  }
}

let mapStateToProps = (state) => {
  // state 就是 store.getState() 的返回值
  // mapStateToProps 需要返回一个对象，这个对象中的属性将会成为组件的 props
  return {
    list: state.list,
    filter: state.filter
  }
}

let mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store.dispatch

  // mapDispatchToProps 也需要返回一个对象；这个对象中的方法都会成为组件的 props；通过这些方法可以修改 store 中的状态

  return {
    addTodo (title) {
      dispatch(actions.addTodo(title))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)

// mapStateToProps 简写成一个箭头函数
// mapDispatchToProps 可以简写成 actionCreator 对象

export default connect(state => ({...state}), actions)(TodoHeader)
