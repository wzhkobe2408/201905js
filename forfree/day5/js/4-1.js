/*
* 0. js的引入方式
*   0.1 行内式
*   0.2 内嵌式 把代码写在script标签内
*   0.3 外链式 通过script标签的src属性加载js文件（外链式script标签里面不能再写代码）
*
*   无论是内嵌式、外链式的script标签都需要写在body结束标签的前面（通常情况下，js是操作DOM元素对象的，如果script写在head标签中，可能会导致获取不到元素对象）
*
* 1. js组成部分
*   1.1 ECMAScript(ES6) js语法标准和规范、数据类型、流程控制语句
*   1.2 DOM Document Object Model 提供api（方法和属性）操作DOM
*   1.3 Browser Object Model 提供api操作浏览器 window.open(url)
*
* 2. 变量：用来存储值代表值的标识符，因为它代表的值是可以变的。
*   声明变量的方式：
*     2.1 var
*     2.2 function
*     2.3 let
*     2.4 const 不能修改
*     2.5 import 基于ES6的模块规范创建导入信息
*     2.6 class
*
* 3. 数据类型：是js这门语言的原材料
*   3.1 基本数据类型
*     3.1.1 number
*     3.1.2 string
*     3.1.3 boolean
*     3.1.4 null
*     3.1.5 undefined
*     3.1.6 Symbol() 用于产生一个和谁都不重复的值，用于给对象添加属性，用Symbol做属性不会造成属性冲突和覆盖
*   3.2 引用数据类型（复杂数据类型、对象数据类型）
*     对象
*       普通对象类 Object {name: 'zf'}
*       数组类 Array  [1, 2, 3]
*       正则类 RegExp /^\d$/
*       日期类 Date  new Date();
*       .....
*
*     函数: function
*  js中有两种方式创建数据：
*   1. 字面量方式({}花括号的就是对象，[]就是数组、/$^/ 正则)
*     var obj = {name: 'zf'};
*   2. 实例的方式：new 调用构造函数
*     var data = new Date()
*     var ary = new Array(1, 2, 4); // 实例的方式创建数组
*
*
* 4. 数据类型检测方式
*   4.1 typeof 运算符
*   4.2 constructor 运算符
*   4.3 instanceof 运算符
*   4.4 Object.prototype.toString.call()
*
*   typeof 检测数据类型
*     typeof 1 -> "number"
*     typeof 'qq' -> "string"
*     typeof true -> "boolean"
*     typeof null -> "object"
*     typeof undefined -> "undefined"
*
*     typeof {} -> "object"
*     typeof [] -> "object"
*     typeof function () {} -> "function"
*
*     typeof Symbol -> "function" Symbol 本身代表的Symbol本身
*     typeof Symbol() -> 'symbol'
*
* 5. isNaN 原理
*   isNaN 是用来检测一个值是否是NaN 如果是NaN 返回true，不是NaN返回false
*
*   isNaN(1) -> false
*   isNaN(NaN) -> true
*
*   如果传给isNaN的值不是一个number类型的值，isNaN内部会隐式调用Number()方法转换：
*     1. 基本数据类型
*       1.1 Number('这个字符串里面都必须是数字因素') Number('') -> 0
*       1.2 Number(true) ->1 Number(false) -> 0
*       1.3 Number(null) -> 0
*       1.4 Number(undefined) -> NaN
*
*       注意：Number(Symbol()) 会报错：Uncaught TypeError: Cannot convert a Symbol Value to a number 【不能将一个Symbol值转换成数字】
*
*     2. 引用数据类型：先调用toString() 将数据类型值转成 字符串，然后再将这个字符串转成数字。
*     ({}).toString() -> "[object Object]" -> NaN
*     [].toString() -> '' -> 0
*     [1, 2, 4].toString() -> '1,2,4' -> NaN
*     (function () {}).toString() -> "function () {}" -> NaN
*
* 6. parseInt、parseFloat
*     parseInt() 从字符串左侧开始，提取字符串中的整数部分，如果第一个就是非数字因素，直接返回NaN
*     parseFloat() 可以多识别一个小数点以及后面的小数部分
*
*
* */