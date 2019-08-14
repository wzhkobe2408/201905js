import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// React 生命周期的钩子函数：（只有 class 声明的组件才有生命周期）

class Parent extends Component {

  // constructor 和 render 都是生命周期的函数
  constructor (props, context) {
    super()
    this.state = {
      num: 1
    }
    console.log('constructor')
  }

  componentWillMount () {
    // 组件挂载前执行
    console.log('componentWillMount')
  }

  componentDidMount () {
    // 组件挂载后执行
    console.log('componentDidMount')
  }
  componentWillUnmount () {
    // 组件销毁或者卸载之前执行：我们一般在这里面清除定时器、解绑事件
  }

  // 以下的钩子是在数据(props/state)发生变化时触发
  shouldComponentUpdate () {
    // 当数据发生变化时，会先执行这个钩子，如果这个函数 return true 才会执行后面的钩子并且更新视图，如果return false，则不更新视图
    // 这个钩子如果写了就要 return true 或者 false，如果什么也不 return 就会报错，视图也不会更新
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    // 将要更新：在更新视图之前即 render 执行之前执行
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    // 在视图更新之后执行
    console.log('componentDidUpdate')
  }

  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

  render () {
    console.log('render')
    return (<div>
      <p>{this.state.num}</p>
      <button onClick={this.handleClick}>加加</button>
      <Child x={this.state.num} />
    </div>)
  }
}

// 给当前组件的 prop 设置默认值，给类设置静态属性发生在实例化之前
Parent.defaultProps = {
  name: (() => {
    console.log('static defaultProps')
  })()
}
// 组件初始化的时候执行钩子顺序：static defaultProps -> constructor -> componentWillMount -> render -> componentDidMount

// 组件数据更新时钩子的执行顺序：shouldComponentUpdate -> componentWillUpdate -> render -> (子组件数据更新钩子) -> componentDidUpdate

// 子组件的更新数据的钩子是在父组件的 render 后执行
class Child extends Component {

  // 以下钩子（除了render）在组件初始化的时候不会执行，当组件的数据发生变化时才会执行
  componentWillReceiveProps (props) {
    console.log(props) // props 是更新以后的属性
    console.log('子组件：componentWillReceiveProps')
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
    return (<p>子组件：{this.props.x}</p>)
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
