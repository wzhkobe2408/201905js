import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 非受控组件：受控组件就是受 react 的 state 控制的组件，表单的数据存在 state中的；而非受控组件的数据仍然保存在 DOM 元素上，如果想要获取这个元素value，我们通过操作 DOM 的方式获取；

// React 获取 DOM 对象
class Sum extends Component {
  constructor (props, context) {
    super()

    // 使用 ref 需要创建 ref：React.createRef()
    this.num1 = React.createRef()
    this.num2 = React.createRef()
  }
  handleClick = () => {
    // 非受控组件获取表单元素的 value 需要通过 DOM 获取；
    // React 操作 DOM 需要使用 ref
    // ref 上的 current 属性就是对应的 DOM 元素对象，操作它和操作普通的 DOM 对象一样
    console.log(this.num1.current.value)
    console.log(this.num2.current.value)

    this.num2.current.focus()
    console.log(this.num3)
  }

  render () {
    // 使用 Ref：在你想获取的元素上增加 ref 属性，值就是上面构造函数创建的 ref
    return (<div>
      <p>NUM1: <input id="num1" type="text" ref={this.num1} /></p>
      <p>NUM2: <input id="num2" type="text" ref={this.num2} /></p>
      <p>NUM3: <input id="num3"
                      type="text"
                      ref={(el) => {this.num3 = el}} /></p>
      {/*ref 的第二种使用方式：给 ref 赋值成一个箭头函数，该函数有一个形参 el， el 表示使用当前 ref 的 DOM对象，这个函数会在元素挂载后执行*/}
      <button onClick={this.handleClick}>输出</button>
    </div>)
  }
}

ReactDOM.render(<Sum />, document.getElementById('root'))

// 使用 ref 的步骤：
// 1. 在构造函数中创建 ref：this.myRef = React.createRef()
// 2. 把上面创建的 ref，赋值给你想要获取的元素的 ref 属性
// 3. 如果需要获取指定 ref 的 DOM 对象，ref 上的 current 属性就是带有指定 ref 的 DOM 元素对象
