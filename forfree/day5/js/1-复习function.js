/*
* 1. 函数是一个封装了固定功能和逻辑的代码块。创建一次，可以无限次执行。在面向对象（OOP）的语言中函数又叫做方法。
*
* 2. 函数声明、执行的语法：注意函数每次执行都是独立的，每一次执行都是把函数体中的代码从头到尾的跑一遍。
*
* 3. 函数的参数机制：
*   3.1 函数声明时的形参
*   3.2 函数执行时的实参
*
* 4. 函数的返回值机制：我们希望函数执行后把函数执行的结果给到外面，但是由于闭包机制，导致函数内部变量外界拿不到。所以这时候就需要使用return指定函数的返回值；
*   4.1 return 啥函数的返回值就是啥
*   4.2 函数没有return 或者 return后面啥也不写，函数的返回值就是undefined
*   4.3 return 还可以终止当前函数体中return后面的代码（return 后面的代码不再执行）【有多个返回值不许写多个return】
*   4.4 return 永远返回一个值，如果return后面是一个表达式，return 会等待表达式求值完毕，然后把这个值返回
*
*
*
*
* */

// 2.1 函数声明
function functionName(a, b) {
  // a, b 形参、形参也是变量，但是形参只能在函数体内部使用
  // 花括号叫做函数体，函数体中放的就是实现固定功能和逻辑的代码
}
// 2.2 函数执行
functionName(1, 2); // 函数名加(实参); 实参是赋给形参变量的值
functionName(1); // a = 1, b = undefined
functionName(1, 2, 3); // a = 1, b = 2; 3没有形参接收

var x = 3, y = 4; // 用一个var 声明多个变量，每个变量用逗号隔开.
functionName(x, y); // 把变量 x、y代表的值传递给了functionName，不是把两个变量给了函数

var obj = {
  num1: 1,
  num2: 2
};
functionName(obj); // 这样我是把obj变量保存的堆内存地址给了函数

functionName(obj.num1, obj.num2); // 这种情况是从obj里面把num1和num2的值取出来，然后传给函数 a = 1 b = 2

function multiReturns(a, b, c) {
  return a; // 一个函数中不能写多个return
  return b;
  return c;
}

function multiReturns(a, b, c) {
  return a, b, c; // 因为 , (逗号运算符) 会返回表达式的最后一个值
}

function multiReturns(a, b, c) {
  // return [a, b, c];
  return {
    a: a,
    b: b,
    c: c
  }
}


function qqCandy() {
  return '旺仔';
}

function foo(advs) {
  return qqCandy(); // qqCandy() 也是表达式，当它作为函数返回值的时候，return 会等着 qqCandy执行完拿到其返回值，然后再把这个返回值 return 出去
}
foo(); // '旺仔'


function boo() {
  return qqCandy; // boo return 出去的qqCandy就代表的是qqCandy这个函数本身
}
boo()(); // boo() 拿到qqCandy这个函数的堆内存地址，这个地址中存储的就是函数本身，后面可以继续执行，这个执行就是让qqCandy函数执行









