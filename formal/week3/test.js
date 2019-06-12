// 1. 什么是变量提升？
// 在js代码执行之前，浏览器会带var和function的进行声明或者定义；其中带var的只声明不定义，变量是它的默认值undefined；带function是声明且定义，变量提升阶段function就代表函数本身；

// 2. 作用域链是什么？
// 变量的查找机制，当我们使用一个变量时，浏览器首先在当前作用域中查找，如果当前作用域中有，就使用这个当前作用域的。如果没有，就向上级作用域查找，如果找到就使用，如果找不到继续向上查找，一直找到window为止，此时如果是取值就会报错，如果是赋值就是给window添加一个同名属性（在松散模式下，严格模式下不能给未声明的变量赋值）；

// 3. 原型链是什么？
// 原型链：对象属性的查找机制；当我们 对象.属性名 时，浏览器会在私有属性中查找，如果私有属性有，就使用私有属性；如果没有，就通过对象__proto__找到当前对象所属类的原型（prototype），在原型的公有属性中查找，如果有就使用公有属性，如果没有就通过原型对象的__proto__继续向上查找，一直找到Object.prototype (基类的原型)，如果还没有就返回undefined。

// 4. this的常见情况
// 4.1 事件函数中的this是绑定该事件的元素
// 4.2 全局作用域的this是window
// 4.3 定时器回调函数中的this是window
// 4.4 自执行函数中的this是window
// 4.5 方法调用时看方法名前面有没有 . 如果有点，点前面是谁，方法中的this就是谁，如果没有点，方法中的this就是window
// 4.6 箭头函数中this指向箭头函数声明时所在作用域中的this
// 4.7 构造函数中的this，指向当前构造函数的实例
// 4.8 call/apply/bind 用来修改this，指定谁，函数中的this就是谁


// 5.解答题

// 题一
// 解题套路：
// 1. 新开全局作用域
// 2. 全局中的变量提升：变量f = undefined ，fn = func...
// 3. 代码从上到下执行
// 4. 给f赋值，右侧是函数执行：
//    4.1 新开作用域
//    4.2 形参赋值
//    4.3 无变量提升
//    4.4 代码执行的时候 返回了一个小函数，这个函数被f占用了，所以fn(10) 执行的作用域不销毁（n的值10得以保存）
// 5. f(1) 执行，此时f代表的是上一步return出来的小函数(函数执行步骤)
// 6. f(2) 执行，函数执行步骤
function fn(n) {
  // fn(10) n = 10 12 15
  return function (a) {
    // f(1) a = 1 2
    // f(2) a = 2 3
    a++;
    n += a;
    console.log(n + a); // n + a 和 n += a 的区别，n+=a是把a的值加到n身上
  };
}

var f = fn(10);
f(1); // 14
f(2); // 18

// 题二
function fn(n) {
  // fn(10) n = 10 9 11

  var n = 9; // 因为有一个形参是n，形参也是私有变量，所以var n 不会重复声明，但是执行时n = 9这个赋值还是会执行的；
  return function (a) {
    // f(1) a = 1 2
    a++;
    console.log(n += a);
  };
}

var f = fn(10); // 把fn(10) 执行的返回结果赋值给f
f(1); // 11


// 题三
var num = 20;
var obj = {
  num: 30,
  fn: (function (num) { // 因为自执行函数return了一个函数，函数是一个引用数据类型的值，并且被obj的fn占用了，所以自执行函数的作用域不销毁
    // num = 20 25 45
    num += 5;
    return function (x) {
      // obj.fn(20) x = 20
      num += x;
      console.log(num);
    };
  })(num)
};
obj.fn(this.num);// 45
// this没有被函数体包裹，是全局中的this->window

// 题四

function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  }
}

Fn.prototype.getX = function () {
  console.log(this.x); // Fn.prototype.x
};
Fn.prototype.getY = function () {
  console.log(this.y);
};


var f1 = new Fn; // {x: 100, y: 200, getX: fun...}
var f2 = new Fn; // {x: 100, y: 200, getX: fun...}
// f1和f2没有关系，是两个不同的对象；

console.log(f1.getX === f2.getX); // false
console.log(f1.getY === f2.getY); // true
console.log(f1.__proto__.getY === Fn.prototype.getY); // true
// console.log(Fn.prototype.getY === Fn.prototype.getY); // true

console.log(f1.__proto__.getX === f2.getX); // false
// console.log(Fn.prototype.getX === f2.getX); // false
console.log(f1.__proto__.getX === Fn.prototype.getX); // true
// console.log(Fn.prototype.getX === Fn.prototype.getX); true

console.log(f1.constructor); // Fn
// f1.__proto__ -> Fn.prototype -> Fn.prototype.constructor -> Fn

console.log(Fn.prototype.__proto__.constructor); // Object
// Fn.prototype 是一个对象，对象都是Object的实例，Fn.prototype.__proto__ 就是 Object.prototype

f1.getX(); // 100
f1.__proto__.getX(); // undefined
// Fn.prototype.getX(); // undefined
f2.getY(); // 200
Fn.prototype.getY(); // undefined

// 题五
let n = 10, // 11 32 53 用let声明的变量不会给window增加同名属性
  obj = {
    n: 20 // 73
  };
// 连续赋值：是把等号右侧值求出来，赋值给等号左侧；
// 先把自执行函数的返回值赋值obj.fn属性，再把obj.fn属性赋值给fn变量，fn变量和最右侧的自执行函数没啥关系

// let fn = obj.fn = (function () {})();
obj.fn = (function () {
  // 无形参赋值、变量提升
  n++;
  return function (m) {
    // fn(10) m = 10 11
    // obj.fn(10) m = 10 11
    n += 10 + (++m);
    this.n += n;
    console.log(n);
  }
})(obj.n);

let fn = obj.fn;

fn(10); // 32
obj.fn(10); // 53
console.log(n, obj.n); // 53 73

// 题六

var num = 20; // 45 55
var obj = {
  num: 30, // 85
  fn: (function (num) {
    // num = 20 25
    num += 5;
    this.num += num;
    return function (x) {
      // fn(10) x = 10;
      // obj.fn(55) x = 55
      this.num += x;
      console.log(num);
    };
  })(num)
};
var fn = obj.fn;
fn(10); // 25
obj.fn(num); // 25
console.log(num, obj.num); // 55 85

// 题七

function Foo() {
  getName = function () { // 执行过这一行代码后，全局变量getName变成了这个log a 的函数
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

Foo.getName(); // b
getName(); // d
Foo().getName(); // a Foo() 执行时拿Foo当成一个普通函数执行，Foo前面没有点，所以Foo本次执行时函数中的this是window
getName(); // a
var f = new Foo(); // f -> {}
f.getName(); // c

// 题八

var name = 'window';
var Tom = {
  name: "Jerry",
  show: function () {
    console.log(this.name); // Tom.name
  },
  wait: function () {
    this.show(); // this -> Tom
    // Tom.show()
  }
};
Tom.wait(); // Jerry

// 题九
var fullName = 'language';
var obj = {
  fullName: 'javascript',
  prop: {
    getFullName: function () {
      return this.fullName
    }
  }
};
console.log(obj.prop.getFullName()); // undefined
var test = obj.prop.getFullName;
console.log(test()); // language