// 当菜单选中的时候需要激活的样式，我们需要包装 Link 组件；用我们包装后的组件替换原有的 Link

import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom'

function Welcome({to, label}) {
  return <h1>{to}{label}</h1>
}

let x = <Welcome to='/user/add' label='新增用户' />

export default ({to, label}) => {
  return <Route path={to} children={(props) => {
    // props 是路由信息对象
    // Route 的 children 和 render 类似，但是 render 是 path 匹配的时候才会执行，而 children 是不管路径匹配与否都会执行；
    // children 也要返回一个 jsx 或者一个组件，这个组件或者 jsx 将会被渲染到页面中
    return <li className={props.match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </li>
  }} />
}
