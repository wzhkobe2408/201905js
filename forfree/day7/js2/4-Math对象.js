/*
* 目标：
*   1. 掌握Math对象上的常用的数学计算方法
* */

// Math 是浏览器内置的专门处理数学计算的对象，Math 上面内置了很多的方法

// 1. Math.abs() 取绝对值: 绝对值是忽略符号（正号或负号）
var num1 = Math.abs(-12.5); // 12.5
var num2 = Math.abs(12.5); // 12.5
console.log(num1, num2);

// 2. Math.floor() 向下取整
var num3 = Math.floor(12.5);
console.log(num3); // 12

// 3. Math.ceil() 向上取整
var num4 = Math.ceil(12.5); // 13
console.log(num4);

// 4. Math.round() 四舍五入
var num5 = Math.round(0.6);
var num6 = Math.round(1.4);
console.log(num5, num6);

// 注意负数是四舍六入
var num7 = Math.round(-2.4);
var num8 = Math.round(-2.6);
var num9 = Math.round(-2.5);
console.log(num7, num8);

// 5. Math.random() 生成一个0-1之间的随机小数
var ran = Math.random();
console.log(ran);

// 6. 生成一个 n - m之间的随机数 [n, m]。
var n = 10, m = 35;
var ran2 = Math.round(Math.random() * (m - n) + n);
// 0 - 1
// 0 - 25
// 10 - 35
console.log(ran2);

// 7. Math.sqrt() 获取某个值的算术平方根
var root = Math.sqrt(9);
console.log(root); // 3


// 8.  Math.PI 获取圆周率
var PI = Math.PI; // 3.1415926....
var PIFixed = PI.toFixed(2); // toFixed(保留几位小数)
console.log(PI, PIFixed);












