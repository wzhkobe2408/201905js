/*
* 目标：
*   1. 理解快速排序的原理
*   2. 理解递归在快速排序中的应用
* */
var ary = [12, 8, 88, 97, 86, 85];
// left [12, 8, 88, 86, 85] |97| right []
// left [12, 8, 86, 85]   |88| right [] |97| []
// left [12, 8, 85] |86| right [] |88| [] |97| []
// left [] |8| right [12, 85] |86| [] |88| [] |97| []
// [] |8| left [12] |85| right [] |86| [] |88| [] |97| []
// [8, 12, 85, 86, 88, 97]

// 快速排序的原理：声明两个新数组，分别叫做left和right，然后获取数组的中中间项，然后比中间项小的放在left中，然后比中间项大的放在right中。然后对left和right进行同样的操作，直到left或者right只有一项或者为空时，终止这个过程，然后把所有的left和right以及中间项拼接起来

function quickSort(ary) {

  // !!! 使用递归要注意递归终止的条件，当前数组ary剩余一项或者为空时，就要停止递归
  if (ary.length <= 1) {
    return ary;
  }

  // 1. 计算中间项索引
  var midIndex = Math.floor(ary.length / 2);

  // 2. 获取中间项
  var midVal = ary.splice(midIndex, 1)[0];

  // 3. for 循环遍历数组，如果当前项比中间项大就push到right
  var left = [];
  var right = [];

  for (var i = 0; i < ary.length; i++) {
    var cur = ary[i];

    if (cur > midVal) {
      right.push(cur);
    } else {
      left.push(cur);
    }
  }
  return quickSort(left).concat(midVal, quickSort(right))
}

console.log(quickSort(ary));