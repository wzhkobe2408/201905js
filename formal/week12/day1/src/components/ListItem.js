import React, { Component } from 'react'

export default class ListItem extends Component {
  render () {
    let { item, changeSelected, deleteTodo } = this.props
    return (<li key={item.id} className='list-group-item'>
      <input type="checkbox"
             checked={item.isSelected}
             onChange={() => changeSelected(item.id)} />
      <span>{item.title}</span>
      <button className='btn btn-xs pull-right'
              onClick={() => deleteTodo(item.id)}>&times;</button>
    </li>)
  }
}
