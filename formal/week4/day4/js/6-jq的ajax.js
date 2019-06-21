$.ajax({
	url: 'data/product.json',
	method: 'GET',
	dataType: 'json',
	async: false, // 异步还是同步：
	success: function (result) {
		// 请求成功会执行这个函数
	},
	error: function () {
		// 如果失败会执行这个函数
	}
});

// $.ajax() 是通过$调用的，说明ajax是定义在jQuery自身上，而css、html等方法都是定义在jq原型上的方法