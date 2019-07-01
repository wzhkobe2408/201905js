// 继承：为了让子类能够使用父类私有或者公有的属性或方法；

// 原型链继承
function A() {
  this.text = 'A类私有的text'
}
A.prototype.say = function () {
  console.log('hello world');
};

function B() {}

B.prototype = new A(); // 把父类私有的和公有的继承到子类的公有的；
B.prototype.constructor = B; // 原型链继承要重新指定子类constructor属性；

// 借用构造函数继承（call继承）：只继承私有的
function C() {
  this.text = 'C类私有的text属性';
}
C.prototype.say = function () {
  console.log('hello world');
};

function D() {
  // 借用构造函数继承
  C.call(this);  // this是D的实例
}


// 组合继承：原型链继承 + call继承；把父类私有的继承到私有的，公有的继承到公有的；但是，父类私有的被继承了两次，一次是原型链继承时，把父类私有的继承为子类公有的，另一次把父类私有的变为子类私有的；

function E() {
  this.text = 'E的私有text';
}
E.prototype.say = function () {
  console.log('hello world');
};

function F() {
  E.call(this); // call继承
}
F.prototype = new E(); // 原型链继承
F.prototype.constructor = F;

// 原型式继承：只继承父类公有的
function G() {
  this.text = 'G的私有的text';
}
G.prototype.say = function () {
  console.log('hello world');
};
let protoObj = Object.create(G.prototype); // 创建一个新对象，这个对象的__proto__ 指向G.prototype

function H() {}
H.prototype = protoObj;
H.prototype.constructor = H; // 重新指定constructor


// 寄生组合式继承：原型式继承 + call继承；
// 把父类私有的继承为子类私有的，把父类公有的继承为子类公有的；
function I() {
  this.text = 'I的私有的text';
}
I.prototype.say = function () {
  console.log('hello world');
};

function J() {
  I.call(this); // call继承
}
let protoObj2 = Object.create(I.prototype);
J.prototype = protoObj2; // 原型式继承
J.prototype.constructor = J; // 重新指定构造函数

// 冒充对象继承：在子类的构造函数中创建一个父类的实例，for in遍历这个实例，把实例上的属性和属性值都添加到子类的实例中；

// ES6 extends 关键字继承
class Human {
  constructor (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  // 添加公有方法
  eat () {
    console.log('EAT');
  }
  sleep () {
    console.log('SLEEP');
  }
}

class Teacher extends Human { // 1. 在声明子类时需要extents父类
  constructor () {
    super(); // 2. 在子类的构造函数中在使用this之前调用super();
  }
}

// ES6继承的 原理：寄生组合式继承

// 事件：元素或者浏览器窗口发生特定交互的瞬间；我们一般给事件绑定一个事件监听函数，以便在事件发生时可以执行我们需要的操作；

// 鼠标事件：
/*
* onclick
* ondblclick
* onmouseover
* onmouseout
* onmouseenter
* onmouseleave
* onmousemove
* onmousedown
* onmouseup
* onmousewheel
* oncontextmenu
*
* */

// 键盘事件：
/*
* onkeydown 键盘按下去
* onkeyup 键盘键抬起
* onkeypress
* */

// 表单事件：
/*
* onfocus 获得焦点
* onblur 失去焦点
* oninput 输入时触发
* onchange 表单value值发生改变时
* onsubmit form 表单提交时触发
*
* */

// 系统事件
/*
* onload: 加载完成后触发；
* window.onload 页面加载完成后（页面中所有的资源都加载完成）触发
* DOMContentLoaded 页面的DOM结构加载并解析完成就会触发；
* document.addEventListener('DOMContentLoaded', callback);
* onresize: 页面或者窗口的大小发生变化时触发
* onscroll: 浏览器滚动条滚动的时候触发
*
* */

// 事件对象：事件触发时浏览器传给事件函数的一个特殊的实参，是一个对象；这个对象中包含了所有的事件触发时的有效信息；

// 鼠标事件的事件对象：
// e.clientX e.clientY 鼠标点击位置相对于浏览器窗口的坐标
// e.pageX e.pageY 鼠标位置相对于页面的坐标
// e.target 事件源 触发事件的元素（事件虽然会冒泡，但是事件源不会变）

// 键盘事件的事件对象：
// e.keyCode 标识键盘的键码

// 事件的默认行为：
// 阻止默认行为：e.preventDefault();
// IE的阻止默认行为：e.returnValue = false;

// 事件冒泡：触发某个元素的某个事件，该元素的父级元素的该事件都会触发；这种现象叫做事件冒泡；
// 阻止冒泡：e.stopPropagation();
// IE阻止冒泡：e.cancelBubble = true;

// 事件触发分为三个阶段：捕获阶段、目标阶段、冒泡阶段；（事件流）

// DOM0 和 DOM2

// DOM0和DOM2事件的区别：
// 1. DOM0事件绑定是给元素的事件属性赋值，一个属性只能对应一个值，所以不能给同一个事件绑定多个监听函数；DOM2有事件池，所以可以绑定多个；
// 2. DOM2可以选择绑定在冒泡阶段还是捕获阶段，而DOM0只能绑定在冒泡阶段；

// DOM2 的绑定和移除
// 元素对象.addEventListener('不带on的事件名', callback, 是否捕获)
// 元素对象.removeEventListener('不带on的事件名', 事件名, 是否捕获)

// 绑定的谁，就要移除谁；下面console.log(1) 是两个不同的函数，所以后面的remove无法移除；
// 错误！！！！！！
box.addEventListener('click', function () {
  console.log(1);
}, false);
box.removeEventListener('click', function () {
  console.log(1);
}, false);

// 正确操作！
function fn1() {
  console.log(1);
}
box.addEventListener('click', fn1, false);
box.removeEventListener('click', fn1, false);





