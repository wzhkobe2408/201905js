<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>
## 页面元素的计算样式、js盒子模型属性进阶——跑马灯练习、图片延时加载

### 一、封装win方法

+获取或者设置浏览器的窗口的盒模型属性：

``` javascript
let winW = document.documentElement.clientWidth || document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;
```

+ 因为获取浏览器的窗口的盒子模型属性都需要兼容写法，为了提高效率封装一个方法；

``` javascript
function win(attr, val) {
	if (typeof val !== "undefined") {
		// 传2个值的时候是设置，传一个值是获取
		document.documentElement[attr] = document.body[attr] = val;
	}
	return document.documentElement[attr] || document.body[attr];
}
console.log(win('scrollTop'));
console.log(win('screenTop', 1000));
```

### 二、跑马灯

+ html代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		.box {
			width: 800px;
			height: 200px;
			overflow: hidden;
			border: 1px dashed deeppink;
			margin: 40px auto;
		}
		.box ul {
			height: 200px;
		}
		.box ul li {
			float: left;
			width: 200px;
			height: 200px;
			overflow: hidden;
		}
		.box ul li img {
			width: 100%;
			height: 100%;
		}
		.clearfix:after {
			display: block;
			content: '';
			height: 0;
			visibility: hidden;
			clear: both;
		}
	</style>
</head>
<body>
<div class="box">
	<ul class="ulBox clearfix" id="ulBox">
		<li><img src="./img/1.jpg" alt=""></li>
		<li><img src="./img/2.jpg" alt=""></li>
		<li><img src="./img/3.jpg" alt=""></li>
		<li><img src="./img/4.jpg" alt=""></li>
	</ul>
</div>

<script src="1-跑马灯.js"></script>
</body>
</html>
```

+ js代码

``` javascript
let ul = document.querySelector('#ulBox');
let box = document.querySelector('.box');

ul.innerHTML += ul.innerHTML; // 为了实现无缝轮播需要把ul里面的所有li复制一份放到ul中；

ul.style.width = '1600px';

let timer = setInterval(() => {
	box.scrollLeft += 1;
	if (box.scrollLeft >= 800) {
		// 当满足这个条件时，说明此时正好滚出去4个li，在box里展示的正是我们复制出来的4个li，这个时候需要把box.scrollLeft设置成0，但是因为设置成0时展示的也是这4张图片，给人的感觉好像没有换，所以还是无缝的轮播的
		box.scrollLeft = 0;
	}
}, 10);
```

### 三、计算生效的样式

#### 1. ele.style （可读可写）只能获取或者设置行内样式

``` javascript
let box = document.getElementById('box');
```

+ 获取、设置元素的样式

``` javascript
box.style.xxx
box.style.xxx = xxx;

```

#### 2. 获取浏览器最终计算生效后的样式

+ window.getComputedStyle() 方法用于获取元素对象经计算生效后的样式；
+ 语法：window.getComputedStyle(元素对象, 伪类)
+ 如果不需要伪类：window.getComputedStyle(元素对象, null) 不需要写伪类时，第二个参数写null
+ 返回值：一个对象，对象中包含该元素所有的样式，并且该对象是 CSSStyleDeclaration 的实例

+ 获取元素样式
``` javascript
let styles = window.getComputedStyle(box, null);
console.log(styles);
console.log(styles.width); // 200px
console.log(styles.height); // 300px
console.log(styles.marginTop); // 10px css连字符样式需要使用驼峰命名法
console.log(styles['margin-top']); // 10px 不用驼峰命名法需要这样写
```

+ 获取伪类样式：

``` javascript
let fakeStyles = window.getComputedStyle(box, 'before');
console.log(fakeStyles);
console.log(fakeStyles.content); // hello
console.log(fakeStyles.color); // rgb(0, 255, 255)
console.log(fakeStyles.height); // auto
```

+ IE 低版本6-8不支持这个语法

+ IE中有的元素对象获取计算过的生效的样式：
+ 元素对象.currentStyle 属性，该属性是一个对象，上面记录这个该元素生效的样式

+ 获取生效的样式：
    标准浏览器下： window.getComputedStyle方法; window.getComputedStyle(元素对象, 伪类) 返回一个对象
    IE浏览器下：元素对象.currentStyle 属性; 该属性值是一个对象，里面存储了该元素所有的样式

#### 3. 封装getCss方法，并且处理单位和IE兼容

``` javascript
// 优化：去除单位、同一 透明度样式：
function getCss(ele, attr) {
	var value;
	if ('getComputedStyle' in window) {
		value = window.getComputedStyle(ele, null)[attr];
	} else {
		// 判读获取的属性是否是透明度，如果是需要给IE的透明度属性进行特殊处理
		if (attr === 'opacity') {
			value = ele.currentStyle['filter'];
			var reg2 = /^alpha\(opacity=(.+)\)$/;
			value = reg2.exec(value)[1] / 100;
		} else {
			value = ele.currentStyle[attr];
		}
	}

	// 去除单位: 只有是数字带单位的情况下才需要去除单位
	var reg = /^-?\d+(\.\d+)?(px|pt|rem|em)$/i;
	if (reg.test(value)) {
		value = parseFloat(value);
	}
 }
console.log(getCss(box, 'width'));
console.log(getCss(box, 'opacity'));

