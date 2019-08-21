import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter, Route } from 'react-router-dom'

import Home from './components/Home' // 注意导入的时候 Home 的 H 要大写
import User from './components/User'

import Profile from './components/Profile'


ReactDOM.render(<HashRouter>
  <App></App>
</HashRouter>, document.getElementById('root'));
