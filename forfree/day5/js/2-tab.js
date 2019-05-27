// 1. 获取元素对象
var wrapper = document.getElementById('wrapper'); // 获取id为wrapper的这个div
var ulBox = document.getElementById('header'); // 获取id我header的ul
var headerList = ulBox.getElementsByTagName('li'); // 获取所有的选项卡头的li
var cardList = wrapper.getElementsByTagName('div'); // 获取所有选项卡卡片

// 点击 第一个 li  展示 第一 div
// 点击 第二个 li   展示 第二 div
// 点击 第三个 li   展示 第三 div
// 我们发现选中li和要展示的div的索引是一样的

// 2. 绑定点击事件，用for loop 给每个li绑定点击事件

for (var i = 0; i < headerList.length;i++) {
  headerList[i].myIndex = i; // 因为在事件函数中i已经是3了，所以只能在事件函数外，for进行的过程中，第一次循环的时候i是0，第二次循环i是1，第三次循环的时候i是2，所以此时我们把索引值保存在每个li上面，就是每个li记录自己的索引
  headerList[i].onclick = function () {
    // console.log(i);
    // 2.1 把所有选项卡头li和选项卡卡片div的active类名移除掉
    for (var j = 0; j < headerList.length; j++) {
      headerList[j].className = '';
      cardList[j].className = '';
    }
    // console.log(i); // 3  因为点击事件触发的时候，for已经执行完了，索引i就是3了。但是我们希望你点的索引为几的li，这个i就是几。
    // 2.2 给被点击的li添加active类名，还要给和被点击li对应的div
    // headerList[i].className = 'active'; // Uncaught TypeError: Cannot set property 'className' of undefined 【未能捕获的类型错误：不能设置undefined 的className属性】 根据这个报错可以得出 headerList[i] 是undefined
    // 因为headerList是一个类数组集合（DOM集合），又因为访问类数组不存在的索引，会得到一个undefined，所以我们推测 i 有问题
    // cardList[i].className = 'active';
    console.log(this); // 事件函数中的this，就是绑定这个事件的元素
    var myIndex = this.myIndex;
    this.className = 'active'; // 因为this就是你点击的li，所以等效于 headerList[myIndex].className = 'active';
    cardList[myIndex].className = 'active';
  }
}