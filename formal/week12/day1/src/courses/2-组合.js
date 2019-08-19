// React 中也可以获取组件标签包裹的内容；类似 Vue 的 slot 机制
// 除了获取标签中包裹的内容，还可以把指定的内容放在指定的位置；还是通过 props 来实现的；
import React, { Component } from 'react'

export default class Panel extends Component {
  render () {
    return (<div className="panel panel-success">
      <div className="panel-heading">
        {this.props.head}
      </div>
      <div className="panel-body">
        {this.props.body}
        {this.props.children}
      </div>
      <div className="panel-footer">
        {this.props.footer}
      </div>
    </div>)
  }
}
