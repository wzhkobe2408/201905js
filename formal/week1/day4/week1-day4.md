<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 闭包、this、面向对象基础

### 1. 闭包

#### 闭包定义：

+ 珠峰解释：函数执行时形成一个私有作用域，保护里面的变量不受外界干扰，这种保护机制成为闭包。
+ 市面理解：形成一个不销毁的私有作用域（私有栈内存）才是闭包

#### 闭包应用：

##### 1. 柯里化函数

`柯里化函数思想：把多参数的函数变成单参数的函数`

``` javascript
function fn(a, b, c) {
	return a + b + c;
}

function fn1(a) {
	return function (b) { // 这种在函数中return 函数的做法是市面中认为的闭包
		return function (c) {
			return a + b + c;
		}
	}
}
fn1(1)(2)(3);
```

#### 2. 利用闭包机制隔离全局命名空间

``` javascript
(function () {
	// 自执行函数执行也是闭包
	let a = 100; // a是一个私有变量，不会影响全局作用域中的变量命名
})();

```

#### 3. 惰性封装

``` javascript
var utils = (function () {
	var version = '1.0.1';
	function sum(a, b) {
		return a + b
	}
	function minus(a, b) {
		return a - b;
	}
	return {
		sum: sum,
		minus: minus
	}
})();
```

#### 4. 利用闭包的不销毁作用域保存数据：累加计数、选项卡闭包版本


### 2. this

this是JS的关键字，代表当前代码执行的环境对象。一般在函数中使用，并且是在函数执行时，根据函数的不同执行方式确定不同的值。目前阶段有以下情况：

#### 1. 事件函数中的this是绑定该事件的元素；
``` javascript
let box = document.getElementById('box');
box.onclick = function () {
	console.log(this); // box 元素对象
};
```

#### 2. 自执行函数中的this是window
``` javascript
(function () {
	console.log(this);
})();

```

#### 3. setTimeout/setInterval() 定时器回调函数中的this指向window
``` javascript
setTimeout(function () {
	console.log(this);
}, 0); // 定时器写0也不会立刻执行，也需要等待其他同步代码执行完才会执行；

```
#### 4.方法调用时，看方法前面是否有点 . 如果有点前面是谁，this就是谁，如果没方法中的this就是window

``` javascript
var num = 13;
var obj = {
	num: 12,
	fn: function () {
		console.log(this.num);
	}
};
obj.fn(); // 12
obj['fn'](); // 12 obj['fn'] 等效于 obj.fn 所以，this仍然指向obj

var fn = obj.fn;
fn(); // 13；window.num

```

#### 6. 箭头函数中的this指向函数定义时所在作用域中的this

##### 箭头函数：

ES6新增的语法：省略function关键字，在形参入口后增加 => 箭头，后面紧跟函数体；

``` javascript
let f = (a, b) => {
	return a + b;
	console.log(this)
};
f();

```
##### 箭头函数的简化语法：

##### 1. 只有一个形参时，可以省略 形参入口的小括号

``` javascript

let f2 = a => {
	var x = 10;
	x += a;
	return x;
};
```

#### 2. 如果函数只有一行代码，或者只有return 指定返回值，可以省略函数体的花括号和return关键字

``` javascript
let transfer = (a, b) => a + b;
// 等效于：
let transfer = function (a, b) {
	return a + b;
}

```

#### 7. 全局作用域中的this是window
console.log(this);

#### 8. this在运行时不可以赋值
``` javascript
this = {};  // 报错
```

### 3. ++i和i++

` ++i和i++都是给i累加1，但是加的时机不同`

+ ++i 是先累加自身，然后再取累加后的值和其他值运算
+ i++ 是先取当前值和其他值运算，再累加自身

``` javascript
var i = 0;
console.log(++i); // 1
console.log(i++); // 0

```

``` javascript
var a = 12; // 13 14
var b = 13; // 14 15

console.log(++a + a++ + b++ + ++b + a + b); // 13 + 13 + 13 + 15 + 14 + 15 = 83
```

