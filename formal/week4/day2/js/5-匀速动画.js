// 需求：让页面中的盒子从起始位置运动到left是800的位置

const {css} = window.utils;


let box = document.getElementById('box');

// 过度时间
let duration = 2000;

// 目标值
let target = 800;

// 起始位置
let begin = css(box, 'left');

// 总移动距离
let change = target - begin;

// 记录当前时间
let time = 0;

let interval = 16;

let timerId = setInterval(() => {
	time += 10;
	if (time >= duration) {
		css(box, 'left', target);
		clearInterval(timerId);
		return
	}
	let curLeft = change / duration * time + begin;
	css(box, 'left', curLeft)
}, interval);

function linear(curTime, begin, change, duration) {
	// 计算匀速运动时，元素某一时刻的位置
	return (change / duration) * curTime + begin;
}

