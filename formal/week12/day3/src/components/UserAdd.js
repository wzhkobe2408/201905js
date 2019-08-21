import React, { Component } from 'react'

import { Prompt } from 'react-router-dom'

export default class UserAdd extends Component {
  constructor (props, context) {
    super()
    this.state = {
      name: '',
      show: false
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

    // 保存成功后，再切换路由就不需要拦截了
    this.setState({
      show: false
    }, () => {
      // setState() 是异步的，我们等 show 变成 false 以后再跳走。所以我们要把切换路由写在 setState 的回调中
      // 保存成功以后要跳转到 /user/list
      this.props.history.push('/user/list')
    })
   // react-router 会把路由相关的信息放到组件的 props 上；其中 history.push() 是通过代码切换路由的方法；参数就是你想去往的路由
  }
  render () {
    return (<div>
      {/*Prompt 组件接收两个属性：*/}
      {/*when: 是一个 bool 值，如果为 true 切换就会提示；如果为 false 不提示*/}
      {/*message：是一个函数，函数接收一个 location ，这个 location 是它要去往的路由对象*/}
      <Prompt when={this.state.show} message={(location) => `你真的要去${location.pathname}吗`}/>
      <h1>
        UserAdd
      </h1>
      <div className="form-group">
        <label htmlFor="uName" className='control-label'>用户名</label>
        <input type="text"
               className="form-control"
               value={this.state.name}
               onChange={(e) => {
                 this.setState({name: e.target.value})
                 if (e.target.value.length) {
                    this.setState({
                      show: true
                    })
                 }
               }
               }/>
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={this.submit}>添加</button>
      </div>
    </div>);
  }
}
