/*
* 目标：
*   1. 理解html文档中所有内容都是节点；
*   2. 节点间存在类似家谱中的节点关系；
*   3. 掌握关键节点：元素、注释、文本、document的nodeType、nodeName、nodeValue
*   4. 通过节点关系可以获取元素对象或者，这些集合或者对象操作起来和DOM对象集合或者对象没有区别
* */

// 1-> 节点：html文档中所有的内容都是节点（元素标签、注释、文本、document、行内属性...）;节点是通过节点间关系属性来描述节点间关系的，我们描述是为了获取元素对象或者其他节点（文本、注释等）

// 2-> 各种节点的特征（重点记忆nodeType）
// 节点     nodeType     nodeName    nodeValue
// 元素节点    1         大写标签名     null
// 文本节点    3           #text       文本内容
// 注释节点    8           #comment    注释内容
// document   9           #document    null
// .....

// 3 -> 节点间属性：
var parent = document.getElementById('parent');
var second = document.getElementById('second');

// 3.1 childNodes 获取当前元素所有的子节点(子节点涵盖了所有子节点，包含文本、注释..元素)
var childNodes = parent.childNodes;
// console.log(childNodes);
// 注意：空格和换行符（回车）都是文本节点

// 3.2 children 获取当前元素所有【元素子节点】（不含注释和文本其他内容）
var children = parent.children;
// console.log(children);

// 3.3 firstChild 获取当前元素的第一个孩子节点（不一定是元素）
var firstChild = parent.firstChild;
// console.log(firstChild); // 长子

// 3.4 firstElementChild 获取当前元素中第一个【元素子节点】
var firstElementChild = parent.firstElementChild;
// console.log(firstElementChild);

// 3.5 lastChild 获取当前元素的最后一个孩子节点（不一定是元素）
// console.log(parent.lastChild);

// 3.6 lastElementChild 获取当前元素的最后一个【元素子节点】
// console.log(parent.lastElementChild);
parent.lastElementChild.onclick = function () {
  // 通过节点关系描述的节点，就是DOM对象，和操作普通DOM对象一样
  alert('被发现了')
};

// 3.7 parentNode 获取当前节点的父亲节点（是一个元素对象）
// console.log(second.parentNode); // parent

// 3.8 previousSibling 获取当前节点的上一个哥哥节点
// console.log(second.previousSibling); // 换行符

// 3.9 previousElementSibling 获取当前节点的上一个【元素哥哥】节点
// console.log(second.previousElementSibling); // <div>11</div>

// 3.10 nextSibling 获取下一个弟弟节点（不一定是元素节点）
console.log(second.nextSibling); // #text

// 3.11 nextElementSibling 获取下一个【元素弟弟节点】
console.log(second.nextElementSibling);

// !! 通过节点间关系描述出来的元素，和我们通过js方法从页面中获取的元素对象是一样的。我们操作这些节点和操作普通DOM对象是一样的。
var domObj = second.nextElementSibling.firstElementChild;
domObj.style.backgroundColor = '#00b38a';
domObj.onclick = function () {
  alert('祝你生活充满绿色');
};

var strong = second.parentNode.previousElementSibling.firstElementChild.firstElementChild;
console.log(strong);



