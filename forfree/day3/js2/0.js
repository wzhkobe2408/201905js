/*
* 目标：
*   0. 理解逻辑运算符 || 和 &&
*   1. 理解 == 和 === 的区别
*   2. 掌握==比较时存在的数据类型转换
*   3. 理解引用数据类型相等时的条件
*
* */

// I. 逻辑运算符
// 1.1  || 表示或者，或者表示两者中有一个是true就返回true

if (0 || 1) { // 0 || 1 1表示true，所以 0 || 1也返回true，所以条件成立
  console.log('ok');
}

// 1.2 && 表示并且，并且两者中都是true才能返回值true
if (0 && 1) {
  // 因为0转换成布尔值以后是false，所以 0 && 1 表示false
}

// 1.3 逻辑运算符的赋值属性

// 1.3.1 || 赋值属性：第一个时true就返回第一个，第一个是false就返回第二个；
var r1 = 1 || 0; // 1
var r2 = false || {}; // {}

// 1.3.2 && 赋值属性：第一个z值为false就返回第一个，第一个为true就返回第二个。
var r3 = /^\d$/ && 0; // 0
var r4 = NaN && [1, 2]; // NaN

// ? 思考题：
var r5 = 0 || 12 || NaN && 15 || null && '';
console.log(r5);

// II. == 和 === 的区别：== 是相对比较，=== 是绝对比较。==之所以不比较数据类型是因为它内部是先将不同的数据类型转换成相同的数据类型，然后再比较；转换规则：

// 2.1 数字 == 字符串 字符串转换成数字，然后再比较这个两个数字
console.log(1 == '1'); // Number('1') -> 1 -> 1 == 1 -> true
console.log(1 == 'abc'); // Number('abc') -> NaN -> 1 == NaN -> false

// 2.2 数字 == 布尔值 把布尔值转换成数字（true -> 1, false -> 0）， 然后再比较
console.log(1 == true); // true
console.log(1 == false); // false

// 2.3 布尔值 == 字符串 把布尔值和字符串都转成数字，然后再比较这两个数字
console.log(true == '1');
console.log(false == ''); // true ; Number(false) -> 0; Number('') -> 0 -> true

// 2.4 null == undefined; // true js中认为undefined是派生自null
// 2.5 null、undefined和谁比都返回false（除自己以外、除了上面的2.4情况）

// 2.6 对象 == 对象; 比较的是堆内存空间地址，如果地址相同就返回true，否则就是false
console.log({} == {}); // false
var obj = {
  name: "zhufeng"
};
var obj2 = obj; // 此时obj2和obj是同一个内存地址
console.log(obj2 == obj); // true

// 2.7 对象 == 字符串； 对象先调用 toString() 转成字符串，然后再和字符串比较
console.log({} == ''); // false; ({}).toString() -> "[object Object]" -> "[object Object]" == '' -> false
console.log({name: 'zf'} == "[object Object]"); // true
console.log([] == '');

// 普通对象（{}的这种）toString() -> "[object Object]"
// 数组 （[]的这种）toString() 就是相当于把方括号换成引号，内容和数组项相同
console.log([1] == '1'); // true

// 2.8 对象 == 布尔值；对象先转换成字符串，然后转换成数字，布尔值也转换成数字，再比较
console.log({} == true); // false
console.log(({}) == false); // false; 因为 ({}).toString() -> "[object Object]" -> Number("[object Object]") -> NaN ,然后 Number(false) -> 0; NaN == 0 -> false;

// 2.9 对象 == 数字；对象先转成字符串，然后再转成数字，然后再比较这两个数字；
console.log({} == 1); // false
console.log([] == 0); // true

// 2.10 NaN == NaN 返回false；！！！要牢记
console.log(NaN == NaN);

var str = '13px';

if (str == 13) {
  console.log(1);
} else if (Number(str) != NaN) { // NaN永远不等于NaN
  console.log(2);
}

// === 绝对比较：值要相同，类型也要相同；
// 1. 基本数据类型，值和类型都相同才返回true
// 2. 引用数据类型也是比较地址，地址相同才会返回true



































