/*
* 目标：
*   1. 理解对象法去重的原理
*   2. 理解对象法去重实现
* */

/*
* 对象法去重思路：
*   1. 准备一个空对象
*   2. 遍历数组，把数组项存储到对象中，形如 {数组项1: 数组项1, 数组项2: 数组项2..}
*   3. 在存储之前先判断，对象[数组项] 不是undefined，就证明这一项在此之前已经出现过了，即已经重复了，就需要删除这一项。对象[数组项] 是undefined，说明此前还没出现过这一项，我们直接把这一项保存在对象中。
*
* */
var ary = [1, 3, 3, 3, 5, 4];

function unique(ary) {
  // 1. 准备一个空对象
  var obj = {};

  // 2. 遍历数组，把数组中的每一项存储到对象中
  for (var i = 0; i < ary.length; i++) {
    // 3. 在存储之前判断对象中是否存在当前项
    var item = ary[i];

    if (obj[item] !== undefined) {
      // 如果 obj[item] 不是undefined说明item这一项在之前就出现过，说明重复了，就需要删除；
      // ary.splice(i, 1); 这样删除如果删除的是数组中间的某一项，就会导致后面所有的数组项的索引都会重新计算一遍，这会带来很大的性能开销。所以我们把当前项修改成数组的最后一项，然后我们把数组最后一项删除。这样做数组只重新计算length，前面的索引不用动。
      ary[i] = ary[ary.length - 1]; // 把当前项替换成最后一项。
      ary.length--; // ary.length-- 可以删除数组最后一项
      // ary.pop(); // pop() 也是删除数组最后一项
      i--; // 这个i-- 是为了检查最后一项和之前是不是重复；先--再++，相当于没加每减
    } else {
      obj[item] = item;
    }
  }
  return ary;
}

var result = unique(ary);
console.log(result);

// 2. 对象法去重2
/*
* 1. 遍历数组，把数组项 都存储在对象中；
* 2. 再从对象中把数组项取出来（for in），还原成一个数组。
* */


function unique2(ary) {
  // [1, 3, 3, 3, 5, 4, 3]
  var obj = {};
  for (var i = 0; i < ary.length; i++) {
    var item = ary[i];
    obj[item] = item;
  }
  // {1: 1, 3: 3, 5: 5, 4: 4}
  var arr = [];
  for (var k in obj) {
    arr.push(obj[k])
  }
  return arr;
}

/*
*  3. 新数组：
*  1. 准备一个空数组
*  2. 遍历数组，然后把数组项取出来，判断在新数组中出现没出现过，如果没出现过，直接push。如果出现过，就不push。
*  关键点：判断数组项出现没出现过
* */

function unique3(ary) {
  var newArr = [];

  for (var i = 0; i < ary.length; i++) {
    var item = ary[i];
    // if (newArr.indexOf(item) === -1) {
    //   newArr.push(item);
    // }

    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  }
  return newArr;
}












