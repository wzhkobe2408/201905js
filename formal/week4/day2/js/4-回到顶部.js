const {win} = window.utils; // 从utils中解构win方法
// 写一个动画，让页面缓慢的回到顶部
// 让页面回到顶部：需要操作盒子模型的scrollTop属性（页面滚动条卷去的距离）

let winScrollTop = win('scrollTop'); // win方法获取页面滚动条卷去的高度；
let btn = document.getElementById('btn');

// 点击的时候才会触发滚动的行为

// 1. 瞬间回去
/*
btn.onclick = function () {
  win('scrollTop', 0);
};
*/
// 2. 动画着回去：用一个定时器不断的修改页面的scrollTop值
/*let time = 2000; // 指定时间回去; 需要计算速度
let isRun = false; // 标识符：标识当前的滚动条是否正在运动
btn.onclick = function () {
  if (isRun) return; // 如果isRun是true，说明现在有正在执行的动画，为了避免动画累加，后面的代码不能执行；
  // 1. 计算速度
  let winScrollTop = win('scrollTop'); // 点击时页面滚动条卷去的高度
  let speed = winScrollTop / time; // 计算速度
  let curT = 0; // curT记录经过的时间

  isRun = true; // 下一行就要开启定时器了，所以在这里把isRun置为true
  let timer = setInterval(() => {
    curT += 16; // 让时间累加
    if (curT >= time) { // 当到大于等于time时，应该滚动到底了
      clearInterval(timer);
      curT = time;
      isRun = false; // 动画结束后把isRun置为false
    }
    let change = 16 * speed; // 在curT时间内走过的路程
    winScrollTop -= change; // 经过curT时间后，页面滚动条的位置
    win('scrollTop', winScrollTop); // 设置回去
  }, 16);
};*/

// 避免动画累加的第一种方案：设置标识符，初始值是false，表示当前没有正在执行的动画。如果开始动画，我们就把这个标识符置为true；当我们再次开启动画之前，如果这个标识符是true，表示当前有正在执行到的动画，就不能再次开启相同的动画；而且注意当动画结束后，把标识符修改为false；


// 第二种解决动画累加的解决方案：在开启新的动画之前把之前的动画清除掉（把之前的定时器清除了）；

let time = 2000;
// let timerId = null; 一般我们不用全局变量记录定时器id，一般使用自定义属性的方式来记录定时器的ID；
btn.onclick = function () {
  // 1. 计算速度
  let winScrollTop = win('scrollTop'); // 点击时页面滚动条卷去的高度
  if (winScrollTop <= 0) return; // 如果卷去的高度为小于等于0，不开启动画

  let speed = winScrollTop / time; // 计算速度
  let curT = 0; // curT记录经过的时间
  if (this.timerId) {
    // 如果timerId不是null就说明之前已经有动画了，在开启新的动画之前把原来的动画清除掉
    clearInterval(this.timerId);
  }
  this.timerId = setInterval(() => {
    curT += 16; // 让时间累加
    if (curT >= time) { // 当到大于等于time时，应该滚动到底了
      clearInterval(this.timerId);
      curT = time;
    }
    let change = 16 * speed; // 在curT时间内走过的路程
    winScrollTop -= change; // 经过curT时间后，页面滚动条的位置
    win('scrollTop', winScrollTop); // 设置回去
  }, 16);
};