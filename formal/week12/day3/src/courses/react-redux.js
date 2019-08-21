import React, { Component } from 'react'

let StoreContext = React.createContext(null)

// let p = <Provider store={store}><App></App></Provider>

class Provider extends Component {
  render () {
    return <StoreContext.Provider value={this.props.store}>
      {
        this.props.children
      }
    </StoreContext.Provider>
  }
}

// actions 是 actionCreator 对象；actionCreator 是返回 action 对象的函数
let actions = {
  add (amount) {
    return {
      type: 'ADD',
      amount
    }
  },
  minus (amount) {
    return {
      type: 'MINUS',
      amount
    }
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    add (amount) {
      dispatch(actions.add(amount))
    },
    minus (amount) {
      dispatch(actions.minus(amount))
    }
  }
}

let bindActionCreators = (actions, dispatch) => {
  let obj = {}
  for (let key in actions) {
    obj[key] = (...arg) => {
      dispatch(actions[key](...arg))
    }
  }
  return obj
}

let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  return class HOCProxy extends React.Component {
    static contextType = StoreContext
    constructor (props, context) {
      // 此时 context 就是 StoreContext 共享的 store
      super()
      this.state = mapStateToProps(context.getState())
    }
    componentDidMount () {
      this.unsub = this.context.subscribe(() => {
        this.setState(mapStateToProps(this.context.getState()))
      })
    }
    componentWillUnmount () {
      this.unsub()
    }
    render () {
      let dispatchToProps = {}
      if (typeof mapDispatchToProps === 'object') {
        dispatchToProps = bindActionCreators(mapDispatchToProps, this.context.dispatch)
      } else {
        dispatchToProps = mapDispatchToProps(this.context.dispatch)
      }
      return <Component {...this.state} {...dispatchToProps}  />
    }
  }
}


export { Provider, connect }
