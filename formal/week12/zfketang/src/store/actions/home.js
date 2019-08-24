
// 导出 actionCreator 对象
// actionCreator 返回一个 action 对象的函数
// action 是一个带有 type 字段的对象，它是由 dispatch 派发的，告诉 reducer 如何修改状态，并且携带修改状态时必要的参数
// 使用 redux-thunk 后可以允许 actionCreator 函数返回一个函数，这个函数将会接收 两个参数：dispatch 和 getState；相当于把 dispatch 和 getState 的使用权交给了这个函数

import * as Types from '../action-types'

import { getSliders, fetchLessons } from '../../api/home'

let actions = {
  setCurrentLesson (lesson, cb) {
    // 筛选
    return (dispatch, getState) => {
      dispatch({type: Types.SET_CURRENT_LESSON, lesson})
      // 清空原有的课程列表
      dispatch({type: Types.CLEAR_LESSONS})
      // 重新请求课程列表: 两种解决方案：
      // 1.
      // actions.setLessons()(dispatch, getState)
      cb()
    }
  },
  reRefresh () {
    // 刷新课程列表

    return (dispatch, getState) => {
      // 1. 清空原有的课程列表
      dispatch({type: Types.CLEAR_LESSONS})
      // 2. 重新请求课程列表
      actions.setLessons()(dispatch, getState)
    }
  },
  setSliders () {
    return (dispatch, getState) => {
      // 1. 让轮播图的 loading 变为 true，修改状态只能 dispatch action
      dispatch({type: Types.GET_SLIDERS})

      // 2 通过 ajax 请求轮播图的数据
      dispatch({
        type: Types.GET_SLIDERS_SUCCESS,
        payload: getSliders()
      })
    }
  },
  setLessons () {
    return (dispatch, getState) => {
      let { currentLesson, lessons: { limit, offset, loading }} = getState().home
      if (loading) return // 如果正在加载，先不要请求
      dispatch({type: Types.GET_LESSONS})
      dispatch({
        type: Types.GET_LESSONS_SUCCESS,
        payload: fetchLessons(limit, offset, currentLesson)
      })
    }
  }
}

export default actions
