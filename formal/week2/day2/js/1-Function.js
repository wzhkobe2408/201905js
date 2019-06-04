/*
* 目标：
*   1. 理解所有函数都是Function的关系
*   2. 理解Function和Object的关系
*
*
* */

// Function类：函数类
// 所有的函数（类、普通函数）都是Function的一个实例

// Array Number String Boolean Object Date Function 等

console.log(typeof Array); // function
console.log(typeof Number); // function

// 实例和类
// 实例都有一个__proto__ 指向所属类的原型对象

// js中所有的函数都是Function的实例，那么内置类的，如Array是函数，所以Array也是Function的实例；
console.log(Array instanceof Function);

// 既然是实例，那么一定也会有原型关系
console.dir(Array); // 通过打印发现Array也是一个对象，它也有__proto__，根据原型关系，Array的__proto__应该指向的是Function的prototype

Array.__proto__ === Function.prototype; // true


console.log(Date instanceof Function); // true
console.log(Date.__proto__ === Function.prototype); // true
console.log(RegExp instanceof Function); // true
console.log(RegExp.__proto__ === Function.prototype); // true
console.log(Object instanceof Function); // true
console.log(Object.__proto__ === Function.prototype); // true

console.log(Function.prototype.__proto__ === Object.prototype); // true

// 因为Object也是一个类，所以也是一个函数，所以也是Function的实例.所以Object.__proto__指向Function.prototype
// 而Function本身也是一个类，也是一个函数，所以Function也有prototype，而prototype也是一个对象，所以Function.prototype.__proto__ 又指向了 Object.prototype 

// Function 和 Object的关系
// 1. Object.__proto__ 指向Function.prototype
console.log(Object.__proto__ === Function.prototype);

// 2. Function.prototype.__proto__ 指向Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype);

// 3. 所有的函数都是Function的实例
console.log(Array instanceof Function);

// 4. 所有的引用数类型（普通对象、实例对象、函数、类、数组、Date）的都是Object这个基类的实例，所以函数也是对象；

console.log(Function instanceof Object);
console.log(Array instanceof Object);
console.log(Date instanceof Object);
let obj = {
	id: 1
};
console.log(obj instanceof Object);

function fn() {
	console.log('fn')
}
fn.name = '珠峰';
fn.age = 10;
console.log(fn.age);
console.log(fn.age);









