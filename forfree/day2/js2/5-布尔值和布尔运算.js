/*
* 目标：
*   1. 掌握布尔运算
*   2. 掌握Boolean方法和Boolean方法转换规则
*   3. 掌握取反运算符及原理
* */

// I. 布尔值、布尔运算
// 布尔值是true、false，是6种基本数据类型中的一种，表示真、假；布尔运算就是测试真假值的。通常配合js的条件语句（if、switch-case、三元表达式）使用。

// 1.1 其他数据类型的值转换成布尔值 Boolean(需要转换的值)
// 数字 -> 布尔值: number类型中只有0和NaN是转成布尔值以后false，其余都是true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false

// 字符串 -> 布尔值：只有空字符串转换成布尔值是false，其余的都是true；
console.log(Boolean('0')); // true 因为 '0' 不是空字符串
console.log(Boolean(' ')); // ' ' 里面有一个空格就不是空字符串

// null -> 布尔值：null转换成布尔值是false
// undefined -> 布尔值：undefined转成布尔值是false
// Symbol() -> 布尔值：true

// 引用数据类型的值转换成布尔值全部是true；

// 转换规律：只有 0 NaN "" null undefined 这5个值转成布尔值是false，其余的转成布尔值都是true；

// 2. 取反运算符：!要取反的值；取反运算符的原理：判断要取反的值是不是布尔值，如果是就直接取反。如果不是先把这个值通过Boolean方法转成布尔值，然后再取反。
console.log(!true); // false
console.log(!false); // true
console.log(!1); // false
console.log(!{}); // Boolean({}) -> true -> !true -> false

// 2.1 !! 把值转换成布尔值，作用等效于Boolean方法
console.log(!![]); // true







