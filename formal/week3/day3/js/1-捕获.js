/*
*
*
* */

// 捕获：
// reg.exec(str);
// str.match();

// 懒惰性
let reg = /\d+/;
let str = 'hello111 hello222 hello333';

// console.log(reg.exec(str)); // ['111', index.....]
// console.log(reg.exec(str)); // ['111', index.....]
// console.log(reg.exec(str)); // ['111', index.....]
// console.log(reg.lastIndex); // 0

// console.log(str.match(reg)); // ['1111']
// console.log(str.match(reg)); // ['1111']
// console.log(str.match(reg)); // ['1111']

//  取消懒惰性：给正则增加修饰g
let reg2 = /\d+/g;
let str2 = 'hello111 hello222 hello333';

console.log(reg2.exec(str2));
console.log(reg2.exec(str2));
console.log(reg2.exec(str2));
console.log(reg2.lastIndex);

console.log(str2.match(str2));

// 贪婪性：按照匹配做多的去捕获，
// 解决贪婪性：给量词元字符后面加 ?

// 分组捕获：
let reg3 = /hello(\d+)/g; // 使用小括号表示正则分组
console.log(reg3.exec(str)[1]);
console.log(reg3.exec(str)[1]);
console.log(reg3.exec(str)[1]);

// 除了通过[索引]访问分组，在RegExp上有几个属性记录正则分组捕获的内容
// RegExp.$1 表示第1个分组的捕获内容; 在RegExp上有 $1-$9表示第1到第9个分组内容
// RegExp['$&'] 表示整个正则捕获到的内容

console.log(RegExp.$1);
console.log(RegExp['$&']);