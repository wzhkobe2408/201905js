const {css, win} = window.utils;
let btn = document.getElementById('btn');

// 1. 直接将页面的scrollTop设为0
btn.onclick = function () {
	win('scrollTop', 0)
};

// 2. 缓慢的回去-指定时间
let isRun = false;
btn.onclick = function () {
	if (isRun) return;
	// 2.1 固定时间上去 例如1s
	let top = win('scrollTop');
	let speed = top / 1000; // 速度 1000ms = 1s
	let time = 0; // 记录运动时长
	isRun = true;
	let timer = setInterval(() => {
		time += 50;
		if (time >= 1000) {
			time =1000;
			clearInterval(timer);
			isRun = false;
		}
		top = top - time * speed;
		win('scrollTop', top);
	}, 50)
};

// 3. 缓慢回去-指定步长

btn.onclick = function () {
	clearInterval(this.timer); // 防止动画累加，要清除动画
	this.timer = setInterval(() => {
		let top = win('scrollTop');
		top -= 20;
		if (top <= 0) {
			t = 0;
			clearInterval(this.timer);
		}
		win('scrollTop', top);
	}, 10)
};





















