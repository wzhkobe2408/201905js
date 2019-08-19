import React, { Component } from 'react'

// import { connect } from 'react-redux'

import local from './6-Local'

class Username extends Component {
  /*constructor (props, context) {
    super()
    this.state = {
      username: ''
    }
  }
  componentWillMount () {
    let val = localStorage.getItem('username')
    this.setState({
      username: val
    })
  }*/
  render () {
    return (<div>
      <input type="text" value={this.props.username} onChange={() => {}}/>
    </div>)
  }
}

export default local('username')(Username)
