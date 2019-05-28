/*
* 目标：
*   1. 掌握作用域链机制；
*   2. 掌握变量查找机制
* */

// 作用域（scope）：js代码执行的执行的环境，另外还可以存储基本数据类型的值。
// 全局作用域：打开一个页面的时候，浏览器就会创建一个全局作用域（window对象）
// 私有作用域（函数作用域）：函数执行的时候浏览器开辟的，只要函数执行就会新开辟一个私有作用域；
// 块级作用域：把代码块（if/for循环...的代码块变成作用域），功能和私有作用域类似，是ES6新增的；

var num = 100;
function sum(a, b) {
  return a + b;
}
sum();
sum();

function fn(a) {
  var x = 6;
  // var num = 15;
  return num + a; // ?? fn 执行的时候为什么拿到外面的变量num的值呢？
}
var r = fn(3);
console.log(r); // 103 ?
// console.log(x); // ?? 为啥我拿不到私有变量呢？

// 作用域链：变量的查找机制；当我们引用一个变量时，浏览器会首先在当前作用域中查找，看当前作用域中是否有这样一个变量，如果有直接使用。如果没有，就向上一级作用域查找，如果找到就使用，如果没找到，就继续向上查找，一直找到window，如果还没有，如果是引用就会报错，如果是赋值就是给window增加一个同名属性；

function fn2(a, num) {
  var x = 6;
  return a + num; // 形参是也是当前作用域中的私有变量；
}
var r2 = fn2(1, 3);

function fn3() {
  MY_INDEX = 101; // 如果是给一个没声明过的变量赋值，就是给window增加一同名属性。
}
fn3();
console.log('MY_INDEX' in window);
console.log(window.MY_INDEX);

// ? 如何确定上级作用域？
// 如何确定上级作用域：看这个函数在哪个作用域定义的，定义时所在的作用域，就是该函数的上级作用域；
function f() {
  var num = 15;
  return function () {
    return function () {
     console.log(num);
    }
  }
}
f()()(); // 15












