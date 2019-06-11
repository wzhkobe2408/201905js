// 1. 什么是变量提升？

// 2. 作用域链是什么？


// 3. 原型链是什么？

// 4. this的常见情况


// 5.解答题

// 题一
function fn(n) {
  // n = 10 12 15
  return function (a) {
    // f(1) a = 1 2
    // f(2) a = 2 3
    a++;
    n += a;
    console.log(n + a);
  };
}

var f = fn(10);
f(1); // 14
f(2); // 18

// 题二
function fn(n) {
  // n = 10 9 11
  var n = 9
  return function (a) {
    // f(1) a = 1 2
    a++;
    console.log(n += a);
  };
}

var f = fn(10);
f(1); // 11

// 题三
var num = 20;
var obj = {
  num: 30,
  fn: (function (num) {
    // num = 20 25 45
    num += 5;
    return function (x) {
      // x = 20
      num += x;
      console.log(num);
    };
  })(num)
};
obj.fn(this.num); // 45

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


var f1 = new Fn; // {x: 100, y: 200, getX: fun...}
var f2 = new Fn; // {x: 100, y: 200, getX: fun....}

console.log(f1.getX === f2.getX); // false
console.log(f1.getY === f2.getY); // true
console.log(f1.__proto__.getY === Fn.prototype.getY); // true
console.log(f1.__proto__.getX === f2.getX); // false
console.log(f1.__proto__.getX === Fn.prototype.getX);
console.log(f1.constructor); // Fn

console.log(Fn.prototype.__proto__.constructor); // Object
f1.getX(); // 100
f1.__proto__.getX(); // undefined
f2.getY(); // 200
Fn.prototype.getY(); // undefined

// 题五
let n = 10, // 11 32 53
  obj = {
    n: 20 // 73
  };
let fn = obj.fn = (function () {
  //
  n++;
  return function (m) {
    // fn(10) m = 10 11
    // obj.fn(10) m = 10 11
    n += 10 + (++m);
    this.n += n;
    console.log(n);
  }
})(obj.n);
fn(10); // 32
obj.fn(10);
console.log(n, obj.n); // 53 73

// 题六

var num = 20; // 45 55
var obj = {
  num: 30,  // 85
  fn: (function (num) {
    // num = 20 25
    num += 5;
    this.num += num;
    return function (x) {
      // fn(10) x = 10
      // obj.fn(10) x = 55
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

Foo.getName(); // b
getName(); // d
Foo().getName(); // a
getName(); // a
var f = new Foo();
f.getName(); // c

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
Tom.wait(); // Jerry

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
console.log(obj.prop.getFullName()); // undefined
var test = obj.prop.getFullName; //
console.log(test()); // language