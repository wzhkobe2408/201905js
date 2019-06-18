// 1. 导入工具方法
const {css} = window.utils;

// 2. 获取元素
let img = document.querySelector('.img-con > img');

// 3. 设定定时器启动动画
let timer = setInterval(() => {
	// 3.1 获取当前元素的透明度
	let op = +css(img, 'opacity');
	// 3.2 给透明度累加，并判断累加后的值
	op += 0.01;
	if (op >= 1) {
		clearInterval(timer);
		op = 1;
	}
	// 3.3 把累加后的值设置回去
	css(img, 'opacity', op);
}, 16);
