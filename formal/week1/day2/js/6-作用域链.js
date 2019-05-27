// js中作用域
// 全局作用域
// 私有作用域
// 块级作用域

var n = 15;
function fn() {
	console.log(n);
}
fn(); // 15

function fn2() {
	console.log(x)
}
fn3();


function fn3() {
	x = 16;
}
fn2();
// 作用域链：变量的查找机制：
// 当在作用域中查找一个变量的时候，先看当前作用域中是否声明过这个变量，如果声明过，就使用这个变量，如果没有生命过，那么就去上级作用域（上级作用域就是函数声明时所在的作用域）查找，找到就使用，如果没有就一直向上查找，一直找到window为止，如果本次使用变量是赋值，那么就相当于给window上面增加一个属性，如果是引用变量，就会报错;

// 示例：

function fe() { // fe 是在全局中定义的，所以fe的上级作用域就是全局作用域
  var n = 200;
  return function f() { // 这个function就是在fe的作用域中定义的，所以该函数的上级作用域就是fe的作用域
    console.log(n) // 200
  }
}
var fn = fe();
fn();

// 上级作用域的确定：
// 如何查找上级作用域，就看这个函数是在哪里定义的。

function fe() { // fe 是在全局中定义的，所以fe的上级作用域就是全局作用域
	var n = 200;
	return function f() { // 这个function就是在fe的作用域中定义的，所以该函数的上级作用域就是fe的作用域
		console.log(n) // 200
	}
}
var fn = fe();
fn();
















