<div style="text-align: right">
  <a href="http:www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 求数组极值、方法封装、箭头函数

### 一、求数组极值


+ 需求：求数组中的最大值和最小值

```javascript
let ary = [1, 9, 18, 234, 23];
```

#### 1. 先升序排序，排序后，数组的第一项就是最小值

```javascript
ary.sort(function (a, b) {
	return a - b;
});
let min = ary[0];
// 接着降序排列，排序后数组的第一项就是最大值；
ary.sort(function (a, b) {
	return b - a;
});
```

#### 2. 假设法

+ 求最小值：假设第一项就是最小值；

```javascript
let min1 = ary[0];
for (let i = 1; i < ary.length; i++) {
	ary[i] < min ? min = ary[i] : void 0;
}
console.log(min1);
```

+ 求最大值：假设第一项最大值

```javascript
let max1 = ary[0];
for (let j = 0; j < ary.length; j++) {
	ary[j] > max1 ?  max1 = ary[j] : void 0;
}
console.log(max1);
```

#### 3. 排序算法

#### 4. Math.max() 和 Math.min()

+ Math.max() 从一堆数字中取出最大值
+ Math.min() 从一堆数字中取出最小值

```javascript
let min3 = Math.min(2, 3, 5, 0, -1);
let max3 = Math.max(12, 4, 1);
console.log(min3);
console.log(max3);
```

+ ? 思考 ? 但是这个时候我们要处理的一个数组，但是max和min方法都是接收的一个一个的参数，有没有什么办法吧数组变成一个一个的活着让max和min接受一个数组参数呢？

+ 把数组变成一个一个的

1. ES6扩展运算符 ...对象

```javascript
let min4 = Math.min(...ary); // ...ary -> 1, 9, 18, 234
let max4 = Math.max(...ary); //
console.log(min4);
console.log(max4);
```

2. 让max和min接受一个数组用apply方法：

```javascript
let min5 = Math.min.apply(null, ary);
let max5 = Math.max.apply(null, ary);
console.log(min5);
console.log(max5);
```

#### 4.数组转成字符串 再使用eval求值

```javascript
let aryStr = ary.toString();
let min6 = eval(`Math.min(${aryStr})`);
let max6 = eval(`Math.max(${aryStr})`);
// eval() 方法是js解释器，可以把字符串转换成代码并执行
```

### 二、数组方法模拟实现


#### 1. push 方法：向数组末尾追加项，返回数组的新长度

```javascript
let  ary = [1, 3, 5, 7];

var r = ary.push(9);
console.log(ary);
console.log(r);

```
+ push 原理：

```javascript
Array.prototype.myPush = function () {
	// this 指向数组的实例
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
	}
	return this.length;
};

let r2 = ary.myPush(11);
console.log(ary);
console.log(r2);

```

#### 2. pop 原理：

```javascript
Array.prototype.myPop = function () {
	// this就是数组实例
	let last = this[this.length - 1];
	this.length--;
	return last;
};

let r3 = ary.myPop();
console.log(r3);
```

#### 3.forEach

```javascript
Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i);
	}
};
ary.myForEach(function (item, index) {
	console.log(item, index);
});
```

#### 4.map

```javascript
Array.prototype.myMap = function (cb) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		let result = cb(this[i], i);
		newArr.push(result);
	}
	return newArr;
};

let r6 = ary.myMap(function (item, idx) {
	return item * 2;
});
console.log(r6);
```

#### 作业：模拟实现slice方法

### 三、类数组转数组

+ 类数组：有索引有length的对象；
常见的类数组：arguments、DOM集合
因为类数组不是数组，没办法使用数组中的方法，操作起来不方便，那么有没有办法吧类数组转成数组呢？

常见的类数组转数组方法：

#### 1. 准备一个空数组，遍历类数组，把类数组中的每一项push到新数组

```javascript
function sum() {
	let ary = []; // 准备一个新数组
	// 遍历arguments
	for (let i = 0; i < arguments.length; i++) {
		ary.push(arguments[i]);
	}
	console.log(ary);
}
sum(1, 2, 3, 4);
```

