/*
* 目标：
*   1. 理解函数返回值 机制
*   2. 理解闭包机制
*   3. 注意函数返回值细节问题
* */




// 5. 函数的返回值机制：
// 函数除了我们给他啥，它帮我们处理啥，还有一个重要的事情就是，把处理结果给我们。例如isNaN()，会把函数执行的结果返回给我们。我们写的函数也该有这样的功能。

// function sum(a, b) {
// 	var total = 0;
// 	total = a + b;
// 	console.log(total)
// }
//
// var result = sum(1, 2);
// console.log(result) // undefined
// console.log(total); // Uncaught ReferenceError: ...

// 引发报错的原因：total是在函数体内部声明的变量，这种声明孩砸函数体内部的变量称为私有变量，而私有变量在函数外部是无法访问的，这是由于闭包机制导致的。

// 闭包(closure)：函数会保护函数体内部的变量不被外界所干扰的机制成为闭包；

// ? 这个时候怎么拿到total?
// 这个时候就需要函数的返回值机制了：
// 函数的返回值机制：把函数的运行结果（或者函数中某些信息）指定为函数的返回结果给到函数外部。在函数中使用 return 关键字指定函数返回值。


function sum(a, b) {
	var total = 0;
	total = a + b;
	return total;
}

var result = sum(1, 2);
console.log(result); // 3
console.log(sum(1, 2));

// 3. 函数返回值的具体问题：
/*
* 1. return用于指定函数返回值，那么return 啥函数返回值是啥
* 2. 如果函数内部没有return或者return后面啥也没写，那么函数的返回值是undefined
* 3. return 关键字还有一个重要作用————强制结束return后面的代码。（return后面的代码不执行）
* 4. return 永远返回一个值，如果是一个表达式，return 会等着表达式求值完成，然后再把值返回。
*
*
* */
