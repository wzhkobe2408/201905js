/*
* 目标：
*   1. 理解冒泡排序思路
*   2. 理解冒泡排序的代码实现
* */

// 冒泡排序原理：数组项两两比较，如果前面的比后面的大，就交换这两项的位置，否则什么也不做。经过这样一轮比较，我们能得出本轮的最大值；所以经过length - 1轮，可以得出length - 1个最大值，剩下的那个不用比，就是最小的。
var ary = [18, 9, 94, 15, 6, 3];
// [9, 18, 15, 6, 3, 94];
for (var i = 0; i < ary.length - 1; i++) {
  for (var j = 0; j < ary.length - 1 - i; j++) { // 每一轮都会产生一个最大值，后面的比较中不需要和前面产生的最大值比较了，所以减去最大值个数
    if (ary[j] > ary[j + 1]) {
      // 满足这个条件就说明前一个比后一个大，此时应该交换两项的位置
      var temp = ary[j];
      ary[j] = ary[j + 1];
      ary[j + 1] = temp;
    }
  }
}
console.log(ary);

// 这里有一个优化空间：ary.length - 1 轮是最差的情况，即数组是倒序的。那么最好的情况就是数组本身就是升序的，在一轮比过之后，没有项交换位置，此时后面的几轮都不用跑了。
var ary1 = [1, 2, 3, 4, 5];






