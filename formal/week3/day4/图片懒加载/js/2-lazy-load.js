// 真实项目中，因为网络或者其他因素可能导致图片加载失败，所以一般不是直接给图片赋值，而是先动态创建一个img标签，用动态创建的img去尝试加载，如果加载成功就再给页面中的图片src属性赋值。


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
			newImg = null; // 手动释放内存
		}
	}
};
