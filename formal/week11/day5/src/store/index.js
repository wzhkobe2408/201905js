// 1 使用中间件需要从 redux 中导入 applyMiddleware 的方法
import { createStore, applyMiddleware } from 'redux'

import counter from './reducer/counter'

// 2 导入中间件
import reduxLogger from 'redux-logger'

import reduxThunk from 'redux-thunk'

import reduxPromise from 'redux-promise'

// 3. 在 createStore 的时候传入第二个参数：applyMiddleware(...中间件)

export default createStore(
  counter,
  applyMiddleware(reduxLogger, reduxThunk, reduxPromise)
)
