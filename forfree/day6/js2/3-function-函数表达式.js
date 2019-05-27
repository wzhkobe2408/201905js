/*
* 目标：
*   1. 理解匿名函数
*
* */

/*
* js中的函数分为两类：
*   1.实名函数：有名字的函数；
*   2. 匿名函数：没有名字的函数
*     2.1 函数表达式：把函数当成一个值赋值给变量或者对象的属性（包含元素的事件属性）
*     2.2 自执行函数：声明完成后立即执行；
*
*
* */
var r0 = sum(1, 3);
console.log(r0);
function sum(a, b) {
  return a + b;
}

// 函数表达式
// var r11 = sum2(10, 30); // 用函数表达式的方式声明的函数不能在声明之前调用（调用就是执行）
var sum2 = function (a, b) {
  return a + b;
}; // 把函数当成一个值赋值给变量
var r1 = sum2(10, 20);
console.log(r1);
// box.onclick = function () {};

var obj = {};
obj.getName = function () {
  console.log('珠峰培训');
};
// console.log(obj);
obj.getName(); // 执行getName方法

var obj2 = {
  getAge: function (a) { // 这个也是函数表达式
    console.log(a);
  }
};
obj2.getAge('这个实参就是传给a的');


// 2.2 自执行函数：自执行函数时创建闭包的最简单的方法；
(function (a, b) {
  // 声明一个函数
  console.log(a, b);
})(1, 15); // 后面的这个函数时是执行，写在执行的小括号里面的值叫做实参

// 自执行函数的其他写法
~function (x, y) { // ~ 是按位取反
  console.log(x, y);
}(14, 13); 

+function (x, y) {
  console.log(x, y);
}(12, 13);

!function (x, y) {
  console.log(x, y);
}(15, 56);