#### 2. 扩展运算符(将arguments中的内容展开到一个新的数组中)

```javascript
function sum2() {
	let ary = [...arguments];
	console.log(ary)
}
sum2(1, 4, 5, 7);
```

#### 3. slice.call() 使用call借用数组slice方法复制一个数组

+ Array.prototype.slice.call()

+ [].slice.call() 这种写法在IE低版本会报错

```javascript
function sum3() {
	var ary = Array.prototype.slice.call(arguments); // 借用数组中的slice方法，在slice方法执行的时候把slice方法中的this修改成arguments
	// var ary = [].slice.call(arguments); // 利用[].slice找到数组原型上的slice方法，然后把slice中的this修改成arguments
	console.log(ary)
}
sum3(2, 3, 4);
```

#### 4. Array.from() ES6新增的方法，将类数组结构（类数组、iterator对象）转换成数组

```javascript
function sum4() {
	let ary = Array.from(arguments);
	console.log(ary);
}
sum4(1, 3, 4, 5);

```
### 方法封装与容错处理


+ 封装一个将类数组转换成数组的方法

+ 版本1

```javascript
function arrLikeToAry(arg) {
	return Array.from(arg);
}

```

但是上面的代码有兼容性问题，因为Array.from 是ES6新的方法，IE低版本不兼容，一旦在IE 低版版执行会报错，而js单线程，一旦报错后面的代码就不执行了，因此需要做容错处理：

#### JS的容错语句

try-catch 语句，会先try，如果try过程中报错了，会捕获错误继续执行容错处理，而不会停止执行；

```javascript

try {
	// 这里是尝试执行的语句；
	// 通常这里是第一方案
} catch (e) {
	// 这里是异常情况的处理，如果上面
	// catch是捕获异常，异常信息
	// 上面代码执行报错后胡执行这里的代码，所以这里一般设置方案二
	console.log(e);
}

```


+ 版本2 改写方法

```javascript
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
```

### 箭头函数

+ 箭头函数：ES6的新语法

```javascript
function fe(a, b) {
	return a + b;
}

let add = (a, b) => {
	return a + b;
};
```

#### 注意事项：

1. 函数体里面只有一行代码时，可以省略 return和花括号

__如果函数需要return 一个对象时，对象需要用小括号包裹；__

```javascript
let sum = (a, b) => a + b;
let getObj = (a, b) => ({a: a, b: b});

```

2. 只有一个形参时，可以省略小括号

```javascript
let say = msg => console.log(msg);
```

3. 箭头函数里面没有arguments，但是可以使用不定参数（剩余参数）

```javascript
let allIn = (...arg) => {
	let total = 0;
	for (let i = 0; i < arg.length; i++) {
		total += arg[i];
	}
	return total;
};

```

不定参数（剩余参数）：在函数形参中 ...形参名
1. 不定参数是一个数组，可以使用数组方法
2. 不定参数可以用作非必传参数

```javascript
let fn = (a, b, ...arg) => {
	console.log(arg);
};
fn(1, 2); // arg = []
fn(1, 2, 3); // arg =[3]
fn(1, 3, 5, 7, 9, 11); // arg = [5, 7, 9, 11]

```

4. 箭头函数中的this指向其声明时所在作用域中的this；
原理：箭头函数没有自己的this；

+ this和arguments是两个特殊的变量，是在函数执行时js解析引擎传入给函数的，但是箭头函数执行时，解析引擎给箭头函数；
+ 箭头函数没有自己的this，所以不能用作构造函数；
+ 箭头函数不能用call、apply、bind修改this

### 四、utils工具包封装

```javascript
window.utils = (function () {
	function arrLikeToAry(args) {
		try {
			return Array.from(args);
		} catch (e) {
			var arr = [];
			for (var i = 0; i < args.length; i++) {
				arr.push(args[i])
			}
			return arr;
		}
	}

	return {
		arrLikeToAry // arrLikeToAry: arrLikeToAry
	}
})();
```





<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>