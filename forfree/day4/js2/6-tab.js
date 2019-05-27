//1. 获取元素对象
var wrapper = document.getElementById('wrapper');
var ulBox = document.getElementById('header');
var headerList = ulBox.getElementsByTagName('li'); // 获取所有的选项卡头
var cardList = wrapper.getElementsByTagName('div'); // 获取所有的选项卡卡片

// 2. 循环绑定事件
for (var i = 0; i < headerList.length; i++) {
  // console.log(i);
  headerList[i].myIndex = i; // 因为在点击事件函数中i是3，但是在事件函数外，i该是几就是几。所以我们通过自定义属性的方式把i的值记录到循环时的li上面
  headerList[i].onclick = function () {
    // 把所有li的active类名、所有div的active类名清除掉
    for (var j = 0; j < headerList.length; j++) {
      headerList[j].className = '';
      cardList[j].className = '';
    }

    // 给点击的li和对应的div加上 active类名
    
    // console.log(headerList[i]); // undefined 我们发现访问元素集合的不存在索引时会得到一个undefined，所以我们猜测是索引i出了问题，所以我们需要检验索引 i
    // console.log(cardList[i]);
    // console.log(i); // 因为事件触发时，for已经执行完了 ，而for执行完，i = 3；所以我们访问 headerList[3] 就会得到undefined，所以再设置className时，就会报错
    // headerList[i].className = 'active'; // Uncaught TypeError: Cannot set property 'className' of undefined 【未能捕获的类型错误：不能设置 undefined 的 className 属性】 js是单线程的，一旦报错，从报错的那一行起后面的代码就不再执行了
    // cardList[i].className = 'active';

    // ? 如何取得我们之前通过自定义属性存储的myIndex的值？通过 this 关键字

    // console.dir(this); 点击事件中的this就是你点击的元素对象，即此处被点击的li
    var myIndex = this.myIndex;
    console.log(myIndex);
    headerList[myIndex].className = 'active';
    cardList[myIndex].className = 'active';
  }
}
console.log(headerList);