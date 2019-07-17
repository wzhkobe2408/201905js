// fs 模块：是 Node.js 内置的模块；fs (file system 文件系统) 用于文件读写；

let fs = require('fs');

// 1. 异步读取文件:
// __dirname 当前文件所处的路径，绝对路径
// __filename 当前文件的带绝对路径的文件名，并且带扩展名

// fs.readFile(带路径的文件名, 编码, callback) 
fs.readFile('./1.txt', 'utf8', (err, data) => {
  // 如果读取成功err是null，如果读取失败err是对象；
  // 如果文件读取成功，会把读到的数据传给data，在回调函数中使用这个data就是使用读取来的数据；
  if (err) {
    // console.log(err);
    // no such file or directory 没有这样一个文件或者文件夹；（导致报错的原因就是文件路径错误）
  } else {
    // console.log(data);
  }
});

// 2. 同步读取文件：
// fs.readFileSync(带路径的文件名, 编码)
// 返回值是读取到内容；
// let data = fs.readFileSync('./1.txt', 'utf8');
// console.log(data);

// 修改文件：向文件中写入内容

// 3. 异步写入文件
// fs.writeFile(path, data, option, callback);
// path 文件名（如果没有这个文件会创建一个）
// data 要写入文件的内容
// option 文件编码
// callback 写入后执行的回调

let code = 'function sum (a, b) {return a + b}';
fs.writeFile('./a.js', code, 'utf8', (err, data) => {
  // err 写入失败时是一个对象，写入成功是null
  if (err) {
    console.log('写入失败');
    // 一般写入文件失败是由于文件夹权限有问题
  } else {
    // console.log('写入成功');
  }
});

// fs.writeFile() 是覆盖式写入，原文件中的内容会被覆盖掉；如果要追加的话，先把原来的文件内容读取出来，然后再拼接上咱们要写入的内容，然后再一并写回去；

// 同步写入：
// fs.writeFileSync(path, data, option)
// path 文件名（含路径）
// data 写入文件的内容
// option 编码
// 同步写入没有返回值
let htmlStr = `<!DOCTYPE>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="发上等愿，结中等缘，享下等福">
  <meta name="keywords" content="前端好,前端好个锤子">
  <title>这是一个title标签</title>
  <!--TDK 做SEO时要设置-->
</head>
<body>
  <div>
    这是一个划时代的app 
 </div>
</body>

<script>
alert('真香')
</script>
</html>`;

let wdata = fs.writeFileSync('../a.html', htmlStr, 'utf8');
console.log(wdata);

// 向文件中追加内容：

// 异步追加
// fs.appendFile(path, data, option, callback)
// path 文件名（含路径）
// data 写入文件的内容
// option 编码
// callback 追加后的回调

let code2 = '\n\rfunction minus(a, b) {return a - b}';
// \n 换行
// \n\r 空行
/*fs.appendFile('./b.js', code2, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('追加成功');
  }
});*/

// 同步追加
// fs.appendFileSync(path, data, option)
// 参数和异步相同
fs.appendFileSync('./b.js', code2, 'utf8');
