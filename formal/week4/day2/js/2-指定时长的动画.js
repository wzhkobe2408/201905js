/*
* 目标：
*   1. 理解指定时长的动画原理
*   2. 比较指定时长和指定步长动画的区别
*
* */

const {win, css} = window.utils;
// 指定时长的动画：要求元素在指定时间内从初始位置运动到某一指定位置。
// 时间时固定的，路程是固定的，所以指定时间的动画关键在于求得速度，即每次定时器执行时元素改变的距离。

let box = document.querySelector('#box');

let s = 800; // 路程
let t = 3000; // 3s
let speed = s / t; // 速度
let curT = 0; // 当前已经经过的时间
let timer = setInterval(() => {
	curT += 16;
	// 结束动画时间
	if (curT >= t) {
		curT = t;
		clearInterval(timer);
	}
	let left = curT * speed;

	// 把计算出来的值设置回去
	css(box, 'left', left);
}, 16);