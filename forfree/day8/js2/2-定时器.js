/*
* 目标：
*   1. 了解定时器
*   2. 掌握设置定时器
*   3. 掌握清除定时器的方法
* */
// js 中有两种定时器
// 1. setTimeout(function () {}, 时间毫秒数) 等时间到了，执行一次回调函数。返回定时器ID；
var timerId = setTimeout(function () {
  // 这个回调函数中写你想时间到了做的事情
  console.log('没时间了');
}, 3000);
var timerId2 = setTimeout(function () {
  console.log('timer 2');
}, 4000);

console.log(timerId);
console.log(timerId2);

// 2. setInterval(function () {}, 时间间隔毫秒数); 每隔时间间隔都执行一次回调函数；返回值也是定时器id；

var timerId3 = setInterval(function () {
  console.log('inteval的时间到了');
}, 1000);
console.log(timerId3);

// 定时器清除：想让定时器停止，就是清除定时器。清除定时器也有两种办法：
// 1.clearTimeout(定时器ID) 清除setTimeout() 设置的定时器
clearTimeout(timerId);

// 2. clearInterval(定时器id)；清除setInterval() 设置的定时器
clearInterval(timerId3);







