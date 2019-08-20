import React, { Component } from 'react'

export default class ListItem extends Component {
  render () {
    let { item, changeSelected, deleteTodo } = this.props
    return (<li className='list-group-item'>
      <input type="checkbox"
             checked={item.isSelected}
             onChange={() => changeSelected(item.id)}/>
      <span>{item.title}</span>
      <button className="btn btn-xs pull-right"
              onClick={() => deleteTodo(item.id)}>&times;</button>
    </li>)
  }
}

// React 的组件分为 智能组件（有自己的数据、方法）、木偶组件（没有自己的数据和方法，数据和方法都是从外界传来的）
