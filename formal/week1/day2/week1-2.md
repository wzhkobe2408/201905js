<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 变量提升



### 变量提升（预解释）

+ 在js代码执行之前，对所有声明的变量 进行提前带var和带function变量进行提前声明和定义（赋值）；
+ 对于带var的进行提前声明，不赋值（变量声明时不赋值，变量的默认值是undefined），只是浏览器知道有这么个变量。
+ 对于带function的进行提前声明 并且赋值为函数定义本身
变量提升结束后，代码才会从上到下执行。
+ 当执行到var 变量 = 值；时，此时才会对变量进行赋值，即在此之后变量才代表这个值本身，在此之前是undefined；
+ 而当执行到function 函数名... 时，跳过，因为在变量提升阶段就已经完成了对变量的赋值过程。

``` javascript
console.log(num); // undefined 因为代码执行到这里时，num只是经过了变量提升阶段的声明，但是没有完成赋值，所以是undefined；

var num = 100; // 代码执行过这一行后完成了赋值，所以num是100
console.log(num);  // 100

console.log(fe); // 函数体本身，因为fe这个变量在函数执行时就已经赋值完成了，所以无论在函数声明前还是后使用都是函数本身
fe(); // 因为fe在变量提升阶段就已经完成了赋值，所以fe是一个函数，所以可以成功执行
function fe() {
	console.log('We are Front-end Engineer');

```

### 变量提升和js运行机制

``` javascript
console.log(num); // undefined

var num = 12; // 赋值操作，只在执行到这一行时，num才被赋值为12；
var obj = {
	name: "珠峰",
	age: '10'
};
console.log(zf);
function zf(str) {
	var age = 10;
	console.log(str, age);
}
zf('珠峰');

```


### js的运行机制及原理：

#### js运行的环境（栈内存）：作用域

作用域是js运行的环境，另外一个功能是保存基本数据类型。在js中作用域分为：

    +全局作用域 ：当页面打开时，首先形成一个全局作用域，执行全局中的代码，全局作用域是window；
    +私有作用域（函数作用域）当函数执行时，会形成一个函数作用域，这个作用域用来保存函数中的基本数据类型同时执行函数代码；
    +块级作用域（类似私有作用域 ES6）

#### js运行过程

+ 在js代码执行前，浏览器会开辟一个全局作用域，然后执行变量提升，完成变量提升操作后，代码开始从上到下开始执行；
+ 当执行时，如果遇到基本数据类型，就在作用域中存储该基本数据类型；
+ 如果遇到引用数据类型，则浏览器会再次分配一个堆内存，然后把引用数据类型的内容存储到堆内存中，接下来再把这个堆内存的地址赋值给变量（此时这个地址是存储在作用域内存中的）；
+ 遇到函数执行时，会经历以下几步：
    1. 浏览器开辟一个私有作用域；
    2. 形参赋值，把执行时的实参赋值给函数形参变量；
    3. 私有作用域中变量提升
    4. 函数代码从上到下执行

#### 私有变量和全局变量

+ 全局变量：在全局作用域中声明的变量
+ 私有变量：函数的形参以及在函数私有作用域中声明的变量

#### 预解释只发生在当前作用域，如果函数不执行时，函数中的变量不会进行变量提升。

``` javascript
function fn() {
	var num = 13;
}
console.log(num); // 报错：因为预解释发生在当前作用域中，而当前作用域没有num的变量，num是fn的私有变量。

```

### 重复声明的问题

#### 1. 同名变量只会声明一次，代表的值就是最后一次的值
``` javascript
var num;
var num;
var num; // 这些语句没有赋值操作，当代码执行时会略过
var num = 100; // num虽然var了4次，但是并不会声明4次，只会声明一次，同时只有这一次才会将num的值赋值成100；

function fn() {
	console.log(1)
}
function fn() {
	console.log(2)
}
function fn() {
	console.log(3)
}
fn(); // 3
```

#### 2. 变量提升时，function的优先级高于普通变量

``` javascript
console.log(fe); // 函数体
function fe() { // 当代码执行到这里时，直接忽略，因为函数变量赋值已经在变量
	console.log('我是来自珠峰的FE');
}
var fe = 123; // 代码执行到这一行时，将变量fe的值修改为123
```

#### 3. 如果变量名和函数名同名，在执行到变量的赋值语句之前时，这个名字代表函数，但是当执行过变量赋值语句后，

``` javascript
function fe() {
	console.log('FE')
}
var fe = 1;
// fe(); // 报错，因为执行到这里的时候fe不再代表一个函数了，而是一个数字
```

### 变量提升的细节问题

#### 1. 等号右侧的不会进行变量提升，即使右侧是函数也不会进行变量提升

``` javascript
// fn(); // 报错，
var fn = function () {
	console.log('来自等号右侧的你');
};
// console.log(x1); // 报错：x1 is not defined
// console.log(x); // undefined
var x = function x1() {
	console.log(x1);
};

```
#### 2. 条件语句中的变量不管条件成立与否都会参与当前作用域中的变量提升；

``` javascript

console.log(n); // undefined
if (NaN === Number('I Love programming')) {
	var n = 1;
}
console.log(n); // undefined，以内条件不成立，所以赋值语句没执行，所以n仍然是undefined
```

#### 3. 函数中，return 下面的代码虽然不执行，但仍会进行函数作用域中的变量提升；

``` javascript
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
```

#### 4. 函数的返回值不参与变量提升； return右边的不会参与变量提升

``` javascript
function minus(a, b) {
	console.log(foo);
	return function foo() {
		console.log('函数的返回值不参与变量提升')
	}
}
minus();
```

### 带var和不带var的区别

#### 1. 在全局中，用var和function声明的变量，也相当于给window上添加一个同名属性

+ 全局作用域是一个内置对象 window
console.log(window);

``` javascript
var num = 2019;
console.log(window.num); // 2019
window.num = 2020;
console.log(num); // 2020 num和window.num是绑定在一起的
console.log('num' in window); // in 运算符 检测对象是否有某个属性，有返回true，否则false


function fe() {
	console.log('FE')
}
window.fe();
fe();

```


### 不带var 的不会参与变量提升

``` javascript
console.log(a); // undefined
var a = 1;

console.log(b); // 报错：
b = 2; // 不带var 不会参与变量提升，所以不会提前声明和赋值
console.log(b);

```

## 作用域链

js中作用域

+ 全局作用域
+ 私有作用域
+ 块级作用域


``` javascript
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
```

### 作用域链：变量的查找机制：

当在作用域中查找一个变量的时候，先看当前作用域中是否声明过这个变量，如果声明过，就使用这个变量，如果没有生命过，那么就去上级作用域（上级作用域就是函数声明时所在的作用域）查找，找到就使用，如果没有就一直向上查找，一直找到window为止，如果本次使用变量是赋值，那么就相当于给window上面增加一个属性，如果是引用变量，就会报错;

``` javascript
function fe() { // fe 是在全局中定义的，所以fe的上级作用域就是全局作用域
  var n = 200;
  return function f() { // 这个function就是在fe的作用域中定义的，所以该函数的上级作用域就是fe的作用域
    console.log(n) // 200
  }
}
var fn = fe();
fn();

```
### 上级作用域的确定：

+ 如何查找上级作用域，就看这个函数是在哪里定义的。

``` javascript
function fe() { // fe 是在全局中定义的，所以fe的上级作用域就是全局作用域
	var n = 200;
	return function f() { // 这个function就是在fe的作用域中定义的，所以该函数的上级作用域就是fe的作用域
		console.log(n) // 200
	}
}
var fn = fe();
fn();

```

<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>