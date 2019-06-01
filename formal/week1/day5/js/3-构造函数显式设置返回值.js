/*
* 目标：
*   1. 理解给构造函数设置返回基本数据类型的返回值和引用数据类型的返回值的区别；
*   2. 不要随意指定构造函数的返回值
* */

// 返回基本数据类型：
function Teacher(name, age, subject, from) {
	this.name = name;
	this.mission = '传道受业解惑';
	this.age = age;
	this.subject = subject;
	this.from = from;
	this.teach = function () {
		console.log(`${name} 老师教 ${subject} 学科`);
	};

	return 61; 返回基本类型值
}
let t1 = new Teacher('马宾', 18, 'js', 'zf');
console.log(t1); // Teacher {....}

// 返回引用数据类型
function Teacher(name, age, subject, from) {
	this.name = name;
	this.mission = '传道受业解惑';
	this.age = age;
	this.subject = subject;
	this.from = from;
	this.teach = function () {
		console.log(`${name} 老师教 ${subject} 学科`);
	};

	return {haha: '哈哈'}
}

let t2 = new Teacher('姜文', 19, 'js', '珠峰');
console.log(t2); // {haha: ...}

// 如果我们手动修改构造函数的返回值时：
// 1. 如果return一个基本数据类型的值，没有任何影响，不会覆盖原有实例；
// 2. 如果return 引用数据类型，原有的实例就会被这个引用类型值覆盖

// 慎重修改构造函数的返回值





