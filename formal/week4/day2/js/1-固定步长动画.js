/*
* 目标：
*   1. 理解指定步长动画的原理
*
* */

// JS的动画：结合SJ的定时器不断的操作元素的某些属性，实现动画效果。

// 让盒子在水平方向上动起来，操作盒子的left值

const {win, css} = window.utils;
let box = document.getElementById('box');

let step = 2; // 每次动画移动2px

// left的最大值：屏幕宽度 - 元素的宽度
let maxL = win('clientWidth') - css(box, 'width');

let timer = setInterval(function () {
	let l = utils.css(box, 'left');
	// 结束动画条件
	if (l >= maxL) {
		clearInterval(timer);
		css(box, 'left', maxL);
		return;
	}
	l += 2;
	css(box, 'left', l)
}, 16);

// 指定步长的动画原理：首先获取动动画距离，使用动画终点 - 动画起点；然后使用一个定时器，每隔一定毫秒数获取当前元素的当前位置累加上步长，再把累加后的位置设置回去。在累加之前判断一下，当前位置是否已经到达了终点，如果到达终点清除定时器，并终止后面的操作。