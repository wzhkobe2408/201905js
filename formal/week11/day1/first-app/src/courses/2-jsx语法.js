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

// ReactDOM.render(h1, document.getElementById('root'))

// 使用 JSX 的注意事项：

// 1. jsx 通过 ReactDOM.render() 渲染到页面中，jsx 元素最外层只能有一个根节点；
let div = <div><div></div><span></span></div>


// 2. jsx 是 js 不是 html，写 jsx 要遵守所有 js 语法；
// let return = <h2></h2> // return 是关键字不能作为变量名

// 3. jsx 中可以通过 {} 使用 js 表达式，注意只能写表达式，不能写语句
let str = 'React 第一天'
function getOk() {
  return 'OK'
}

let section = <section>{str}</section>
let s1 = <section>{ true ? '哈哈' : '呵呵'}</section>
// let s2 = <section>{ if (true) { '哈哈' }else { '呵呵'}}</section> 不能写 if 语句

let s2 = <section>{getOk()}</section> // 调用函数

// 4. jsx 元素可以使用行内属性，但是有些特殊属性需要改写；class 改写成 className，label 标签 for 改成 htmlFor；style 要写成一个对象

let l1 = <label htmlFor="inputId">
  请输入
  <input type="text" id="inputId"/>
</label>

let d3 = <div className="hehe">呵呵</div>

let d4 = <div style={{color: 'red', background: 'lightgreen'}}>这是一个夏天</div> // style 要写成对象


// 5. jsx 元素并不是真正的元素，在渲染到页面之前不能当做 DOM 来操作；jsx 经过 babel 编译会形成普通的 js 对象，这些对象就是虚拟 DOM

// 6. jsx 如果换行，最好用 () 包起来

let longHTML = (<div className="container">
  <ul className="wrapper">
    <li className="slider">
      <img src="" alt=""/>
    </li>
  </ul>
  <div className="slider-arrow">
    <span className="left"></span>
    <span className="right"></span>
  </div>
  <div className="slider-dots">
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
</div>)

ReactDOM.render(longHTML, document.getElementById('root'), () => {
  // 这个回调函数会在 longHTML 渲染到页面之后被调用
  // 如果需要操作刚刚渲染到页面中的元素，要在这里面获取和操作它
})

// ReactDOM.render()
// 1. 执行 render 的时候把 jsx 的虚拟 DOM 转换成真实的 DOM 元素；
// 2. 把上一步 jsx 转换得到的真实的 DOM 元素 插入到页面中已经存在的 DOM 元素中（例如上面 id 为 root 的div）
// 3. 调用 render 的回调函数




