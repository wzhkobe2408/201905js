// 1. 获取元素
var ulBox = document.getElementById('liWrapper');
var liList = ulBox.getElementsByTagName('li');

// 2. 循环liList修改颜色、绑定事件

for (var i = 0; i < liList.length; i++) {
  // liList[i].className = 'bg' + (i % 2);
  liList[i].className = `bg${i % 2}`; // `` 模板字符串，也是字符串；两个反引号（ESC 下面的键）；如果写普通字符串，和单引号和双引号的字符串没区别；但是如果你想在模板字符串里面使用变量或者表达式需要使用 ${变量或者表达式} 但是 ${} 不会出现在最终字符串中. `bg0` `bg1`

  // 为每个li绑定鼠标移入事件、鼠标移出事件
  liList[i].myIndex = i;
  liList[i].onclick = function () {
    alert(`我是第${this.myIndex + 1}个li`)
  };
  liList[i].originClass = `bg${i % 2}`; // 通过自定义属性保存每个li的原始类名

  liList[i].onmouseover = function () {

    // 事件函数中的this，是绑定该事件的元素，即鼠标划入的li元素
    this.className = 'bg-hover'; // 这里不需要关心奇数行还是偶数行，都得变成黄颜色的背景
  };
  liList[i].onmouseout = function () {
    this.className = this.originClass; // 之前我们存储的是索引，但是这回我们存原始类名，所以鼠标划出时回复原始类名。
  }

}
