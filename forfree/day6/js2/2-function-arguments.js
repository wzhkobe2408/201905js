/*
* 目标：
*   1. arguments的作用
*   2. arguments的类数组特性：索引、长度
*   3. 基于arguments完成任意数求和
* */

// 需求：求任意10个数字之和
function sum(a, b, c, d, e, f, g, h, i, j) {
  return a + b + c + d + e + f + g + h + i + j;
}

// 函数形参的局限性：
// 1. 当参数特别多的时候，设置参数的代码会很臃肿
// 2. 如果参数个数根本不固定，可以是10个，可以是2个，还可以是500个，这时候形参根本无法设置。

// 为了解决这种问题，我们需要arguments。
// arguments: arguments 是函数内置的实参集合。arguments里面包含了所有函数执行时传入的实参。（内置的意思就是浏览器天生自带的，不管你设置形参与否，也不管你传了实参与否，arguments都存在）
function sum2(n, m) {
  console.log(n, m);
  console.log(arguments);
  console.log(arguments.callee === sum2); // true； arguments.callee 代表的就是当前函数本身

  /*
  * arguments 是类数组，是一个对象。
  * {
  *   0: 1,
  *   1: 3,
  *   2: 2
  *   ....
  *   length: 3, // length表示传入的实参个数
  *   callee: sum2
  * }
  * */
}
sum2(1, 3, 2);

// 需求：求任意数字之和

function anySum() {
  // 1. 设置一个初始值
  var total = 0;

  // 2. 遍历arguments，把每一项加到total上
  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    total += item;
  }
  return total
}
var r1 = anySum(1, 18, 20, 34, 56, 100);
var r2 = anySum(1, 5);
console.log(r1, r2);

var r3 = anySum('1', '2', 3, '5', 'USA', '13.5px', NaN);
// 代码的健壮性：允许一些意外情况的发生时，程序还可以正常工作，并且功能正常。为了增强代码的健壮性，我们需要在程序中额外增加处理意外情况的逻辑。anySum现在需要增加 检测实参是否是数字，如果不是就要转成数字，但是转完之后的结果还需要判断是不是一个有效数字，如果是有效数字，再加。
console.log(r3);
function anySum2() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    if (typeof item !== "number") {
      // 这个条件用来判断每个实参的类型是不是数字，满足这个条件时表示不是数字，就需要先尝试转换
      item = parseFloat(item) // 用parseFloat方法把实参转成数字
    }
    if (!isNaN(item)) {
      // 这个条件是用来判断实参或者被转换后的实参是不是一个NaN，如果不是NaN再加
      total += item;
    }
  }
  // 最后返回计算结果
  return total;
}

var r4 = anySum2('1', '2', 3, '5', 'USA', '13.5px', NaN);
console.log(r4);























