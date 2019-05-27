/*
* 1. JS组成部分
* 2. 变量声明
* 3. 数据类型
* 4. isNaN检测
* 5. Number()
* 6. parseInt/parseFloat
* 7. 检测数据类型的方式
*
* */

/*
* I js的组成部分；
*   1. ECMAScript（ES）：是js语言的规范和标准；规定了语法、数据类型、流程控制语句等
*   2. DOM: Document Object Model 文档对象模型；提供api（属性和方法）供js操作页面当中的html元素
*   3. BOM: Browser Object Model 浏览器对象模型：提供api供js操作浏览器
*
* */

/*
* II. 变量是一个可以变的量，代表值或者存储值的标识符。
* 1. 声明变量的方式：
*   var
*   function
*   let
*   const
*   import
*   class
* 2. 变量命名规范：
*   1. 严格区分大小写；var a = 1; var A = 1; A和a是两个变量
*   2. 驼峰命名法：可以使用数字、字母、下划线、$，但是数字不能作为开头。第一个单词的首字母不需要大写，其余的单词的首字母都需要大写；（大驼峰：每个单词的首字母都大写）
*   3. 不能使用关键字、保留字；
*     关键字：有特殊含义的单词或者字母组合；var function let const class import typeof constructor return....
*     保留字：未来有可能成为关键字的字母组合。
*
*   *4 尽量变量语义化，用变量名描述变量的用途
* */

var num = 1; // 用var声明一个普通变量

function minus(a, b) {return a - b} // 声明一个函数变量minus，minus也是变量，只不过它代表的值是一个函数
var result = minus(5, 3);
// console.log(result); 需要将函数执行的结果手动输出到控制台或者alert框才能看到执行结果
// alert(result);

let boy = '和禹良'; // 用let声明的变量
console.log(boy);

const VALUES = '成就他人，成就自己'; // const 声明常量，常量不可以更改，一更改就报错

class FE {
  constructor () {
    this.skills = ['HTML', 'CSS', 'JS', 'NODE', 'MYSQL'];
  }
} // 声明一个类 FE
var fe = new FE(); // fe 叫做FE的实例
console.log(fe);

/*
* III. 数据类型: 是js的基本材料；
* 3.1 基本数据类型（简单数据类型）
*   3.1.1 number 数字：1 -1 0 12.5 0.5 NaN
*   3.1.2 string 字符串: 单引号或者双引号包裹0到多个字符；"abc" "I am a FE" "js学起来真爽"
*   3.1.3 boolean 布尔值：true（真） false（假）
*   3.1.4 null 空（空对象指针）
*   3.1.5 undefined 未定义
*   3.1.6 Symbol 用来产生一个和谁都不一样的值，一个唯一的值
*
* 3.2 引用数据类型（复杂数据类型、对象数据类型）
*   3.2.1 对象
*     3.2.1.1 普通对象 （Object） {name: '珠峰培训', age: 10}， 对象的属性值也可以是任意数据类型
*     3.2.1.2 数组 （Array） [1, 2, 'dkdk', {name: []}] // 数组项可以是任意数据类型
*     3.2.1.3 正则 （RegExp）/^\d$/ （斜线中的是元字符）
*     3.2.1.4 日期（Date）new Date() => 得到一个GMT+0800的标准时间
*     ....
*   3.2.2 函数
*     3.2.2.1 函数 function
* */

/*
* IV. isNaN() 函数：检测一个值是不是NaN的。isNaN() 读作：isNaN执行，() 叫做执行。执行后如果被检测的值是NaN就会返回true，如果不是NaN返回false。true和false叫做isNaN() 函数（方法）的返回值；
*
* isNaN的内部工作机制：
* 首先看你传进来的值是不是一个number类型的值。如果是直接判断是不是NaN。如果不是一个number类型的值，就要将你传进来的值使用Number() 函数进行转换，这个转换又分为两种情况：
* 4.1 如果传入的值是基本数据类型
*   4.1.1 string类型值：要求字符串里面必须全是数字因素，如果有一个不是数字，直接返回NaN。（Number('') -> 0）
*   4.1.1 boolean类型值：Number(true) -> 1, Number(false) -> 0
*   4.1.2 null : Number(null) -> 0
*   4.1.3 undefined: Number(undefined) -> NaN
*
* 4.2 传入的值是一个引用数据类型的值：先把引用数据类型toString()，然后再用Number转上一步得到的字符串。
*   4.2.1 ({}).toString() -> "[object Object]" -> Number("[object Object]") -> NaN
*   4.2.2 [].toString() -> "" ->  Number("") -> 0
*   4.2.3 [1].toString() -> "1" -> Number("1") -> 1
*   4.2.4 [1, 2].toString() -> "1,2" -> Number("1,2") -> NaN
*   4.2.5 (function sum(a,b) {return a + b}).toString() -> "function sum(a,b) {return a + b" -> Number("function sum(a,b) {return a + b") -> NaN
*
* 经过上述转换后，再去验证转换后的值是不是NaN
* */
var r1 = isNaN(1); // false
console.log(r1);
var r2 = isNaN('22'); // false

/*
* V parseInt()  parseFloat()
* parseInt: 从字符串的左侧开始查找，把找到的整数部分返回。如果第一个不是不是数字，直接返回NaN。不理会小数
*
* parseFloat: 比parseInt多识别一个小数点及后面的小数部分。如果第一个就不是数字直接返回NaN
*
*
* */
var num2 = parseInt('13.5px'); // 13
var num3 = parseInt('px13.5px'); // NaN

var num4 = parseFloat('13.5px'); // 13.5
var num5 = parseFloat('px13.5px'); // NaN

/*
* VI. 数据类型的检测方式
*   1. typeof 运算符
*   2. constructor 运算符
*   3. instanceof 运算符
*   4. Object.prototype.toString.call() 方法
* */
console.log(typeof 1); // "number"
console.log(typeof '1'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof /^$/); // "object"
console.log(typeof function sum (a, b) {return a + b}); // "function"

typeof typeof typeof 1; // "string"

/*
* VII. js输出方式
* 1. alert() 输出到浏览器弹出框
* 2. console.log() 输出到控制台日志
* 3. innerHTML 属性，输出到元素
* 4. innerText  属性， 输出到元素
*
* !! innerHTML可以识别字符中html标签
*
* */






