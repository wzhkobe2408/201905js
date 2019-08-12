import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 列表渲染：根据给定的数据，生成一组相同的元素；在 vue 中 v-for 指令做列表渲染；

let ary = [
  {
    name: 'mabin',
    age: 18,
    title: '宇宙集团军总司令'
  },
  {
    name: '小飞',
    age: 17,
    title: '宇宙小魔仙'
  }
]

// 用数组的 map 方法做列表渲染；在 map 的回调函数中返回要生成多个的元素；列表渲染的时候需要写key
// map 把一个数据映射成一个新数组；
let lis = ary.map((item, index) => <li key={index}>姓名：{item.name}；年龄：{item.age}；职务：{item.title}</li>)
console.log(lis)

let ul = (<ul>
  {/*当使用 列表渲染的结果时，只需要把结果当成普通变量用 {} 包裹一下*/}

  {/*{lis}*/}

  {
    /*不用变量可以直接写表达式*/
    ary.map(function (item, index) {
      return <li key={index}>
        姓名：{item.name}；
        年龄：{item.age}；
        职务：{item.title}
      </li>})
  }
</ul>)

ReactDOM.render(ul, document.getElementById('root'))
