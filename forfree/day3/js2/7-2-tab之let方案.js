var wrapper = document.getElementById('wrapper');
var header = document.getElementById('header');
var tabList = header.getElementsByTagName('li');
var divList = wrapper.getElementsByTagName('div');


// 1. let解决方案： es6的let可以形成块级作用域，会保存每次循环时i的值
for (let i = 0; i < tabList.length; i++) {
  tabList[i].onclick = function () {
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].className = '';
      divList[j].className = '';
    }
    tabList[i].className = 'active';
    divList[i].className = 'active';
  }
}