/*
* 目标：
*   1. 理解函数参数机制
*   2. 函数形参和实参是一一对应的
* */

function fn(a, b) {}

// 4. 函数的参数机制

// => 【连接词】：对比我们写的函数和isNaN，我们也想要我们给它什么，函数帮我们处理什么。

/*
* 参数就是函数的入口，当我们在函数中封装一个功能，我们希望我给它什么，它帮我们处理什么。配合函数的声明和执行两部分，参数对应这两部分也有两个部分：
* 函数声明阶段: 形参，形参是函数内部的变量，它也是用来代表和存储值的；
* 函数执行阶段：实参，实参是给形参赋值的具体值。就是说函数执行时，形参所代表的具体的值。
*
* */

function sum(a, b) {
	console.log(a, b);
	var total = 0;
	total = a + b;
	console.log(total)
}

sum(1, 2); // a = 1, b =2
sum(10); // a = 10, b = undefined 函数定义了形参，但是执行时没有传递形参时，该形参值是 undefined
sum(20); // a = 20， b = undefined 没办法绕过a只传给b
sum(11, 22, 33); // a = 11， b = 22， 没有人接受33
