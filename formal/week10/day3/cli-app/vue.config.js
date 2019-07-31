// 这个文件用于修改cli和webpack的配置
// 基于CommonJS 的风格导出一个对象

module.exports = {
  outputDir: './dist', // 指定文件打包后的输出路径
  lintOnSave: true, // 启用语法检查，默认启用
  productionSourceMap: false, // 生产环境是否需要 source-map ,如果设为false可以加速构建
  devServer: { // vue-cli 支持所有webpack-dev-server的配置
    port: 8082,
    open: true, // 自动打开浏览器
    https: false, // 是否启用https
    proxy: { // 这个必须会，用来解决开发环境跨域的问题
      '/home': {
        target: 'https://www.itouzi.com',
        changeOrigin: true,
        secure: false
      }
    }
  }

};