### 4. 面向对象

#### 面向过程

面向过程：以过程为核心，研究现在要解决的问题，既不考虑以前，也不考虑将来，这段代码就解决现在的问题。如果以后再有相同的功能，就再写一遍相同的代码；

#### 面向对象

面向对象：是一种对现实世界的理解和抽象的方法。面向对象关心现在的功能能分分类解决，现在解决过的问题，我们过往有没有类似的代码可以复用，我们现在的写的代码能不能给将来用。

#### 面向对象的研究范畴

+ 对象：万事万物都是对象，每个对象都具备各自的属性和功能；
+ 类：抽象事物的特性和特点，把对象分成不同的类型，例如老师类、学员类，类是一个是描述一群事物的共同特点的抽象概念；
+ 实例：类中的一个具体的个体。这个个体既然属于类，那么这个个体一定具有这个类的所有的特性和功能。
    1. 例如：人类就是一个类，人类最显著的特点是可以制造并使用工具。人类的属性有语言、智慧、吃饭、睡觉.... 每个人都是人类的一个实例，每个人都有这个类型中的所有的特性和属性。



#### ? 那么js的面向对象体现在哪里呢？

> 在公开课阶段我们强调数据类型，其中强调的就是类型。例如数组类、普通对象类，这是因为数组类和对象的属性和方法不同。
> 例如数组是有序的键值对，还可以push，pop、splice等，而对象是无序的键值对之和，而且对象不可以pop
> 而 var ary = [1, 2] 是数组的一个实例，所以ary有所有数组的特性
> 而 var  obj = {name: 1} 是对象的一个实例；

#### JS中的内置类：

+ Object
+ Array
+ Date
+ RegExp
+ Function

`这些内置类都是函数数据类型的`

``` javascript
console.log(typeof Array); // function
console.log(typeof Object); // function
```
#### 面向对象的研究范畴

`对于面向对象要求我们掌握 封装、类的继承和多态`


### 5. 单例模式

#### 普通单例

在过往我们面向过程时，描述一个学员：

``` javascript
var name = '张三';
var age = 18;
var sex = 'boy';

```

描述另一个学员：

``` javascript
var name = '李四';
var age = 19;
var sex = 'girl';
```

> 这样做有一个问题，因为变量只能代表一个值，全局变量后面的会覆盖前面的。导致前面的数据丢失。
> 为了解决这个问题，我们现在在描述一个事物，我们可以使用一个对象，因为对象是用来描述一个事物的，而对象的属性就是定性描述这个对象的特征，而属性值是定量的描述事物的这个特征。

``` javascript
var stu1 = {
	name: 'zhangsan',
	age: 18,
	sex: 'boy'
};

var stu2 = {
	name: '李四',
	age: 19,
	sex: 'girl'
};

```

像上面这样，把描述一个事物的属性放到一个对象内这种封装方式称为单例模式。
单例模式的优点是解决了全局变量互相覆盖的问题，这样stu1的name和stu2的name没有关系，因为stu1和stu2是两个不同的对象，此时stu1和stu2代表的对象叫做单例，而stu1和stu2这两个变量名称为命名空间；

#### 高级单例

高级单例：高级单例模式不再是直接将一个对象赋值给命名空间，而是先执行一个自执行函数，在函数执行结束时返回一个对象；

``` javascript
var person = (function () {
	function eat(food) {
		console.log(`I like eating ${food}`)
	}
	function hobby(h) {
		console.log(`I like playing ${h}`)
	}
	var account = '$10000000';
	var name = '王老五';
	var age = 40;
	return {
		name: name,
		age: age,
		eat: eat,
		hobby: hobby
	}
})();

```

+ 这样写，有一个优势，我们可以在自执行函数的作用域中声明变量和函数，这个作用域不会销毁，我们可以在最后返回对象里面选择导出哪些变量和方法给外界使用，不导出的，外界拿不到；


