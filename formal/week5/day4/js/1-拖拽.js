/*
* 目标：
*   1. 理解拖拽效果
*   2. 实现拖拽
*
* */

// 项目中事情、岗位职责要给我记住！！！！
// 产品经理（项目经理、运营）提需求，需求就是一个功能或者一个效果；
// 前端+后端 统称开发（也叫技术）
// QA(测试) 测试你做出来的东西是不是符合需求，是不是能用；这帮人会给你提bug；

// 拖拽需求：页面中有一个盒子可以拖拽到任意地方；
/*
* 功能细节：
*   1. 在盒子上点击鼠标左键，不松开（这儿有一个onmousedown）
*   2. 按住鼠标左键不松手，移动鼠标（onmousemove）盒子要跟着鼠标移动（鼠标跟随）
*   3. 等到达目的地后，松开鼠标（onmouseup）盒子要停在松开鼠标的地方；松开鼠标后，再移动鼠标盒子不能再跟随鼠标了。
* */

/*
* 思路：根据上面的功能描述，整个拖拽分为三个阶段；
*   1. 鼠标按下去的时候给盒子赋予了可以跟随鼠标移动的能力；我们需要监听盒子的onmousedown事件，可以跟着鼠标移动是给元素绑定了onmousemove事件；
*   2. 按住左键不放，移动鼠标会触发元素的onmousemove事件，事件触发时要计算盒子的位置，并且把位置设置给盒子，实现盒子跟随鼠标；
*   3. 松开鼠标后盒子不会再跟随鼠标移动，说明盒子跟随鼠标移动的能力在鼠标抬起时被取消。所以把onmousemove事件移除掉就可以了。
* */
let box = document.getElementById('box');

// 鼠标按下时开始拖拽
box.onmousedown = dragStart;

box.onmouseup = dragEnd;

// dragStart 开始拖拽
function dragStart(e) {
  // 通过自定义属性把鼠标的起始位置以及盒子的起始位置记录在被拖动元素的身上
  // 记录鼠标按下时鼠标的坐标
  this.startX = e.pageX;
  this.startY = e.pageY;

  // 记录盒子的初始left和top
  this.startL = parseFloat(this.style.left);
  this.startT = parseFloat(this.style.top);

  box.onmousemove = dragMove;
}

// dragMove 拖拽中移动鼠标
function dragMove(e) {
  // 在dragMove中要实现鼠标跟随

  // 1. 计算从鼠标按下到当前位置鼠标走过的路程
  let moveX = e.pageX - this.startX; // 从鼠标按下到当前位置水平方向的路程
  let moveY = e.pageY - this.startY; // 鼠标在竖直方向上走过的路程

  // 2. 计算元素到当前位置需要的left和top值
  let curL = this.startL + moveX;
  let curT = this.startT + moveY;

  // 3. 把curL和curT设置给元素
  box.style.left = curL + 'px';
  box.style.top = curT + 'px';
}

// dragEnd 结束拖拽
function dragEnd(e) {
  // 鼠标抬起时执行dragEnd方法，鼠标抬起后移除盒子的onmousemove事件；因为我们onmousemove的事件函数中做的鼠标跟随，所以取消onmousemove事件，元素就不会再跟随鼠标了
  box.onmousemove = null;
}