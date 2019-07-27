// webpack 是基于 Node.js 的静态资源模块打包器；它可以根据一个起点，查找各个模块之间的依赖关系，根据这些依赖关系把模块打成一个或者多个包；

// 为什么使用webpack？
// 1. webpack对模块化的支持十分强大，我们可以借助webpack使用模块化开发；
// 2. 可以帮我们处理Less、Sass等css预处理语言
// 3. 把基于JS的扩展语言，如 TS 处理成JS；
// 4. 配置代理，解决开发环境跨域问题

// 全局安装webpack
// 1. webpack-cli : npm install webpack-cli -g
// 2. webpack: npm install webpack -g


// webpack-cli --entry ./app/main.js --output ./public/bundle.js
// --entry 指定入口文件
// --output 指定打包后输出的文件路径及文件名
// 这句命令：以 ./app/main.js 为入口开始打包，最后把打包后的文件输出到./public/bundle.js

// 配置npm scripts
// 在package.json scripts下面的start比较特殊，执行start不需要写run，直接写 npm start
// 其他的命令要npm run 命令

