// 1. 什么是变量提升？

// 2. 作用域链是什么？


// 3. 原型链是什么？

// 4. this的常见情况


// 5.解答题

// 题一
function fn(n) {
	return function (a) {
		a++;
		n += a;
		console.log(n + a);
	};
}

var f = fn(10);
f(1);
f(2);

// 题二
function fn(n) {
	var n = 9
	return function (a) {
		a++;
		console.log(n += a);
	};
}

var f = fn(10);
f(1);

// 题三
var num = 20;
var obj = {
	num: 30,
	fn: (function (num) {
		num += 5;
		return function (x) {
			num += x;
			console.log(num);
		};
	})(num)
};
obj.fn(this.num);

// 题四

function Fn() {
	this.x = 100;
	this.y = 200;
	this.getX = function () {
		console.log(this.x);
	}
}

Fn.prototype.getX = function () {
	console.log(this.x);
};
Fn.prototype.getY = function () {
	console.log(this.y);
};

var f1 = new Fn;
var f2 = new Fn;

console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.__proto__.getX === Fn.prototype.getX);
console.log(f1.constructor);

console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();

// 题五
let n = 10,
	obj = {
		n: 20
	};
let fn = obj.fn = (function () {
	n++;
	return function (m) {
		n += 10 + (++m);
		this.n += n;
		console.log(n);
	}
})(obj.n);
fn(10);
obj.fn(10);
console.log(n, obj.n);

// 题六

var num = 20;
var obj = {
	num: 30,
	fn: (function (num) {
		// num 20 25
		num += 5;
		this.num += num;
		return function (x) {
			this.num += x;
			console.log(num);
		};
	})(num)
};
var fn = obj.fn;
fn(10);
obj.fn(num);
console.log(num, obj.num);

// 题七

function Foo() {
	getName = function () {
		console.log('a');
	};
	return this;
}

Foo.getName = function () {
	console.log('b');
};
Foo.prototype.getName = function () {
	console.log('c');
};
var getName = function () {
	console.log('d');
};

function getName() {
	console.log('e');
}

Foo.getName();
getName();
Foo().getName();
getName();
var f = new Foo();
f.getName();

// 题八

var name = 'window';
var Tom = {
	name: "Jerry",
	show: function () {
		console.log(this.name);
	},
	wait: function () {
		this.show();
	}
};
Tom.wait();

// 题九
var fullName = 'language';
var obj = {
	fullName: 'javascript',
	prop: {
		getFullName: function () {
			return this.fullName;
		}
	}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());