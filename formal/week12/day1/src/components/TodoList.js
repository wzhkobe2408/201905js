import React, { Component } from 'react'

import { connect } from 'react-redux'

import actions from '../store/action/todo' // actionCreator 对象

import ListItem from './ListItem'

class TodoList extends Component {
  filterTodo = () => {
    // 为了实现筛选的效果，我们的列表不能再直接渲染全量的数据；
    // 列表应该渲染根据 store 中的 filter 过滤出满足筛选条件数据；
    let { filter, list } = this.props
    switch (filter) {
      case 'all':
        return list
      case 'unfinished':
        return list.filter(item => !item.isSelected)
      case 'finished':
        return list.filter(item => item.isSelected)
    }
  }
  render () {
    let filterList = this.filterTodo()
    return (<ul className="list-group">
      {
        filterList.map((item, index) => {
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
