import * as Types from '../action-types'

let initState = {
  list: ['今天吃药了吗', '今天吃饭了吗'],
  filter: 'all'
} // initState 是 redux 托管的任务列表状态的初始值
function todo(state = initState, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        list: [ // 这个 list 会覆盖掉上面 ... 展开出来的 list
          ...state.list,
          action.text // action.text 是dispatch的时候传来的载荷
        ]
      }
  }
  return state
}

export default todo
