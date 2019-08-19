import React, { Component } from 'react'

import { connect } from 'react-redux'

import actions from '../store/action/todo' // actionCreator 对象

import ListItem from './ListItem'

class TodoList extends Component {
  render () {
    return (<ul className="list-group">
      {
        this.props.list.map((item, index) => {
          return <ListItem
            key={item.id}
            changeSelected={this.props.changeSelected}
            deleteTodo={this.props.deleteTodo}
            item={item} />
        })
      }
    </ul>)
  }
}

export default connect(state => ({...state}), actions)(TodoList)
