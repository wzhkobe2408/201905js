// 负责把 SliderItems 、SliderArrow、SliderDots 组装起来
import React, { Component } from 'react'

import SliderItems from './SliderItems'
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'

export default class Slider extends Component {
  constructor (props, contenxt) {
    super()
    // index 表示当前轮播图展示的图片的索引
    this.state = {
      index: 0
    }
    this.ulRef = React.createRef()
  }

  turn = (step) => {
    // 做边界限制：
    let index = this.state.index + step

    // console.log(this.ulRef.current.refs.ulWrapper)
    let ul = this.ulRef.current.refs.ulWrapper // 通过 ref 获取 ul
    if (index > this.props.images.length) {
      // 满足这个条件的时候说明已经播到最后一张了，最后这一张和第一张是一样的，下次再播要播第二张了
      // 我们需要把 wrapper 的 left 设置为 0 ，并且暂时清除掉过渡效果
      // 通过 ref 要获取 wrapper
      ul.style.transitionDuration = '0s'
      ul.style.left = 0

      // 为啥写到定时器？因为如果先把 过渡时间设为0，紧接着就设为 0.5 就会导致 left 变为 0 的过程依然有过渡效果，我们不希望看到过渡；但是过渡时间不设置为 0.5s，后面的轮播就没有过渡效果了，为了解决这个问题，我们把 恢复过渡时间和设置index 放到一个异步中
      setTimeout(() => {
        ul.style.transitionDuration = '0.5s'
        this.setState({
          index: 1
        })
      }, 0)
      return
    }

    if (index < 0) {
      // index 为 0展示的是第一张，再切就该展示最后一张图片了
      ul.style.transitionDuration = '0s'
      ul.style.left = -1 * this.props.images.length * 500 + 'px'

      setTimeout(() => {
        this.setState({
          index: this.props.images.length - 1
        })
        ul.style.transitionDuration = '0.5s'
      }, 0)
      return
    }

    this.setState({
      index: this.state.index + step
    })
  }

  go = () => {
    this.timer = setInterval(() => {
      this.turn(1)
    }, 2000)
  }

  stop = () => {
    clearInterval(this.timer)
  }

  componentDidMount () {
    this.go()
  }

  render () {
    return (<div className="container"
                 onMouseOver={this.stop}
                 onMouseOut={this.go}>
      <SliderItems images={this.props.images}
                   ref={this.ulRef}
                   index={this.state.index} />
      <SliderArrow turn={this.turn} />
      <SliderDots images={this.props.images}
                  turn={this.turn}
                  index={this.state.index} />
    </div>)
  }
}
