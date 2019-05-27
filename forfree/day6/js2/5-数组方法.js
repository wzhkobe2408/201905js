/*
* 目标：
* 1. 掌握数组常用的方式
* 2. 掌握各个方法参数及、返回值、原数组是否改变
 */

// I. 数组的删除和追加
/*
* 1.1 push
* 作用：向数组的末尾追加项，可以是一项也可以是多项，多项用逗号分隔
* 参数：要追加的数组项
* 返回值：数组追加项后的新长度
* 原数组是否改变：原数组改变
* */
// var ary1 = [1, 2, 3];
// var r1 = ary1.push(4, 5);
// console.log(r1);
// console.log(ary1);

/*
* 1.2 pop
* 作用：删除数组的末尾一项
* 参数：无
* 返回值：被删除的数组项
* 原数组是否改变：改变
* */
// var ary2 = [1, 2, 5];
// var r2 = ary2.pop(1);
// console.log(r2);
// console.log(ary2);

/*
* 1.3 unshifit
* 作用：向数组的开头添加项（可以是一项或者多项）
* 参数：要添加到数组开头的项
* 返回值：数组添加项后的新长度
* 原数组是否改变：改变
* 
* */
// var ary3 = [4, 5, 6];
// var r3 = ary3.unshift(1, 2, 3);
// console.log(r3);
// console.log(ary3);

/*
* 1.4 shift
* 作用：删除数组开头一项
* 参数：无
* 返回值：被删除的数组项
* 原数组是否改变：改变
* */
// var ary4 = [8, 9, 10];
// var r4 = ary4.shift();
// console.log(r4);
// console.log(ary4);

/*
* 1.5 splice(n, m)
* 作用：从索引n开始，删除m个
* 参数：起始索引n，要删除的个数m；m不写，表示删除到最后一项。如果n和m都不写一个也不删
* 返回值：由被删除项组成的新数组
* 原数组是否改变：是
* */
// var ary5 = [1, 2, 3, 5, 8];
// var r5 = ary5.splice(1, 4);
// console.log(r5);
// console.log(ary5);

/*
* 1.6 splice(n, m, x)
* 作用：从索引n开始，删除m个，用x替换被删除的部分
* 参数：起始索引n，删除个数m，替换项x
* 返回值：由被删除项组成的新数组
* 原数组是否改变：改变
* */

// var ary6 = [1, 3, 5, 7, 9];
// var r6 = ary6.splice(2, 1, '这是一个替换项');
// console.log(r6);
// console.log(ary6);

/*
* 1.7 splice(n, 0, x)
* 作用：从索引n开始，不删除任何项，把x插入到索引为n的那一项之前
* 参数：起始索引n，删除0项，替换项x
* 返回值：空数组
* 原数组是否改变：改变
* */
// var ary7 = [1, 3, 2, 4, 5];
// var r7 = ary7.splice(1, 0, 'xxx');
// console.log(r7);
// console.log(ary7);

// II. 数组的复制、拼接
/*
* 2.1 slice(n, m)
* 作用：从索引n开始，复制到索引m（不包含m）
* 参数：起始索引n，结束索引索引m；m不写表示复制到末尾；如果n和m都不写，从头复制到尾。
* 返回值：复制出来的项组成的新数组
* 原数组是否改变：不改变
* */
// var ary8 = [1, 3, 5, 7, 9];
// var r8 = ary8.slice(1, 4);
// console.log(r8);
// console.log(ary8);
// var r9 = ary8.slice(1);
// console.log(r9);
// var r10 = ary8.slice();
// console.log(r10); // r10 === ary8 -> false

/*
* 2.2 concat
* 作用：拼接数组
* 参数：要拼接的数组或者数组项
* 返回值：拼接过后的新数组（不是在原数组基础上直接拼接，而是返回一个新数组）
* 原数组是否改变：不改变
* */

// var ary11 = [1, 2, 5, 8, 0];
// var r11 = ary11.concat([1, 2, 3, 0, 6]);
// var r11 = ary11.concat(1, 2, 3, 1, 5);
// console.log(r11);
// console.log(ary11);

// var r12 = ary11.concat(); // concat不传参表示将原数组复制一份
// console.log(r12);
// console.log(r12 === ary11); // false 副本和原数组没关系

// III. 数组转成字符串

