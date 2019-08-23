import * as Types from '../action-types'

let initHomeState = {
  currentLesson: '1', // 用于筛选的标识符
  sliders: {
    loading: false,
    list: []
  },
  lessons: {
    loading: false,
    limit: 5,
    offset: 0,
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
    case Types.GET_LESSONS:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          loading: true
        }
      }
    case Types.GET_LESSONS_SUCCESS:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          loading: false,
          offset: state.lessons.list.length + action.payload.list.length,
          list: [
            ...state.lessons.list,
            ...action.payload.list
          ]
        }
      }
  }
  return state
}
