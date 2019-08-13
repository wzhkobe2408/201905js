import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

// React 的 props 也支持校验，但是需要一个第三方的库 prop-types

// 1. 安装 prop-types：yarn add prop-types --save
// 2. 导入 prop-types
// 3. 在类中声明 propTypes 的静态属性，值是一个对象，对象的 key 就是需要被校验的 props，value 是校验规则；将来组件收到的 prop 不符合规则，会触发控制台警告

class User extends Component {
  // React 组件使用 props 校验，需要在类中声明一个 propTypes 的静态属性（propTypes名字不能改）
  static propTypes = {
    name: PropTypes.string.isRequired, // .string 表示 name 必须是字符串类型的，.isRequired 表示必传
    age: PropTypes.number.isRequired // .number 表示 age 是数字类型的
  }

  // react 的 props 也可以设置默认值; 给类设置一个 defaultProps 的静态属性(defaultProps 名字也不能改)
  static defaultProps = {
    age: 19 // 给 age prop 设置 默认值 18
  }

  constructor (props, context) {
    super()
  }

  render () {
    return (<div>
      <p>{this.props.name}</p>
      <p>{this.props.age}</p>
    </div>)
  }
}

let data = {
  name: 'mabin',
  age: 18
}
ReactDOM.render(<User name={data.name} />, document.getElementById('root'))
