/*
* 目标：
*   1. 理解while循环语法
*   2. 改写随机验证码为while循环
*
* */

// js中还有一种循环，叫做while循环 while(单词：当...的时候)；表示只要满足条件就会执行循环体

/*for (var i = 0; i < 4; i++) {
  console.log(i);
}*/
/*
while (条件) { 只要条件为true就执行循环体，所以使用while循环一定要考虑好循环你终止的条件
  循环体
} */

/*
var i = 0;
while (i < 4) {
  console.log(i);
  i++;
}*/
function validateCode() {
  // 1. 随机范围
  var strbase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // 2. 准备用来拼接的空字符串
  var codeBox = '';

  // 3. 循环，在循环中获取随机数，然后用这个随即数当做索引取一个字符。
  while (codeBox.length < 4) {
    // 3.1 产生0-61的随机数
    var ran = Math.round(Math.random() * 61);
    var char = strbase.charAt(ran);

    // 3.2 在拼接之前需要判断char是否已经在codeBox中出现过了
    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = char.toUpperCase();
    if (!upperCodeBox.includes(upperChar)) {
      codeBox += char;
    }
  }
  return codeBox;
}

var codeWrapper = document.getElementById('codeWrapper');
codeWrapper.innerHTML = validateCode();