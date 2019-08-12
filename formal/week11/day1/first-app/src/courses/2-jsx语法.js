// jsx 语法：React 特有的语法，是 js 和 html 混写的语法；将组件的 html 结构、数据、甚至样式写在一个 js文件中，最终都会被编译成 js 代码；

// jsx 是一种语法糖，目的是简化 html 和数据绑定的过程，提升开发效率；

// jsx 元素（react 元素）：在 jsx 中长得像 html 元素的就是 jsx 元素了；

// jsx 语法可以写在 js 文件中，也可以写在 .jsx 文件中

import React, { Component } from 'react'
// 'React' must be in scope when using JSX  react/react-in-jsx-scope 写 jsx 必须把 React 导入到 js 文件中

import ReactDOM from 'react-dom'

let h = <h2>hahahhaha</h2>

// ReactDOM.render(h, document.getElementById('root'))

let data = {
  name: 'mabin',
  age: 18
}

let h1 = <h1 id="xyx">姓名：{data.name}; 年龄：{data.age}</h1> // 像这样，html 标签和 js 混写的就是 jsx，h1 就是一个 jsx 元素，最终能编译后变成一个 js 对象，这个对象就是 虚拟 DOM
// console.log(h1) // 打印结果就是 普通对象

// 通过 ReactDOM.render() 把 jsx 元素渲染到页面中

ReactDOM.render(h1, document.getElementById('root'))
