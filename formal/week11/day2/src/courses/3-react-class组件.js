import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 用 class 声明组件；
// 1. 声明 class 时要继承 React 上的 Component 类
// 2. 在这个类的原型上，需要有一个 render 方法，并且 render 方法要返回一个根 jsx 元素；写在 render 方法 return 后面的 jsx 相当于 .vue 文件 template 标签里面的内容
// 3. 用 class 声明的组件，声明后就可以当做标签使用

class Header extends React.Component {
  constructor (props) {
    super() // extends 一个类以后，可以不写 constructor ，如果写了，必须执行一次 super()

    // 用 class 声明的组件，同样可以使用 props，在构造函数中，构造函数的第一个形参就是 props 对象，在构造函数中通过形参访问 props
   // 除了构造函数以外的其他地方，通过 this.props 访问props
    console.log(props)
  }

  render () {
    console.log('来自 render 的 props ', this.props)
    return (<h1>
      <p>Hello Component By Class Statement</p>
      <p>{this.props.content}</p>
    </h1>)
  }
}
// ReactDOM.render(<Header x="1" y="2" z="abc" />, document.getElementById('root'))

class Hello extends React.Component {
  constructor (props, context) {
    super()
  }

  render () {
    return (<div>
      <Header content="今天晴天了1111" />
      <Header content="今天晚上接着考书城" />
      <div>
        今天 React 第二天
        <p>
          {this.props.date}
        </p>
      </div>
    </div>)
  }
}

ReactDOM.render(<Hello date={new Date().toLocaleTimeString()} />, document.getElementById('root'))

// ReactDOM.render() 渲染 class 声明的组件过程：
// 1. 找到对应的类，并且 new 一下这个类，获取这个类的实例
// 2. 通过实例找到类原型上的 render 方法，执行 render 方法并接收其返回的虚拟 DOM
// 3. 把虚拟 DOM 转换成真实的 DOM，然后插入到页面中


// function 和 class 声明的组件有什么区别：

// React 也是数据驱动的。React 的组件数据来源有两个：props（属性） 和 state（状态）；
// 用 class 声明的组件，有 state、props、this、生命周期的钩子
// 而 function 声明的组件只有 props

// props 是在组件被使用的时候写在其行内的属性，是从外部传给组件的数据
// state 是用 class 声明的组件私有的数据，需要定义组件时就要声明状态

// props 和 state 都是组件的数据来源，如果 props 或者 state 发生变化，对应的视图会自动更新


