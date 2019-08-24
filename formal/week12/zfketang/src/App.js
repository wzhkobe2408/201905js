import React, {Component} from 'react'

import Home from './container/Home/Home'
import Lessons from './container/Lessons/Lessons'
import Profile from './container/Profile/Profile'

import { HashRouter, Route, Switch } from 'react-router-dom'

import TabBar from './components/TabBar/TabBar'
import Login from './container/Login/Login'
import Reg from './container/Reg/Reg'

export default class App extends Component {
  render () {
    return (<div>
      <HashRouter>
        <div>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/lessons' component={Lessons}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/reg' component={Reg}></Route>
          </Switch>
          <TabBar />
        </div>
      </HashRouter>
    </div>)
  }
}
