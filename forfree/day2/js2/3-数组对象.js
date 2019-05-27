/*
* 目标：
*   1. 理解数组是有序的键值对
*   2. 数组的操作，因为数组的key是数字，只能使用方括号
* */

// 1. 数组：有序的键值对集合，而且数组项的顺序不能随意调整。数组的键是浏览器分配的，不用我们手动设置。我们写的数组项都是值。数组的键都是数字，而且从0开始，第一个数组项对应的键是0，第二个对应的是1，第三个对应的是2，以此类推，第n个数组项的键是 n - 1；我们称这种数字键为索引。数组还有一个length属性，表示数组项个数。数组最后一项的索引是数组的length - 1；

// 2. 声明一个数组
var ary = [
  1,
  2,
  3,
  {name: '珠峰培训'},
  function sum(a, b) {
    return a + b
  }
];
console.log(ary); 
console.log(ary.length); // 通过数组.length 获取数组长度

// 3. 数组操作：数组的操作和对象操作一样，但是数组的键都是数字，所以只能用方括号的方式操作；
console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);
console.log(ary[3]);
console.log(ary[4]);
console.log(ary[5]); // 访问一个数组不存在的索引，返回undefined
console.log(ary[ary.length - 1]); // 我们通常用这个方法获取数组最后一项。
ary[0] = 100; // 修改
console.log(ary); 
ary[5] = 111; // 添加
console.log(ary);
