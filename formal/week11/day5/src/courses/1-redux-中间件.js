// 中间件是用来增强 redux 功能的

// 常用的 redux 中间件

// 1. redux-logger: 把状态改变之前的值和改变之后的值输出到控制台
// 1.1 安装 redux-logger：yarn add redux-logger --save
// 1.2 使用中间件：需要在 createStore 的时候使用中间件; 使用中间件需要使用 redux 上的一个 applyMiddleware 方法
