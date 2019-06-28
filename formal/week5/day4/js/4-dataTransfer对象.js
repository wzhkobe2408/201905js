// 在被拖拽元素和放置元素之间传递数据，需要使用dataTransfer对象。
// dataTransfer 在事件对象中

let litBox = document.getElementById('litBox');
let bigBox = document.getElementById('bigBox');

// 1. 设置数据
litBox.ondragstart = function (e) {
  // e.dataTransfer.setData('key', 'value'); // 保存数据
  e.dataTransfer.setData('id', this.id); // 把元素的id通过dataTransfer对象的setData方法保存起来
};

bigBox.ondragover = function (e) {
  e.preventDefault(); // 想使用放置元素的ondrop事件，需要阻止默认行为
};

bigBox.ondrop = function (e) {
  // 获取dataTransfer中的数据
  // e.dataTransfer.getData('key') // 获取保存在dataTransfer中的数据
  let id = e.dataTransfer.getData('id');
  console.log(id);
};
