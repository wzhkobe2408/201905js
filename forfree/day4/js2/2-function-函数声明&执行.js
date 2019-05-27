/*
* 目标：
*   1. 理解函数作用
*   2. 掌握函数声明语法
*   3. 掌握函数执行语法
*   4. 函数多次执行互相独立
* */

/*
*
* console.log()
* isNaN('abc')
* Number()
* toString()
* parseInt() parseFloat()
* Boolean()
* document.getElementById()
* context.getElementsByTagName()
* 。。。。。。
*
*
*
* */

/*
* 函数：在编程语言中，函数封装了固定功能或逻辑的代码块。函数只需要创建一次，就可以无限次执行。在面向对象的编程语言中（OOP）函数又叫做方法。
*
*
* */


/*var total = 10;
total += 10;
total /= 2; // total = total / 2;
total *= 3;
total += 5;
console.log(total);

var total = 10;
total += 10;
total /= 2; // total = total / 2;
total *= 3;
total += 5;
console.log(total);

var total = 10;
total += 10;
total /= 2; // total = total / 2;
total *= 3;
total += 5;
console.log(total);*/

function fn() {
  var total = 10;
  total += 10;
  total /= 2; // total = total / 2;
  total *= 3;
  total += 5;
  console.log(total);
}
// fn();
// fn();
// fn();

// 1. 函数的声明和执行
/*
* 在js中，如果想让函数发挥作用，需要两步：
*   1. 声明一个函数
*
*   2. 执行这个函数
*
*
* */
// 1.1 声明一个函数
//
// function sum(a, b) {
//   alert('函数执行了');
//   return a + b;
// }
// function 叫做关键字，用来声明函数变量的，函数名也是变量，只不过它代表的值是一个函数
// sum 叫做函数名，sum代表这个函数（函数名存储也是堆内存地址）
// (a, b) 小括号叫做形参入口， a, b叫做形参；形参是可以在函数体内部使用的变量（形参也是用来存储值或者代表值的）
// {return a + b} 这个花括号叫做函数体，函数体就是封装具体功能和逻辑的代码块

// 1.2 函数执行：就是把函数体里面的代码拿出来执行一遍。如果不执行，函数的功能就无法发挥。
// 语法：函数名(实参);
// function myName() {
//   console.log('马宾');
// }
// myName();

// 2. 函数的参数机制
// 参数是函数的入口，我们封装函数时，我们希望我们给它什么，它帮我们处理什么。对应函数的声明和创建，参数也分为两种：
// 2.1 形参，形参是函数内部的变量，它也是用来存储值和代表值的。

// 2.2 实参，函数执行阶段传递的，它是赋给形参的具体的值。

function myName2(name) {
  // name 就叫做形参，
  console.log(name); //在这里输出 name 不是输出name这四个字符，而是输出的是name这个变量代表的值
}
myName2('张帅文'); // '张帅文' 这个字符串就是实参，此时函数执行时，函数体内部的name形参代表的就是 '张帅文' 这个字符串

myName2('裴泽惠');

function sum(num1, num2) {
  console.log(num1, num2);
}
// !!! 函数的形参和实参是一一对应的
sum(10, 20); // 形参和实参是一一对应的。而且形参和实参不限制个数
sum(1); // 形参如果定义了，实参没有传，形参将会获得一个undefined
sum(undefined, 2); // 如果有一个形参在函数执行时，我们可以传一个undefined，但是不可以不穿
sum(4, 5, 6); // num1 是 4 ，num2 是5; 6没有形参接收

// 函数每一次执行都是独立的，每次执行都是把函数体里面都是从上到下执行一遍。

function sum2(a, b) {
  var total = 0;
  total = a + b;
  console.log('total ', total);
}
var r2 = sum2(100, 200);

// 3. 函数的返回值机制
// 函数的返回值：把函数的处理结果给到函数外，让函数外面执行函数后可以得到函数执行的结果。
// sum2函数中total是在函数内部声明的变量，这种在函数体内部声明的变量叫做私有变量。因为js闭包机制，导致函数外拿不到total，还会引发报错。

// 闭包机制：函数保护私有变量不受外界干扰，这种机制称为闭包（closure）

// 基于上面的情况，就需要使用函数的返回值机制
// 使用return 关键字指定返回值

function sum3(a, b) {
  var total = 0;
  total = a + b;
  return total; // return total是把total变量代表的值返回，而不是把total变量返回
}
var r3 = sum3(100, 200);
console.log(r3);
console.log(sum3(100, 200));


function sum4(a, b) {
  var total = 0;
  total = a + b;
  return '我就是不给' // return 啥 函数的返回值就是啥；
}
var r4 = sum4(10, 20);
console.log(r4); // '我就是不给'

function sum5(a, b) {
  var total = 0;
  total = a + b;
  return; // 函数中没有return或者return啥也不写，那么函数的返回值是 undefined
}
var r5 = sum5(23, 32);
console.log(r5);


function sum6(a, b) {
  var total = 0;
  total = a + b;
  return total;
  alert('这是return后面的代码'); //  return 还有一个重要作用，return强制终止函数体后面的代码执行。（return 后面的代码不执行）
}
sum6(1, 2);

function sum7(a, b) {
  return a + b; // return 如果后面是一个表达式，return会等着表达式计算出结果，然后结果返回
}
var r7 = sum7(1, 3);
console.log(r7);
/*
* 函数的返回值的细节问题：
*   1. return 是用来指定函数的返回值的，return 啥 函数的返回值就是啥；
*   2. 函数中没有return或者return啥也不写，那么函数的返回值是 undefined
*   3. return 还有一个重要作用，return强制终止函数体后面的代码执行。（return 后面的代码不执行）
*   4. return 如果后面是一个表达式，return会等着表达式计算出结果，然后结果返回
*
*
* */



