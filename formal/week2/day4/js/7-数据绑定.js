/*
* 目标：
*   1. 掌握数据绑定的方式
*   2. 理解DOM回流和重绘
*
*
* */
let ul = document.getElementById('ul');
// 页面中的数据通常都不是写死的，大多数情况下都需要动态绑定数据；

var ary = [
	{
		name: '张三',
		age: 18
	},
	{
		name: '李四',
		age: 19
	},
	{
		name: '王五',
		age: 20
	}
];

// 1. 创建元素
// 利用动态创建DOM的方法，动态创建dom对象

for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	let newLi = document.createElement('li');
	newLi.innerHTML = 'name: ' + cur.name + ' age:' + cur.age;
	// ul.appendChild(newLi); // 所以在这里每次都插入一个新元素，就会引发一次DOM回流，性能开销很大，不推荐这种做法
}
// DOM回流（reflow）： 在页面中某个元素的插入、删除、位置、大小发送变化，那么会重新计算其他元素的位置，这样做非常消耗性能；

// DOM重绘：当页面中的元素的背景、字体颜色发送改变、那么浏览器需要对其进行重新绘制，这种现象称为重绘；

// 2. 利用文档碎片
// 文档碎片：一个通过DOM api创建的临时存放DOM元素的容器

//
let frg = document.createDocumentFragment(); // 创建文档碎片
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	let newLi = document.createElement('li');
	newLi.innerHTML = 'name: ' + cur.name + ' age:' + cur.age;
	frg.appendChild(newLi);
}
// ul.appendChild(frg);
// frg = null; // 当插入后，手动释放frg的内存（手动释放临存储对象的内存是一种优秀的编程习惯）

// 3. 拼接字符串+innerHTML（元素对象的innerHTML可以识别字符串中的html标签）
let str = '';
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	str += '<li>' + 'name: ' + cur.name + 'age: ' + cur.age + '</li>';
}
console.log(str);
ul.innerHTML = str;

// 4. 模板字符串

let tpl = ``;
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	tpl += `<li>
						 <strong>name: ${cur.name}</strong>
						  <strong>age: ${cur.age}</strong>
						</li>`
}
ul.innerHTML = tpl;
















