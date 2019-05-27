/*
* 1. DOM对象、DOM对象的获取方式
*   DOM对象：用DOM api获取页面中的html元素，在html中以标签的形式存在，在js中以对象的形式存在；
*   1.1 document.getElementById() 通过id获取对象
*   1.2 document.getElementsByTagName() 通过标签名获取元素集合
*   1.3 context.getElementsByClassName() 通过class类名获取元素集合
*   1.4 context.getElementsByName() 通过name属性获取元素集合
*   1.5 document.documentElement 获取html元素自身
*   1.6 document.body 获取body
*   1.7 document.documentElement.clientWidth || document.body.clientWidth
*   1.8 document.documentElement.clientHeight || document.body.clientHeight
*   1.9 context.querySelector(selector) 获取一个
*   1.10 context.querySelectorAll(selector) 获取多个
*
* 2. 节点、节点关系
*   节点：html中任何内容都是节点；通过节点间关系获取元素对象的。
*   节点        nodeType     nodeName      nodeValue
*   元素节点       1           大写标签名     null
*   文本节点       3           #text         文本内容
*   注释节点       8           #comment      注释内容
*   document      9           #document      null
*
*   节点间关系：
*     2.1 childNodes 获取当前元素所有的子节点集合
*     2.2 children  获取当前元素的所有【元素子节点】集合
*     2.3 firstChild 获取当前元素的第一个孩子
*     2.4 firstElementChild 获取当前元素的第一个【元素子节点】
*     2.5 lastChild 获取当前元素的最后一个子节点
*     2.6 lastElementChild 获取当前元素的最后一个【元素子节点】
*     2.7 parentNode 获取当前节点的父亲节点（一个对象）
*     2.8 previousSibling 获取上一个哥哥节点
*     2.9 previousElementSibling 获取上一个【元素哥哥节点】
*     2.10 nextSibling 获取下一个弟弟节点
*     2.11 nextElementSibling 获取下一个【元素弟弟节点】
*
* 3. DOM动态操作
*   3.1 document.createElement('p') 动态创建一个元素，返回新建DOM对象
*   3.2 父级容器.appendChild(元素对象)
*   3.3 父级容器.insertBefore(newEle, oldEle);
*   3.4 父级容器.removeChild(被删除的元素)
*   3.5 curEle.cloneNode(isDeep) isDeep 是否深度复制，默认是false，如果true表示把子孙代节点一起克隆
*
* 4. 属性操作（html行内属性）
*   4.1 元素对象.setAttribute(attr, value)  设置元素的行内属性attr，值是value
*   4.2 元素对象.getAttribute(attr) 获取属性为attr的属性值
*   4.3 元素对象.removeAttribute(attr) 移除属性attr
*
*
* 5. 排序算法
*   1. 冒泡排序
*   2. 快速排序
*   3. 插入排序（假设思想）
* */
