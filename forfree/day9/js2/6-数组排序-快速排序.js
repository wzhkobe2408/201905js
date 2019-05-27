/*
* 目标：
*   1. 理解快速排序的原理
*   2. 理解递归在快速排序中的应用
* */
// 快速排序原理：先准备两个数组left和right，然后从数组中取出中间位置的一项。然后遍历数组，用每一项和中间项比较，如果比中间项小push到left，否则push到right。然后对left和right进行相同的操作，直到数组的length小于等于1时，返回这个数组，并且停止。最后把所有的left、中间项、right拼接起来。
var ary = [12, 8, 97, 67, 56];
// left[12, 8, 67, 56]     |97|  right []
// left [12, 8, 56] |67| right []  |97| []
// left [] |8| right [12, 56] |67|   [] |97| []
// [] |8|  left[12]   |56| right [] |67| [] |97| []
// [8, 12, 56, 67, 97]

function quickSort(ary) {

  // !!! 注意递归终止的条件
  if (ary.length <= 1) {
    return ary;
  }
  // 1. 获取中间项的索引
  var midIndex = Math.floor(ary.length / 2);
  // 2. 获取中间项
  var midVal = ary.splice(midIndex, 1)[0];

  // 3. 准备left和right空数组
  var left = [];
  var right = [];

  // 4. 遍历数组，用当前项和中间比较，比中间项小push到left，否则push到right
  for (var i = 0; i < ary.length; i++) {
    if (ary[i] < midVal) {
      left.push(ary[i]);
    } else {
      right.push(ary[i]);
    }
  }

  return quickSort(left).concat(midVal, quickSort(right));
}
console.log(quickSort(ary));






