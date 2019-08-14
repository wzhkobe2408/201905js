// 切换轮播图的箭头
import React, { Component } from 'react'

export default class SliderArrow extends Component {
  render () {
    return (<div className="slider-arrow">
      <span className="left"
            onClick={() => this.props.turn(-1)}>&lt;</span>
      <span className="right"
            onClick={() => this.props.turn(1)}>&gt;</span>
    </div>)
  }
}
