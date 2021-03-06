// 内置模块：Node.js 内置模块是随着Node一起安装的，都是Node核心模块；

// fs模块：fs（file system）是用来读写文件的，专门用来处理文件的读写；

// 1. 使用fs要先导入fs模块，其他内置模块也需要在使用前导入；
let fs = require('fs'); // 导入内置模块和第三方的模块时都不需要写路径；导入自定义模块时必须写路径；

// 1. 异步读取文件
// fs.readFile(fileName, option, callback);
// fileName: 文件名
// option: 设置读取的内容为哪种编码，option的默认值是buffer，存储二进制的数据，一般在机器之间传递可以直接传二进制；
// callback: 回调函数 读取文件后异步执行的回调函数
/*fs.readFile('./1.txt', function (err, data) {
  // 当读取失败时err是一个对象，读取成功时是null

  if (err) {
    console.log(err);
  } else {
    console.log(data); // 读取时默认使用buffer，buffer存储二进制数据
    console.log(data.toString()); // buffer.toString() 就可以变成汉字
  }
});*/

/*fs.readFile('./1.txt', 'utf8',function (err, data) {

  // 当读取失败时err是一个对象，读取成功的是null

  if (err) {
    console.log(err);
  } else {
    console.log(data); // 设置为utf8以后自动把读取到的内容变成utf8编码的
  }
});*/

// 2. 同步读取文件
// fs.readFileSync(fileName, options);
// fileName: 文件名
// options: 编码
// 这个方法会返回读取到的内容；如果读取失败直接报错
let data = fs.readFileSync('./1.txt', 'utf8');
console.log(data);
