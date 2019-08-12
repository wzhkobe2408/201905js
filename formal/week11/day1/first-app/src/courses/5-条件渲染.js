import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 条件渲染： React 的条件渲染，需要使用 if-else 等判断语句

let flag = true
let tag;

if (flag) {
  tag = <h1>flag 为true</h1>
} else {
  tag = <h1>flag 为 false</h1>
}

let t2 = flag ? <h2>true</h2> : <h2>false</h2>

ReactDOM.render(t2, document.getElementById('root'))
