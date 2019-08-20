import React, { Component } from 'react'

import { connect } from 'react-redux'
import actions from '../store/action/todo'

class TodoFooter extends Component {
  render () {
    let { filter } = this.props

    return (<nav className='nav nav-pills' onClick={(e) => {
      let filter = e.target.dataset.filter
      this.props.changeCurrentFilter(filter)
    }
    }>
      <li className={filter === 'all' ? 'active' : ''}>
        <a data-filter="all">全部</a>
      </li>
      <li className={filter === 'unfinished' ? 'active' : ''}>
        <a data-filter="unfinished">未完成</a>
      </li>
      <li className={filter === 'finished' ? 'active' : ''}>
        <a data-filter="finished">完成</a>
      </li>
    </nav>)
  }
}

export default connect(state => ({...state}), actions)(TodoFooter)
