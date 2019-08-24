import React, { Component } from 'react'

import Header from '../../components/Header/Header'

import { Link } from 'react-router-dom'

import './index.less'

import { connect } from 'react-redux'
import actions from '../../store/actions/session'

class Reg extends Component {
  doReg = () => {
    this.props.toReg({
      username: this.username.value,
      password: this.password.value
    }, this.props.history.push)
  }
  render () {
    return (<div className='login'>
      <Header title='注册' />
      <ul className="container">
        <li>
          <input type="text" ref={el => this.username = el}/>
        </li>
        <li>
          <input type="text" ref={el => this.password = el}/>
        </li>
        <li>
          <button onClick={this.doReg}>注册</button>
        </li>
      </ul>
    </div>)
  }
}

export default connect(state => ({...state.session}), actions)(Reg)
