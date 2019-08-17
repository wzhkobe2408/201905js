import React, { Component } from 'react'
import Computed from './Computed'

// 使用 react-redux 来优化使用 redux 的过程，使用 connect 来实现

// 1. 导入 connect 方法
import { connect } from 'react-redux'
// 2. 组件改成导出一个连接后的组件，connect 以后的组件，组件的状态以及变更状态的方法都从 props 中获取；为了让组件能从 props 中获取状态和变更状态的方法，我们做一些处理


// 创建 action 对象的函数，叫做 actionCreator，导入
import actions from '../store/action/counter'


class Counter extends Component {

  render () {
    return (<div className="container">

      <button onClick={(e) => this.props.add(2)}>+2</button>
      <span>{this.props.num}</span>
      <button onClick={(e) => this.props.minus(3)}>-3</button>
      <h2>chmod -R {this.props.x} dir</h2>
      <Computed />
    </div>)
  }
}
// connect 第一次执行的时候接收两个参数：
// 1. mapStateToProps ：把 state 映射成组件的 props
let mapStateToProps = (state) => {
  // console.log(state)
  // state 就是 store.getState() 的返回结果

  // mapStateToProps 函数需要返回一个对象，这个对象的属性将会成为组件的 props

  return {
    num: state.counter.num,
    x: state.counter.x
  }
}
// 2. mapDispatchToProps 把变更状态的方法映射成组件的 props
let mapDispatchToProps = (dispatch) => {
  // dispatch 就是 store.dispatch

  // mapDispatchToProps 需要返回一个对象，对象中的属性名会成为组件的props

  return {
    add (amount) {
      dispatch(actions.add(amount))
    },
    minus (amount) {
      dispatch(actions.minus(amount))
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// connect 的用法：
// connect 是一个高阶函数：let connect = (ms, md) => (component) => {}
// connect 后面可以跟两个执行：
// 第一个执行要传递两个参数：mapStateToProps, mapDispatchToProps
// 第二个执行传入需要被连接的组件

// mapStateToProps、mapDispatchToProps 的简化用法
// mapStateToProps 可以简化成一个箭头函数，通过 ... 展开 state 中的状态
// mapDispatchToProps 可以简化成一个 actionCreator 对象，此时 actionCreator 对象中的属性名就成了组件的 props

export default connect(state => ({...state.counter}), actions)(Counter)
