/*
* 目标：
*   1. 理解style属性智能或者设置元素的行内属性
*   2. 掌握获取元素计算生效的样式及其兼容性处理
* */

// var box = document.getElementsByClassName('box')[0]; // getElementsByClassName获取元素集合（类数组），要取得这个集合中的某一项，需要用索引

// 1. 获取元素的样式
// 1.1 元素对象.style.xxxx 只能获取元素的行内样式
// console.log(box.style.height);
// console.log(box.style.width);
// console.log(box.style.padding);

// 2. 获取元素所有计算生效的样式
// window.getComputedStyle(元素, 伪类)
// let styles = window.getComputedStyle(box, null); // 第二个参数不用伪类时传null
// console.log(styles);
// console.log(styles instanceof CSSStyleDeclaration); // true
// console.log(styles.width);
// console.log(styles.padding);
// console.log(styles.paddingTop);
// console.log(styles.paddingBottom);
// console.log(styles.opacity);
// console.log(styles.height); // 300px 因为行内样式的权重比style标签中的内嵌样式权重高，所以300px是计算生效的样式。

// 2.2 获取伪类的样式:
// var fakeStyle = window.getComputedStyle(box, 'before'); // 第二个参数传伪类
// console.log(fakeStyle.content);
// console.log(fakeStyle.color);
// console.log(fakeStyle.fontSize);

// IE 低版本不兼容
// https://caniuse.com/ 查询css特性、js特性浏览器兼容性问题的网站

// IE有一个属性获取当前元素计算生效的样式： currentStyle
// 元素对象.currentStyle 【currentStyle是个属性不能执行】
// var box = document.getElementById('box');
// var result = box.currentStyle;
// console.log(result);

// 获取元素计算生效后的样式：
// 1. 标准浏览器 window.getComputedStyle(元素对象, 伪类【不需要伪类时写null】)；返回一个对象，对象中都是计算生效的样式，返回的对象是只读的，不能修改里面的样式；

// 2. IE低版本 对象.currentStyle 属性，属性值是一个对象，对象存储的是这个元素计算生效后的样式

// 写一个方法，获取元素对象的计算生效的样式，兼容IE浏览器
