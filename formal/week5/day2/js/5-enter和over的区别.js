let $ = selector => document.querySelector(selector);

let outer = $('.outer');
let inner = $('.inner');

/*
inner.onmouseover = function () {
  console.log('inner over');
};
inner.onmouseout = function () {
  console.log('inner out');
};

outer.onmouseover = function () {
  console.log('outer over');
};
outer.onmouseout = function () {
  console.log('outer oute');
};
*/

/*
* over: 当从父元素进入子元素会触发父元素out事件；接着触发子元素的over事件，因为冒泡，又会触发父元素的over事件；
*
* */

inner.onmouseenter = function () {
  console.log('inner enter');
};
inner.onmouseleave = function () {
  console.log('inner leave');
};

outer.onmouseenter = function () {
  console.log('outer enter');
};
outer.onmouseleave = function () {
  console.log('outer leave');
};
/*
* enter: 从父元素进入子元素并不会触发父元素的leave事件，接下来触发子元素的enter事件，而且不会冒泡，进而父元素的enter事件不会触发；
* */

// 如果以后项目中用到这种大盒子套小盒子的，尽量用enter事件；
