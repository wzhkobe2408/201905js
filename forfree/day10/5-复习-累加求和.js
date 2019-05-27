// 需求：求1-100以内的能够被3和7整除的数之和
var total = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 21 === 0) {
    total += i;
  }
}
console.log(total);

// 递归：
function rSum(num) {
  if (num >= 100) {
    return 0;
  }
  
  if (num % 21 === 0) {
    return num + rSum(num + 1)
  } else {
    return rSum(num + 1)
  }
}
console.log(rSum(1));