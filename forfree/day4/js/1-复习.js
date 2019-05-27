/*
* 1. js的组成部分
* 2. js的数据类型、区别、检测方式
* 3. Number() / parseInt() / parseFloat()
* 4. isNaN
* 5. 布尔值、布尔运算
* 6. 判断语句
* 7. 逻辑运算符
* 8. 普通对象、数组对象
* 9. for 循环、for in 循环、break、 continue
* 10. DOM对象、获取DOM对象的方法
* 11. == 和 ===
*
* */
// ->1. js的组成部分
/*
* 1. ECMAScript 语法、数据类型、流程控制语句、关键字、保留字
* 2. DOM： Document Object Model 文档对象模型，提供api供js操作DOM
* 3. BOM: Browser Object Model 浏览器对象模型，提供api供js操作浏览器
* */




// ->2. js的数据类型、区别、检测方式
/*
* 1. 基本数据类型
*   1.1 number
*   1.2 string
*   1.3 boolean
*   1.4 null
*   1.5 undefined
*   1.6 Symbol()
* 2. 引用数据类型（复杂数据类型、对象数据类型）
*  2.1 对象
*   2.1.1 普通对象 Object {name: 'zf'}
*   2.1.2 数组类 Array [1, 2, 3]
*   2.1.3 正则类 RegExp (Regular Expression) /^\d$/
*   2.1.4 Date 日期类  new Date()
*   ....
*
*  2.1 函数
*  function
*
*
* 区别：基本数据类型操作就是值的操作，变量就代表值本身。引用数据类型操作的是堆内存地址，变量不代表引用数据类型值本身，代表引用数据类型值所存储堆内存地址。
*
* 检测数据类型：
* typeof
* constructor
* instanceof
* Object.prototype.toString.call()
*
* typeof null; -> "object"
* typeof undefined -> 'undefined'
* typeof {} -> "object"
* typeof [] -> 'object'
*
*
* */


// ->3. Number() / parseInt() / parseFloat()

/*
* Number(): 要求被转化的值必须都是数字因素，Number('') -> 0 Number('3px') -> NaN
* parseInt(): 从字符串的左侧开始查找把查找到的的整数部分都拿到，如果第一个就不是数字就返回NaN
* parseFloat(): 比parseInt多识别一个小数点以及小数点后面的小数部分
*
*
* */

// ->4. isNaN() 判断被检测值是不是NaN，注意重点放在转化机制


// ->5. 布尔值、布尔运算：0 NaN null undefined '' 转成布尔值是false，其他值转成布尔值都是true

// ->6. 判断语句 if-else if -else 、三元运算符、switch-case（使用的是绝对比较）

// ->7. 逻辑运算符 || &&

// ->8. 普通对象、数组对象：普通对象是无序键值对集合，数组是有序键值对集合。数组的键浏览器分配的，数组还有一个length属性，而且length是自动计算的。
/*
* 获取对象属性名对应的属性值：对象.属性名 或者 对象['属性名'] ,如果属性名是数字只能用 [数字]
* 修改或增加：给属性赋值，利用的是对象的属性名具有唯一性。
* 删除：软删除-> 将属性值 修改为null；彻底删除：delete 对象.属性名 或者 delete 对象['属性名']
*
* 注意：[] 还可以识别变量
*
*
*
* */

// ->9. for 循环、for in 循环、break、 continue
// break 终止后面的循环，退出循环
// continue 跳过本轮循环，后面的接着执行

// ->10. DOM对象、获取DOM对象的方法
// DOM对象：通过DOM api获取的页面中的html元素
// 1. document.getElementById() -> 指定ID的DOM对象（元素对象）
// 2. context.getElementsByTagName() -> 从指定上下文下获取指定标签名的元素 -> 类数组集合
// DOM对象也是对象：我们可以像操作普通对象操作DOM对象

// 11. == 和 ===
/*
* == 相对比较：如果比较的数据类型不同会存在转化；转化规则需要掌握
* === 绝对比较：值和类型必须全部相同
*
* */
