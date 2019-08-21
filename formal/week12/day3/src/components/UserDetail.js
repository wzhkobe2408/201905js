import React, { Component } from 'react'

// 从动态路由中获取用户的 id ；然后从 ls 中获取到该 id 对应的用户信息，展示到页面中

export default class UserDetail extends Component {
  constructor (props, context) {
    super()
    this.state = {
      user: {}
    }
  }

  componentWillMount () {
    // props.match.params 属性时动态路由参数对象，属性名是动态路由设置的时候 : 后面的值，值动态路由具体的值；
    let { id } = this.props.match.params
    let listStr = localStorage.getItem('list')
    let list = JSON.parse(listStr)
    let user = list.find(i => +i.id === +id)
    this.setState({
      user
    })
  }

  render () {
    return (<h1>
      The user's ID is {this.state.user.id} and NAME is {this.state.user.name}
    </h1>)
  }
}
