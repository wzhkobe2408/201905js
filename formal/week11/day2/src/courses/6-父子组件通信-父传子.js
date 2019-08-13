import React, { Component } from 'react'
import Header from './6-Header' // 导入 Header 组件 所有的 import 要写在文件的开头 import() 方法用于动态导入，可以写在任意位置；

import ReactDOM from 'react-dom'

// 在 React 中，父组件向子组件传递数据也是通过 props
// 1. 父组件的 state 可以通过 props 传递给子组件
// 2. 父组件的 props 也可以通过 props 传递给子组件

class Panel extends Component {
  constructor (props, context) {
    super()
    this.state = {
      time: '1970-01-01 00:00:00'
    }
  }

  render () {
    return (<div>
      <div className="panel-heading">
        <Header news="我会按点下课"
                name={this.props.name}
                age={this.props.age}
                time={this.state.time} />
      </div>
      <div className="panel-body">
        <p>姓名：{this.props.name}</p>
        <p>年龄：{this.props.age}</p>
      </div>
    </div>)
  }
}

let data = {
  name: '马宾',
  age: 18
}

ReactDOM.render(<Panel {...data} />, document.getElementById('root'))
