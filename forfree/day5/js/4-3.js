/*
* 1. 逻辑运算符 || && （| 按位或   & 按位与）
*  1.1  || 或者，两个中有一个true就行
*  1.2  && 并且，并且两个都是true才行
*
*  返回值属性：
*  1.3 || 如果第一个时true，就返回第一个，如果第一个false就返回第二个
*  1.4 && 如果第一个是false，就返回第一个，如果第一个true就返回第二个
*
* 2. ==和===：== 相对比较 === 绝对比较（不仅值要相等，类型也要相同）
*   == 比较时，如果不同数据类型会发生转化，转化规则：
*     2.1 数字 == 字符串: 字符串转数字
*     2.2 数字 == 布尔值：布尔值转成数字
*     2.3 字符串 == 布尔值：字符串、布尔值转成数字，然后再比较数字
*     2.4 null == undefined; true
*     2.5 null/undefined 和谁比都是false
*
*     2.6 对象 == 对象； 比堆内存地址，地址相同就是true，否则false
*     2.7 对象 == 字符串：对象转字符串，然后再比字符串
*     2.8 对象 == 数字：对象先转字符串，再转数字，最后比较数字
*     2.9 对象 == 布尔值：对象先转字符串，再转数字，布尔值转数字，最后比数字
*     2.10 NaN == NaN => false
*
* 3.for 循环 、for in 循环、break 、continue
*   3.1 for 循环：
*     3.1.1 声明初始值
*     3.1.2 判断循环条件，如果满足条件执行循环体，不满足退出；
*     3.1.3 设置累加
*     3.1.4 书写循环体
*   3.2 for in循环是遍历对象的，执行次数取决于对象的键个数。
*   
*
*
* 4. DOM对象、DOM对象两种获取方式；DOM对象：通过DOM api获取的页面中的html元素。这些元素在html中以标签的形式存在，在js中以对象的形式存在。
*   4.1 document.getElementById('box');  getElementById的上下文只能是document；通过id获取元素对象，如果获取到就返回对象，如果获取不到返回null
*   4.2 context.getElementsByTagName() 从指定的上下文中获取指定标签，如果找到就返回这些标签组成的类数组集合，如果找不到返回空集合。如果想获取集合中的某一个，要通过索引
*    var box = document.getElementById('box');
  console.log(box); // null
  var list = box.getElementsByTagName('li');
  console.log(list);
  var secondLi =list[1];
*
*
*
* */

if (Number('3px') == NaN) { // 只要看到条件中有NaN，就该想一想 NaN和NaN永远不相等
  alert('这个事不靠谱');
}

// for 循环遍历数组
// 顺序输出
var ary = [1, 2, 3, 4];
for (var i = 0; i < ary.length; i++) {
  if (i === 2) {
    continue; // continue 是跳过i = 2的这一轮循环
    // break; // break i = 2 及以后的循环都不执行。结束（退出）循环
  }
  console.log(ary[i]);
}
// 倒序输出
for (var i = ary.length - 1; i >= 0; i--) {
  console.log(ary[i]);
}

var obj = {
  x: 1,
  y: 2,
  z: 3
};
for (var key in obj) {
  console.log(obj[key]);
}








