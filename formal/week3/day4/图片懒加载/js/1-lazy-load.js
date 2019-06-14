/*
* 图片延时加载（图片懒加载）：真实项目中，为了提升页面的加载速度，我们一般将图片处理成延时加载；
* 效果：页面中的图片在页面刚刚打开时，浏览器会立刻去请求这张图片资源。但是延时加载是页面打开时，不是立刻去加载图片，而是在某个何时的时机去加载这张图片（一般是图片进入浏览器可视区域或者即将进入可视区域）；
*
* 原理：img标签有一个src属性，值是这张图片的资源路径；只要浏览器检测到img有这个属性就会立刻去加载，为了实现延时加载，不直接给img标签设置src属性，而是选择自定义其他属性保存其图片资源路径；等到何时的时机，再获取这个自定义属性值，再赋值给图片的src属性，此时，浏览器会根据这个src去加载图片。
*
*
* */

// 单张图片延时加载：
// 时机：图片即将进入浏览器可视窗口
// 监听页面的滚动事件，当页面滚动时，计算图片什么时候进入可视窗口；
// 进入浏览器可视窗口条件：(图片上外边距离页面顶端的距离 - 浏览器的可视窗口的高度 - 页面纵向滚动条卷去的距离) <= 0



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

