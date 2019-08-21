import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

export default class User extends Component {
  render () {
    let json = [
      {
        path: '/user/add',
        component: UserAdd
      },
      {
        path: '/user/list',
        component: UserList
      },
      {
        path: '/user/detail/:id',
        component: UserDetail
      }
    ]
    return (<div>
      <h1>
        User
      </h1>
      <div className="row">
        <div className="col-md-2">
          <li><Link to='/user/add'>新增用户</Link></li>
          <li><Link to='/user/list'>用户列表</Link></li>
        </div>
        <div className="col-md-10">
         {/* <Route path='/user/add' component={UserAdd}></Route>
          <Route path='/user/list' component={UserList}></Route>*/}
          {
            json.map((item, index) => {
              return <Route key={index} path={item.path} component={item.component}></Route>
            })
          }
        </div>
      </div>
    </div>)
  }
}
