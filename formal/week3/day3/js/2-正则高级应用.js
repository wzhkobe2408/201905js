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
let timeAry = timeStr.match(reg3); // ['2019', '6', '12', '12', '38', '23']

// 2.2 把小于10的数字补0
let timeAry2 = timeAry.map(item => {
  return item < 10 ? '0' + item : item
});
// console.log(timeAry2); // ["2019", '06', '12', '12', '38', '23']

// 2.3 利用正则把模板中占位符替换成时间数字
let reg4 = /\{(\d)\}/g; // 我们要使用{}的原义，所以需要转义，因为花括号是用来写量词的；
let timeResult = tmpStr.replace(reg4, function (a, b) {
  // debugger; // 断点，当代码执行到这里的时候会停在这里，要手动操作，代码才会执行，用于演示代码执行过程，bug调试；
  // console.log(a, b);
  // 这个回调函数的参数：第一个时大正则捕获到的内容，第二个是正则第一个分组捕获的内容
  // 正则能够捕获多少次，这个回调函数就会执行多少次。每次执行的之后会把捕获到内容传给回调函数。回调函数的第一个参数是整个大正则捕获到的内容，如果正则有分组，从第二项开始就是分组捕获的内容；
  // {0} 0
  // {1} 1
  // {2} 2
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

// console.log("2019/6/12 12:38:23".formatTime('{1}-{2} {3}:{4}:{5}'));

// 3. url参数序列化: url后面?key=value&key2=value2&key3=value3 叫做url参数，也叫查询字符串、问号传参
// 需求：把url的查询字符串中 key和value存到对象中，
// {name: 'mabin', age: 18, address: 'hebei'}
let url = 'http://www.zhufengpeixun.cn?name=mabin&age=18&address=hebei';
let reg5 = /([^?=&]+)=([^?=&]+)/g;
let urlAry = url.match(reg5);
// console.log(urlAry); ['name=mabin', 'age=18', 'address=hebei']

let params = {};
// 遍历获取到数组，再遍历时把每一项根据等号把字符串拆分成2部分，
for (let i = 0; i < urlAry.length; i++) {
  let item = urlAry[i];
  let itemAry = item.split('='); // 按照=把字符串拆分成一个数组，数组的第一项就是key，第二项就是value
  // console.log(itemAry);
  params[itemAry[0]] = itemAry[1]; // 为params添加对象
}
console.log(params);

// 把这个方法扩展到原型上
String.prototype.querySeries = function () {
  // 现在这个方法在字符串的原型上，this代表需要被格式化的字符串
  // 1. 利用正则把我们需要的部分从字符串中捕获到
  let reg5 = /([^?=&]+)=([^?=&]+)/g;
  let urlAry = this.match(reg5);
  // 2. 声明一个对象，准被接收查询字符串中的key和value
  let params = {};
  // 3. 遍历urlAry，在遍历的过程中把数组项拆分成数组，这个拆出来的数组第一项是key，第二项是value；
  urlAry.forEach((item) => {
    // item -> 'name=mabin'
    let [key, value] = item.split('='); // ['name', 'mabin']
    params[key] = value;
  });
  return params;
};
console.log(url.querySeries()); // {name: 'mabin', age: 18, address: 'hebei'}

// 3. 数据类型检测
// Object.prototype.toString.call() 检测类型特别准，但是返回值不友好。
// 所以，我们优化它一下；

let rs = '[object Xxxx]';
rs.slice(7, rs.indexOf(']'))
Object.isTypeOf = function (val) {
  // 1. 给传进来的val进行数据类型检测
  let result = Object.prototype.toString.call(val);
  // 2. 用一个正则把我们需要的代表的类型的字符串获取到
  // console.log(result);
  let reg = /^\[object ([A-Za-z]+)\]$/;
  let [,catches] = reg.exec(result); // 从捕获结果中把类型字符串解构出来
  // console.log(catches);
  // 3. 把上一步得到的代表类型的字符串返回
  return catches;
};
console.log(Object.isTypeOf(1)); // Number
console.log(Object.isTypeOf(true)); // Boolean







