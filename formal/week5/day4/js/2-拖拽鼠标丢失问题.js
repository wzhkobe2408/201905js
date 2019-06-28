/*
* 拖拽鼠标丢失原因：
* 咱们写的拖拽并不是鼠标真的拖着盒子走，而是鼠标走鼠标的，盒子不断的跟随鼠标。
* 在鼠标移动的过程中，不断计算盒子应该出现的位置。这个计算是需要时间的，如果在计算的一段时间内，再次移动了鼠标，因为上一次还没计算完，盒子还没到达上一次的位置，此时移动鼠标就会出现盒子跟不上鼠标了，元素没跟上鼠标，再移动鼠标就不会触发元素的onmousemove事件，也就不会再跟随鼠标了。
*
* 当鼠标丢失元素后，再松开鼠标时，触发的就不是元素的onmouseup事件了，而我们在元素的onmouseup事件函数中移除元素的onmousemove的操作没执行，导致元素的onmousemove一直存在，这就导致了鼠标再次回到元素上面时，盒子还能跟着鼠标动。
*
* */

/*
* 解决方案：
*  1. 把元素和鼠标绑定在一起 元素对象.setCapture() 方法；当拖拽结束后，再解绑 元素对象.releaseCapture(); 【Chrome不兼容、IE和FF(FireFox)可以使用】
*  2. 事件委托解决问题；因为元素很小，只有鼠标在元素上面移动的时候才会触发这个元素的onmousemove事件，只要动的快鼠标和元素分开后就不会再触发元素的onmousemove事件。所以我们把onmousemove和onmouseup事件绑定给document；
*
*
* */

let box = document.getElementById('box');

// 鼠标按下时开始拖拽
box.onmousedown = dragStart;

document.onmouseup = dragEnd;

// dragStart 开始拖拽
function dragStart(e) {
  // this.setCapture(); // Chrome不兼容
  // 通过自定义属性把鼠标的起始位置以及盒子的起始位置记录在被拖动元素的身上
  // 记录鼠标按下时鼠标的坐标
  this.startX = e.pageX;
  this.startY = e.pageY;

  // 记录盒子的初始left和top
  this.startL = parseFloat(this.style.left);
  this.startT = parseFloat(this.style.top);

  // document.onmousemove = dragMove; // 直接把事件绑定给document，导致了一个dragMove函数中的this变成了document（事件函数中的this指向绑定当前事件的元素），但是我们需要dragMove中的this被拖拽的元素；所以需要我们修改dragMove中的this；
  document.onmousemove = dragMove.bind(this); // bind方法会返回一个修改this后的新函数【并不会让函数执行，call和apply修改this后会让函数执行】
}

// dragMove 拖拽中移动鼠标
function dragMove(e) {
  // console.log(this);
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
  // this.releaseCapture(); // Chrome不兼容
  // 鼠标抬起时执行dragEnd方法，鼠标抬起后移除盒子的onmousemove事件；因为我们onmousemove的事件函数中做的鼠标跟随，所以取消onmousemove事件，元素就不会再跟随鼠标了
  document.onmousemove = null;
}