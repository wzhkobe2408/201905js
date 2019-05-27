/*
* 目标：
*   1. 掌握常用属性操作方法
*   2. 练习自定义属性保存保存数据
* */

// -> 这里的属性专只html行内属性
// -> 1. 动态设置行内属性: setAttribute(attr, value)
// 语法：元素对象.setAttribute(attr, value)
// 参数：属性名, 属性值 (字符串)
var attributeBox = document.getElementsByClassName('attr-box');
console.log(attributeBox);
// attributeBox.setAttribute('today', '2019-5-24'); // attributeBox 是元素集合，我们要操作元素对象，所以需要[索引]的方式把元素取出来
attributeBox[0].setAttribute('today', '2019-05-24');
attributeBox[0].setAttribute('name', '珠峰培训');
attributeBox[0].setAttribute('age', '10');

// -> 2. 获取属性值 ：getAttribute()
// 语法：元素对象.getAttribute(attr) attr是属性名
var courses = attributeBox[0].getAttribute('courses');
console.log(courses);

// -> 3. 删除行内属性 removeAttribute()
// 语法：元素对象.removeAttribute(attr)
attributeBox[0].removeAttribute('end');

// 学习这个属性的目的在于可以通过自定义属性保存数据。而且这些数据是在html行内可见的（是通过控制台可以看到）






