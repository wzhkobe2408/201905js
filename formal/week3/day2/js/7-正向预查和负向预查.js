/*
* 目标：
*   1. 理解正向预查和负向预查
*
* */

// 正向预查：(?=元字符) 不发生分组捕获
// 负向预查: (?!元字符) 不发生分组捕获

// 正向预查：/x(?=y)/ 匹配x，仅当x后面紧跟着y（匹配后面跟着y的x）；
let reg1 = /[a-z](?=3|4)/g;
let str1 = 'a1 b2 c3 d4';
console.log(str1.match(reg1)); // ["c", "d"]

// 负向预查：/x(?!y)/ 匹配x，仅当x后面不是y（匹配后面不是y的x）；
let reg2 = /[a-z](?!3|4)/g;
console.log(str1.match(reg2));
