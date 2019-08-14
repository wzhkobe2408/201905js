// SliderItems 是存放所有轮播图图片的列表
import React, { Component } from 'react'

export default class SliderItems extends Component {
  render () {
    // SliderItems 中图片也不是写死的，而是根据图片的个数动态生成的
    let { images } = this.props

    // 为了让轮播图动起来，我们动态计算 wrapper 的 left 值
    let style = {
      left: -1 * this.props.index * 500 + 'px',
      transition: 'left .5s linear 0s'
    }

    return (<ul className="wrapper" style={style} ref="ulWrapper">
      {
        images.map((src, sIndex) => {
          return (<li className="slider" key={sIndex}>
            <img src={src} alt=""/>
          </li>)
        })
      }
      <li className="slider">
        <img src={images[0]} alt=""/>
      </li>
    </ul>)
  }
}
