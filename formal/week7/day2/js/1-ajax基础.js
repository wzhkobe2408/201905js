
// AJAX: Asynchronous Javascript And XML 异步的javascript和xml
// 是浏览器技术

// XML: 可扩展标记语言，像html一样有层级，并且可以自定义标签；为了让数据有结构，早年间使用的都是XML；

// 现在绝大多数公司都用JSON，JSON也可以清晰的表示数据的结构；

let data = {
  code: 0,
  list: [
    {
      name: 1,
      age: 18
    },
    {
      name: 2,
      age: 17
    }
  ],
  msg: 'ok'
};
// let {list: [{age}]} = data;
// let age2 = data.list[0].age;

// JSON是一种数据格式：有JSON格式的对象，JSON格式的字符串
// JSON.parse() 把JSON格式的字符串转成对象；
// JSON.stringify() 把对象转成JSON格式的字符串

// JSON.parse(JSON.stringify(对象)) 可以深克隆这个对象

// 服务端渲染和全局刷新：
// 在没有ajax的时候，数据都是由后端的人来绑定的；前端只负责把设计稿还原成html，然后就把html交给后端；后端开发通过服务端技术把数据从数据库中取出来，然后直接把数据绑定到html中；当我们请求一个页面的时候，我们拿到的页面都是已经由后端的人绑好数据的页面（服务端绑数据，这种模式叫做服务端渲染SSR(Server-Side-Rendering)）；

// 这么干有一个好处，用户看到的页面都是带有数据的，不需要再等；但是有一个很大的弊端，如果这个页面中只有一部分数据需要更新，但是我们必须刷新整个页面才能获取最新的数据（因为数据都是服务端绑的，要想获取这些最新的数据，就要让服务端再绑定一遍）。这种获取数据的方式称为全局刷新；全局刷新体验不好；

// 有了ajax以后，发送ajax请求去服务端请求数据，然后拿到数据后通过前端技术把数据绑定到页面中（动态创建DOM+APPENDCHILD; 拼接字符串）；这种操作无须刷新整个页面就能更新页面数据，这种方式称为局部刷新；

// 1. 创建ajax实例
let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
// 2. 调用open方法
xhr.open('GET', 'banner.json', true);
console.log(xhr.readyState);
// open的参数：
// 2.1. http-method 请求方式（请求方法）
// 2.2. 接口
// 2.3. 是否异步，true表示异步，false表示同步

// 3. 监听onreadystatechange事件
xhr.onreadystatechange = function () {
  console.log(xhr.readyState); // 异步的时候，readyState发生变化会触发readystatechange事件；所以从1变到2会触发一次，从2变到3触发一次，从3变到4会触发一次，于我们而言只有等于4的那一次才有意义；
  if (xhr.readyState === 4 && xhr.status === 200) {

  }
};
// 4. 发送ajax请求
xhr.send(); // send是可以传参的，传递的参数会写到请求体中；

// readyState: 表示当前ajax实例所处状态的一个数字，每个数字代表不同状态
// 0: 创建一个ajax实例成功
// 1: 已经调用过open方法，打开了路径
// 2: 表示客户端已经接收到服务的响应头（如果只要响应头可以在readyState为2时候获取就行）
// 3: 表示客户端正在接收响应体
// 4: 表示响应体中的数据已经全部接收完毕；


