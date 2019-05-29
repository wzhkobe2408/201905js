/*
* 目标：
*   1. 理解栈内存不销毁
*   2. 理解栈内存不销毁时保存在栈内存中的数据不销毁
*
* */
// 需求：累加计数；页面中有一个按钮，有一个初始值0，每点击一次这个按钮就要给这个值累加1；
// 思路：
// 点击的时候累加，所以这个按钮需要绑定一个点击事件
// 这个数字能够累加，说明数字一定是保存在了一个不销毁的地方；
var btn = document.getElementById('btn');

// 1. 利用全局作用域不销毁，保存这个数字的上一次的值
// var count = 0; // 所以我们需要把count放在全局作用域中，只要页面不关闭，全局作用域就不销毁，count的值也就不销毁。（尽量少使用全局变量，因为可能会导致命名冲突）
/*btn.onclick = function () {
  // var count = 0; // count 在事件函数中，事件函数执行结束后，作用域就销毁了，所以count的值也就销毁了。所以count不能放这里面
  count++;
  btn.innerHTML = count;
};*/

// 2. 私有作用域保存上一次的值。（关键在于产生一个私有作用域，只有函数执行才会有私有作用域）
function countPlus() {
  var count = 0;
  btn.onclick = function () {
    count++;
    btn.innerHTML = count;
  } // 函数中的引用数据类型（这个函数）被btn的onclick属性占用了，所以contPlus的作用域不能销毁
}
// countPlus();

// 3. 私有作用域不销毁
/*(function () { // 因为只是需要一个函数执行时形成作用域，其实我们并不需要函数名，所以把第二个方法改良成第三个
  var count = 0;
  btn.onclick = function () {
    count++;
    btn.innerHTML = count;
  }
})();*/

// 4. 私有作用域不销毁 3
/*btn.onclick = (function () { // 不是把自执行函数赋值给btn.onclick属性，而是把自执行函数的返回值赋值给btn.onclick 属性
  var count = 0;
  return function () {
    count++;
    btn.innerHTML = count;
  }
})();*/

// 5. 块级作用域：块级作用域和私有作用域很类似，在块级作用域中声明的变量不能被外面访问；使用块级作用域时需要let、const等声明变量，这个代码块才会被解析成块级作用域。

{
  let count = 0; // 我们将count存在块级作用域中
  btn.onclick = function () {
    count++;
    btn.innerHTML = count;
  }
}
// console.log(count);



















