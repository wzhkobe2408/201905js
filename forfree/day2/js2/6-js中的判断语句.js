/*
* 目标：
*   1. 掌握if语句、if else语句
*   2. 掌握三元运算符
*   3. 掌握switch case语句
*   4. switch case的break
*   5. 逻辑运算符 || 和 &&
*   6. 条件怎么写？
* */

// 1. 判断语句是重要的流程控制语句，表示当满足某些条件时才执行某些代码；
// if 语句
/*if (条件) {
   浏览器会对条件进行布尔运算，如果求得的值是true就执行这花括号里面的代码，如果是false就不执行
  条件为true的时候要执行的代码
}*/
if (false) {
  alert('条件成立了');
}

var num = 10;
if (num > 5) {
  num++; // ++ 是累加运算符，在自身上加上1；num = num + 1
}
// console.log(num);

// else 表示条件不成立
if (num > 11) {
  num--; // -- 从自身上减去1
} else {
  // 如果条件不成立就执行这个花括号里面的代码
  num += 12; // +=12 是 num = num + 12 的意思
}
// console.log(num); // 23

// else if 语句

if (num > 23) {
  num--;
} else if (num > 22) {
  // 当 if的条件不满足才会走else if条件，如果else if的条件成立，就执行这个花括号里面的代码。else if可以有多个
  num -= 12;
} else {
  // 上面的条件都不满足的时候就执行else
  num = 0;
}
// console.log(num);

var num2 = 10;

// if/else if/else 语句如果有一个条件满足了，其他的条件就不会理会了。
if (num2 > 11) {
  num2++;
} else if (num2 > 9) {
  num2+=9;
} else if (num2 > 8) {
  num2 += 8;
}
// console.log(num2);

// 2. 三元运算符（三元表达式、三目运算符）:简单的if else 语句
// 语法： 条件 ? 条件成立时的表达式 : 条件不成立的表达式;

// var color = 'white';
// color == 'black' ? console.log('black') : alert('white');

var num3 = 3;
num3 >= 3 ? num3++ : num3--;
console.log(num3);

// 如果有多条在条件成立或者不成立的语句，需要用括号包起来；如果成立或者不成立的时候什么也不做可以写undefined或者null或者void 0

num3 == 4 ? (num3--,num3 *= 4) : undefined;
console.log(num3);

// 三元运算符是有返回值的：当条件成立时返回成立时这一部分，如果不成立就返回不成立的部分;
var color = 'black';
var result = color == 'black' ? 'black' : 'white';
console.log(result); // black

// !! 条件怎么写？
// 1. 比较运算符：<、<=、>、>=、!= 不等于、这些都会返回布尔值
// == 相对比较：不比较类型，只比较值，如果值相同就是true，所以 1 == '1' true
// === 绝对比较，值不但要相同、类型也得相同。所以 1 === '1' false

// 2. 数学表达式：+ - * / %，如果条件里面是一个数学表达式，会等着计算出结果，然后再把这个结果转换成布尔值；数学运算符除 + 外，和非数字运算，会把两边都转成数字，在计算。
if (1 + -1) {
  // 1 + -1 是0，!!0 -> false
}

if ('3px' - 1) {
  // Number('3px') -> NaN -> NaN - 1 -> NaN -> !!NaN -> false 条件不成立
}

if ('3px' + 1) {
  // + 在这里是字符串拼接，所以拼接后是 "3px1" -> !!"3px1" -> true 条件成立
}

if ({} + 1) {
  // 引用数据类型使用 + ，会先把引用类型toString() 然后再拼接字符串；
  // ({}).toString() -> "[object Object]" -> 拼接 -> "[object Object]1" -> true 条件成立
}

// switch-case
var num5 = 12;

// if (num5 === 11) {
//   num5++;
// } else if (num5 === 12) {
//   num5 += 2
// } else {
//   num5 = 0
// }

// 改造成switch-case
switch (num5) {
  case 11:
    num5++;
    break;
  case 12:
    num5 += 2;
  case 14:
    num5 += 14;
    break;
  default:
    num5 = 0;
}
console.log(num5);

/*
 * switch case 的注意事项：
 *  1. switch (值)，和case的值是绝对比较，值要相同、类型也要相同
 *  2. 每个case后面都需要加break，如果不加就会不管后面条件是否成立，把后面的case及default都执行，直到遇到下一个break停下来。
 */




















