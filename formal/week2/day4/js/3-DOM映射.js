/*
* 目标：
*   1. 理解DOM映射
*   2. 理解常见情形
* */

// DOM映射：页面中的html元素和我们通过js的相关方法（getElementById/getElementsByTagName/getElementsByClassName/getElementsByName...）获取来的元素对象或者集合存在映射关系（一个改另一个跟着改）；

// DOM映射的常见情形：
// 1.
let box3 = document.getElementById('box3');
box3.style.backgroundColor = 'red'; // ? 为啥我修改一个对象的属性，页面中的元素的背景色就会变成红色？
// box3.style.backgroundColor = 'red'; 这行代码本质上讲box3对象对应的堆内存空间中的style属性下的backgroundColor属性值修改为 'red' ；但是因为DOM映射机制，页面中的id为box3的div元素和box3对象存在映射关系，我们修改这个对象，浏览器就用根据最新的值重新渲染这个元素；

var obj = {
  name: '100',
  backgroundColor: 'blue'
};
obj.backgroundColor = 'red'; // 修改obj页面中不会有任何动静，因为页面中没有一个元素和obj存在这样的映射关系；

// 2.
let box2 = document.getElementById('box2');
let hwList = box2.getElementsByTagName('li'); // hwList是我们通过dom相关方法获取来的元素集合

let hwAry = utils.arrLikeToAry(hwList); // 把li集合转成一个数组
hwAry.sort((a, b) => a.getAttribute('price') - b.getAttribute('price'));

hwAry.forEach((item, index) => {
  // item 就是hwAry中的每个li元素
  // debugger; // 断点
  box2.appendChild(item); // item 不是新创建出来的，而是之前存在于页面中的li元素；
});

// ? 为啥页面中还是4个，不是8个呢？
// hwList这个集合是通过DOM相关方法获取来的元素集合，集合的每一项都是页面中的li元素对象，而元素对象也是对象。其实集合存储li元素的堆内存地址，所以我们在类数组转数组的时候，只不过是把li的堆内存地址存储到了数组中（数组中的li元素不是新造的，就是原来类数组中的li，也就是页面中已经存在的4个li）。appendChild方法是向容器末尾追加元素的，在追加时，如果发现这个元素是已经存在于容器中的元素，此时appendChild不会重新克隆一份新的，而是把原来的元素移动到容器末尾。

// 3.















