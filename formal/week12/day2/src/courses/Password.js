import React, { Component } from 'react'

import local from './Local'

class Password extends Component {
  render () {
    return (<div>
      <input type="text"
             defaultValue={this.props.password} onChange={() => {}}/>
    </div>)
  }
}

export default local('password')(Password)
