var wrapper = document.getElementById('wrapper');
var ulBox = document.getElementById('header');
var headerList = ulBox.getElementsByTagName('li');
var cardList = wrapper.getElementsByTagName('div');

// 2. 循环绑定事件
for (let i = 0; i < headerList.length; i++) {
  headerList[i].onclick = function () {
    for (var j = 0; j < headerList.length; j++) {
      headerList[j].className = '';
      cardList[j].className = '';
    }
    headerList[i].className = 'active';
    cardList[i].className = 'active';
  }
}