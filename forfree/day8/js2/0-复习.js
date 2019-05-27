/*
* 1. 双for去重
*
* 2. 对象法去重
* 3. Math
* 4. 字符串方法
* 5. 随机验证码
* */

// 1. 双for循环去重
var ary = [1, 3, 3, 3, 5, 4, 3];

for (var i = 0; i < ary.length - 1; i++) {
  var item = ary[i];
  for (var j = i + 1; j < ary.length; j++) {
    if (item === ary[j]) {
      ary.splice(j, 1);
      j--;
    }
  }
}

// 2. 对象法去重

function unique(ary) {
  var obj = {};

  for (var i = 0; i < ary.length; i++) {
    var item = ary[i]; // {数组项1: 数组项1, 数组项2: 数组项2...}

    if (obj[item] !== undefined) {
      ary[i] = ary[ary.length - 1];
      ary.length--;
      // ary.pop()
      i--;
    } else {
      obj[item] = item;
    }
  }

  return ary;
}

// 3. Math 浏览器中处理数学计算的对象
// 3.1 Math.abs() 获取绝对值
// 3.2 Math.floor() 向下取整
// 3.3 Math.ceil() 向上取整
// 3.4 Math.round() 四舍五入（注意负数四舍六入）
// 3.5 Math.random() 获取0-1随机小数
// 3.6 Math.round(Math.random() * (m - n) + n) 获取n-m直接的随机整数
// 3.7 Math.sqrt() 获取一个数字的算术平方根
// 3.8 Math.PI 获取圆周率
// 3.9 Math.PI.toFixed(2) 保留2位小数的圆周率

// 4. 字符串
// 4.1 charAt(index) 获取指定索引位置的字符 等效于 字符串[索引]
// 4.2 charCodeAt(index) 获取指定索引位置字符的Unicode编码
// 4.3 substr(n, m) 从索引n开始截取m个；
// 4.4 substr(n) 从索引n开始截取到末尾
// 4.5 substr() 从头截取到尾
// 4.6 substring(n, m) 从索引n开始，复制到索引m(不包含m);
// 4.7 substring(n) 从索引n复制到末尾
// 4.8 substring() 从头到尾复制一遍
// 4.9 slice(n, m) 从索引n开始，复制到索引m（不包含m）
// 4.10 slice(n) 从索引n开始，复制到末尾
// 4.11 slice()  从头复制到尾
// 4.12 slice(-1) slice可以使用负数索引，在复制时 会把负数进行换算，把负数 + length，然后用换算结果作为索引；负数索引适用于倒着截取字符

// 4.13 toLowerCase() 大写转小写
// 4.14 toUpperCase() 小写转大写

// 4.15 indexOf()/lastIndexOf() 获取字符在字符串中首次/末次出现的索引位置，如果出现返回索引位置，不出现返回 -1；
// 4.16 includes() 判断字符在某个字符串中是否出现过，出现返回true，不出现返回false;ES6新增方法

// 4.17 replace(old, new) 替换，用new替换old
// 4.18 replace(old, function () {return new }) 用回调函数的返回值替换
// 4.19 match(匹配内容或者匹配规则) 匹配不到返回null，匹配到了返回数组
// 4.20 split(分隔符) 把字符串按照指定的分隔符拆分成数组（和数组的join方法相反）
var str = 'word';
var reversedStr = str.split('').reverse().join(''); // 级联 或者 链式调用

// 5. 随机验证码

function validateCode(count = 4) { // ES6新语法 形参默认值；当函数执行时不传实参，默认值才会生效
  /*if (count === undefined) {
    // 因为形参如果设置了，不传就是undefined
    count = 4;
  }*/
  // count = count || 4; // 用 || 实现参数默认值 4

  var strbase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var codeBox = '';
  /*for (var i = 0; i < count; i++) {
    var ran = Math.round(Math.random() * 61);
    var char = strbase.charAt(ran);

    // 判断
    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = char.toUpperCase();

    if (upperCodeBox.indexOf(upperChar) === -1) {
      codeBox += char;
    } else {
      i--;
    }
  }*/

  while (codeBox.length < count) {
    var ran = Math.round(Math.random() * 61);
    var char = strbase.charAt(ran);

    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = char.toUpperCase();

    if (!upperCodeBox.includes(upperChar)) {
      codeBox += char;
    }
  }
  return codeBox;
}







