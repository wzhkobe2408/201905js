// SliderItems 是存放所有轮播图图片的列表
import React, { Component } from 'react'

export default class SliderItems extends Component {
  render () {
    // SliderItems 中图片也不是写死的，而是根据图片的个数动态生成的
    let { images } = this.props
    return (<ul className="wrapper">
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
