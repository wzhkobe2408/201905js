/*
* 目标：
*   1. 理解正则中小括号的作用
* */

// 1. 分组捕获

let str = 'hello2019 zhufeng2019 zhufeng9021';
let reg = /zhufeng(\d+)/g; // () 是分组，相当于小正则
// console.log(reg.exec(str)); // 使用exec方法符合条件的字符串捕获到

// 2. 分组引用 \数字 表示引用前面分组某个分组的内容

let reg2 = /^(\d)\1$/; // 匹配一个数字，个位数和十位数相同; \1 表示引用第一个分组中的内容
console.log(reg2.test('11'));
console.log(reg2.test('99'));
console.log(reg2.test('12'));

// 练习：写一个正则匹配四个字母的单词，其中第二个和第四个字母相同；
let reg3 = /[a-z]([a-z])[a-z]\1/;
console.log(reg3.test('tara'));

// 3. 改变优先级
// 写一个正则匹配18或者19
let reg4 = /^18|19$/;
console.log(reg4.test('18')); // true
console.log(reg4.test('19')); // true
console.log(reg4.test('189')); // true
console.log(reg4.test('1819')); // true
console.log(reg4.test('181223419')); // true
// ? 思考：为什么会这样？因为这个正则不是被识别成一18开头或者以19结尾；

let reg5 = /^(18|19)$/;
console.log(reg5.test('18')); // true
console.log(reg5.test('19')); // true
console.log(reg5.test('189')); // false
console.log(reg5.test('1819')); // false
console.log(reg5.test('181223419')); // false








