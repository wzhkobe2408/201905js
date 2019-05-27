// 需求：实现一个累加计数的功能，点击一次，让按钮中的数字累加；

var btn = document.getElementById('btn');

// 思路：既然是累加，一定是有一个地方保存着它的上一个值。关键就在于保存在哪里。

// 1. 把值保存在全局作用域

var count = 0; // count保存在全局作用域
btn.onclick = function () {
	count++; // 操作全局变量
	btn.innerHTML = count;
};

// 2. 自定义不销毁的私有作用域

btn.onclick = (function () {
	var count = 0; // count的值保存在
	return function () {
		btn.innerHTML = count;
	}
})();

// 3. 自定义不销毁的函数作用域2

(function () {
	var count = 0; // count保存在自执行函数形成的私有作用域中
	btn.onclick = function () {
		count++;
		this.innerHTML = count;
	}
})();

// 4. 块级作用域

{
	let count = 0; // let 会把花括号变成块级作用域，等效于私有作用域，count的值保存在块级作用域中
	btn.onclick = function () {
		count++;
		this.innerHTML = count;
	}
}