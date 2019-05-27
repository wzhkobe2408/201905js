/*
* 插入排序：
*   1. 理解插入排序原理；
*   2. 理解插入排序实现
* */

/*
* 插入排序原理：
*   1. 假定第一项是最小值；
*   2. 从第二项开始倒着和前面的项进行比较
*   3. 如果前面一项比后一项大，则交换位置
* */

var ary = [5, 4, 3, 2, 1];

function insertSort(ary) {
  for (var i = 1; i < ary.length; i++) {
    for (var j = i; j >= 0; j--) {
      if (ary[j - 1] > ary[j]) {
        var temp = ary[j];
        ary[j] = ary[j - 1];
        ary[j - 1] = temp;
      }
    }
  }
  return ary;
}
console.log(insertSort(ary));