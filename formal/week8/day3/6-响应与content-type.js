// Content-Type:
// 服务端在响应客户端的请求的时候要设置响应内容的内容类型，即Content-type；当客户端收到服务端的响应内容后，会按照这个Content-type解析响应的内容；

// Content-type 是一个响应头；

let http = require('http');
let url = require('url');
let fs = require('fs');
let contentTypes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  ico: 'image/x-icon'
};

// 1. 创建一个服务

let server = http.createServer((req, res) => {
  // 1.1 解析url
  let urlObj = url.parse(req.url, true);
  let { pathname } = urlObj;

  // 根据pathname里面的拓展名，判断到底内容类型是什么；.html -> text/html; .css -> text/css
  // /a.html
  // /a.css
  // /a.js
  // /3.png
  // /
  
  let extReg = /\.(\w+)/;
  let types = extReg.exec(pathname); // 正则捕获，如果捕获到返回数组，捕获不到返回null
  
  if (types) {
    let ext = types[1];
    console.log(ext);
    res.setHeader('Content-Type', contentTypes[ext]);
    // res.setHeader(key, value); 设置响应头信息，key和value都是字符串类型的；
  }

  let filePath = '';
  if (pathname === '/') {
    res.setHeader('Content-Type', contentTypes.html);
    filePath = __dirname + '/index.html'
  } else {
    filePath = __dirname + pathname;
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.end('NOT FOUND')
    } else {
      res.end(data);
    }
  })
});

// 2. 监听一个端口号
server.listen(8000, () => console.log('port 8000 is on'));
