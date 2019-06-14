;var box = document.getElementById('box');

/*
function getCss(ele, attr) {
	if ('getComputedStyle' in window) {
		return window.getComputedStyle(ele, null)[attr];
	}
	return ele.currentStyle[attr]
}
console.log(getCss(box, 'width'));
console.log(getCss(box, 'height'));
*/

// 优化：去除单位、同一 透明度样式：
function getCss(ele, attr) {
	var value;
	if ('getComputedStyle' in window) {
		value = window.getComputedStyle(ele, null)[attr];
	} else {
		// 判读获取的属性是否是透明度，如果是需要给IE的透明度属性进行特殊处理
		if (attr === 'opacity') {
			value = ele.currentStyle['filter'];
			var reg2 = /^alpha\(opacity=(.+)\)$/;
			value = reg2.exec(value)[1] / 100;
		} else {
			value = ele.currentStyle[attr];
		}
	}

	// 去除单位: 只有是数字带单位的情况下才需要去除单位
	var reg = /^-?\d+(\.\d+)?(px|pt|rem|em)$/i;
	if (reg.test(value)) {
		value = parseFloat(value);
	}
 }
console.log(getCss(box, 'width'));
console.log(getCss(box, 'opacity'));
