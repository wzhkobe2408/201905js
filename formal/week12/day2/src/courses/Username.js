import React, { Component } from 'react'

import local from './Local'

class Username extends Component {
  render () {
    // 如果 表单元素的 value 属性绑定了 state 中的状态，同时就需要给表单设置 onChange 事件
    // 另外一种解决方案，是给表单元素设置 defaultValue 属性
    return (<div>
      <input type="text"
             defaultValue={this.props.username}/>
    </div>)
  }
}

export default local('username')(Username)
