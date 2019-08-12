import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './7-test.css'

let fruits = [
  {
    name: '苹果',
    color: ['red', 'green', 'yellow']
  },
  {
    name: '香蕉',
    color: ['green', 'yellow']
  },
  {
    name: '芒果',
    color: ['green', 'yellow']
  }
]

let lis = fruits.map((fruit, fIndex) => {
  return (<li key={fIndex} className={ fIndex % 2 === 0 ? 'odd' : 'even'}>
    <p>{fruit.name}</p>
    <ul>
      {
        fruit.color.map((color, cIndex) => {
          return <li key={cIndex} className={cIndex % 2 === 0 ? 'odd' : 'even'}>{color}</li>
        })
      }
    </ul>
  </li>)
})

let ul = <ul>
  {lis}
</ul>

ReactDOM.render(ul, document.getElementById('root'))
