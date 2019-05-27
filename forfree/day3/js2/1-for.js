/*
* 目标：
*   1. 理解for 循环作用
*   2. 掌握 for循环语法
*
* */

// 1. 循环语句也是流程控制语句：按照一定的规律重复的做某一件事情，这时候就需要循环语句；
// for 循环（for loop）

var ary = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
for (var i = 0; i < ary.length; i++) {
  // i = 0; i < ary.length -> true 0
  // i = 1; i < ary.length -> true 1
  // i = 2; i < ary.length -> true 2
  // i = 3; i < ary.length -> true 3
  // i = 4; i < ary.length -> true 4
  // i = 5; i < ary.length -> true 5
  // i = 6; i < ary.length -> true 6
  // i = 7; i < ary.length -> true 7
  // i = 8; i < ary.length -> true 8
  // i = 9; i < ary.length -> true 9
  // i = 10; i < ary.length -> false
  console.log(i);
  // console.log(ary[i]);
}

console.log(i); // 10

/*
* for循环语法；
* for (var i = 0; i < ary.length; i++) {
*   // 循环体
* }
* 1. 声明一个循环初始值 var i = 0;
* 2. 设置循环条件，i < ary.length; 当i小于ary.length 就执行循环体，否则退出循环（不再执行循环体，不再累加）
* 3. 设置累加条件
* 4. 设置循环体，把我们想一遍一遍重复的事情写在循环体里面
*
* for 循环执行步骤
* 1. 设置循环初始值
* 2. 判断循环条件是否成立，如果成立执行循环体，如果不成立退出循环
* 3. 执行完循环体，累加
* 4. 累加过后判断是否满足条件，如果成立就执行循环体，.....
* 直到不满足循环条件时，就退出整个循环
*
* */


// 声明循环初始值和累加可以不写在小括号里面
var k = 0;

for (;k < 5;) {
  console.log(k);
  k++;
}
console.log(k);

