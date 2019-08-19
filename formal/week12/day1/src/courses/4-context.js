// context 组件间共享数据的一种方式，使用context共享数据可以不用逐层在组件树中显式传递 props
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 1. 创建 Context
let ThemeContext = React.createContext('success') // React.createContext(defaultValue) 创建一个 Context，defaultValue 是默认值

// 2. Context.Provider 通过 Context.Provider 组件把当前 Context 共享的数据引入到组件树中

// 3. 下层组件如果需要使用 Context 共享的数据，如果是 class 声明的组件需要在组件中创建一个 contextType 的静态属性，属性值是一个 Context，你想和哪个 Context 共享，你就设置为哪个 Context
// 给组件设置 contextType 属性以后，在这个组件中除 constructor 以外任意地方可以通过 this.context 获取距离当前组件最近的 Context.Provider 共享的 value ;
// 在构造函数中如果要获取 context，通过 constructor 的第二个形参获取 context


/*class ThemeButton extends Component {
  static contextType = ThemeContext
  constructor (props, context) {
    super()
    console.log('来自构造函数的Context', context)
  }
  render () {
    return <button className={`btn btn-${this.context}`}>充值</button>
  }
}*/

// 4. 如果是函数式声明的组件，我们需要使用 Context.Consumer 组件；
// 函数式声明 ThemeButton

function ThemeButton(props) {
  return <ThemeContext.Consumer>
    {
      // Context.Consumer 组件的子节点需要一个函数，这个函数的参数就是 Context 共享的数据；
      value => <button className={`btn btn-${value}`}>{value}</button>
    }
  </ThemeContext.Consumer>
}

class Toolbar extends Component {
  render () {
    return <ThemeButton />
  }
}

export default class App extends Component {
  render () {
    // Context.Provider 可以把 value 的值引入到组件树中，Provider 下面的组件都可以通过 context 获取到它共享的数据
    return (<ThemeContext.Provider value='danger'>
      <Toolbar />
    </ThemeContext.Provider>)
  }
}

