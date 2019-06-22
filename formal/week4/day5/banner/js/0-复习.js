/*
* 1. Promise ES6新增的类，用来管理异步的；
*
*
* */
let p = new Promise(function (resolve, reject) {
  // 这个回调函数在创建Promise实例时就会同步执行
  setTimeout(() => {
    console.log(3); // 最后输出3
    resolve();
  }, 3000);
  console.log(2); // 最先输出的2

  // 如何管理异步的？
  // 把异步的东西写到这个回调函数中
  // 如果异步处理成功，执行resolve
  // 如果异步处理失败，执行reject
});
console.log(1); // 然后输出1

p.then((data) => {
  // 异步处理成功后要做的事情，如ajax请求数据后的数据绑定等，相当于resolve
}, (error) => {
  // 异步处理失败要处理的事情，相当于上面的reject
});

// promise对象有三种状态：一旦promise对象的状态发生变更，状态就会凝固；执行resolve() 状态就从pending变成fulfilled；
// 执行reject() 状态就会从pending变成rejected；

// pending: 准备好了，开始处理异步任务
// fulfilled: 异步处理成功
// rejected: 异步处理失败

// Promise处理ajax
let ajaxP = new Promise((resolve, reject) => {
  // 把ajax写在这个函数中
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'json/banner1.json', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText));
    }
    if (xhr.readyState === 4 && xhr.status !== 200) {
      reject('ajax请求失败了')
    }
  };
  xhr.send();
});
ajaxP.then((data) => {
  // 这个函数时ajax执行成功后执行的函数
  console.log(data);
}, (error) => {
  // 这个ajax失败时执行的函数
  console.log(error);
});

// jQuery 类库：$ jQuery

// 1. 获取元素：用选择器获取
let $container = $('.container');
let $container2 = $('#container');
let $focusList = $('.focus > li'); // 获取focus的子级li

// 2. 常用的方法
// ajax()
$.ajax({
  url: 'json/banner.json', // 接口
  method: 'GET', // 请求方式：GET POST DELETE PUT OPTIONS
  dataType: 'json', // 数据类型，jq会做格式化数据
  async: true, // 是否异步，默认是true
  data: {}, // POST 给服务器的数据，GET请求时不必写data
  error (data) {
    // error first 先处理错误
  },
  success (data) {
    // ajax请求成功后会执行这个函数
    // 绑定数据
  }
});

// on() 方法:绑定事件; click() mouseover() mouseout()

// css() 获取元素某个样式属性或者设置或者批量设置
$container.css('width'); // 获取
$container.css('width', 100); // 设置
$container.css({
  left: 100,
  backgroundColor: '#00b38a'
}); // 批量设置

// html() 不传参是获取元素的innerHTML，传参就是设置元素的innerHTML；
// text() 获取或者设置innerText

// index() 获取索引
// addClass() 增加类名
// removeClass() 移除类名

// siblings() 获取当前元素的兄弟们

// animate(target, duration, effect, after) 动画方法

// stop() 不管是否执行完，都得停；
// finish() 忽略动画时间，一下子到终点



