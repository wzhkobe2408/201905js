import React, { Component } from 'react'

import ThemeContext from './ThemeContext'

// 1. 组合
// 1.1 获取组件标签里面包裹的内容：props.children
class Panel extends Component {
  render () {
    return <div className="panel panel-danger">
      <div className="panel-heading">
        {this.props.header}
      </div>
      <div className="panel-body">
        {
          this.props.body
        }
      </div>
      <div className="panel-footer">
        {
          this.props.footer
        }
      </div>
      {
        this.props.children
      }
    </div>
  }
}

let p1 = <Panel><h2>这是个h2</h2></Panel>

let header = <h1>头</h1>
let body = <div>BODY</div>
let footer = <div>Footer</div>

let slot = {
  header,
  body,
  footer
}

let p2 = <Panel header={header} body={body} footer={footer}></Panel>
let p3 = <Panel {...slot}></Panel>

// 2. Context 在组件间共享值，而不用逐层的显式传递 prop
// 使用 Context
// 2.1 创建一个 Context
// const ThemeContext = React.createContext({theme: 'warning'})
/*为了让更多的地方能拿到 Context 共享的值，我们一般把 Context 在一个单独的 js 文件中创建并导出，然后在用的组件中导入*/
// 2.2 Context.Provider 组件，把 Context 要共享的值引入到组件树中
// 2.3 在下层组件中使用 Context 共享的值，如果 class 声明的组件，需要设置 contextType 静态属性，属性值是要取值的 Context；设置静态属性后，在 constructor 中第二个形参就是 context；除constructor 以外的其他地方通过 this.context 取值；我们取到的值是 Context.Provider 通过 value 共享的值；如果当前组件在组件树中没有找到当前 Context 的 Provider，则使用当前 Context 的默认值
// 2.4 在函数式声明的组件中 Context.Consumer 使用 Context 共享的值；要求 Consumer 的子节点是一个函数，函数的形参 value 就是当前 Context 共享的值

class ThemeButton extends Component {
  static contextType = ThemeContext
  constructor (props, context) {
    // 在 constructor 中 context 通过 第二个形参取值
    // 在除 constructor 以外的其他地方，通过 this.context 取值

    super()
  }
  render () {
    return <button className={`btn btn-${this.context.theme}`}>{this.context.theme}</button>
  }
}

function ThemeButton2() {
  return <ThemeContext.Consumer>
    {
      value => {
        console.log(value)
        return <button className={`btn btn-${value.theme}`}>这是函数式声明的组件{value.theme}</button>
      }
    }
  </ThemeContext.Consumer>
}

class Toolbar extends Component {
  render () {
    return (<div>
      <ThemeButton2 />
    </div>)
  }
}

export default class App extends Component {
  render () {
    /*return (
      <ThemeContext.Provider value={{theme: 'danger'}}>
        <Toolbar />
      </ThemeContext.Provider>
    )*/
    return <Toolbar />
  }
}
