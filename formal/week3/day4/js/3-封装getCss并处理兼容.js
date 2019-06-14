var box = document.getElementById('box');

// 封装一个getCss方法，获取元素计算生效后样式，兼容IE

function getCss(ele, attr) {
  var value;
  // 1. 判断是否是 IE 浏览器
  if ('getComputedStyle' in window) { // 判断window对象上有getComputedStyle吗
    value = window.getComputedStyle(ele, null)[attr];
  } else {
    // 执行else的时候说明是IE低版本，使用currentStyle属性
    value = ele.currentStyle[attr];
  }
  // 把单位去掉：把数字且带单位的，把单位去掉
  var reg = /^-?\d+(\.\d+)?px|rem|em|pt$/g;
  if (reg.test(value)) {
    value = parseFloat(value);
  }
  return value
}

console.log(getCss(box, 'width')); // 300px -> 300
console.log(getCss(box, 'height')); // 300px -> 300
console.log(getCss(box, 'opacity'));

// 优化点：
// 1. 要把px单位去掉

// window.getComputedStyle(box, null).backgroundColor = 'red'; 报错，不能修改计算生效的样式
