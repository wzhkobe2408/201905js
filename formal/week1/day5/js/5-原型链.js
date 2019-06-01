/*
* 目标：
*   1. 理解原型链
*   2. 掌握原型查找的方法
*
* */


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


// 思考? 我把这个方法写在了Teacher的原型上，那么t1和t2是怎么找到的呢？

console.log(t1);
console.log(t2);
console.log(Teacher.prototype);

// 在私有属性中没有发现teach方法。我们发现这个t1和t2中有一个__proto__ 属性，这个属性值里面有teach方法。那是怎么找过去呢？Teacher.prototype中也有一个__proto__，这是干嘛呢的？


// 原型链：对象的属性查找机制

// 每个实例都有一个属性__proto__ 属性，它指向当前实例所属类的prototype对象。当我们访对象的一个的属性时，如果有，就使用私有属性，如果没有就通过实例__proto__找到实例所属类的prototype(原型)上查找，如果找到就使用prototype上的属性，如果还没找到，就通过prototype的__proto__继续向上查找，一直找到Object的prototype就停止查找。如果还没找到就返回undefined。


function Human(name, age, gf) {
	this.name = name;
	this.age = age;
	this.gf = gf;
}

Human.prototype.eat = function () {
	console.log('吃')
};
Human.prototype.sleep = function () {
	console.log('睡')
};
Human.learn = function () {
	console.log('学习')
};

let h = Human('陈*希', 40, '张*芝');
console.log(h.address);