import React, { Component } from 'react'

import ReactSwipe from 'react-swipe'


export default class HomeSlider extends Component {
  render () {
    let reactSwipeEl;
    let opts = {
      continuous: true, // 是否循环轮播
      auto: 2000, // 自动轮播，以及轮播的间隔
      callback: () => {} // 补丁
    }
    return (<div className='home-slider'>
      <ReactSwipe
        className="carousel"
        swipeOptions={opts}
        ref={el => (reactSwipeEl = el)}>
        {
          this.props.list.map((item, index) => {
            return (<div key={index}>
              <img src={item} alt=""/>
            </div>)
          })
        }
      </ReactSwipe>
    </div>)
  }
}
