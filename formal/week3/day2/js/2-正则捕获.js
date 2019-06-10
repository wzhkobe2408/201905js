/*
* 目标：
*   1. 掌握正则的捕获方法
*   2. 正则捕获的懒惰性
*   3. lastIndex
*   4. match方法
*   5. match和exec比较
* */


// #### 正则的捕获：把正则匹配到内容捕获到：
// RegExp.prototype.exec() 方法

let str = 'hello2019 zhufeng2019 zhufeng9021';
let reg = /zhufeng\d+/;
let execs = reg.exec(str);
// console.log(execs);
/*
* [
*   "zhufeng2019", 捕获到的内容
*   index: 10, 捕获的起始索引位置
*   input: "hello2019 zhufeng2019 zhufeng9021", 原始字符串
 *   groups: undefined 命名匹配
 * ]
*
* */
let reg2 = /xxxx/;
// console.log(reg2.exec(str)); // null
// 如果捕获不到不到会返回null

// #### 正则捕获的懒惰性
// console.log(reg.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
// console.log(reg.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
// 正则的懒惰性：如果不做特殊处理，正则每次捕获的时候都是从索引0开始，捕获到第一个符合条件的就停止捕获，后面有多少都不去捕获。
// 解决方案：在正则后加修饰符g
let reg3 = /zhufeng\d+/g;
console.log(reg3.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

//
console.log(reg3.exec(str)); // ["zhufeng9021", index: 22, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

console.log(reg3.exec(str)); // null

console.log(reg3.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

// console.log(reg3.exec(str)); // ["zhufeng9021", index: 22, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
// console.log(reg3.exec(str)); // null

// ? 为啥捕获到最后一次会是null呢？

// lastIndex及捕获到最后下一次再捕获会从头再来
// 正则对象有一个lastIndex的属性，记录着下一次匹配或者捕获的起始位置，下一次再匹配或者捕获，它会从这个索引位置开始往后查找。
// 上面之所以是最后一次，是因为最后一次从索引33开始查找，后面没有了，所以会返回null
console.log(reg3.exec(str)); // ["zhufeng2019", index: 10,....]
console.log(reg3.lastIndex); // 21
console.log(reg3.exec(str));// ["zhufeng9102", index: 22, ....]
console.log(reg3.lastIndex); // 33
console.log(reg3.exec(str)); // null

console.log(reg3.exec(str)); // ["zhufeng2019", index: 10,....]

// lastIndex属性记录着下一次匹配的开始位置。当匹配或者捕获到达末尾后，下一次再匹配或者捕获会从头再来；
let str2 = 'hello zhufeng2019 zhufeng9201';
let reg5 = /zhufeng\d+/g;
console.log(reg5.test(str2)); // true
console.log(reg5.lastIndex); // 17
console.log(reg5.test(str2)); // true
console.log(reg5.lastIndex); // 29
console.log(reg5.test(str2)); // false
// 使用匹配时，也是从lastIndex开始的位置去匹配；最后一次是false是因为从索引29向后查找时没有查找到符合规则的字符串，所以返回false；

//#### match 方法配合正则
// String.prototype.match()
let mstr = str.match(reg5);
console.log(mstr); //  ["zhufeng2019", "zhufeng9021"]
let mstrs = str.match(/xxxx/); // null
// match 方法匹配不到是返回null而不是空数组

let reg6 = /zhufeng\d+/;
console.log(str.match(reg6)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
console.log(str.match(reg6)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

// match使用的正则不加g时返回值和exec一样的。但是如果有g时，match方法会一次性把所有符合条件的都匹配到，而exec每次只能匹配到一个；



// match 和 exec的比较
// 1. match方法是字符串方法，定义在String.prototype上；而exec方法是正则的方法，定义在RegExp.prototype上
// 2. match 使用 没有修饰g的正则时，返回值和exec一样；如果有修饰符g，match会一次性把所有符合规则的都获取到，而exec每次只能获取一个；
// 3. exec和match在匹配不到时都会返回null



