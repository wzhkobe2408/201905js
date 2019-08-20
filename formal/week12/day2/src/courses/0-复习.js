import React, { Component } from 'react'

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
