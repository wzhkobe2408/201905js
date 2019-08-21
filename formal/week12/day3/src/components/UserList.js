import React, {Component} from 'react'

import {Link} from 'react-router-dom'

export default class UserList extends Component {
  constructor(props, context) {
    super()
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    let listStr = localStorage.getItem('list')
    let list = listStr ? JSON.parse(listStr) : []
    if (list.length) this.setState({
      list
    })
  }

  render () {
    return (<div>
      <h1>
        UserList
      </h1>
      <ul className="list-group">
        {
          this.state.list.map((item, index) => {
            return (<li key={index} className='list-group-item'>
              <Link to={`/user/detail/${item.id}`}>
                ID: {item.id}; NAME: {item.name}
              </Link>
            </li>)
          })
        }
      </ul>
    </div>)
  }
}
