import React, { Component } from 'react'
import local from './6-Local'
class Password extends Component {
 /* constructor (props, context) {
    super()
    this.state = {
      password: ''
    }
  }
  componentWillMount () {
    let val = localStorage.getItem('password')
    this.setState({
      password: val
    })
  }*/
  render () {
    return (<div>
      <input type="text"
             value={this.props.password}
             onChange={() => {}} />
    </div>)
  }
}
export default local('password')(Password)
