// 原型链继承：把子类的原型改写成父类的一个实例；

function A() {
  this.text = 'A类的text';
}
A.prototype.say = function () {
  console.log('hello world');
};

function B() {}

// 把B类的原型改写成A类的一个实例
// console.log(B.prototype.constructor); // B
B.prototype = new A(); // {text: 'A..', __proto__: A.prototype}
// console.log(B.prototype.constructor); // A ?? 为什么变成了A？
// 因为B的原型指向了A的实例，而A的实例：{text: 'A..', __proto__: A.prototype}，所以我们B.prototype.constructor就是先在A的实例中查找constructor属性，然而并没有，接着就通过__proto__ 去A.prototype 上查找，而A.prototype上的constructor指向A。
B.prototype.constructor = B; // 原型继承要重新指定继承后的constructor

// console.log(B.prototype); // B.prototype 变成了A的实例

let b = new B(); // 获取B类的一个实例 {}

b.say(); // 'hello world'
console.log(b.text); // b.text 是B类公有的属性 'A类的text'

// 原型链继承：把父类私有和公有的属性都继承为子类的公有的属性和方法；

