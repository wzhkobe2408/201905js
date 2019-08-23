import * as Types from '../action-types'

let initHomeState = {
  currentLesson: '1', // 用于筛选的标识符
  sliders: {
    loading: false,
    list: []
  }
}

export default function home(state = initHomeState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_LESSON:
      return {
        ...state,
        currentLesson: action.lesson
      }
    case Types.GET_SLIDERS:
      return {
        ...state,
        sliders: {
          ...state.sliders,
          loading: true
        }
      }
    case Types.GET_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders: {
          loading: false,
          list: action.payload
        }
      }
  }
  return state
}
