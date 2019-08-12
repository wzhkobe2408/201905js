// 写 jsx 首先需要导入 React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './3-test.css' // 在 react 中使用样式，把 css 文件通过 import 导入即可，不能省略 .css 扩展名；最后 webpack 会自动处理这些 css

let ary = ['h', 'e', 'l', 'l', 'o']

let p1 = <p className="p1">{ary.join('')}</p> // jsx 中不能用 class 为元素指定类名，要用 className

ReactDOM.render(p1, document.querySelector('#root'))
