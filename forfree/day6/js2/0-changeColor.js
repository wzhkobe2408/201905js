// 1. 获取元素
var ulBox = document.getElementById('liWrapper');
var liList = ulBox.getElementsByTagName('li');

// 2. 循环liList修改颜色、绑定事件

for (var i = 0; i < liList.length; i++) {
  // liList[i].className = 'bg' + (i % 2);
  liList[i].className = `bg${i % 2}`; // `` 模板字符串，也是字符串；两个反引号（ESC 下面的键）；如果写普通字符串，和单引号和双引号的字符串没区别；但是如果你想在模板字符串里面使用变量或者表达式需要使用 ${变量或者表达式} 但是 ${} 不会出现在最终字符串中. `bg0` `bg1`

  // 为每个li绑定鼠标移入事件、鼠标移出事件
  liList[i].myIndex = i; // 通过自定义属性保存每个li的索引

  liList[i].onmouseover = function () {
    // 事件函数中的this，是绑定该事件的元素，即鼠标划入的li元素
    this.className = 'bg-hover';
  };
  liList[i].onmouseout = function () {
    // 我们需要根据这一行是偶数行还是奇数行回复成不同背景颜色。这时候我们需要一个值帮我们判断这一行是奇数还是偶数;
    // 事件时异步的，当事件触发的时候for 循环执行完了，i已经是  liList.length 了 ，所以这里面的i不能用了。但是我们仍然需要这个索引，所以应该在事件函数外面保存一下。
    var myIndex = this.myIndex;
   /* if (myIndex % 2 === 0) {
      this.className = 'bg0'
    } else {
      this.className = 'bg1';
    }*/

   this.className = `bg${myIndex % 2}`;
  }

}

var training = '珠峰培训';
var str = `I am learning JS in ${training}`; // 其他语言中也有这种语法，shell 里面也有这个
console.log(str);