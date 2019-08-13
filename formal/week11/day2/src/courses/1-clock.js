// react 写一个每秒更新一次的时钟
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function tick() {
  let time = <h1>{new Date().toLocaleTimeString()}</h1>

  ReactDOM.render(time, document.getElementById('root'))
}

tick()

setInterval(tick, 1000)

// React 和 Vue 同样都是数据驱动的，但是上面的时钟不是数据驱动的，而是每秒生成一个 jsx，然后渲染到页面中；
// 如果要使用数据驱动，我们需要使用 React 的组件；
