let xhr = new XMLHttpRequest();
xhr.open('GET', 'banner.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // xhr.readyState 为4说明ajax请求完了
    // xhr.status 是http-status-code，表示http请求的结果状态
  }
};
xhr.send();

// 所有的http-status-code都是三位数字，表示http请求的结果如何，每个code还有一句对应的短语；

// 常用的http-status-code
// 2xx: 表示成功
// 200 OK 表示所有的东西都正常
// 204 No Content 表示请求成功，但是服务端没有内容给你

// 3xx: 表示重定向
// 301 Moved Permanently 永久重定向，一个域名被指向了一个其他网站，且是永久的；（当访问一个被永久重定向的网址的时候，会收到一个301的响应状态码，浏览器检测到301以后，浏览器会从响应头中找到Location的属性对应url，然后浏览器会重新打开这个url）；

// 302 Moved Temporarily 临时重定向
// 304 Not Modified 走缓存 （服务端觉得你之前请求过这个东西，而且服务器上的那一份没发生变化，告诉客户端用缓存就行）

// 4xx: 表示客户端错误
// 400 Bad Request 参数传递不当，导致的错误
// 401 Unauthorized 权限不够
// 403 Forbidden 服务端已经理解请求，但是拒绝响应；
// 404 Not Found 客户端请求的资源或者数据不存在（上班后发现请求接口404，有两种情况咱们写错接口或者服务端还没部署）

// 5xx: 表示服务端错误（遇到以5打头的错误去找服务端同事）
// 500 Internal Server Error 服务器内部错误
// 502 Bad Gateway 网关错误

// 这些状态码都是服务端设置的，如果出了问题，找服务端；


