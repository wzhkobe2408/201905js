import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// 1. react 组件
// 1.1 function 声明组件
// * 函数名大写首字母（区分原生 HTML 标签），组件被声明后，函数名就可以当做标签使用
// * 第一个形参 props； props 是一个对象，组件在被使用的时候通过其行内属性的方式传递过来的数据
function Welcome(props) {
  return (<h1>{props.title}</h1>)
}
let t = '今天很凉快'

// ReactDOM.render(<Welcome title={t} />, document.getElementById('root'))

// 1.2 class 声明组件:
class Header extends React.Component {
  constructor (props, context) {
    super()

    // 用 class 声明的组件可以有 state （状态），state 是组件私有的数据
    // state 里面的数据不可以直接修改；如果想修改，需要用 this.setState

    this.state = {
      num: 1,
      x: 777
    }
  }

  handleClick = (e, step) => {
    // this.state.num += 1
    // setState 有两种用法
    // 1. this.setState(prevState => ({state: newVal}))
    /*this.setState(prevState => {
      // prevState 就是被修改之前的状态
      // setState 的回调需要返回一个对象，对象中的属性就是要变更的状态，不需要变更的状态不需要写在对象中，React 会自动合并
      return {
        num: prevState.num + 1
      }
    })*/
    // 2. this.setState({state: newVal})
    this.setState({
      num: this.state.num + 1
    })

    // React 也是数据驱动的，当数据（props、state）发生变更时，重新执行 render 函数获取虚拟 DOM，然后经过 DOM-diff 更新页面中需要更新的视图
  }

  render () {
    return (<div>
      <h1>{this.props.content}</h1>
      <p>{this.state.num}</p>
      <button onClick={(e) => this.handleClick(e, 1)}>加加</button>
    </div>)
  }
}

// function 和 class 声明的组件有什么区别？
// react 组件的数据来源有两个：props 和 state
// function 声明的组件只有 props
// class 声明的组件除了 props 还有 state，this、生命周期钩子

// 2. 数据映射视图：把组件中的数据绑定到 jsx 中，进而渲染到页面中
// 2.1 props 映射到视图
// 封装组件时，要考虑你这个组件要做什么用，需要外界传入哪些数据；
function Hello(props) {
  return <h1>{props.greeting};name:{props.name};</h1>
}
let data = {
  greeting: 'Good morning',
  name: 'mabin'
}
// ReactDOM.render(<Hello {...data} />, document.getElementById('root'))

// 2.2 状态映射视图
class China extends Component {
  constructor (props, context) {
    super()
    this.state = {
      slogan: '不转不是中国人',
      amount: '14亿',
      motto: '犯我中华者，虽远必诛'
    }
  }

  render () {
    let obj = {
      slogan: '不转不是中国人',
      amount: '14亿',
      motto: '犯我中华者，虽远必诛'
    }
    // Object.keys(obj) 把对象的属性名取出来组成一个数组
    // Object.values(obj) 把对象的属性值拿出来组成一个数组
    // Object.entries(obj) 把对象的属性名和属性值组成一个新数组，形如 [['slogan','不。。。'], ['amount', '14']...]
    // 以上的方法常配合列表渲染
    return (<div>
      <Header />
      {
        Object.values(this.state).map((item, index) => <h2 key={index}>{item}</h2>)
      }
    </div>)
  }
}

ReactDOM.render(<China />, document.getElementById('root'))


// 3. 父子组件通信
// 3.1 父传子：父组件通过 props 把数据传递给子组件
// 3.2 子传父：子组件想要修改父组件的数据，父组件直接把修改数据的方法通过 props 传递给子组件，当子组件想要修改数据的时候通过 props 找到父组件传来的方法，执行它就可以修改父组件的数据了

// 4. props 校验：React 的 props 也支持校验，需要借助第三方的库：prop-types

// prop-types 需要安装

class Customer extends Component {
  // prop 校验：设置静态属性
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }

  // 给 prop 设置默认值
  static defaultProps = {
    age: 18
  }
}

// 如下方式也是为类添加静态属性（静态属性是类自身的，和实例、原型无关）
Customer.someStaticProps = {

}

function Teacher() {}

Teacher.someStaticProps = {

}
