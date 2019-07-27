// 真实项目中，我们采用webpack配置文件的方式来配置webpack打包的具体行为；

// 在项目的根目录下面新建一个 webpack.config.js 的文件；webpack运行的时候自动加载这个文件，然后按照这个文件中的配置打包；

// 学习webpack，就是学习webpack配置文件的编写；webpack需要基于CommonJS风格导出一个配置对象；

module.exports = {
  // 把所有的配置写在这个对象中
  entry: __dirname + '/app/main.js', // entry 是webpack打包的起点
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }, // output 是webpack打包以后输出的文件路径和文件名

};