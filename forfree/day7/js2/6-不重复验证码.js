/*
* 目标：
*   1. 理解不重复验证码原理
*   2. 掌握for 循环控制
* */

// 需求：声明四位验证码，要求四位不重复，a和A算重复；生成的验证码要插入到页面中

function validateCode() {
  // 1. 准备随机范围
  var strbase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // 2. 准备一个空字符串，用来拼接随机字符
  var codeBox = '';

  // 3. for 循环，在循环的过程中产生随机数，并且用这个随机数做索引取随机字符

  for (var i = 0; i < 4; i++) {
    // 1. 产生0 - 61之间的随机数
    var ran = Math.round(Math.random() * (61 - 0) + 0);

    // 2. 把ran当做索引，从strbase取索引为ran的字符
    var char = strbase.charAt(ran);

    // 3. 为了保证不重复，在拼接之前先判断一下codeBox中是否包含了char；但是还需要处理A和a算重复的问题；解决方案：把codeBox和char都转成大写，再判断codeBox是否包含char
    // codeBox = 'Ab' -toUpperCase() -> 'AB'
    // char = 'a' -toUpperCase() -> 'A'
    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = char.toUpperCase();

    if (!upperCodeBox.includes(upperChar)) {
      // 满足这个条件时说明codeBox中不包含char，所以可以拼接
      codeBox += char;
    } else {
      // else就表示本轮循环没能成功拼接一个有效字符，如果不i--，i直接++，就会导致有一次循环是无效的。所以我们先让i--，然后再i++，相当于i没变，就会重新再执行一遍这个循环。
      i--;
      // 如果不i--
    }

    // ran = 0 char = A -> codeBox = 'A'
    // ran = 3 char = D -> codeBox = 'AD'
    // ran = 26 char = a -> codeBox = 'AD'
    // ran = 4 char = E -> codeBox = 'ADE'
  }
  return codeBox
}
var code = validateCode();
// console.log(code);
var codeWrapper = document.getElementById('codeWrapper');
codeWrapper.innerHTML = code;

// ?? 作业：写一个方法，产生指定位数的验证码，如果不指定默认产生4位验证码；