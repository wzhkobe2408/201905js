
var wrapper = document.getElementById('wrapper'); 
var ulBox = document.getElementById('header'); 
var headerList = ulBox.getElementsByTagName('li'); 
var cardList = wrapper.getElementsByTagName('div'); 

for (var i = 0; i < headerList.length;i++) {
  headerList[i].myIndex = i; 
  headerList[i].onclick = tabClick; // tabClick 是函数名，而函数名就代表这个函数，把函数名赋值给对象的事件onclick等效于把函数本身赋值给对象的事件属性。事件函数是比较特殊的，事件函数不需要我们加小括号执行，而是当用户触发元素点击的时候，浏览器会执行这个函数
}

function tabClick() {
  for (var j = 0; j < headerList.length; j++) {
    headerList[j].className = '';
    cardList[j].className = '';
  }

  var myIndex = this.myIndex;
  this.className = 'active'; 
  cardList[myIndex].className = 'active';
}