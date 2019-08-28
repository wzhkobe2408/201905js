import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd'

// columns 是配置表格的列: 数组中每一项都会成为表格的一个列
// 相当于 ele-ui 里面的 el-table-column
const columns = [
  {
    title: '姓名',
    dataIndex: 'name', // 标识当前列展示数据的字段名
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    // 在某一列里面不只是展示数据，还有其他的功能，需要在这个列中设置 render 函数；render 函数中
    render: tags => (<span>
      {
        tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (<Tag color={color} key={tag}>
            {
              tag.toUpperCase()
            }
          </Tag>)
        })
      }
    </span>)
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record, index) => {
      // console.log(text, record)
      // text 当前行的值
      // record 当前行的数据
      return (<span>
      <a>Invite {record.name}</a>
      <Divider type='vertical' />
      <a>Delete</a>
    </span>)
    }
  }
]

// data 中的数组项是一个行的数据，有一个数组项就有一行
const data = []
for (let i = 0; i < 1000; i++) {
  data.push({
    key: '' + i,
    name: '小飞' + i,
    age: 15 + i,
    address: '靠山屯' + i,
    tags: ['nice' + i, 'developer' + i]
  })
}
/*const data = [
  {
    key: '1',
    name: '小飞',
    age: 15,
    address: '靠山屯',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
]*/


export default class MyTable extends React.Component {
  render () {
    // antd 的 Table 自带分页器；默认一页展示10条
    // pagination={false} 可以关闭分页器
    let pagerOptions = {
      showQuickJumper: true, // 出现快速跳转 input
      pageSizeOptions: ['10', '20', '50', '100'], // 配置一页展示多少条
      showSizeChanger: true, // 是否展示切换一页展示多少条的 select
      onChange: (page, pageSize) => {
        // 当分页器的页码发生变化时，会调用这个方法
        // page 是当前页
        // pageSize 是一页展示多少条
        console.log(page, pageSize)
      },
      onShowSizeChange: (page, size) => {
        // page 是当前页
        // size 是当前选中的一页展示多少条
        console.log(page, size)
      }

    }
    return <Table columns={columns}
                  dataSource={data}
                  pagination={pagerOptions}
                  bordered />
  }
}
