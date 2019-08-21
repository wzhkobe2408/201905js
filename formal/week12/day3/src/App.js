import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link, Route } from 'react-router-dom'
import Home from "./components/Home";
import User from "./components/User";
import Profile from "./components/Profile";

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
        <Route path='/home' component={Home}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/profile' component={Profile}></Route>
      </div>
    </div>)
  }
}

export default App;
