// redux: 状态管理模式；可以用来全局托管组件的状态，托管以后父子组件不用来回传递数据，兄弟组件也可以互通数据；
// 使用 redux
// 1. 在组件中导出 store
// 2. 用 store 中的状态初始化组件的状态
// 3. 把状态绑定到 jsx 元素中
// 4. 当变更状态时，store.dispatch(action)
// 5. 更新视图还需要订阅 store 的状态更新：store.subscribe(callback)
// 6. 当组件要销毁时，取消订阅

// react-redux
// 1. 把 store 引入组件树

// redux 中间件

// TodoList
