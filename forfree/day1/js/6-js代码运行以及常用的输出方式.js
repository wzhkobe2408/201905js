/*
* 目标：
*   1. 掌握js代码的运行方式
*   2. 掌握js常用的输出方式
*     2.1 alert() 方法
*     2.2 console.log() 方法
*     2.3 innerHTML/innerText 属性 及二者区别
* */

var a = 10;
var b = 15;
var c = a + b;

// 1. alert()函数 以浏览器弹出框的形式输出；
// alert(c); // alert是一个函数，小括号的作用是执行alert这个函数。alert() 读作：alert函数执行。执行就是浏览器里面的alert的代码跑一遍，执行的结果就是弹出一个弹出框；我们需要把输出的内容写在小括号里面；

// alert('今天很热');

// 2. console.log()函数 输出在浏览器控制台的日志。
// console.log(c); // 把想要输出的内容写在小括号里；console.log 也是一个函数，同样后面的小括号也是让这个函数执行。执行的结果就是把内容输出到控制台。
// 写在函数名后面的小括号叫做 执行。

// 3. innerHTML属性：输出到页面元素中；
var box = document.getElementById('box');
// box.innerHTML = c; // 用innerHTML方式输出，需要使用 给这个属性赋值

// 4. innerText属性：输出到页面元素中：
// box.innerText = c;

// innerHTML和innerText的区别

// box.innerHTML = '<h1>innerHTML</h1>'; // 不是一个html标签，只是一个长的很像标签的字符串
// box.innerText = '<h1>innerText</h1>';
// innerHTML可以识别字符串里面的标签，最中也是把这些识别到标签以html的形式插入到页面中。但是innerText不管你里面写什么，都不会帮你处理，你写了啥，页面中输出就是啥

// 2. js代码解析执行：从上到下，从左到右








