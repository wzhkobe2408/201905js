import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 受控组件：在 HTML 中，像 input、textarea、select 等表单元素，可以根据用户的输入改变自身的状态（就是表单的 value）；而 React 的可变状态存在 state 中，我们把表单的状态和 state 中的数据结合起来，使 state 成为单一数据源，这样的组件称为受控组件

// 说白了就是表单的 value 属性绑定组件 state 中的状态，当表单的数据发生变化时，更新 state 中的状态；

// React 是单向数据绑定，使用受控组件来实现双向数据绑定；

class Input extends Component {
  constructor (props, context) {
    super()
    this.state = {
      num: 1,
      hobby: 1
    }
  }

  render () {
    // 受控组件：表单元素的 value 绑定 state 中的状态，然后监听 onChange 事件，在事件函数中更新 state 中的状态
    // 如果使用受控组件，一定要设置 onChange 事件更新 state 中的状态
    return (<div>
      <p>NUM: <input type="text"
                     onChange={(e) => this.setState({num: e.target.value})}
                     value={this.state.num} /></p>
      <p>HOBBY:
        <select value={this.state.hobby}
                onChange={(e) => this.setState({hobby: e.target.value})}>
          <option value="1">唱</option>
          <option value="2">跳</option>
          <option value="3">RAP</option>
          <option value="4">JS</option>
        </select>
      </p>
      <p>NUM:{this.state.num}</p>
      <p>HOBBY:{this.state.hobby}</p>
      <button>提交</button>
    </div>)
  }
}

ReactDOM.render(<Input/>, document.getElementById('root'))
