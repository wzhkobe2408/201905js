import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile"
import Login from './components/Login'
import PrivateRoute from './components/Protected'
import NotFound from './components/NotFound'

class App extends React.Component {
  render () {
    return (<div>
      <div className="navbar-inverse navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              用户管理系统
            </div>
            <ul className="navbar-nav nav">
              <li><Link to='/home'>首页</Link></li>
              <li><Link to='/user'>用户管理</Link></li>
              <li><Link to='/profile'>个人中心</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route path='/' exact render={() => <h1>首页</h1>}></Route>
          {/*<Route path='/:name' render={() => <h1>马宾</h1>}></Route>*/}
          {/*/:name 表示的是一个动态路由，规则 / 后面跟其他；所以 /home /user /profile 都符合这个规则，就都被 /:name 匹配到了；此时你会发现页面访问 /home /user /profile 都会展示 马宾 ；*/}
          <Route path='/home' component={Home}></Route>

          {/*<Route path='/user' component={User}></Route>*/}
          {/*<Route path='/profile' component={Profile}></Route>*/}
          <PrivateRoute path='/user' component={User}></PrivateRoute>
          <PrivateRoute path='/profile' component={Profile}></PrivateRoute>
          <Route path='/login' component={Login}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </div>)
  }
}

export default App;
