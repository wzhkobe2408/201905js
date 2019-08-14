// 轮播图下方的小点：pagination
import React, { Component } from 'react'

export default class SliderDots extends Component {
  constructor (props, context) {
    super()
  }

  render () {
    // 这里面的小点的个数不是固定的，而是由轮播图的图片数量决定的。所以使用这个 SliderDots 的时候需要传入图片集合生成小点
    let { images } = this.props
    return (<div className="slider-dots">
      {
        images.map((img, iIndex) => {
          return <span key={iIndex}>{iIndex}</span>
        })
      }
    </div>)
  }
}
