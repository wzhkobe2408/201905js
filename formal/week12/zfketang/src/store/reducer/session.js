import * as Types from '../action-types'

let initState = {
  code: 0,
  user: null,
  msg: ''
}

function session(state = initState, action) {
  switch (action.type) {
    case Types.SET_USER_INFO:
      return {
        ...action.payload
      }
  }

  return state
}

export default session
