// 1. 导入内置模块
let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 2. 创建服务
let app = http.createServer((req, res) => {
  // 2.1 解析url
  let urlObj = url.parse(req.url, true);
  let {pathname, query} = urlObj;

  // 2.2 根据pathname判断是否是静态资源服务
  if (pathname === '/' || /(\.\w+)$/.test(pathname)) {
    // 静态
    let filePath = '';
    let contentType = '';
    if (pathname === '/') {
      filePath = __dirname + '/index.html';
      contentType = 'text/html';
    } else {
      filePath = __dirname + pathname;
      contentType = mime.getType(pathname);
    }

    res.setHeader('Content-Type', contentType);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('NOT FOUND')
      } else {
        res.end(data);
      }
    })
  } else {
    // ajax 接口

  }
});

// 3. 监听端口
app.listen(8000, () => console.log('port 8000 is on'));