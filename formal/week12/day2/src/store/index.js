// 负责导出 store
import { createStore } from 'redux'

import todoReducer from './reducer/todo'

export default createStore(todoReducer)