/*
* 3.1 join方法
* 作用：用指定的分隔符，将数组连接成字符串
* 参数：指定分隔符（字符串）
* 返回值：用指定的分隔符连接成的字符串
* 原数组是否改变：不改变
* */
// var ary13 = [2, 4, 6, 8, 10];
// var r13 = ary13.join('~_~');
// console.log(r13, ary13);
// var r14 = ary13.join('+');
// console.log(r14); // "2+4+6+8+10"
// var sum = eval(r14); // eval() 方法把字符串解析成js代码执行
// console.log(sum);

/*
* 3.2 toString()
* 作用：把数组转成字符串
* 参数：无
* 返回值：用逗号连接数组项组成的字符串
* 原数组是否改变：不改变
* */
// var ary15 = [1, 4, 5, 10];
// var r15 = ary15.toString();
// console.log(r15); // "1,4,5,10"
// console.log(ary15);

// IV. 某一项是否在数组中出现过

/*
* 4.1 indexOf()
* 作用：获取某一项在数组中第一次出现的索引位置
* 参数：数组项
* 返回值：如果这一项在数组中存在，就返回其第一次出现的索引值；如果没有，返回-1；
* 原数组是否改变：不改变
* */
// var ary16 = [9, 1, 3, 5, 7, 9];
// var r16 = ary16.indexOf(98);
// console.log(r16, ary16);

/*
* 4.2 lastIndexOf()
* 作用：获取某一项在数组中最后一次出现的索引位置；
* 参数：数组项
* 返回值：如果该项在数组存在，就返回其最一次出现的索引值；如果没有，返回-1
* 原数组：不改变
* */
// var r17 = ary16.lastIndexOf(99);
// console.log(r17); // 5

/*
* 4.3 includes() 【es6新增的方法，老旧浏览器不能用】
* 作用：判断数组是否包含某一项
* 参数：数组项
* 返回值：如果包含返回true，不包含返回false
* */
// var ary18 = [1, 4, 5, 8];
// var r18 = ary18.includes(9);
// var r19 = ary18.includes(4);
// console.log(r18); // false
// console.log(r19); // true

// V. 数组排序、翻转

/*
* 5.1 sort(function (a, b) {})
* 作用：升序或者降序排列数组
* 参数：回调函数（回调函数：当做实参传递给函数执行的函数就叫做回调函数）function (a, b) {return a - b} 升序；function (a, b) {return b - a} 降序；
* 返回值：排过序后的原数组
* 原数组是否改变：改变
* */
// var ary19 = [8, 1, 0, 3, 34, 7];
// var r19 = ary19.sort(function (a, b) {
//   return a - b; // 升序
// });
// console.log(r19, ary19);

// var r20 = ary19.sort(function (a, b) {
//   return b - a; // 降序
// });
// console.log(r20);

// var x = [0, 2, 8, 10, 3];
// console.log(x.sort()); // [0, 10, 2, 3, 8] sort方法里面不传回调函数时只能排 0 - 9 的数字

/*
* 5.2 reverse
* 作用：把数组翻转过来排列
* 参数：无
* 返回值：翻转过后的原数组
* 原数组是否改变：改变
* */

// var ary21 = [1, 3, 5, 7, 9];
// var r21 = ary21.reverse();
// console.log(r21, ary21);

// VI. 数组的遍历方法
/*
* 6.1 forEach(function (item, index) {})
* 作用：遍历数组
* 参数：回调函数；回调函数的形参：item表示遍历时数组中的每一项，index遍历时当前项索引；数组有多少项，回调函数就会执行多少回。
* 返回值：无
* 原数组是否改变：取决于回调函数中是否修改原数组，如果修改，原数组就改变，如果不修改就不改变
* */
var ary22 = [1, 3, 5, 7, 9];
ary22.forEach(function (item, index) {
  // console.log(item, index);
  // total += item;
  ary22[index] = 0
});
console.log(ary22);

var total = 0;
ary22.forEach(function (item, index) {
  console.log(item, index);
  total += item;
});
console.log(total);

/*
* 6.2 map(function (item, index) {})
* 作用：将原数组映射成一个新数组
* 参数：回调函数，数组有多少项，回调函数就会执行多少回。
* 返回值：由回调函数的返回值组成的新数组
* 原数组：不变
* */

var ary23 = [1, 3, 5, 7, 9];

var r23 = ary23.map(function (item, index) {
  return item * 2;
});
console.log(r23);
