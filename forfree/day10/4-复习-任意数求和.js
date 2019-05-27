function sum() {
  var total = 0;
  // 遍历arguments
  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    // 判断item是否是数字
    if (typeof item !== 'number') {
      item = parseFloat(item);
    }
    // 判断item是不是NaN
    if (!isNaN(item)) {
      total += item
    }
  }
  return total
}
console.log(sum(1, '12', 'abc', '13.5px'));