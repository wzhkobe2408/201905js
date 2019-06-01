/*
* 目标：
*   1. 理解构造函数模式的不足
*   2. 掌握原型模式实现
*   3. 理解原型对象
* */

function Teacher(name, age, subject, from) {
	this.name = name;
	this.mission = '传道受业解惑';
	this.age = age;
	this.subject = subject;
	this.from = from;
	this.teach = function () {
		console.log(`${name} 老师教 ${subject} 学科`);
	};
}

// let t1 = new Teacher('mabin', 18, 'js', 'zf');
// let t2 = new Teacher('mabin', 19, '架构', 'zf');
//
// t1.teach();
// t2.teach();
// console.log(t1.teach === t2.teach); // false 因为t1和t2是两个实例，而teach又是t1和t2的私有方法

var ary1 = [1, 2, 3];
var ary2 = [1, 3, 5];
console.log(ary1.push === ary2.push); // true
console.log(ary1);
console.log(ary2);

// 思考? 只要是数组就该能push，因为这是数组类的功能，所以。而老师是Teacher类的实例，只要是老师就能teach，teach是老师类的功能，不需要再每个实例上强调一遍。这是一个公有的特性，不该放在实例，而是应该放在一个公共的地方，以后只要是这个类的实例就有这个功能。放在哪里呢？

// 原型对象：
// 原型prototype：每一个函数（普通函数、构造函数【类】）都天生自带一个属性prototype（原型）。这个属性的值是一个对象，用来存储当前类型的共有的属性和方法。保存在原型上面的属性和方法称为公有属性或公有方法。

// 所以改造Teacher类型：


function Teacher(name, age, subject, from) {
	this.name = name;
	this.mission = '传道受业解惑';
	this.age = age;
	this.subject = subject;
	this.from = from;
}

Teacher.prototype.teach = function () {
	console.log(`${this.name} 老师教 ${this.subject} 学科`);
};

console.log(Teacher.prototype);


let t1 = new Teacher('mabin', 18, 'js', 'zf');
let t2 = new Teacher('jiangwen', 19, '架构', 'zf');

t1.teach();
t2.teach();
console.log(t1.teach === t2.teach); // true

// 如何检测属性是公有还是私有？

// hasOwnProperty() 方法：检测某个属性是否是对象的私有属性，如果是私有属性，返回true，否则返回false；
var r1 = t1.hasOwnProperty('name'); // true
var r2 = t2.hasOwnProperty('teach'); // false























