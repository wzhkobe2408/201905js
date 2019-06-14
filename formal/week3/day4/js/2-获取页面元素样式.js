/*
* 目标：
*   1. 理解style属性智能或者设置元素的行内属性
*   2. 掌握获取元素计算生效的样式及其兼容性处理
* */

let box = document.getElementById('box');

// 获取、设置元素的样式
// box.style.xxx
// box.style.xxx = xxx;

// 1. ele.style （可读可写）只能获取或者设置行内样式

// 2. 获取浏览器最终计算生效后的样式

// window.getComputedStyle() 方法用于获取元素对象经计算生效后的样式；
// 语法：window.getComputedStyle(元素对象, 伪类)
// 如果不需要伪类：window.getComputedStyle(元素对象, null) 不需要写伪类时，第二个参数写null
// 返回值：一个对象，对象中包含该元素所有的样式，并且该对象是 CSSStyleDeclaration 的实例

let styles = window.getComputedStyle(box, null);
// console.log(styles);
console.log(styles.width); // 200px
console.log(styles.height); // 300px
console.log(styles.marginTop); // 10px css连字符样式需要使用驼峰命名法
console.log(styles['margin-top']); // 10px 不用驼峰命名法需要这样写

// 获取伪类样式：
let fakeStyles = window.getComputedStyle(box, 'before');
// console.log(fakeStyles);
console.log(fakeStyles.content); // hello
console.log(fakeStyles.color); // rgb(0, 255, 255)
console.log(fakeStyles.height); // auto

// IE 低版本6-8不支持这个语法
// IE中有的元素对象获取计算过的生效的样式：
// 元素对象.currentStyle 属性，该属性是一个对象，上面记录这个该元素生效的样式

// 获取生效的样式：
// 标准浏览器下： window.getComputedStyle方法
// window.getComputedStyle(元素对象, 伪类) 返回一个对象

// IE浏览器下：
// 元素对象.currentStyle 属性
// 该属性值是一个对象，里面存储了该元素所有的样式


























