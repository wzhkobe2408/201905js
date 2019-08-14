// 负责把 SliderItems 、SliderArrow、SliderDots 组装起来
import React, { Component } from 'react'

import SliderItems from './SliderItems'
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'

export default class Slider extends Component {
  render () {

    return (<div className="container">
      <SliderItems images={this.props.images}  />
      <SliderArrow />
      <SliderDots images={this.props.images} />
    </div>)
  }
}
