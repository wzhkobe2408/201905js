import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Header extends Component {
  constructor (props) {
    super()
  }

  render () {
    return <h1>
      {this.props.content} |
      NUM: <span>{this.props.num}|
      X:{this.props.x}</span> |
      OK:<span>{this.props.ok}</span>
    </h1>
  }
}

// react 组件的数据来源有两个：
// 1. props 是父组件或者渲染时传入的数据，是外部传入的
// 2. state 是组件私有的状态，是组件内部的

class Counter extends Component {
  constructor (props) {
    super()
    // 使用 state 需要在 构造函数中初始化 state;
    // 初始化 state 就是给 this.state 赋值成一个对象
    // 注意：state 里面的状态（数据）不可以直接修改
    this.state = {
      num: 9, // num 就是 Counter 组件的一个私有的状态
      x: 777
    }
  }

  handleClick () {
    // 如果不做特殊处理，this 并不是当前的组件的实例
    // console.log(this)
  }

  handleClick2 = () => {
    // 事件函数声明为一个箭头函数，函数中的 this 就是当前组件的实例
    // console.log(this)

    // 当点击事件发生时，给 state 中的 num 加 1
    // this.state.num += 1 // 250 的操作

    // 如果要修改 state 中的状态需要使用 this.setState() 方法。setState 有两种用法：
    // 1. this.setState((prevState) => {})
    /*this.setState((prevState) => {
      // prevState 是修改前的状态
      console.log(prevState)

      // 为了更新状态，我们需要返回一个新对象，这个新对象中需要包含被更新的状态，以及它的新值
      return {
        num: prevState.num + 1
      }
    })*/

    // 2. this.setState({state: newValue})
    this.setState({
      num: this.state.num + 1
    })

    // 当我们修改状态后，我们发现视图自动更新了； React 是数据驱动的，而 state 是它的数据，我们更新数据后，React 会自动重新调用组件的 render 方法更新视图；
    // 当 React 发现数据变化了，需要更新视图；React 会重新调用组件的 render 重新获取虚拟 DOM，然后和原有的视图进行对比，只更新变更的那一部分视图，其他的不更新；（DOM-diff 算法）

  }

  render () {
    console.log('render 执行了')
    // 在 render 方法中，可以把 state 中的状态绑定到 jsx 中；this.state.xxx 的方式可以获取 state 中的 xxx 状态
    return (<div>
      {/*此时 Header 就是 Counter 的子组件，父组件中的数据（state/props）可以通过 props
      的方式传递给子组件，并且组件中的数据发生变更时，子组件的收到的值会自动变更*/}
      <Header content="这是史上最简洁的计数器" {...this.state} ok={this.props.toHeader} />
      <p>NUM:{this.state.num}</p>
      <p>X:{this.state.x}</p>

      {/*给 jsx 元素绑定事件，需要在行内写驼峰命名的事件名，如 onClick onMouseOver onMouseOut ....*/}
      {/*事件函数写在原型上，但是要注意处理 this */}
      {/*<button onClick={this.handleClick.bind(this)}>加1</button>*/}
      <p>{this.props.toHeader}</p>
      <button onClick={this.handleClick2}>加1</button>
    </div>)
  }
}

ReactDOM.render(<Counter toHeader="ok" />, document.getElementById('root'))
