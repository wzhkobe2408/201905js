


// 1.
function fn(n) {
  return function (a) {
    a++;
    console.log(n += a);
  };
}

var f = fn(10);
f(1);
f(2);

// 2.

var num = 20;
var obj = {
  num: 30,
  fn: (function (num) {
    this.num += 5;
    return function (x) {
      num += x;
      console.log(num);
    };
  })(num)
};
obj.fn(this.num);
console.log(num, obj.num);

// 3.
var num = 20;
var obj = {
  num: 30,
  fn: function (num) {
    this.num += 5;
    return function (x) {
      this.num += x;
      console.log(num);
    };
  }
};
let fx = obj.fn(this.num);
fx(this.num);
console.log(this.num, obj.num);

// 4.
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
f1.getX();
f1.__proto__.getX();
f1.getY();
f2.getY();

var obj = {
  width: 100,
  height: 200,
  backgroundColor: 'red'
};