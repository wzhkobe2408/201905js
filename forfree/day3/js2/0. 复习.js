/*
* 1. 普通对象、及操作
* 2. 数组、数组操作、数组特点
* 3. 基本数据类型和引用数据类型的区别
* 4. 布尔值、布尔运算
* 5. 判断语句
* 6. null vs undefined
* */

/*
* 1. 普通对象：无序的键值对集合。键值对的书写顺序，不会影响最终对象的值。
*   声明对象： var obj = {
*     name: "珠峰",
*     age: 12,
*     courses: [1, 2, 4],
*     getName: function () {}
*   }
*   获取对象的属性值：对象.属性名 或者 对象['属性名'] 注意：如果属性名是数字，只能 对象[数字属性名]
*   修改或者新增属性：通过赋值的方式；对象.属性名 = 属性值; 因为对象的属性名具有唯一性，所以如果属性名在对象中已经存在了，再赋值就是修改。如果不存在，就是新增属性；
*   删除对象的属性：
*     1. 软删除：直接将对象的属性名对应属性值修改为null
*     2. 彻底删除：delete 对象.属性名 或者 delete 对象['属性名']
*
* */
var obj = {
  name: "珠峰",
  age: 12,
  courses: [1, 2, 4],
  getName: function () {
  }
};
var str = 'age';
console.log(obj[str]); // 方括号里面还可以写变量

/*
* 数组：有序的键值对集合。数组项的顺序不能随意调整，调整过后就会影响它代表的值。数组键的是浏览器给它分配的，是一个从0开始的数字。数组的第一项的键是0，第二项的键是1。。。一次类推，第n项的键是 n - 1；我们把这种数字的键叫做索引。
* 数组还有一个length属性，是浏览器给它分配，自动计算数组项的个数。数组最后一项的索引是 数组的length - 1;
* 因为数组的键是数字，所以只能通过 [索引] 的方式操作；
* */

var ary = [1, 2, 3, 5, 8];
console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);
console.log(ary[3]);
console.log(ary[ary.length - 1]); // 获取数组的最后一项
console.log(ary[ary.length]); // undefined 因为数组的最大索引是length - 1

ary[0] = 100; // 将数组第一项修改为100
ary[ary.length] = 12; // 向数组末尾增加一个项


/*
* 3. 基本数据类型和引用数据类型的区别
*   1. 基本数据类型是值类型的操作。变量真的就代表这个值。
*   2. 引用数据类型值堆内存地址的操作。变量代表的不是引用数据类型的值，而是代表这个数据存储堆内存空间地址。
* 
* */
var a = 12;
var b = a;
b = 13;
console.log(b); // 13
console.log(a); // 2

var obj = {
  name: '珠峰'
};
var obj2 = obj;
obj.name = 'zhufeng';
console.log(obj2.name); // zhufeng

var obj3 = {};
var obj4 = {};
var obj5 = {};

obj3.name = obj4.name = '珠峰';

console.log(obj4.name); // undefined 注意：浏览器每遇到一个引用数据类型，都会新开辟一个堆内存空间，并分配一个全新的一个地址。所以obj3、obj4、obj5没有任何关系。

/*
* 4. 布尔值和布尔运算：
*   1. 其他数据类型转布尔值：只有 0 NaN '' null undefined 转化成布尔值是false，其余的都是true
*   2. !取反运算符；原理：先判断要取反的值是不是布尔值，如果是就直接取反。如果不是先要转成布尔值，然后再取反；
*   3. !! 等效于转成布尔值
* */

/*
* 5. 条件语句：流程控制语句，当满足某些条件才执行某些代码；
*   1 if -else if - else，只有if可以单独使用，else if和else必须if使用
*   2 三元运算符: 条件 ? 成立时语句 : 不成立语句；如果有成立或者不成的时候什么也不做，我们用undefined或者null或者void 0 占位
*   3. switch- case
* */

var num = 10;

if (num > 10) {
  // num > 10 是条件，浏览器会对条件部分进行布尔运算，当运算结果是true才会执行条件里面的代码
  num++;
} else if (num === 10) {
  // else if 表示多个条件，上面不满足会这个条件，再对这个条件进行布尔运算，为true就执行
  num--;
} else {
  // else 表示上面都不成立
}

// 3. 三元运算符是有返回值的
var color = 'white';
var result = color === 'black' ? 'black' : 'white'; // 赋值的时候，会先把等号右边的计算完，把计算出来的结果赋值给等号左侧
console.log(result); // white

// switch-case：如果不写break就会击穿，也不管后面的条件成立与否，就会继续执行后面的case，知道遇到下一个break或者执行完；
/*switch (变量或者值) {
  case 值1:
    变量或者值 === 值1 为true 时才执行这里的代码;
    break;
  case 值2:
    // ....
    break;
  default:
    // 上面都不成立时执行的代码，相当于else
}*/


/*
* 6. null和undefined的区别：
*   1. nul和undefined是两种不同的数据类型
*   2. typeof null 返回 "object" typeof undefined 返回 "undefined"
*   3. 访问对象或者数组不存在的键会返回undefined
*   4. Number(null) -> 0; Number(undefined) -> NaN
*
* */








