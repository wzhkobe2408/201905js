// 和 webpack.config.js 一样，修改后要重启
module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    }
  }
};
