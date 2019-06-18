// 让页面中的div在2s内运动到left是850，top是500的位置；

// 多方向的匀速动画即元素的多个js属性同时变化

const {css} = window.utils;

// 过度时间 2000
let duration = 2000;

// 目标值
let targetLeft = 800;
let targetTop = 500;

// 获取起始位置
let beginLeft = css(box, 'left');
let beginTop = css(box, 'top');

// 获取总路程
let changeLeft = targetLeft - beginLeft;
let changeTop = targetTop - beginTop;

// 记录时间
let time = 0;

// 定时器执行间隔
const interval = 16;


let timerId = setInterval(() => {
	time += interval;

	// 动画结束条件判断
	if (time >= duration) {
		css(box, {
			left: targetLeft,
			top: targetTop
		});
		clearInterval(timerId);
		return;
	}

	// 计算当前时刻元素left和top的值
	let curLeft = linear(time, beginLeft, changeLeft, duration);
	let curTop = linear(time, beginTop, changeTop, duration);
	css(box, {
		left: curLeft,
		top: curTop
	})
}, interval);

function linear(curTime, begin, change, duration) {
	// 计算匀速运动时，元素某一时刻的位置
	return (change / duration) * curTime + begin;
}












