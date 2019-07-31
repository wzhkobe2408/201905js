let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // 配置打包的入口
  output: {
    path: __dirname + '/dist', // 一般输出目录都叫dist或者build
    filename: 'bundle.js' // 打包输出的文件名
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './src',
    port: 8001,
    open: true, // 自动启动浏览器
    inline: true, // 文件内容修改，浏览器自动刷新
    historyApiFallback: true, // 单页面应用切路由不刷新（history模式）
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 和服务端同事联调时，你需要和服务端同事要开发机的ip或者域名（再次确认端口，域名有可能不是用的80或者443）
        changeOrigin: true, // target是域名的话，要设置为true
        secure: false // 不校验安全与否
      }
    }
  },

  // 配置loader
  module: {
    rules: [
      { // 配置babel
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
        exclude: /node_modules/ // 不处理node_modules中的东西
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|ttf)$/,
        use: 'url-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};