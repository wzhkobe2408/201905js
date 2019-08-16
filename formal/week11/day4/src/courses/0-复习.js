import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 受控组件：双向数据绑定，受组件的 state （状态）控制的组件，叫做受控组件；
// 表单元素的 value 绑定 state 中的状态，监听表单元素的 onchange 事件，在表单中输入内容会改变其value，进而触发 onchange 事件，我们在 onchange 事件中修改 state 中的状态；
// 受控组件中，state 就是单一数据源；
class Input extends Component {
  constructor (props, context) {
    super()
    this.state = {
      num: 0
    }
  }

  render () {
    return (<div>
      <input type="text" value={this.state.num}
             onChange={(e) => {
               this.setState({
                 num: e.target.value
               })
             }}/>
    </div>)
  }
}

// 非受控组件：不受 state 控制的组件就叫做非受控组件；表单元素的 value 不再绑定 state 中的状态了；受控组件通过 state 就能拿到表单的内容，但是非受控组件需要通过 DOM 操作获取表单的 值
// React 使用 ref 获取 DOM 元素

class MyInput extends Component {
  constructor (props, context) {
    super()
    this.myRef = React.createRef()
    this.yourRef = null // 使用函数形式的 ref
    // 还有一种使用字符串形式 ref
  }

  handleClick = () => {
    // 获取表单的 value
    // ref 的 current 属性表示的就是被当前 ref 标识的 DOM 元素
    console.log(this.myRef.current.value);
    console.log(this.yourRef.value) // 元素的 ref 是一个函数的时候，这个 ref 就是被 ref 标识的 DOM 元素
  }

  render () {
    return (<div>
      <input type="text" ref={this.myRef} /> <br/>
      <input type="text" ref={(el) => this.yourRef = el} /> <br/>
      <div ref="myDiv">哈哈哈哈</div>

      <button onClick={this.handleClick}>输出</button>
    </div>)
  }
}

// 生命周期: 组件在实例化的时候在特定的阶段调用的一系列的钩子函数（只有用 class 声明的组件才有生命周期）

class Header extends Component {
  static defaultProps = {
    num: (() => {
      return '123'
    })()
  }
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      num: 9
    }
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    // 启动定时器、事件监听
    console.log('componentDidMount')
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  // 更新的钩子
  shouldComponentUpdate () {
    // 这个钩子要么别写，写了就要返回一个 bool 值
    return true // 返回 true 后面的钩子继续执行，视图继续更新
    // return false // 返回 false 后面的钩子不要执行了，视图也不会更新
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  render () {
    console.log('render')
    return (<div>
      <h1>{this.state.num}</h1>
      <button onClick={() => this.setState({
        num: this.state.num + 1
      })}>加加</button>
      <Child num={this.state.num} />
    </div>)
  }
}

class Child extends Component {
  constructor (props, context) {
    super()
  }

 // 子组件数据更新时的钩子
  componentWillReceiveProps (props) {
    console.log(props) // 这个 props 是更新后的 props
  }
  shouldComponentUpdate () {
    console.log('子组件：shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    console.log('子组件：componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('子组件：componentDidUpdate')
  }
  render () {
    console.log('子组件：render')
    return <p>CHILD NUM: {this.props.num}</p>
  }
}

// 组件实例化过程中钩子执行顺序：static defaultProps -> constructor -> componentWillMount -> render -> componentDidMount
// 数据更新时钩子的执行顺序：shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

// 当父组件的数据发生变化时，执行到 render 的时候才会触发子组件关于数据更新时的钩子；

// React 是数据驱动，而 React 组件的数据来源有两个：props 和 state； 当数据发生变化时，React 的组件会重新执行 render 进而更新视图

// React 轮播图
