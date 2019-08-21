import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (<div className='container'>
      <div className="form-group">
        <label htmlFor="uName" className='control-label'>用户名</label>
        <input type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={() => {
          localStorage.setItem('loginSystem', true)
          console.log(this.props)
          // 登录之后还要跳转回去；
          this.props.history.push(this.props.location.from)
        }
        }>登录</button>
      </div>
    </div>)
  }
}
