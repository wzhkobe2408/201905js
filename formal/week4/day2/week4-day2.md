<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 动画、匀速动画

### 一、指定步长的动画

+ JS的动画：结合SJ的定时器不断的操作元素的某些属性，实现动画效果。

+ 让盒子在水平方向上动起来，操作盒子的left值

+ 指定步长的动画原理：
首先获取动动画距离，使用动画终点 - 动画起点；然后使用一个定时器，每隔一定毫秒数获取当前元素的当前位置累加上步长，再把累加后的位置设置回去。在累加之前判断一下，当前位置是否已经到达了终点，如果到达终点清除定时器，并终止后面的操作。


``` javascript
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
```

### 二、指定时长的动画

+ 指定时长的动画：要求元素在指定时间内从初始位置运动到某一指定位置。
+ 时间时固定的，路程是固定的，所以指定时间的动画关键在于求得速度，即每次定时器执行时元素改变的距离。


``` javascript
const {win, css} = window.utils;

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

```

### 三、回到顶部

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		#box {
			height: 5000px;
			background: -webkit-linear-gradient(top left,red,blue,green,orange);
		}
		.btn {
			position: fixed;
			bottom: 50px;
			right: 50px;
			width: 80px;
			height: 80px;
			line-height: 80px;
			text-align: center;
			border-radius: 50%;
			cursor: pointer;
			user-select: none;
			background-color: #fff;
			color: #ddd;
		}
	</style>
</head>
<body>
<div id="box"></div>
<div class="btn" id="btn">上去</div>
<!--<a href="#box">回到顶部</a>-->
<!--锚点定位可以回到顶部-->

<script src="js/utils.js"></script>
<script src="js/5-回到顶部.js"></script>
</body>
</html>
```

#### 方案1：直接将页面的scrollTop设为0

``` javascript
const {css, win} = window.utils;
let btn = document.getElementById('btn');

// 1. 直接将页面的scrollTop设为0
btn.onclick = function () {
	win('scrollTop', 0)
};

```

#### 方案2： 缓慢的回去-指定时间

``` javascript
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
```

#### 3. 缓慢回去-指定步长

``` javascript
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

```

四、图片渐现

+ 用js实现让一张图片慢慢出现

+ HTML代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<style>
		.img-con {
			width: 500px;
			height: 335px;
			background-color: #999999;
		}
		img {
			opacity: 0;
		}
	</style>
</head>
<body>
<div class="img-con">
	<img src="leo.jpg" alt="">
</div>

<script src="js/utils.js"></script>
<script src="js/3-图片渐现.js"></script>
</body>
</html>
```

+ JS代码
``` javascript
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

```

### 五、匀速动画

+ 需求：让页面中的盒子在2s内从起始位置匀速运动到left是800的位置

+ 匀速运动中速度是一定的，时间时固定的，所以最为关键的是求出路程，然后再求出速度；

``` javascript
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

```

+ 匀速运动中某一时刻的位置计算

``` javascript
function linear(curTime, begin, change, duration) {
	// 计算匀速运动时，元素某一时刻的位置
	return (change / duration) * curTime + begin;
}
```

### 六、多方向的匀速动画

+ 让页面中的div在2s内运动到left是850，top是500的位置；

+ 多方向的匀速动画即元素的多个js属性同时变化

``` javascript
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
```


<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>