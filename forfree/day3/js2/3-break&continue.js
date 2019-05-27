/*
* 1. 理解break和continue的作用和区别
*   continue: 结束本次循环
*   break: 退出循环
* */

// continue: 跳过某一轮循环，继续后面的循环
/*for (var i = 0; i < 5; i++) {
  if (i == 2) {
    // i = 2时满足i == 2条件，执行continue跳过本轮循环，执行i++，进入下一轮循环。
    continue;
  }
  console.log(i);
}*/

// break：退出整个循环，后面的剩余循环就不再执行了。

for (var i = 0; i < 5; i++) {
  if (i == 2) {
    // i = 2时满足i == 2条件，执行continue跳过本轮循环，执行i++，进入下一轮循环。
    break;
  }
  console.log(i);
}
