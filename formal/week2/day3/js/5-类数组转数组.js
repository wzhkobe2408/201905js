/*
* 类数组：
* */

// 类数组：有索引有length的对象；
// 常见的类数组：arguments、DOM集合
// 因为类数组不是数组，没办法使用数组中的方法，操作起来不方便，那么有没有办法吧类数组转成数组呢？

// 类数组转数组：

// 1. 准备一个空数组，遍历类数组，把类数组中的每一项push到新数组
function sum() {
	let ary = []; // 准备一个新数组
	// 遍历arguments
	for (let i = 0; i < arguments.length; i++) {
		ary.push(arguments[i]);
	}
	console.log(ary);
}
sum(1, 2, 3, 4);
// 2. 扩展运算符(将arguments中的内容展开到一个新的数组中)
function sum2() {
	let ary = [...arguments];
	console.log(ary)
}
sum2(1, 4, 5, 7);

// 3. slice.call() 使用call借用数组slice方法复制一个数组
// Array.prototype.slice.call()

// [].slice.call() 这种写法在IE低版本会报错

function sum3() {
	var ary = Array.prototype.slice.call(arguments); // 借用数组中的slice方法，在slice方法执行的时候把slice方法中的this修改成arguments
	// var ary = [].slice.call(arguments); // 利用[].slice找到数组原型上的slice方法，然后把slice中的this修改成arguments
	console.log(ary)
}
sum3(2, 3, 4);

// 4. Array.from() ES6新增的方法，将类数组结构（类数组、iterator对象）转换成数组

function sum4() {
	let ary = Array.from(arguments);
	console.log(ary);
}
sum4(1, 3, 4, 5);



















