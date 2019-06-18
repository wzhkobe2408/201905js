// 需求：做一个图片渐现的效果；

// 导入工具方法
const { css } = window.utils;

// 1. 获取元素
let img = document.querySelector('.img-con img');

let timer = setInterval(() => {
  // 1. 获取opacity属性
  let op = css(img, 'opacity'); // css方法获取到opacity的值是字符串，还需要op的值转成数字
  let curOp = parseFloat(op) + 0.01;
  // 当curOp的值大于1的就应该停止动画
  if (curOp >= 1) {
    clearInterval(timer);
    curOp = 1;
  }
  css(img, 'opacity', curOp)
}, 16);
