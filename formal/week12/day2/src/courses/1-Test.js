import React, { Component } from 'react'

import ThemeContext from './ThemeContext'

function Button() {
  return <ThemeContext.Consumer>
    {
      value => <button className={`btn btn-${value.theme}`}>来自另一个组件的按钮：{value.theme}</button>
    }
  </ThemeContext.Consumer>
}

export default Button
