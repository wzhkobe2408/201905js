// 1. 本地存储：购物车不登录也可以存东西，在A页面登录B页面能拿到登录信息（在一个页面存储东西，另一个页面取）

// cookie
// localStorage
// sessionStorage

// localStorage 永久存储（除了用户手动删除或者开发用代码删除）
// 存数据：localStorage.setItem(key, value); key和value都是字符串类型的，如果不是字符串浏览器会默认帮你转成字符串，但是转换后的结果不负责（给它一个对象，会转成 '[object Object]'）；

// 取数据：localStorage.getItem(key) 返回key对应的值；如果key不存在返回null；（!!null -> false）;

// 移除指定key的：localStorage.removeItem(key)
// 清空： localStorage.clear()

// 只要是在同一个源（要求协议、域名、端口号相同）下，在一个页面中用localStorage存储数据，在其他页面都能获取到；

// ！！！想把一个对象存到localStorage，需要先JSON.stringify(对象) 把对象转成JSON字符串，因为localStorage只能接受字符串。当你想用的时候取出来，要记得JSON.parse()

let data = {
  code: 0,
  list: [
    {
      name: 1,
      age:18
    },
    {
      name: 2,
      age: 19
    }
  ],
  msg: 'ok'
};

// sessionStorage: 会话存储；每次打开一个页卡就是一个新的会话；会话存储只在当前会话中有效；即使在同一个源下面，不同的会话也不能共享数据；
// setItem(key,value) 存储
// getItem(key) 获取
// removeItem(key) 移除

// localStorage和sessionStorage是HTML5新增的API，IE低版本不能用；

// http协议：是一个前后端交互的规范，客户端和服务端按照规范传递和接收数据；

// 可以把http协议理解成快递小哥，把客户端想要的东西告诉服务端（请求 request），把服务端给客户端的东西带给客户端（响应response）；

// 前后端交互模型：(在浏览器地址栏输入一个url，按下enter键，到看到页面经历了哪些事情？)
// [请求阶段]
// 1. 获取浏览器地址栏中的url地址如https://www.baidu.com，发送给DNS服务器(非重点：在去DNS服务器之前是看本地的DNS缓存和host文件，这两个东西里面存储的也是ip和url的对应关系)
// 2. DNS服务器把域名解析成ip地址（每个服务器都有一个ip地址）；
// 3. 把我们想要请求的内容发送到DNS服务器解析出来的IP地址对应的服务器；

// [响应阶段]：
// 4. 收到客户端的请求后，要分析请求，把客户端需要的东西整理并且发送给客户端；并且通过content-type响应头告知客户端响应内容是什么类型，客户端按照对应的规则解析响应内容；

// [渲染阶段]：
// 1. 按照服务端相应的html的节点间关系，组织成DOM树；在解析html（从上到下，从左到右的解析）的过程中遇到link、script、img标签会再次发送HTTP请求，请求的是link的href、script和img的src属性指向的静态资源文件；
// 2. 解析CSS，把CSS解析CSS树；
// 3. 组合DOM树和CSS树成为render树；
// 4. 交给GPU（显卡）绘制页面；

// 前端做性能优化专门有一个从http层面优化的方向；

// 三次握手和四次挥手（建立和断开连接的时刻，不涵盖具体传递数据的细节）；

// 三次握手：(建立连接)
// 第一次握手：客户端向服务端发送SYN码数据包，表示客户端请求建立连接；
// 第二次握手：服务端向客户端发送ACK码数据包，表示客户端的请求服务端已经收到，询问客户端是否确认建立连接；
// 第三次握手：客户端向服务端发送ACK码数据包，表示确认建立连接；

// 四次挥手：
// 第一次挥手：当客户端发送完数据后，客户端给服务端发送FIN码数据包，告诉服务端客户端的数据已经传递完毕了；
// 第二次挥手：服务端收到客户端的FIN后，发送ACK码数据包，告知客户端服务端已经知道传完了。客户端收到ACK以后就会关闭传递数据的通道；

// 第三次挥手：当服务端传输给客户端的数据完毕时，服务端发送FIN码数据包给客户端，告知客户端响应数据已经传递完了。
// 第四次挥手：当客户端收到FIN后，客户端会发送ACK给服务端，告诉服务器客户端已经知道传完了。服务端收到ACK以后就会把传输数据的通道关闭掉；


// url:
// https://www.dahai.com:443/courseIndex.html?id=1name=mb&age=18#top
// https:// 协议
// www.dahai.com 域名
// :443 端口号
// /courseIndex.html 路径
// ?id=1xxxx 问号传参（客户端GET请求时传递的数据给服务端）
// #top 锚点（哈希）

// 从页面中获取这些信息：这些信息都保存在window.location对象中；
console.log(window.location);
// location.hostname 域名
// location.origin 源
// location.pathname 路径
// location.port 端口号
// location.protocol 当前页面的协议
// location.href 当前页面地址栏中的url
// location.search url中问号传参

// location.reload() 刷新页面
// location.href = location.href; 刷新页面
// location.reload() 刷新页面时有一部分文件会使用缓存，给href赋值所有的文件都会重新加载；reload方法比给href赋值要快；

// http报文：前后端通过http协议交互时，用http报文承载交互信息；
// 请求报文和响应报文：

// 报文结构：
// 1. 报文首部（报文头）：
// 2. 空行（CR+LF）
// 3. 报文体

// 请求报文：
// 1. 报文首部：请求行、请求头；请求行包含 请求方法 http协议版本 url；
// 2. 空行（CR+LF）
// 3. 请求体

// 响应报文：
// 1. 报文首部：状态行、响应头；状态行包含：http协议版本 、响应状态码
// 2. 空行
// 3. 响应体：服务端响应的主要内容放在响应体中的；










