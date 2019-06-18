window.utils = (() => {
	/**
	 * 作用：将类数组转化为数组
	 * @param likeAry(类数组)
	 * @return 转换后数组
	 */
	function arrLikeToAry(likeAry) {
		try {
			return [].slice.call(likeAry) // Array.from(likeAry)
		} catch (e) {
			let arr = []
			for (let i = 0; i < likeAry.length; i++) {
				arr[arr.length] = likeAry[i]
			}
			return arr
		}
	}

	/**
	 * 作用：将json字符串转换为json对象
	 * @param data
	 * @return JSON对象
	 */
	function toJSON(data) {
		return 'JSON' in window ? JSON.parse(data) : eval(`(${data})`)
	}

	/**
	 * 作用：获取、设置浏览器窗口的盒模型属性
	 * @param attr
	 * @param val
	 */
	function win(attr, val) {
		if (typeof val === 'undefined') {
			return document.documentElement[attr] || document.body[attr]
		}
		document.documentElement[attr] = document.body[attr] = val
	}

	/**
	 * 作用：获取当前元素距离body 左偏移和上偏移
	 * @param ele
	 * @return {left, top}
	 */
	const offset = ele => {
		let left = ele.offsetLeft
		let top = ele.offsetTop
		let parent = ele.offsetParent
		while (parent && parent.nodeName.toLowerCase() !== 'body') {
			left += parent.offsetLeft + parent.clientLeft
			top += parent.offsetTop + parent.clientTop
			parent = parent.offsetParent
		}
		return {
			left,
			top
		}
	}

	/**
	 * @desc 获取元素计算生效样式
	 * @param ele 元素对象
	 * @param attr 属性名
	 * @return value 样式值
	 */
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
		return value
	}

	/**
	 * @desc
	 * @param ele
	 * @param attr
	 * @param value
	 */
	function setCss(ele, attr, value) {
		if (attr === 'opacity') {
			ele.style.filter = 'alpha(opacity=' + value * 100 + ')';
		}
		if (attr === 'float') {
			ele.style.cssFloat = value; // 标准浏览器设置float属性
			ele.style.styleFloat = value; // IE 设置float属性
			return
		}
		// 把常见的带单位的属性增加单位
		let reg = /^(width|height|(margin|padding)?(top|left|right|bottom)?)$/i;
		if (reg.test(attr) && !isNaN(value)) {
			// 如果传入的不是有效数字或者原来就带有单位时就不加单位了
			// isNaN('10px') -> true

			value += 'px'
		}
		ele.style[attr] = value;
	}

	function setBatchCss(ele, batch) {
		if (typeof batch !== 'object') return;
		for (var key in batch) {
			if (batch.hasOwnProperty(key)) {
				setCss(ele, key, batch[key])
			}
		}
	}


	function css(ele, param, val) {
		// 对传入不同参数时进行不同的处理——重载
		if (typeof param === 'object') {
			// 如果传入一个对象
			setBatchCss(ele, param);
		}
		if (typeof param === 'string' && typeof val === 'undefined') {
			// 此时param传了一个字符串，val没传，是要获取
			return getCss(ele, param);
		}
		if (val !== 'undefined') {
			setCss(ele, param, val)
		}
	}

	// 增加类名
	function addClass(ele, className) {
		// 如果元素有这个类名了，则不添加
		if (hasClass(ele, className)) return;
		ele.className += ` ${className}`; // 添加时要在本次添加类名前面写一个空格
	}

	// 1. 判断元素是否有某一个类名
	function hasClass(ele, className) {
		// 获取该元素的所有类名，然后判断是否包含这个类名
		let cN = className.trim();
		return ele.className.includes(cN);
	}

	// 移除类名
	function removeClass(ele, className) {
		className = className.trim();
		let ary = className.split(' ');
		ary.forEach(item => {
			item = item.trim();
			let reg = new RegExp(`${item}`, 'g');
			ele.className = ele.className.replace(reg, '')
		})
	}


	return {
		arrLikeToAry, // likeAryTo: likeAryTo
		toJSON,
		win,
		offset,
		getCss,
		setCss,
		setBatchCss,
		css,
		hasClass,
		addClass,
		removeClass
	}

})();
