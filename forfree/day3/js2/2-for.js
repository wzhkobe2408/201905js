var ary = [12, 23, 34, 45, 56, 67, 78, 89];
console.log(ary);
// 倒着输出这个数组：
// for (var i = ary.length - 1; i >= 0; i -= 2) {
//   console.log(ary[i]); // 89 67 45 23
// }

// 把数组的奇数项输出出来
/*
* 1. 我们发现奇数项的索引是偶数
* 2. 所以我们在循环的过程中，判断i是不是偶数，如果是偶数，就输出
*
*
* */
for (var i = 0; i < ary.length; i++) {
  if (i % 2 === 0) {
    // % 取模运算符，计算余数
    // i % 2 === 0 表示i 除以 2的余数是0，所以i偶数
    console.log(ary[i]);
  }
}

/*
* 思考题：另一种方式实现输出奇数项。
*
*
*
* */

// 遍历：把集合中每个元素都取出一次叫做一次遍历。

// for in 循环：用来遍历普通对象的。可以在循环时把对象的每个键取出来，只能把对象的可枚举属性取出来（浏览器添加的一般都是不可枚举属性，可枚举的一般是我们自定义的属性）
var obj = {
  name: 'zhufeng',
  age: 10,
  teacher: 'mabin'
};
console.log(obj);
for (var key in obj) {
  // key 是每次循环时对象中的一个键
  // 对象有多少个键，for in 循环就执行多少回
  console.log(key);
  console.log(obj[key]); // 因为key是一个变量，所以只能通过 对象[key] 的方式获取每次循环时对象的值
}
















