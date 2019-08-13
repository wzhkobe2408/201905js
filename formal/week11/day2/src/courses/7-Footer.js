import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (<div className="panel-footer">
      <button className={`btn btn-${this.props.type}`}
              onClick={() => this.props.change()}>换颜色</button>
    </div>)
  }
}
