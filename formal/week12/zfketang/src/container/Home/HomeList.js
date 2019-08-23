import React, { Component } from 'react'

export default class HomeList extends Component {
  render () {
    return (<div className='home-list'>
      <ul>
        {
          this.props.list.map((item, index) => {
            return <li key={index}>
              <img src={item.url} alt=""/>
              <p>{item.title}</p>
              <span>{item.price}</span>
            </li>
          })
        }
      </ul>
    </div>)
  }
}
