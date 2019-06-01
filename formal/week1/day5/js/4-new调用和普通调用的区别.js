/*
* 目标：
*   1. 理解new调用是函数的执行过程
*   2. 掌握普通调用和new调用的区别
* */

// 工厂函数
function teacher(name, age, subject, from = '珠峰') {
  var obj = {}; // 原材料
  obj.name = name; // 加工
  obj.age = age; // 加工
  obj.subject = subject;
  obj.from = from;
  obj.teach = function () {
    console.log(`${this.name} 老师教 ${this.subject}`);
  };
  return obj; // 出厂
}

// 构造函数：
function Teacher(name, age, subject, from) {
	var address = '河北'; // 这就是一个私有变量，不会添加到实例中。只有通过this.xxx = xxx这种方式才能将属性添加到实例中。
  function sum(a, b) { // 函数只是私有函数，和实例也没关系
    return a + b;
  }
  this.name = name;
  this.age = age;
  this.subject = subject;
  this.from = from;
  this.teach = function () {
    console.log(`${this.name} 老师教 ${this.subject}`);
  }
}

let t2 = new Teacher('姜文', 19, 'Architect', '珠峰'); // 通过new 调用时获取Teacher类的一个实例
let t3 = Teacher('任金辉', 19, 'JS');
console.log(t2); // Teacher 的实例
console.log(t3); // undefined
function fn() {
  console.log(12);
}
var f = new fn;
console.log(f); // fn {}

// new fn; new操作符可以让函数执行，通过new调用，这个函数就会被当做构造函数对待，返回一个实例对象；

// new执行和函数普通执行有很明显的区别。之所有会有这种区别，是因为函数普通执行和new 执行有很大区别；

// 普通函数执行机制：
// 1. 开辟私有作用域
// 2. 形参赋值
// 3. 变量提升
// 4. 代码执行
// 5. 销毁栈内存（特殊情况除外）

// new 构造函数执行：
// 1. 开辟作用域
// 2. 形参赋值
// 3. 变量提升
// 4. 隐式创建一个属于当前这个类的实例对象，然后把构造函数中的this指向这个实例对象。
// 5. 执行构造函数中的代码；如果this.xxx = xxx; 就是给实例添加私有属性。
// 6. 隐式返回这个实例对象，相当于 return this;
// 7. 销毁栈内存（构造函数的作用域销毁与否和普通函数一样）

// 构造函数中的this，指向当前构造函数的实例对象；