`单例模式虽然好用，但是有一个问题，有一个对象，我们就需要写一个这个对象，很繁琐。`

### 6. 工厂模式


` 如何批量生产？`

``` javascript
function reg(name, age, sex) {
	var obj = {}; // 原材料
	obj.name = name; // 加工
	obj.age = age; // 加工
	obj.sex = sex; // 加工
	return obj; // 出厂
}

let s1 = reg('阿三', 19, 'boy');
let s2 = reg('李四', 18, 'girl');

console.log(s1 === s2); // false

```

+ 工厂模式：像上面这样，把实现相同供的函数封装成一个函数，当我们需要创建一个实例的时候，我们就执行这个函数即可，并且每个对象都是单例；
+ 优势：高内聚，低耦合 提高了代码的复用度

> 工厂模式虽然解决了批量生产的问题，但是我们说面向对象还要有类的概念，但是这种方式生产的对象都是同一类，没有分类。

+ 思考？内置的类型都有类型的概念？

js有两种创建数据的方式，一种是字面量，另一种是实例的方式，例如：

``` javascript
var obj = new Object();
obj.name = '李四';
obj.age = 19;
obj.sex = 'girl';
console.log(obj);

```
// ? 为什么js可以通过new 操作符来生成实例？而且是有类型的？我们的可以不可以呢？

var obj2 = new reg('li', 13, 'g');
console.log(obj2); // 同样获取了一个实例对象，但是没有发现类型

### 7. 构造函数模式


> 前面的工厂模式已经可以批量生产了，但是还是没有我们所说的面向对象中类型的概念。为了有类型的概念，我们需要构造函数模式。

构造函数：构造函数也是一个函数，但是调用方式有别于工厂函数：

1. 调用方式不同，构造函数只能通过new操作符调用；
2. 工厂函数内需要手动创建对象实例，而构造函数模式不需要手动创建对象，在构造函数被new执行时，构造函数中的this自动和实例绑定，所以我们所有的加工都发生在this上；
3. 工厂函数需要手动返回对象实例，而构造函数在被new操作符调用时不需要手动返回实例；

#### 构造函数模式：

通过new调用一个函数，此时这个函数不再是普通函数，而是成为一个类，函数名称为类名，而通过new调用，自动返回这个类的一个实例。在构造函数中，我们需要抽象这个类型的属性和功能；

``` javascript
function Teacher(name, age, subject, from) {
	this.name = name;
	this.mission = '传道受业解惑';
	this.age = age;
	this.subject = subject;
	this.from = from;
	this.teach = function () {
		console.log(`${name} 老师教 ${subject} 学科`);
	}
} // Teacher是一个类，这里类型抽象了老师的属性，一个老师有的属性有姓名，年龄，教授学科，哪个学校的老师，以及老师会讲课的功能。

// 创建一个实例：
let mrMa = new Teacher('马宾', 18, 'js', '珠峰培训');
console.log(mrMa);

let mrJiang = new Teacher('姜文', 19, 'Architect-架构师', '珠峰培训');
console.log(mrJiang);
console.log(typeof mrJiang); // object
console.log(typeof mrMa); // object

```

+ 通过浏览器控制台查看，这两个实例（对象）的前面出现了 Teacher，此时说明mrMa和mrJiang都属于Teacher类的实例。

### instanceof 运算符

+ 如何检测当前对象是否是当前类型的实例：

#### instanceof 运算符：检测对象是否是某个类型的实例，如果是true，否则返回false

``` javascript
console.log(mrJiang instanceof Teacher);
console.log(mrMa instanceof Teacher);
console.log([] instanceof Teacher);

console.log([] instanceof Object); //
console.log(mrJiang instanceof Object);
console.log(mrMa instanceof Object);

```
+ 但是因为Object是基类，所有实例都是对象数据类型的，所以用instanceof检测是否是Object的实例，都会返回true；




<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>