import React, { Component } from 'react'
// 高阶组件：参数接收一个组件，返回一个新组件的函数；

// 高阶函数：箭头大于一个的函数就是高阶函数
// let connect = () => () => {}

let local = (key) => (Component) => {
  return class HOCProxy extends React.Component {
    constructor () {
      super()
      this.state = {
       [key]: ''
      }
    }

    componentWillMount () {
      let val = localStorage.getItem(key)
      this.setState({
        [key]: val
      })
    }

    render () {
      return <Component {...this.state} />
    }
  }
}

export default local
