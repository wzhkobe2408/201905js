import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 1. jsx 语法：js 和 html 混写的语法
let data = {
  name: 'mabin',
  age: 18
}

let h1 = <h1 className="h1">这是个大标题 {data.name} {1 + 2}</h1>

// 使用 jsx 的注意事项
// 1. jsx 本质是 js，需要遵循所有 js 语法规范
// 2. 如果在 jsx 中使用 js 变量或者 表达式，需要使用 {变量或者表达式}
// 3. {} 中只能写表达式（变量、三元表达式、函数执行、数学表达式），不能写语句
// 4. jsx 元素也可以写行内属性，但是 class 是 js 关键字，需要改写为 className；label 标签的 for 改写成 htmlFor ; style 需要写成一个对象；
// 5. jsx 元素并不是真正的 DOM ，在被渲染到页面之前都是虚拟 DOM ，不能当做真实的 DOM 来操作；虚拟 DOM 就是普通的 js 对象

// 列表渲染和条件渲染：react 没有指令系统，v-for、v-if 没有；

// 列表渲染：使用数组的 map 方法；

let fruits = [
  {
    name: '苹果',
    color: [
      'red',
      'green',
      'yellow'
    ]
  },
  {
    name: '香蕉',
    color: [
      'green',
      'yellow',
      'black'
    ]
  },
  {
    name: '芒果',
    color: [
      'yellow',
      'green',
      'red',
      'black'
    ]
  }
];

let ul = (<ul>
  <li>
    苹果
    <ul>
      <li>red</li>
      <li>green</li>
      <li>yellow</li>
    </ul>
  </li>
  <li>
    香蕉
    <ul>
      <li>green</li>
      <li>yellow</li>
      <li>black</li>
    </ul>
  </li>
  <li>
    芒果
    <ul>
      <li>green</li>
      <li>yellow</li>
      <li>black</li>
      <li>red</li>
    </ul>
  </li>
</ul>)

let ul2 = (<ul>
  {
    fruits.map((fruit, fIndex) => {
      return (<li key={fIndex}>
        {fruit.name}
        <ul>
          {
            fruit.color.map((color, cIndex) => <li key={cIndex}>{color}</li>)
          }
        </ul>
      </li>)
    })
  }
</ul>)

// 列表渲染有一个前提：不使用列表渲染，HTML 结构该写成什么样子；
// 培养一种数据映射视图的能力，看到 HTML 脑子要考虑数据结构该长成什么样子；看到数据结构，脑子要想到它渲染成 HTML 会长成什么样子；

// 条件渲染：根据条件成立与否，生成不同的 html 结构
// react 的条件渲染需要使用 if-else 或者 其他的条件表达式或者语句

let isLogin = true; // true 表示已经登录
let nickname = '我也会变成坏学生'
let tag = null

if (isLogin) {
  tag = <h1>{nickname}</h1>
} else {
  tag = <h1>亲，请登录</h1>
}

// React.createElement(type, props, children)
// type: 标签名
// props: type 的行内属性
// children: type 的子节点

let ele = (<h1 x="1" y="2">
  hello
  <span s="1">1</span>
  <span>2</span>
</h1>)

let eleByCreateElement = React.createElement(
  'h1',
  { x: 1, y: 2 },
  'hello',
  React.createElement(
    'span',
    { s: 1 },
    1
  ),
  React.createElement(
    'span',
    null,
    2
  )
)




ReactDOM.render(ul2, document.getElementById('root'), () => {
  console.log('渲染完了')
})

