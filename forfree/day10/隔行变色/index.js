// 1. 获取元素
var ulBox = document.getElementById('wrapper');
var liList = ulBox.getElementsByTagName('li');

// 2. 遍历liList，根据索引是奇偶数设置不同样式类名；同时还要绑定划出划出的事件
for (var i = 0; i < liList.length; i++) {
  liList[i].className = 'bg' + (i % 2); // i 是偶数，bg0，i是奇数 bg1
  liList[i].bgClass = 'bg' + (i % 2); // 自定属性保存类名
  // 绑定划入事件
  liList[i].onmouseover = function () {
    this.className = 'bg-hover';
  };
  // 绑定划出事件
  liList[i].onmouseout = function () {
    this.className = this.bgClass; // 取出之前我们自定属性保存的类名，并将其设为当前的class名
  }
}