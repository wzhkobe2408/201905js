// 封装一个工具集

window.utils = (function () {
	function arrLikeToAry(args) {
		try {
			return Array.from(args);
		} catch (e) {
			var arr = [];
			for (var i = 0; i < args.length; i++) {
				arr.push(args[i])
			}
			return arr;
		}
	}

	return {
		arrLikeToAry // arrLikeToAry: arrLikeToAry
	}
})();