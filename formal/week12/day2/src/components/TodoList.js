import React, { Component } from 'react'

import { connect } from 'react-redux'

import actions from '../store/action/todo'

import ListItem from './ListItem'

class TodoList extends Component {
  filterTodo = () => {
    let { filter, list } = this.props
    switch (filter) {
      case 'all':
        return list
      case 'unfinished':
        return list.filter(i => !i.isSelected)
      case 'finished':
        return list.filter(i => i.isSelected)
    }
  }
  render () {
    return (<ul className="list-group">
      {
        this.filterTodo().map((item, index) => {
          return <ListItem item={item} key={item.id} changeSelected={this.props.changeSelected} deleteTodo={this.props.deleteTodo} />
        })
      }
    </ul>)
  }
}

export default connect(state => ({...state}), actions)(TodoList)
