import React, { Component } from 'react'

let StoreContext = React.createContext(null)

class Provider extends Component {
  render () {
    return (<StoreContext.Provider value={this.props.store}>
      {
        this.props.children
      }
    </StoreContext.Provider>)
  }
}

let connect1 = function (mapStateToProps, mapDispatchToProps) {
  return function (Component) {

  }
}

// 这个方法可允许 mapDispatchToProps 传递一个 actionCreator 对象
let bindActionCreators = (actions, dispatch) => {
  let obj = {}
  for (let key in actions) {
    obj[key] = (...arg) => dispatch(actions[key](...arg))
  }
 /* let o = {
    add (...arg) {
      dispatch(actions.add(...arg))
    },
    minus (...arg) {
      dispatch(actions.minus(...arg))
    }
  }*/
  console.log(obj)
  return obj
}

let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {

  return class HOCProxy extends React.Component {
    static contextType = StoreContext
    constructor (props, context) {
      // 使用 Context 以后，context 就是 StoreContext 共享的 store
      super()
      this.state = mapStateToProps(context.getState()) // context 就是 store
    }
    componentDidMount () {
      // 订阅状态更新
      this.unsub = this.context.subscribe(() => {
        this.setState(mapStateToProps(this.context.getState()))
      })
    }
    componentWillUnmount () {
      this.unsub()
    }

    render () {
      // mapDispatchToProps 的返回值是变更状态的对象，我们把这个对象变成 Component 的 props
      let dispatchToProps = {};
      // mapDispatchToProps 可以简写成一个 actionCreator 对象，所以这里我们需要处理一下；如果是一个对象，我们需要调用 bindActionCreators 来处理
      if (typeof mapDispatchToProps === 'object') {
        dispatchToProps = bindActionCreators(mapDispatchToProps, this.context.dispatch)
      } else {
        dispatchToProps = mapDispatchToProps(this.context.dispatch)
      }

      return <Component {...this.state}  {...dispatchToProps} />
    }
  }
}

export { Provider, connect }
