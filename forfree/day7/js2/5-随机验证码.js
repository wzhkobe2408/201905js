/*
* 目标：
*   1. 理解随机原理
*   2. 练习字符串拼接
*   3. 练习for循环
*   4. 练习通过ID获取元素
*   5. 练习通过innerHTML插入到元素内
* */

/*
* 需求：生成一个四位随机验证码，把生成的结果插入到页面中；而且每次刷新页面都会得到不同验证码；
*
* 分析：
* 1. 准备随机范围 A-Z a-z 0-9 一共62个字符
* 2. 因为我们目前掌握的能用来随机的只有随机数，同时字符串中每个字符都有一个索引。我们获取一个0 到 strbase.length - 1 中随机数，我们用这个随机数作为索引，就可以取得一个随机字符；
* 3. 因为需要4个字符，所以我们for循环，帮我们把这个事做四次。
*
* */
// 1. 准备随机范围 strbase 
var strbase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// 2. 准备一个空字符串，用来拼接随机出来的字符
var codeBox = '';

// 3. for 循环，在循环的过程中取随机字符

for (var i = 0; i < 4; i++) {
  // 3.1 获取随机数 范围是 0 - 61
  var ran = Math.round(Math.random() * (61 - 0) + 0);
  // 3.2 用这个随机数ran做索引，获取一个随机字符
  var char = strbase.charAt(ran);
  // 3.3 获取字符后，把字符串拼接到codeBox上
  // ?? 要想不重复，在加之前判断一下codeBox已经有这个字符了吗？
  codeBox += char;
}
// console.log(codeBox);

// 4. 插入到页面中
var codeWrapper = document.getElementById('codeWrapper');
codeWrapper.innerHTML = codeBox;





