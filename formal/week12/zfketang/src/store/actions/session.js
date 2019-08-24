import * as Types from '../action-types'

import { register, login, validate } from '../../api/session'

let actions = {
  toReg (userInfo, push) {
    return (dispatch, getState) => {
      register(userInfo).then(res => {
        dispatch({type: Types.SET_USER_INFO, payload: res})
        if (res.code === 0) push('/login') // 如果成功跳转到登录页
      })
    }
  },
  toLogin (userInfo, push) {
    return (dispatch, getState) => {
      login(userInfo).then(res => {
        dispatch({type: Types.SET_USER_INFO, payload: res})
        if (res.code === 0) push('/profile')
      })
    }
  },
  toValidate () {
    return (dispatch, getState) => {
      validate().then(res => {
        dispatch({type: Types.SET_USER_INFO, payload: res})
      })
    }
  }
}

export default actions
