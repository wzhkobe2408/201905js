import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'
import reduxLogger from 'redux-logger'

export default createStore(reducer, applyMiddleware(reduxLogger))
