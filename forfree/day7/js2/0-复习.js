/*
* 1. arguments：函数的实参集合，是一个类数组，是函数天生自带的。
*   length：实参个数
*   callee：函数本身（arguments隶属于哪个函数，arguments.callee就是谁）
* 2. ES6 不定参数
* */

function sum(...arg) {
  // ... 展开运算符
  console.log(arg); // arg 是一个真正的数组，数组中就是我们传入的所有实参；
  // 使用不定参数时需要在函数形参部分声明（而且... 不能省略）
  // 不定参数都是数组，所以可以调用数组方法

  // console.log(arguments); // arguments是一个类数组，这里面也是所有的实参；
  var total = 0;
  arg.forEach(function (item, index) {
    total += item;
  });
  return total;
}
sum(1, 2, 3, 4, 5, 6);

/*
* 递归：在函数内部调用函数自身；
* 注意：使用递归时最重要的是考虑好终止递归的条件；
*
* */

/*
* 数组方法：
*   1. push()
*   2. pop()
*   3. unshift()
*   4. shift()
*   5. splice(n, m)
*   6. splice(n, m, x)
*   7. splice(n, 0, x)
*
*   8. slice(n, m)  slice(n) slice() slice(0)
*   9. concat()
*     ary.concat() 复制ary
*
*   10. join(分隔符)
*   11. toString()
*
*   12. sort(function (a, b) {return a - b}) 升序
*       sort(function (a, b) {return b - a}) 降序
*   13. reverse()
*
*   14. indexOf() / lastIndexOf() 如果项在数组中出现过，返回对应索引位置，如果没出现过返回 -1；
*   15. ES6新增 includes() 判断数组是否包含某一项，如果包含返回true， 不包含返回false
*
*   16. forEach(function (item, index) {})
*   17. map(function (item, index) {}) 将原数组映射成一个新数组，新数组回调函数的返回值组成的。
* */














