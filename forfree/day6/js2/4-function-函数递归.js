/*
* 目标：
*   1. 理解函数递归
*   2. 理解递归语法
*   3. 理解递归终止的意义
*
* */

function oneToTen() {
  var total = 0;
  for (var i = 1; i <= 10; i++) {
    total += i;
  }
  return total;
}

// 递归写法：

function rOneToTen(num) {
  if (num === 10) {
    // 使用递归时一定要考虑清楚何时终止递归
    return 10
  }
  return num + rOneToTen(num + 1)
  // return 1 + rOneToTen(2)
  // return 1 + 2 + rOneToTen(3)
  // return 1 + 2 + 3 + rOneToTen(4)
  // return 1 + 2 + 3 + 4 + rOneToTen(5)
  // return 1 + 2 + 3 + 4 + 5 + rOneToTen(6)
  // return 1 + 2 + 3 + 4 + 5 + 6 + rOneToTen(7)
  // return 1 + 2 + 3 + 4 + 5 + 6 + 7 + rOneToTen(8)
  // return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + rOneToTen(9)
  // return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + rOneToTen(10)
  // return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 // 55
}
console.log(rOneToTen(1));


// 需求：求出1-10中是3的倍数的所有数字之和
function timesOfThree() {
  var total = 0;
  for (var i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      total += i;
    }
  }
  return total;
}

function rTimesOfThree(num) {
  if (num === 10) {
    return 0
  }
  if (num % 3 === 0) {
    return num + rTimesOfThree(num + 1);
  } else {
    return rTimesOfThree(num + 1)
  }
  // return rTimesOfThree(2)
  // return rTimesOfThree(3)
  // return 3 + rTimesOfThree(4)
  // return 3 + rTimesOfThree(5)
  // return 3 + 6 + rTimesOfThree(7)
  // return 3 + 6 + rTimesOfThree(8)
  // return 3 + 6 + rTimesOfThree(9)
  // return 3 + 6 + 9 + rTimesOfThree(10)
  // return 3 + 6 + 9 + 0 // 18

}

console.log(rTimesOfThree(1));



