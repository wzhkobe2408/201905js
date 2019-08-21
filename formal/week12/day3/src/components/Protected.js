// 为了实现对路由的保护，我们需要对 Route 组件进行包装，用包装过后的组件来替换 Route 组件
import React from 'react'

import { Route, Redirect } from 'react-router-dom'

export default ({component: Component, ...others}) => {
  return <Route {...others} render={(props) => {
    // props 就是当前路由对象的信息
    // 这个 render 会在 Route 的 path 和当前 url 中的路径匹配的时候执行
    // 我们可以在这里判断用户登录状态，如果登录就返回 component，否则重定向
    console.log(props)
    return localStorage.getItem('loginSystem')
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', from: props.match.url}} />
  }
  }></Route>
}
