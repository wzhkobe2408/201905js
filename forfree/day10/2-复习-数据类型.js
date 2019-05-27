/*
* 数据类型
*   1. 数据类型分类
*   2. 区别
*   3. 检测方式
*   4. 比较（== 、===）
*   5. 转换
* */

// -> 1. js中的数据类型分类
/*
* 1.1 基本数据类型
*   1.1.1 number
*   1.1.2 string
*   1.1.3 boolean
*   1.1.4 null
*   1.1.5 undefined
*   1.1.6 Symbol()
*
* 1.2 引用数据类型
*   对象
*    1.2.1 普通对象类 Object
*    1.2.2 数组对象类 Array
*    1.2.3 正则类 RegExp
*    1.2.4 日期类 Date
*    ....
*   函数
*   function
* */

// -> 2. 基本数类型和引用数据类型的区别
/*
* 基本数据类型：基本数据类型是值类型的操作，变量代表的就是值本身，操作变量就是再操作这个值；
* 引用数据类型：引用数据类型是堆内存地址的操作，变量不是代表引用数据类型本身，而是代表引用数据存储的堆内存地址。
* */
var a = 12;
var b = a; // var b = 12;
b = 13;
console.log(a); // 12

var obj = {};
var obj2 = obj;
obj2.name = '珠峰';
console.log(obj.name); // 珠峰

// -> 3. 数据类型的检测方式：
/*
* 3.1 typeof
*   typeof 1 -> "number"
*   typeof 'zhufeng' -> "string"
*   typeof true -> "boolean"
*   typeof null -> "object" null 是空对象指针
*   typeof undefined -> "undefined"
*   typeof Symbol() -> "symbol"
*   typeof typeof 1 -> "string"
*
*   typeof function () {} -> "function"
*   typeof 对象（普通对象、数组、正则...） -> "object"
*
* 3.2 constructor
* 3.3 instanceof
* 3.4 Object.prototype.toString.call()
* */

// -> 4. 比较 == 、===
/*
* == 相对比较（不计较类型）：之所以不比较类型，是因为不同数据类型比较时会先转换成相同的类型；
* 1. 数字 == 字符串：字符串转数字，用两个数字比
* 2. 数字 == 布尔值：布尔值转数字，用两个数字比
* 3. 字符串 == 布尔值：字符串和布尔值都转数字，比较两数字
* 4. null == undefined -> true
* 5. null/undefined和其他数据类型比较都不相等，返回false
* 6. 对象 == 对象 ：比堆内存地址，地址相同返回true，不同false；{} == {} 或 [] == []
* 7. 对象 == 数字：toString()，{}.toString()得到"[object Object]"，[].toString() -> ""然后再转数字，两数字比较
* 8. 对象 == 字符串：对象转字符串，两个字符串比较（字符串比较比的是内容）
* 9. 对象 == 布尔：对象.toString()得到字符串，然后给字符串转数字，然后布尔值转数字，最后比较两个数字；
* 10. NaN == NaN 永远返回false
*
* === 绝对比较（值要相同、类型也得相同）
* 1. 对象 === 对象 比较堆内存地址，相同就返回true，否则false
* 2. 类型和值都要相同
*
* */
![] == []; //! 优先级高于 ==，所以 ![] 要先求值，得到false；此时原来比较转换成 false == []; 此时是布尔值 == 对象比较，满足上面第9条规律，所以[].toString() （数组toString就相当于把方括号换成引号），得到一个 "" ，空字符串转成number是0，false转成数字 0，所以true

// !取反运算符工作机制：先判断要取反的值是否是布尔值，如果不是，就先转成布尔值，然后再取反；

// -> 5.数据类型转换
// -> 转数字
/*
* 1. Number('')：强制转换，要求字符串中全是数字因素，如果有一个不是就返回NaN；Number('') 返回0
*   如果是引用数据类型，会先toString()得到一个字符串，再Number这个字符串
*
* 2. parseInt(): 从字符串第一个字符串开始查找，把查找到的整数部分返回。如果第一个字符就不是数字，直接返回NaN;
*   parseFloat(): 比parseInt多识别一个小数点，以及后面的小数。
*
* */
var num = Number([]); // 0
var num = Number([1]); // 1
var num = Number([1, 2]); // NaN

// -> 转布尔值
/*
* 除 0 NaN '' null undefined 是false，其余都是true
*
* */