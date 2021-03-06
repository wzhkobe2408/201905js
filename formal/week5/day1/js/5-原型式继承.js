// 原型式继承：只继承父类公有的；

// 创建一个指定__proto__的对象
// Object.create(protoObj) 返回一个新对象，这个新对象的__proto__ 指向protoObj；
let obj2 = {
  name: '100',
  id: 17
};
let o2 = Object.create(obj2); // o2是新的对象，并且o2的__proto__属性指向obj2

function A() {
  this.text = 'A类私有的text';
}
A.prototype.say = function () {
  console.log('hello world');
};
A.prototype.getName = function () {
  console.log('北京不欢迎你们~');
};

function B() {
  // this.xxx = xxx
}

let obj = Object.create(A.prototype); // 创建一个对象obj，obj的__proto__指向A.prototype，obj不是A.prototype
// console.log(obj);

// 原型式继承：
B.prototype = obj; // obj -> {__proto__: A.prototype }
B.prototype.constructor = B; // 把B原型上的constructor属性改写成B；

B.prototype.getName = function () {
  console.log(this.name);
}; // obj -> {getName: function..., __proto__: A.prototype}

let b = new B(); // { __proto__: B.prototype }
console.log(b.text); // 通过这种方式继承，不能继承父类私有的
b.say(); // say是父类公有的方法，通过原型式继承可以继承

// b.say -> b的实例 {__proto__: B.prototype} -> b.__proto__ -> B.prototype(B.prototype现在是obj) -> obj { __proto__: A.prototype } -> obj.__proto__ -> A.prototype -> A.prototype.say






