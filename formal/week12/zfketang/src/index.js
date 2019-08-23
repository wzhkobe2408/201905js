import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './common/index.less'

import App from './App'

import store from './store'

// 通过 Provider 把 store 引入组件树
import { Provider } from 'react-redux'

window.__store = store

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
