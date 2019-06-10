// offsetLeft / offsetTop
// 获取当前元素外边缘距离父级参照物的边框内侧的距离？？？

let outer = document.getElementById('outer');
let inner = document.getElementById('inner');
let center = document.getElementById('center');

console.log(inner.offsetParent); // div#outer
console.log(center.offsetLeft);
// ？？？？？
// 父级参照物：距离当前元素最近的有定位属性的父级元素，如果没有的话默认body；

// 一般我们需要的是某个元素距离body的offsetLeft，所以就需要一级一级的向上查找

function offset(ele) {
	let left = ele.offsetLeft;
	let top = ele.offsetTop;
	let parent = ele.offsetParent;
	// 只要找到的父级参照物存在且该参照物不是body就一直向上查找（一直找到body为止
	while (parent && parent.nodeName.toLowerCase() !== 'body') {
		left += parent.offsetLeft + parent.clientLeft;
		top += parent.offsetTop + parent.clientTop;
		parent = parent.offsetParent;
	}
	return {
		left,
		top
	}
}
console.log(offset(center));