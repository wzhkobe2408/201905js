module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8008/',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
