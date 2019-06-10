/*
* 目标：
*   1. 理解正则的分组捕获
*
*
* */

// 正则捕获：正则除了匹配还可以把符合条件的捕获到；
let str = 'hello2019 zhufeng2019 zhufeng9021';
let reg = /zhufeng(\d+)/g; // () 是分组，相当于小正则

// 正则捕获方法：RegExp.prototype.exec() 方法
console.log(reg.exec(str));
//  ["zhufeng2019", "2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

console.log(reg.exec(str)); // ["zhufeng9021", "9021", index: 22, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

// 捕获到的内容是一个数组，数组的第一项是大正则匹配到的内容，如果有分组的话从第二项开始就是分组正则捕获到的内容；所以捕获的内容返回值：
// ["大正则捕获到的", "分组1捕获内容", "分组2捕获内容".....]


// 字符串的match方法，匹配符合规则的字符串， 但是match方法不能进行分组匹配
console.log(str.match(reg)); // ["zhufeng2019", "zhufeng9021"]

// 取消分组：(?:) 表示当前小括号改变优先级，而不用作用分组捕获
let reg2 = /zhufeng(?:\d+)/;
console.log(reg2.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined] 取消分组捕获后，exec的返回值中不再包含分组捕获的内容

// ? 的作用
// ? 表示量词元字符 出现0次到1次 可以有可以没有
// (?:) 取消分组捕获














