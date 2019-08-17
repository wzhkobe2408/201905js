import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

window.__store = store

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// 使用 react-redux 可以简化 redux 使用过程
// 1. 使用 react-redux 首先安装它：yarn add react-redux --save
// 2. react-redux 提供了 Provider 组件，可以把 store 引入到组件树中
// 2.1 在应用的顶层（一般就是index.js）使用 Provider 组件，并且为 Provider 组件设置 store 属性，值就是 redux 导出的 store

// npm i 或者 yarn 相当于 npm install
// 如果你的项目跑不起来，删除 node_modules 然后重装依赖，在重启
// 如果安装依赖的过程中报错，清 npm 缓存：npm cache clean --force
// 如果还不行，把报错粘贴到百度（谷歌）里面

