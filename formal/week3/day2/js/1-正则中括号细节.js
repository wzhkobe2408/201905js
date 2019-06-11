/*
* 目标：
*   1. 理解中括号的细节问题
*
* */
// [xyz] 方括号：表示x/y/z中任意一个
let reg = /[xyz]/;
// console.log(reg.test('x'));
// console.log(reg.test('y'));
// console.log(reg.test('z'));
// console.log(reg.test('xyz'));
// let reg2 = /^1$/;
// console.log(reg2.test('11'));

// 1. 有些特殊元字符在方括号不再是特殊元字符，而是这个字符本义；
let reg2 = /[.]/; // 此时 . 不再是除了\n 以外的任意字符，而是就代表一个小数点；
// console.log(reg2.test('a')); // false
// console.log(reg2.test('c')); // false
// console.log(reg2.test('+')); // false
// console.log(reg2.test('.')); // true

// let reg3 = /1*/;
// console.log(reg3.test('234')); // true
// console.log(reg3.test('111111234')); // true

let reg3 = /[1*]/; // 此时*不代表0次到多次，表示一个普通的*
// console.log(reg3.test('234')); // false
// console.log(reg3.test('111111234')); // true
// console.log(reg3.test('*')); // true

let reg4 = /[2?]/; // 此时方括号中的? 不代表出现0到1次，表示普通的 ?
// console.log(reg4.test('3'));
// console.log(reg4.test('?'));

let reg5 = /[3+]/; // 此时+不代表1次到多次，表示普通加号 +
// console.log(reg5.test('3'));
// console.log(reg5.test('+'));

// let reg6 = /[abc]+/;

// 2. 方括号中的多位数，不表示一个多位数，而是表示多个一位数中的任意一个；
let reg7 = /[183]/; // 不是表示183，而是1或8或3中的任意一个；
// console.log(reg7.test('124'));

// 需求：写一个正则，验证一个数字是否在 23 - 68 之间？
let reg8 = /^[23-68]$/; // 不表示23-68；而是表示 2或3-6或8
// console.log(reg8.test('23'));
// console.log(reg8.test('67'));
// console.log(reg8.test('2')); // true
// console.log(reg8.test('3')); // true
// console.log(reg8.test('5')); // true
// console.log(reg8.test('7')); // false
// console.log(reg8.test('8')); // true

// ? 23 - 68 咋写？
// 这种情况就需要这个多位数拆分成用多个一位数表示一个多位数；
// 23 - 29 2[3-9]
// 30 - 59 [3-5][0-9]
// 60 - 68 6[0-8]

let reg9 = /^(2[3-9]|[3-5]\d|6[0-8])$/;

console.log(reg9.test('2')); // false
console.log(reg9.test('4')); // false
console.log(reg9.test('6')); // false
console.log(reg9.test('7')); // false
console.log(reg9.test('8')); // false
console.log(reg9.test('23')); // true
console.log(reg9.test('40')); // true
console.log(reg9.test('67')); // true
console.log(reg9.test('69')); // false

// 3. 方括号限制范围: 使用中括号限制范围时，- 前面的要比后面的小；
let reg10 = /[a-z]/;
let reg11 = /[A-Z]/;
let reg12 = /[0-9]/;


