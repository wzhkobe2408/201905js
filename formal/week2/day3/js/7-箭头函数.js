
// 箭头函数：ES6的新语法
function fe(a, b) {
	return a + b;
}

let add = (a, b) => {
	return a + b;
};

// 注意事项：

// 1. 函数体里面只有一行代码时，可以省略 return和花括号
// 如果函数需要return 一个对象时，对象需要用小括号包裹；
let sum = (a, b) => a + b;
let getObj = (a, b) => ({a: a, b: b});

// 2. 只有一个形参时，可以省略小括号
let say = msg => console.log(msg);

// 3. 箭头函数里面没有arguments，但是可以使用不定参数（剩余参数）
let allIn = (...arg) => {
	let total = 0;
	for (let i = 0; i < arg.length; i++) {
		total += arg[i];
	}
	return total;
};
// 不定参数（剩余参数）：在函数形参中 ...形参名
// 1. 不定参数是一个数组，可以使用数组方法
// 2. 不定参数可以用作非必传参数

let fn = (a, b, ...arg) => {
	console.log(arg);
};
fn(1, 2); // arg = []
fn(1, 2, 3); // arg =[3]
fn(1, 3, 5, 7, 9, 11); // arg = [5, 7, 9, 11]

// 4. 箭头函数中的this指向其声明时所在作用域中的this；原理：箭头函数没有自己的this；
// this和arguments是两个特殊的变量，是在函数执行时js解析引擎传入给函数的，但是箭头函数执行时，解析引擎给箭头函数；
// 箭头函数没有自己的this，所以不能用作构造函数；
// 箭头函数不能用call、apply、bind修改this
