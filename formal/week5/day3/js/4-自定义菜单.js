// 1. 获取鼠标的位置
// 2. 把ul的left和top设置为鼠标的位置
// 3. 把盒子的display属性设为block；
let menu = document.getElementById('menu');

document.oncontextmenu = function (e) {
  e.preventDefault();
  // 1. 获取鼠标的位置
  let left = e.clientX;
  let top = e.clientY;
  // 2. 上一步获取的值设置给ul
  menu.style.left = left + 'px';
  menu.style.top = top + 'px';

  // 3. 让ul显示出来
  menu.style.display = 'block';
};

// 增加刷新功能
let refresh = document.getElementById('refresh');
refresh.onclick = function () {
  // 刷新页面的方法：
  // 1. reload
  // window.location.reload();

  // 2. 重新给location的href属性赋值
  // window.location.href 获取当前页面的url；如果给href属性赋值一个url，页面就会跳转到这个url指向的页面
  window.location.href = window.location.href;
};