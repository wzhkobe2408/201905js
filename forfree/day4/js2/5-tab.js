// 1. 获取元素对象
var wrapper = document.getElementById('wrapper');
var ulBox = document.getElementById('header');
var headerList = ulBox.getElementsByTagName('li'); // 获取所有的选项卡的头
var cardList = wrapper.getElementsByTagName('div'); // 获取所有的选项卡的卡片

headerList[0].onclick = function () {
  for (var i = 0; i < headerList.length; i++) {
    headerList[i].className = '';
    cardList[i].className = '';
  }

  headerList[0].className = 'active'; // className就是元素对象在html中的class名，className又是元素对象的一个属性，所以给这个属性赋值，就是修改元素对象在html中的class名。
  cardList[0].className = 'active';
};
headerList[1].onclick = function () {
  // 1. 让被点击的选项卡头选中，并且移除其他选项卡头的选中样式
  // 清除其他两个的样式类名，我们先把所有li的active 类名都清除了，然后再给点击的这个添加active类名

  for (var i = 0; i < headerList.length; i++) {
    headerList[i].className = '';
    cardList[i].className = '';
  }

  headerList[1].className = 'active';
  // 2. 让cardList中对应索引的div展示出来，同时隐藏其他div;
  cardList[1].className = 'active';

};
headerList[2].onclick = function () {
  for (var i = 0; i < headerList.length; i++) {
    headerList[i].className = '';
    cardList[i].className = '';
  }

  headerList[2].className = 'active';
  cardList[2].className = 'active';
};