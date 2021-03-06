import React, { Component } from 'react'
import store from '../store'
import * as Types from '../action-types'

function addTodo(text) {
  return {
    type: Types.ADD_TODO,
    text
  }
}

export default class Todo extends Component {
  constructor () {
    super()
    this.state = {
      // list: store.getState().todo.list,
      // filter: store.getState().todo.filter
      ...store.getState().todo // 这么写和上面的写法一样
    }
  }
  componentDidMount () {
    this.unsub = store.subscribe(() => {
      this.setState({
        list: store.getState().todo.list
      })
    })
  }
  render () {
    return (<div>
      <input type="text" onKeyDown={(e) => {
        if (e.keyCode === 13) {
          store.dispatch(addTodo(e.target.value))
          e.target.value = ''
        }
      }
      }/>
      <ol>
        {
          this.state.list.map((item, index) => <li key={index}>{item}</li>)
        }
      </ol>
    </div>)
  }
}
