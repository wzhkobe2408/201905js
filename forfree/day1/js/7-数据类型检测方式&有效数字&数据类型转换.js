/*
* 目标：
*   1. 掌握有效数字的检测方式isNaN方法
*   2. 其他数据类型转数字方法
*     2.1 Number() 方法
*     2.2 parseInt()
*     2.3 parseFloat()
*   3. 掌握js中常用的数据类型检测方式
			3.1 typeof 运算符
			3.2 constructor 运算符
			3.3 instanceof 运算符
			3.4 Object.prototype.toString.call() 方法
*   4. 掌握typeof运算符使用
* */

// 1. isNaN() 函数，用来检测值是不是NaN。number类型中有一个特殊值NaN，所以这个isNaN专门处理检测的。当被检测的值是NaN的时候返回true，不是NaN返回false；
// isNaN() ，让isNaN函数执行，执行过后得到一个true或者false，这个true或者false叫做isNaN函数的返回值（就是这个函数执行的结果）
console.log(isNaN(123));
console.log(isNaN(NaN));

var r1 = isNaN('1234');
console.log(r1); // false

console.log(isNaN(true)); // false
console.log(isNaN(false)); // false

console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true

console.log(isNaN({})); // true
console.log(isNaN([12])); // false
console.log(isNaN([12, 23])); // true
console.log(isNaN(function sum(a, b) {return a + b})); // true

// ?思考：为什么isNaN检测的不是number类型的也可以得到结果呢？
// 这是因为isNaN的内部工作机制，它会首先判断被检测的值是不是number，如果不是它会帮你转成number；isNaN内部调用Number()函数，把非number的转成number类型；

// 转换规则：
// 1. Number('12.34'); 字符串使用Number转换时，要求引号里面全是数字（可以是小数），就可以成功转换成数字，如果里面有一个非数字字符就会得到NaN

// 2. Number(布尔值)，布尔值转成数字：true -> 1, false -> 0

// 3. Number(null); null转成数字是 0

// 4. Number(undefined); undefined 转成数字就是NaN

// !! 引用数据类型转换成数字的时候，先调用引用数据类型的toString()函数将引用数据类型转换成字符串，然后再用Number转这个字符串。

// 5. isNaN({}); -> 对象转成字符串 ({}).toString() -> "[object Object]"，然后我们Number("[object Object]") -> NaN

// 6. isNaN([12]); -> [12].toString() -> "12" -> Number("12") -> 12
// 6.1 isNaN([12, 23]); -> [12, 23].toString() -> "12,23" -> Number('12,23') -> NaN

// 7. isNaN(函数) -> 函数.toString() -> "function sum(a, b) {return a + b}" -> Number("function sum(a, b) {return a + b}") -> NaN

// parseInt() / parseFloat() 把字符串转成数字的，和Number类似，Number是强制转化，字符串里面有一个不是数字字符，就会得到NaN；
// parseInt(字符串) 函数：从字符串左侧开始查找，把找到的整数部分返回。如果第一个字符就不是数字，直接返回NaN
console.log(parseInt('13.23px')); // 13
console.log(parseInt('13.23px23')); // 13
console.log(parseInt('PX13.23px23')); // NaN

console.log(Number('13.23px')); // NaN

// parseFloat() 函数：从字符串左侧开始查找，把找到的整数和小数一起返回，只能识别一个小数点。如果字符串第一个字符就不是数字，就直接返回NaN

// ->> js中数据类型检测方式
/*
* js中常用的数据类型检测方式：
*   1. typeof 运算符
*   2. constructor 运算符
*   3. instanceof 运算符
*   4. Object.prototype.toString.call() 方法
* */

// typeof 运算符：检测数据类型，
// 语法：typeof 需要检测的值或者变量; 返回一个字符串包裹着的数据类型；
// typeof 基本数据类型
console.log(typeof 1); // "number"
console.log(typeof 'mabin'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" 这个需要特殊记忆，因为null是空对象指针
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol('zf')); // "Symbol"

// typeof 检测引用数据类型
console.log(typeof ({})); // "object"
console.log(typeof []); // "object"
console.log(typeof /^$/); // "object"
// 所以typeof不能检测引用数据类型中的对象数据类型的具体细分（不能区分数组、对象、正则）一律返回 "object"
function sum(a, b) {
  return a + b;
}
console.log(typeof sum); // "function"

var r1 = typeof sum;
console.log(typeof r1); // "string"

// 面试题：
var r2 = typeof typeof typeof sum; // "string"
// 执行顺序：先执行最后一个 typeof sum -> "function" -> typeof typeof "function" -> typeof "string" -> "string"
// 只要是两个及以上的typeof 最后返回结果就是 "string"












































