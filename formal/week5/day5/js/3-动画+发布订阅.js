let box = document.getElementById('box');

// 动画结束后做如下事情：
// 1. 把box的背景色设成 #00b38a
// 2. 把文字颜色改成 #fff
// 3. 向box中输出一句话：死鬼你来了~

// 发布订阅：
let todoList = new Subscribe();
todoList.addEvent(function (that) {
  that.style.backgroundColor = '#00b38a';
}).addEvent(function (that) {
  that.style.color = '#fff';
}).addEvent(function (that) {
  that.innerText = '死鬼你来了~'
}).addEvent(function () {
  console.log('动画终于执行完了');
});

animate({
  ele: box, // 元素对象
  target: { // 多方向终点位置坐标集合
    left: 450,
    top: 400
  },
  duration: 4000, // 过渡时间
  after: function () {
    todoList.fire(this);
  }
});