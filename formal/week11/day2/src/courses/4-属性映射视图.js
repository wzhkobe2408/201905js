import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
  return <h1>{props.time}</h1>
}

function tick() {
  let time = new Date().toLocaleTimeString()

  ReactDOM.render(<Welcome time={time} x='1' y='2' />, document.getElementById('root'))
}
// tick()
// setInterval(tick, 1000)

function User(props) {
  return <h1>姓名：{props.name}；年龄：{props.age}</h1>
}

let data = {
  name: 'mabin',
  age: 18
}

// 使用别人写的组件时，一般都会有文档，文档会告诉咱们传哪些属性，如果用就要按照文档传；
// 例如上面的 User 组件，需要传递 name 和 age 属性

// ReactDOM.render(<User name={data.name} age={data.name} />, document.getElementById('root'))

// 我们通过 ... 展开运算符，可以把一个对象展开成一个组件的 props
ReactDOM.render(<User {...data} />, document.getElementById('root')) // {...data} 和上面的方式等价





