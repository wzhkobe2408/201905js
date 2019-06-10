/*
* 目标：
*   1. 理解中括号的细节问题
*
* */

// [] 正则中的方括号：表示方括号中的元字符中的任意一个

// 特殊元字符：在正则中有特殊含义的字符串如 . ，在正则中表示匹配除 \n 之外的任意其他字符，原义是 小数点

// 1. 在方括号中的部分特殊元字符代表的是该字符的原义，不再具有特殊含义
// [.] [?] [*] [+]
let reg = /./;
let reg1 = /[.]/; // 方括号中的 . 表示普通小数点
// console.log(reg.test('abc')); // true
// console.log(reg.test('.')); // true
// console.log(reg1.test('abc')); // false
// console.log(reg1.test('.')); // true

let reg2 = /[?]/; // 方括号中的?表示问号，不是两次元字符
// console.log(reg2.test('?'));

let reg3 = /[*]/; // 方括号中的*表示星号，不是量词源字符串
// console.log(reg.test('*')); // true

let reg4 = /[+]/; // 方括号中的+表示加号，不是量词元字符
// console.log(reg4.test('+')); // true

// 2. 方括号不能识别多位数
let reg5x = /^183$/; // 只能匹配183
let reg5 = /^[183]$/; // 代表1或者8或者3中的任意一个数字

// console.log(reg5.test('1')); // true
// console.log(reg5.test('8')); // true
// console.log(reg5.test('3')); // true
// console.log(reg5.test('18')); // false
// console.log(reg5.test('13')); // false
// console.log(reg5.test('183')); // false

// 3. 中括号限制范围 [0-9] [a-z] [A-Z]
let reg6 = /^[23-68]$/; // 这个正则表示匹配 2 或 3-6 或 8
// console.log(reg6.test('23')); // false
// console.log(reg6.test('34')); // false
// console.log(reg6.test('67')); // false
// console.log(reg6.test('2')); // true
// console.log(reg6.test('4')); // true
// console.log(reg6.test('9')); // false

// ? 思考：为什么会有这种情况？因为中括号中连续出现的多位数不是表示一个多位数，而是表示多个一位数字；

// ? 思考：此时真的需要一个数字范围的话怎么办？
// 我们可以把这个范围拆分，如23-68
// 23 - 29 2[3-9]
// 30-59 [3-5][0-9]
// 60-68 6[0-8]
// 然后再两位数分别表示这些段

let reg7 = /^(2[3-9]|[3-5]\d|6[0-8])$/;
console.log(reg7.test('22')); // false
console.log(reg7.test('23')); // true
console.log(reg7.test('34')); // true
console.log(reg7.test('67')); // true
console.log(reg7.test('2')); // false
console.log(reg7.test('4')); // false
console.log(reg7.test('9')); // false