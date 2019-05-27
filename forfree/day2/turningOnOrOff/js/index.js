/*
* 1. 点击时，如果盒子是黑色的，就变成白色，如果是白色再次点击就变成黑色
* 
* */

// 1. 把元素获取到，js中操作谁，就先获取谁
var box = document.getElementById('box'); // document.getElementById() 是DOM api，通过id获取到页面中的元素

// 2. 给元素绑定点击事件
box.onclick = function () { // 当点击元素的时候就会触发这个函数。每次点击这个函数里面的代码都会从头到尾执行一遍；

  // 获取元素的背景颜色 box.style.backgroundColor 
  // console.log(box.style.backgroundColor); // black

  // 修改元素背景色 box.style.backgroundColor = 'white';
  if (box.style.backgroundColor === 'black') {
    // 如果元素的背景颜色是black
    box.style.backgroundColor = 'white'; // 修改背景色为白色
  } else {
    // 否则就表示 元素的背景色是 white
    box.style.backgroundColor = 'black'
  }
};