
// 1. 配置开发环境：全局安装 react 的脚手架 create-react-app
// npm install create-react-app -g

// 2. 初始化 react 的项目，在命令行中执行以下命令：
// create-react-app 项目名；例如：create-react-app first-app

// 3. 执行上面命令后，会自动安装依赖，静等安装完成

// 4. cd 项目名字
// 5. npm start 或者 yarn start 启动本地开发服务器

// 项目目录结构：
// node_modules 依赖库
// public：index.html 是 webpack 打包时需要模板，index.html 中有一个根 DOM 节点；此外，这里面还可以放一些公用的 js、css 文件
// src: 代码的源文件，我们写的代码一般都放在这里面
// src/index.js 是程序的主入口，相当于 Vue 的 main.js ; index.js 是webpack打包的起点，index.js 负责把 App.js 渲染到页面中的真实DOM中；
// src/App.js 相当于 App.vue(但是不太一样)，App.js 是最后把组件组装到一起的地方

// React 的组成部分
// 1. react.js 是 React 的核心库
// 2. react-dom.js 提供了 React DOM相关的能力，常用的方法：ReactDOM.render() 这个方法可以把 react元素（jsx元素）渲染到页面真实的DOM元素中
