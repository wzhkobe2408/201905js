// reducer/index 负责导出一个 合并后的 reducer
import { combineReducers } from 'redux'
import home from './home'
import session from './session'

export default combineReducers({
  home,
  session
})
