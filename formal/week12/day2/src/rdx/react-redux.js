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

let bind

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
      let dispatchToProps = mapDispatchToProps(this.context.dispatch)
      return <Component {...this.state}  {...dispatchToProps} />
    }
  }
}

export { Provider, connect }
