/*
* 1. 理解DOM对象
* 2. 掌握getElementById、getElementByTagName
* 3. 掌握DOM对象上的属性id、style、className、onclick、innerHTML、innerText
* 3. 理解DOM对象和DOM对象集合，以及从集合中取出元素的方式
* 4. 理解DOM对象也是一个对象，可以向操作普通对象的方式来操作DOM对象。
*
* */

// 1. DOM对象：我们通过DOM相关api获取页面中的html元素。

// 2 document.getElementById() 通过ID获取页面中的html元素对象的。

var boxDiv = document.getElementById('box');
console.log(boxDiv);
console.dir(boxDiv);
/*
* 1. 参数：元素id
* 2. 返回值：如果获取到，就是元素id是指定id的DOM元素对象，如果获取不到返回null
*
* 注意：
* 1. document 是查找上下文，document是整篇html文档，而且getElementById查找的上下文只能是document
* 2. 几个重要属性
*   className: html元素的class名
*   id: html元素的id名
*   innerHTML: 以字符串形式存在的这个元素包裹的html标签
*   innerText: html元素包含的文本内容
*   onclick: html元素的点击事件属性
*   onmouseover: 鼠标滑过事件
*   onmouseout: 鼠标离开事件
*   style: html元素的行内样式
*   .....
*
*
* */


// 2. getElementsByTagName() 通过标签名获取元素对象集合。

var headerUl = document.getElementById('header');
var liList = headerUl.getElementsByTagName('li');
console.log(liList); // HTMLCollection

/*
* 语法：context.getElementsByTagName(标签名)
* 参数：标签名
* 返回值：从指定上下文中查找到的指定标签名所组成的元素集合。这个集合是一个类数组，同样有长度有索引。这个类数组中的每一项都是DOM元素对象。如果想获取里面的某一个，可以通过索引获取。如果你想操作集合中的某一个元素对象，我们需要先通过索引先拿到它，然后再操作（例如绑定事件、修改背景颜色）
*
*
*
*
* */

/*
for (var i = 0; i < liList.length; i++) {
  console.log(liList[i]);
  if (i === 0) {
    liList[i].style.backgroundColor = 'red';
  } else if (i === 1) {
    liList[i].style.backgroundColor = 'green';
  } else {
    liList[i].style.backgroundColor = 'yellow';
  }
}
*/

// 奇数行红色、偶数行绿色

for (var i = 0; i < liList.length;i++) {
  if (i % 2 === 0) {
    liList[i].style.backgroundColor = 'red';
  } else {
    liList[i].style.backgroundColor = 'green';
  }
}








