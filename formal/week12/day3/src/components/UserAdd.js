import React, { Component } from 'react'

export default class UserAdd extends Component {
  constructor (props, context) {
    super()
    this.state = {
      name: ''
    }
  }
  submit = () => {
    // 点击保存时把 input 框中的内容保存到 ls 中
    let listStr = localStorage.getItem('list')
    let list = listStr ? JSON.parse(listStr) : []
    list.push({
      id: Math.floor(Math.random() * 100),
      name: this.state.name
    })
    localStorage.setItem('list', JSON.stringify(list))

    // 保存成功以后要跳转到 /user/list
    this.props.history.push('/user/list') // react-router 会把路由相关的信息放到组件的 props 上；其中 history.push() 是通过代码切换路由的方法；参数就是你想去往的路由
  }
  render () {
    return (<div>
      <h1>
        UserAdd
      </h1>
      <div className="form-group">
        <label htmlFor="uName" className='control-label'>用户名</label>
        <input type="text"
               className="form-control"
               value={this.state.name}
               onChange={(e) => this.setState({name: e.target.value})} />
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={this.submit}>添加</button>
      </div>
    </div>)
  }
}
