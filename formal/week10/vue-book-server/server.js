let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');

let bookData = __dirname + '/database/book.json';
let collectData = __dirname + '/database/collect.json';
let sliders = require('./database/sliders'); // 导入轮播图图片的数据
let jdb = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

let app = express();

// 使用中间件
app.use(express.static(__dirname + '/static')); // 静态资源服务
app.use(bodyParser.json()); // 使用bodyParser 处理post请求数据

// 轮播图图片接口
app.get('/api/sliders', (req, res) => {
  res.send(sliders);
});

// 获取热门图书: 从book.json 中取最后四本书返回
app.get('/api/hot', (req, res) => {
  let con = jdb(bookData);
  let books = con.slice(-4); // 从数组中取最后4条
  res.send(books);
});

// 获取图书列表
app.get('/api/books', (req, res) => {
  let con = jdb(bookData);
  res.send(con)
});

app.listen(8000, () => console.log('port 8000 is on'));
