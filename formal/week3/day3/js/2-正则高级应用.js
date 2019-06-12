/*
* 高级应用：
*
* */

// 1. 正则结合replace方法（replace是字符串的方法）；
let str = 'zhufeng2018 zhufeng2019 zhufeng2020 zhufeng2021';
// 需求：把zhufeng拼音换成汉字：
let r = str.replace('zhufeng', '珠峰').replace('zhufeng', '珠峰').replace('zhufeng', '珠峰');
// console.log(r);
// ? 有没有办法一次性都替换掉？
// 正则+replace
let reg = /(zhu)(feng)/g;
let i = 0;
let r2 = str.replace(reg, function (...arg) {
  // 正则能够在字符串中匹配到多少个，这个回调函数就会执行多少回；
  // 用回调函数的返回值去替换捕获到的内容

  // 在替换的过程中，回调函数会接收到几个参数：
  // 第一个：大正则捕获到的内容
  // 如果有分组从第二个参数开始就是分组捕获到的内容
  // 倒数第二个是捕获到的索引位置
  // 倒数第一个是原始字符串
  i++;
  // console.log(arg);
  return 'ZF' + i;
});
// console.log(i);
// console.log(r2);

// 2. 格式化时间字符串：根据给定的时间模板，把时间字符串格式化

// 时间字符串： "2019/6/12 12:38:23"
// 模板：'{0}年{1}月{2}日 {3}时{4}分{5}秒' -> "2019年06月12号 12点38分23秒"
// 模板：'{0}-{1}-{2} {3}:{4}:{5}' -> "2019-06-12 12:38:23"
// 2.1 用正则把时间字符串中的数字都取出来
let timeStr = "2019/6/12 12:38:23";
let tmpStr = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
let reg3 = /\d+/g;
let timeAry = timeStr.match(reg3);

// 2.2 把小于10的数字补0
let timeAry2 = timeAry.map(item => item < 10 ? '0' + item : item);
// console.log(timeAry2); // ["2019", '06', '12', '12', '38', '23']

// 2.3 利用正则把模板中占位符替换成时间数字
let reg4 = /\{(\d)\}/g; // 我们要使用{}的原义，所以需要转义，因为花括号是用来写量词的；
let timeResult = tmpStr.replace(reg4, function (a, b) {
  // 这个回调函数的参数：第一个时大正则捕获到的内容，第二个是正则第一个分组捕获的内容
  return timeAry2[b];
});

// console.log(timeResult);
String.prototype.formatTime = function (tmp = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
  let reg = /\d+/g;
  // 第一步：把时间数字捕获到
  let timeAry = this.match(reg).map(
    item => item < 10 ? '0' + item : item
  );
  let reg2 = /\{(\d)\}/g;
  return tmp.replace(reg2, (big, index) => timeAry[index]);
};

console.log("2019/6/12 12:38:23".formatTime('{1}-{2} {3}:{4}:{5}'));

