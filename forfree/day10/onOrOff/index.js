// 1. 获取元素
var open = document.getElementById('open');

// 2. 绑定事件
open.onclick = function () {
  open.style.backgroundColor = open.style.backgroundColor === 'black'
    ? 'white'
    : 'black';
};