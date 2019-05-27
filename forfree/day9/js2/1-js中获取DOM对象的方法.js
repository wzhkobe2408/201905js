/*
* 目标：
*   1. 掌握js中获取DOM对象的方法及返回值类型
*
* */

// 1-> DOM （Document Object Model 文档对象模型）提供API操作页面中的html元素
// DOM对象（元素对象、DOM元素对象）：通过DOM API获取来的html元素（集合）；

// 2 -> DOM 方法
// 2.1 document.getElementById() 通过id获取页面中的元素的
/*
* 参数：id，
* 返回值：如果获取到就是带有这个id的元素对象，如果获取不到就是null
* 注意：
*   1. 如果页面中有重复id，获取第一个元素
*   2. getElementById 的上下文只能是document
* */
var parent = document.getElementById('parent');
// console.log(parent);

// 2.2 context.getElementsByTagName()
/*
* 参数：标签名
* 返回值：如果获取到，就是context下找到的元素之和（如果只有一个也是集合）；如果获取不到就是空集合。集合是一个类数组，有索引、有长度。如果想获取集合中的某一项，需要[索引]的方式获取。
* 注意：
*   context 你想获取谁下面的元素，谁就是context；
* */
var lis = parent.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]); // 获取第一个li
// console.log(lis[1]); // 获取第二个li
// console.log(lis[lis.length - 1]);

// 2.3 context.getElementsByClassName() 在上下文中，获取带有指定class类名的元素；
/*
* 参数：是元素的class名（不是选择器 .box）
* 返回值：上下文中带有指定类名的元素组成的集合（类数组），如果获取不到会返回空集合
* 注意：context不是固定的，你要获取谁下面带有指定类名的元素，谁就是context; 如果你用document也没问题，就是查找的范围大
* 
* */
var child = parent.getElementsByClassName('child'); //
// console.log(child);
var someBox = document.getElementsByClassName('some-box');
// console.log(someBox);

/*
* 2.4 document.getElementsByName() 根据页面中元素的name属性获取元素。通常我们给表单元素添加name属性，所以这个方法大多数情况下是获取表单元素（input、select、radio、checkbox、form....）
* 参数：表单的name属性
* 返回值：带有name属性值的元素集合，获取不到时是空集合。
* */
// var inputs = document.getElementsByName('inputField');
// console.log(inputs);

/*
* 2.5 document.documentElement 获取<html></html>元素 
* 注意：这不是一个方法，是一个属性
* */
console.log(document.documentElement);

/*
* 2.6 document.body 获取body
* 注意：这不是一个方法，是一个属性；属性和方法的区别，方法需要执行才能得到结果，属性直接访问就是结果
* */
// console.log(document.body);

// 获取浏览器可视窗口的宽高
var winW = document.documentElement.clientWidth || document.body.clientWidth;
var winH = document.documentElement.clientHeight || document.body.clientHeight;
console.log(winW, winH);

/*
* 2.7 根据选择器获取元素对象(在移动端随意用，在pc端不能在IE8一下用，不兼容)
*   context.querySelector('selector'); 根据选择器获取一个元素对象
*   context.querySelectorAll('selector'); 根据选择器获取所有符合选择器的元素对象，返回集合
*
* */
var single = document.querySelector('.some-box');
console.log(single);
var couple = document.querySelectorAll('.some-box');
console.log(couple);











  
  
  