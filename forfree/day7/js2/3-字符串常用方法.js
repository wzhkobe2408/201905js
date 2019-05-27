/*
* 目标：
*   1. 理解字符串索引、length
*   2. 掌握字符串常用方法
*
* */

/*
* 1、 字符串：是被单引号、双引号、反引号(``) 包裹的0到多个字符。而且是js中一种基本数据类型。
* 2、字符串也是有索引的，而且它的索引也是浏览器分配。第一个字符的索引是0，第二个索引是1.... 第n个字符的索引 是 n - 1；
* 3、字符串还有length属性，length代表的字符串中的字符个数。
* 4、字符串中最大索引值是 字符串的length - 1；
* 5、我们可以通过 字符串[索引] 获取指定索引的字符
*
* tips: 有长度、索引 就可以用for循环遍历
*
* */
// 声明一个字符串
var str = '珠峰培训';
var str2 = "珠峰";
var str3 = `珠峰`;
// console.log(str[1]);
// console.log(str.length);

/*for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}*/

// 2. 字符串常用方法：

// 2.1 获取指定索引位置的字符或者指定索引位置的Unicode编码

// charAt(索引) 获取指定索引位置的字符
var strs = '珠峰培训zhufengpeixun';
// var char = strs.charAt(16); // str[索引] 也可以获取字符
// console.log(char);
// console.log(strs.length); // 17

// charCodeAt(索引) 获取字符串中指定索引位置的字符的Unicode编码
// var uni = strs.charCodeAt(3);
// console.log(uni);

// 2.2 字符串的截取赋值、拼接

// substr(n, m) 从索引n开始截取m个，如果不写m就是截取到末尾。如果n和m都不写，从头到尾都截取
// var st1 = strs.substr(2, 2);
// console.log(st1); // 培训
// var st2 = strs.substr(2);
// console.log(st2); // 培训zhufengpeixun
// var st3 = strs.substr(); // 珠峰培训zhufengpeixun
// console.log(st3);

// substring(n, m) 从索引n开始截取到索引m（不包含m）；如果不写m，表示截取到末尾。如果n和m都不写，就是从头到尾复制一遍
// var st4 = strs.substring(4, 7);
// console.log(st4);
// var st5 = strs.substring(4);
// var st6 = strs.substring();
// console.log(st5, st6);

// 2.3 大小写转换（只能转换英文字母）

// toLowerCae() 大写转小写
var st7 = 'ABC'.toLowerCase();
// console.log(st7);

// toUpperCase() 小写转大写
var st8 = 'abc'.toUpperCase();
// console.log(st8);

// 2.4 获取指定字符在字符串中出现的索引位置
// indexOf() 获取字符在字符串首次出现的位置，如果出现过就返回索引位置，没出现过返回-1；
var st9 = 'abcda'.indexOf('a');

// lastIndexOf() 获取字符在字符串中最后一次出现的位置，如果出现过就返回索引位置，没出现过就返回 -1；
var st10 = 'abcda'.lastIndexOf('a');
// console.log(st9, st10);

// includes() 判断字符串中是否出现过某一个字符串，如果出现过返回true，没出现返回false 【ES6新增的，不能在老旧浏览器中使用，IE8以下】
var st11 = 'abcd'.includes('abc'); // true
// console.log(st11);

// 2.5 split() 把字符串按照指定的分隔符拆分成数组（和数组join相反）
var sentence = 'I am a FE, I love programming';
var ary = sentence.split(',');
console.log(ary);

// 把一个单词倒过来
// 方法1
var str = 'word'; // 'drow'
var s = '';
for (var i = str.length - 1; i >= 0; i--) {
  s += str[i];
}
console.log(s);

// 方法2
// var s2 = str.split('').reverse().join('');
console.log(s3);

// 方法3
var ary2 = str.split('');
ary2.reverse();
var s3 = ary2.join('');
console.log(s3);

// 2.6 replace(被替换的内容, '要替换成的内容') 替换；后期结合正则使用
var str12 = '珠峰peixun';
// var st12 = str12.replace('珠峰', 'zhufeng');
// console.log(st12);

// 2.6.1 replace(被替换的内容, function () {return '要替换成的内容'})
var st13 = str12.replace('珠峰', function () {
  return 'zhufeng'
});
// console.log(st13);

// 2.7 match(匹配内容或者正则) 匹配；如果匹配到会返回一个数组，匹配不到返回null

var str14 = 'ABCabcEfg';
var st14 = str14.match('ABC');
console.log(st14);
console.log(Object.prototype.toString.call(st14)); // "[object Array]"
/* 匹配到的结果
* [
* 0: "ABC"
  groups: undefined
  index: 0
  input: "ABCabcEfg"
  length: 1
* ]
* 
* */
var st15 = str14.match('ABCD');
// console.log(st15);
















