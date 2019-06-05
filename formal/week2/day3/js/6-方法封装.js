var list = document.querySelector('ul>li');

// 封装一个将类数组转换成数组的方法

// 版本1
function arrLikeToAry(arg) {
	return Array.from(arg);
}

// 但是上面的代码有兼容性问题，因为Array.from 是ES6新的方法，IE低版本不兼容，一旦在IE 低版版执行会报错，而js单线程，一旦报错后面的代码就不执行了，因此需要做容错处理：

// JS的容错语句 try-catch 语句，会先try，如果try过程中报错了，会捕获错误继续执行容错处理，而不会停止执行；

try {
	// 这里是尝试执行的语句；
	// 通常这里是第一方案
} catch (e) {
	// 这里是异常情况的处理，如果上面
	// catch是捕获异常，异常信息
	// 上面代码执行报错后胡执行这里的代码，所以这里一般设置方案二
	console.log(e);
}

// 2. 改写方法

function arrLikeToAry(arg) {
	// 使用try-catch语句
	try {
		// 首先执行这里，如果浏览器支持ES6，不会报错正常执行，下面的catch语句就不会执行了
		return Array.from(arg)
	} catch (e) {
		// 如果浏览器不支持es6，就执行这里的代码，我们使用最原始的方式转数组
		console.warn(e);
		var ary = [];
		for (var i = 0; i < arg.length; i++) {
			ary.push(arg[i])
		}
		return ary;
	}
}