```

四、图片懒加载

#### 图片延时加载（图片懒加载）
真实项目中，为了提升页面的加载速度，我们一般将图片处理成延时加载；

+ 效果：
页面中的图片在页面刚刚打开时，浏览器会立刻去请求这张图片资源。但是延时加载是页面打开时，不是立刻去加载图片，而是在某个何时的时机去加载这张图片（一般是图片进入浏览器可视区域或者即将进入可视区域）；

+ 原理：
img标签有一个src属性，值是这张图片的资源路径；只要浏览器检测到img有这个属性就会立刻去加载，为了实现延时加载，不直接给img标签设置src属性，而是选择自定义其他属性保存其图片资源路径；等到何时的时机，再获取这个自定义属性值，再赋值给图片的src属性，此时，浏览器会根据这个src去加载图片。

#### 1. 单张图片延时加载

+ 单张图片延时加载：
+ 时机：图片即将进入浏览器可视窗口
+ 监听页面的滚动事件，当页面滚动时，计算图片什么时候进入可视窗口；
+ 进入浏览器可视窗口条件：(图片上外边距离页面顶端的距离 - 浏览器的可视窗口的高度 - 页面纵向滚动条卷去的距离) <= 0

+ html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		.top {
			width: 500px;
			margin: 0 auto;
			height: 1000px;
			border: 10px solid #00b38a;
		}
		.img-wrapper {
			width: 500px;
			min-height: 200px;
			border: 1px solid #000;
			margin: 100px auto;
		}
	</style>
</head>
<body>
<div id="top" class="top">
	这个盒子就是用来占位的，我是一个很长很长的盒子
</div>
<div class="img-wrapper">
	<img data-src="img/1.jpg" alt="" id="first">
</div>
<div class="img-wrapper">
	<img data-src="img/2.jpg" alt="">
</div>
<div class="img-wrapper">
	<img data-src="img/3.jpg" alt="">
</div>

<script src="js/utils.js"></script>
<script src="js/3-多张图片延时加载.js"></script>
</body>
</html>
```

``` javascript
// 1. 获取该图片
let singleImg = document.querySelector('#first');
// 2. 获取浏览器可视窗口的高度
let winH = utils.win('clientHeight');
// 3. 监听window的onscroll事件，在事件函数中计算图片是否进入浏览器的可视窗口

window.onscroll = function () {
	// 1. 获取图片的自定义属性保存的图片资源路径
	let dataSrc = singleImg.getAttribute('data-src');
	// 2. 获取当前页面滚动条卷去的高度
	let winScrollTop = utils.win('scrollTop');
	// 3. 获取图片的上外边框距离页面顶部的距离；
	let imgOffsetTop = utils.offset(singleImg).top;

	// 4. 判断图片是否进入浏览器的可是窗口
	if (imgOffsetTop - winH - winScrollTop <= 0) {
		// 满足这个条件说明图片即将或者已经进入了可视窗口，此时给img的src赋值
		singleImg.src = dataSrc;
	}
};

```

#### 优化

真实项目中，因为网络或者其他因素可能导致图片加载失败，所以一般不是直接给图片赋值，而是先动态创建一个img标签，用动态创建的img去尝试加载，如果加载成功就再给页面中的图片src属性赋值。

``` javascript
// 1. 获取该图片
let singleImg = document.querySelector('#first');
// 2. 获取浏览器可视窗口的高度
let winH = utils.win('clientHeight');
// 3. 监听window的onscroll事件，在事件函数中计算图片是否进入浏览器的可视窗口

window.onscroll = function () {
	// 1. 获取图片的自定义属性保存的图片资源路径
	let dataSrc = singleImg.getAttribute('data-src');
	// 2. 获取当前页面滚动条卷去的高度
	let winScrollTop = utils.win('scrollTop');
	// 3. 获取图片的上外边框距离页面顶部的距离；
	let imgOffsetTop = utils.offset(singleImg).top;

	// 4. 判断图片是否进入浏览器的可是窗口
	if (imgOffsetTop - winH - winScrollTop <= 0) {
		// 满足这个条件说明图片即将或者已经进入了可视窗口，此时给img的src赋值
		// 4.1 动态创建img
		let newImg = document.createElement('img');
		// 4.2 尝试加载
		newImg.src = dataSrc;
		// 4.3 监听临时图片的onload事件，如果加载成功会触发这个事件
		newImg.onload = function () {
			singleImg.src = dataSrc;
		}
	}
};

```

#### 多张图片延时加载

+ 多张图片延时加载：
+ 获取页面中所有的图片（或者某个容器元素下的所有需要延时加载的图片），
+ 监听页面中onscroll事件，在事件函数中，计算每张图片的是否即将出现在浏览器的可视窗口中
+ 如果当前图片即将进入，就进行该图片的加载。在加载之前需要判断该图片是否有src属性，如果有了src属性，说明该图片已经加载过了，不需要重新加载

``` javascript
// 1. 获取图片集合
let imgList = document.querySelectorAll('img');
// 2. 获取当前浏览器可视窗口的高度
let winH = utils.win('clientHeight');
// 3. 监听窗口的滚动事件
window.onscroll = function () {
	// 3.1 获取当前页面滚动条卷去的高度
	let winSctp = utils.win('scrollTop');

	// 3.2 遍历图片集合，在遍历过程中计算每张图片是否进入可视区域
	for (let i= 0; i < imgList.length; i++) {
		let imgItem = imgList[i];
		if (imgItem.src) continue; // 如果图片的src属性存在且不为空，说明该图片已经加载过了，后面的加载不需要再执行了

		let imgOffsetTop = utils.offset(imgItem).top;
		let dataSrc = imgItem.getAttribute('data-src');
		if (imgOffsetTop - winH - winSctp <= 0) {
			let newImg = new Image();
			newImg.src = dataSrc;
			newImg.onload = function () {
				imgItem.src = dataSrc;
			}
		}
	}
};
```




<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>