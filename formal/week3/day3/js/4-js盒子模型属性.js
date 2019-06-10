// JS盒模型：通过JS中的属性和方法获取元素的属性信息

let box = document.getElementById('box');

// client
// 1. clientWidth / clientHeight
// clientWidth 内容宽度 + 左右padding
// clientHeight 内容高度 + 上下padding
console.log(box.clientWidth);

// 2. clientLeft / clientTop
// clientLeft 左边框
console.log(box.clientLeft);
// clientTop 上边框
console.log(box.clientTop);

// 3. offsetWidth / offsetHeight

// offsetWidth = clientWidth(内容宽+左右padding) + 左右边框
console.log(box.offsetWidth);

// offsetHeight = clientHeight(内容高+上下padding) + 上下边框
console.log(box.offsetHeight);


// 4. scroll系列
// scrollLeft(横向滚动条卷去的距离) / scrollTop(纵向滚动条卷去的距离)
// 滚动条 卷去的距离，默认是0，具体是多少要看滚动条滚动了多少
// 获取浏览器的窗口滚动的距离
let sc = document.documentElement.scrollTop || document.body.scrollTop;
console.log(sc);

// scrollHeight/scrollWidth
// 没有溢出时，scrollHeight/scrollWidth 等于 clientHeight/clientWidth
// 内容溢出时：scrollHeight = clientHeight + 溢出内容高度;
// 内容溢出时：scrollWidth= clientWidth + 溢出内容高度;

// 获取浏览器的窗口的盒模型属性：
let winW = document.documentElement.clientWidth || document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;

function win(attr, val) {
	if (typeof val !== "undefined") {
		document.documentElement[attr] = document.body[attr] = val;
	}
	return document.documentElement[attr] || document.body[attr];
}
console.log(win('scrollTop'));
console.log(win('screenTop', 1000));























