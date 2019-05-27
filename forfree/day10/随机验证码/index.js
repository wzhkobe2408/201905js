// 写一个方法生成指定位数的不重复验证码（A和a算重复），如果不指定默认四位。
function validateCode(num = 4) {
  // 1. 准备随机范围
  var strbase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var codeBox = '';

  // 2. 循环，在循环的过程中生成随机数，用随机数当做索引，取得随机字符。
  for (var i = 0; i < num; i++) {
    // 2.1 生成一个随机数 0 - 61
    var ran = Math.round(Math.random() * (61 - 0) + 0);
    // 2.2 用ran当做索引，取索引为ran的字符
    var char = strbase.charAt(ran);

    // 2.3 为了实现不重复，在拼接之前验证char是否在codeBox中出现过
    var upperCodeBox = codeBox.toUpperCase();
    var upperChar = char.toUpperCase();

    if (!upperCodeBox.includes(upperChar)) {
      // 满足条件时表示本次循环取得一个有效字符
      codeBox += char;
    } else {
      // 否则的情况就是本次循环没有取得有效字符，所以本次循环不算数
      i--;
    }

  }
  return codeBox;
}

// 获取codeWrapper

var codeWrapper = document.querySelector('#codeWrapper');
codeWrapper.innerHTML = validateCode(6);