var wrapper = document.getElementById('wrapper');
var header = document.getElementById('header');
var tabList = header.getElementsByTagName('li');
var divList = wrapper.getElementsByTagName('div');


// 1. 闭包解决方案： 利用函数执行时形成的私有作用域不销毁保存每次i的值
for (var i = 0; i < tabList.length; i++) {
  (function (index) {
    tabList[index].onclick = function () {
      for (var j = 0; j < tabList.length; j++) {
        tabList[j].className = '';
        divList[j].className = '';
      }
      tabList[index].className = 'active';
      divList[index].className = 'active';
    }
  })(i);
}