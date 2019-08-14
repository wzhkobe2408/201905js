// 轮播图下方的小点：pagination
import React, { Component } from 'react'

export default class SliderDots extends Component {
  constructor (props, context) {
    super()
  }

  render () {
    // 这里面的小点的个数不是固定的，而是由轮播图的图片数量决定的。所以使用这个 SliderDots 的时候需要传入图片集合生成小点
    let { images, index } = this.props
    let calcClass = (iIndex) => iIndex === index ? 'active': ''

    return (<div className="slider-dots">
      {
        images.map((img, iIndex) => {

          if (index === images.length && iIndex === 0) {
            // 当轮播图播到最后一张图片，最后一张图片和第一张图片一样，我们要让第一个小点选中

            return <span
              className='active'
              onClick={() => this.props.turn(iIndex - index)}
              key={iIndex}>{iIndex}</span>
              /*iIndex - index 是 让轮播图从 索引 index 变为 iIndex 需要切换的步数*/
          } else {
            return <span className={calcClass(iIndex)}
                         onClick={() => this.props.turn(iIndex - index)}
                         key={iIndex}>{iIndex}</span>
          }
        })
        // INDEX 3
        // [span.active, span, span]
      }
    </div>)
  }
}
