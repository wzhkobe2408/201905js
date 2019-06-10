/*
* 目标：
*   1. 理解正则捕获的贪婪性
*   2. 掌握取消正则贪婪性的方法
* */

// 正则捕获的贪婪性：如果正则匹配到符合规则的字符串，那么捕获的时候会按照最长的捕获；

let str = '12345678'
let reg = /\d{2,8}/g;
let reg2 = /\d+/;
let reg3= /\d*/;
console.log(reg.exec(str)); // ["12345678", index: 0, input: "12345678", groups: undefined]
console.log(reg2.exec(str)); // ["12345678", index: 0, input: "12345678", groups: undefined]
console.log(reg3.exec(str)); // ["12345678", index: 0, input: "12345678", groups: undefined]

// 如何解决贪婪性？
// 在两次元字符后面增加 ? 增加问号后会按照最少的匹配

let reg4 = /\d{2,8}?/g;
let reg5 = /\d+?/;
let reg6= /\d*?/;
console.log(reg4.exec(str)); // ["12", index: 0, input: "12345678", groups: undefined]
console.log(reg5.exec(str)); // ["1", index: 0, input: "12345678", groups: undefined]
console.log(reg6.exec(str)); // ["", index: 0, input: "12345678", groups: undefined]