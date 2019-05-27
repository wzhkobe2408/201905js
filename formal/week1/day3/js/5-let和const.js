// let const 是ES6新增关键字，用于声明变量

// let 用来声明普通变量
// const 用于声明常量

//  let & const 和var的区别

// 1. let const不存在变量提升，对于使用let const声明的变量，只能在定义后使用
console.log(a); // 报错：a is not defined
let a = 0;

console.log(b); // 报错：b is not defined
const b = 12;


// 2. let const 不能重复声明变量(重复声明var或者function声明的也不行)
var n = 1;
var n;
var n = 2;

let n = 1; // 报错：a has already been declared

// 3. let const 在全局声明的变量或者常量不会像window上增加属性
var num = 100;
console.log('num' in window); // true in 运算符，检测对象是否有某个属性
let css = 'css3';
console.log('css' in window); // false

// 4. let const 在代码块中会出现，会形成块级作用域，并且出现 暂时性死区；

// if (condition) { 条件的花括号中使用let const 就会形成块级作用域 }

let num1 = 2;
if (true) {
	let num1 = 4;
	console.log(num1); // 4
}

// for(...) { for 循环中的代码块 }

for (var i = 0; i < 12; i++) {
	console.log('var 没有块级作用域')
}
console.log(i); // var 会把i泄露成全局变量

for (let j = 0; j < 3; j++) {
	console.log('let j j不会泄露出去')
}
console.log(j); // Uncaught ReferenceError: j is not defined

// 利用 {}形成块级作用域
{
	let a = 1;
	console.log(a); // a是块级作用域中
}


{
	let m = 12; // m所处的块级作用域是下面的块级作用域的上级作用域，同样遵从作用域链的查找规则
	{
		console.log(m);
	}
}

// 暂时性死区（TDZ: temporary dead zone）：在代码块中，用let const声明的变量，不能再声明之前使用。
let q = 12;
if (true) {
	console.log(q); // 这个变量q已经被let锁定在块级作用域中，
	let q = 14;
}

// const 声明变量的细节问题

// 1. const声明时必须赋值
let m;
var m;
// const m; // 报错：Missing initializer in const declaration

// 2. 值一旦被定义，不能被修改
const num = 12;
// num = 15; 报错：

// 3. 如果const声明的常量是一个引用数据类型，那么常量带表的引用地址不能改变，但是堆内存中的内容是可以修改的。
const ary = [1, 2, 3];
ary.push('33');
console.log(ary);

// ary = [1, 3, 5]; // 报错：



















