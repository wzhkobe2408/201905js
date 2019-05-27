/*
* 目标：
*   1. 掌握变量提升的细节问题
*
*
* */

// 1. 等号右侧的不会进行变量提升，即使右侧是函数也不会进行变量提升
// fn(); // 报错，
var fn = function () {
	console.log('来自等号右侧的你');
};
// console.log(x1); // 报错：x1 is not defined
// console.log(x); // undefined
var x = function x1() {
	console.log(x1);
};

// 2. 条件语句中的变量不管条件成立与否都会参与当前作用域中的变量提升；
console.log(n); // undefined
if (NaN === Number('I Love programming')) {
	var n = 1;
}
console.log(n); // undefined，以内条件不成立，所以赋值语句没执行，所以n仍然是undefined

// 3. 函数中，return 下面的代码虽然不执行，但仍会进行函数作用域中的变量提升；

function add(a, b) {
	console.log(n); // undefined
	fe(); // 执行了
	return a + b;
	var n = 123;
	function fe() {
		console.log('前端工程师从入门到删库跑路')
	}
}
add();

// 4. 函数的返回值不参与变量提升； return右边的不会参与变量提升

function minus(a, b) {
	console.log(foo);
	return function foo() {
		console.log('函数的返回值不参与变量提升')
	}
}
minus();







