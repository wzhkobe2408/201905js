// 和 webpack.config.js 一样，修改后要重启
// 开发以后，要上线；上线前要把前端代码打包到后端的项目中，需要webpack，我们只需要告诉webpack把打包后的结果输出到服务端项目的某个目录就可以了

module.exports = {
  outputDir: '../vue-book-server/static', // 指定打包后文件输出的目录
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8002',
        changeOrigin: true,
        secure: false
      }
    }
  }
};
