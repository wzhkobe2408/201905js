// jsonp: 一种跨域技术（和json没有直接关系）

// 要从如下接口获取数据：
// http://matchweb.sports.qq.com/kbs/calendar?columnId=100000

// JSONP的原理：利用了script标签的src属性不受同源策略的约束（link的href和img的src都不受约束）；所以我们用script的src请求第三方的接口，但是需要做一点特殊的处理；

// 1. 首先在页面中写一个script标签，src属性值是第三方的接口；
// 2. 声明一个函数fn，fn要有一个形参，把使用第三方数据的操作都写在fn里面；
function fn(data) {
  console.log(data);
}
// 3. 给前面的script的src上的接口多拼接一个callback=fn的参数;
// 4. 如果第三方的接口支持jsonp，会返回一个形如fn({xxxxx})的东西；script是用来加载js代码的，script就认为fn({xxx})是js代码，浏览器就会执行它；而fn() 就是让fn这个函数执行，小括号里面的东西就成为执行fn时的实参；

// JSONP只能用来发GET请求；
// callback 不是死的，而是第三方接口定义好的，如果使用时要查阅第三方的文档；
