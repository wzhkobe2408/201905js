import React, { Component } from 'react'

import store from './store'
import actions from './store/action/todo'

export default class Todo extends Component {
  constructor (props, context) {
    super()
    this.state = {
      // list: store.getState().list,
      // filter: store.getState().filter
      ...store.getState()
    }
  }
  componentDidMount () {
    // 订阅状态的更新
    this.unsub = store.subscribe(() => {
      this.setState({
        ...store.getState()
      })
    })
  }
  componentWillUnmount () {
    this.unsub()
  }
  render () {
    return (<div>
      <input type="text" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          store.dispatch(actions.addTodo(e.target.value))
        }
      }
      }/>
      <ul>
        {
          this.state.list.map((item, index) => {
            /*如果你的数据中有 id，key 就不要写 index了，而是数据的id*/
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </div>)
  }
}
