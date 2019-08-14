import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Slider from './components/Slider'
import './index.css'

// Slider 是一个通用的组件，它轮播的图片应该在使用组件的时候从外界传入
async function getImgs() {
  // 通过 import() 和 Promise.all 去加载图片，把图片当成模块处理，通过import导入，导入后得到的是图片的路径
  let imgs = await Promise.all([
    import('./images/1.jpg'),
    import('./images/2.jpg'),
    import('./images/3.jpg')
  ])

  let imgsMap = imgs.map(item => item.default)

  return imgsMap // async 函数的返回值可以作为其then方法第一个回调的参数
}

getImgs().then(res => {
  // console.log(res)
  ReactDOM.render(<Slider images={res} />, document.getElementById('root'))
})

