// 多张图片延时加载：
// 获取页面中所有的图片（或者某个容器元素下的所有需要延时加载的图片），
// 监听页面中onscroll事件，在事件函数中，计算每张图片的是否即将出现在浏览器的可视窗口中
// 如果当前图片即将进入，就进行该图片的加载。在加载之前需要判断该图片是否有src属性，如果有了src属性，说明该图片已经加载过了，不需要重新加载

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