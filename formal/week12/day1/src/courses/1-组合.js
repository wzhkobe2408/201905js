// React 中也可以获取组件标签包裹的内容；类似 Vue 的 slot 机制

import React, { Component } from 'react'

export default class Panel extends Component {
  render () {
    return (<div className="panel panel-success">
      rtyhjkl
      {
        /*可以通过 props.children 属性来获取当前组件标签包裹的内容*/
        this.props.children
      }
    </div>)
  }
}
