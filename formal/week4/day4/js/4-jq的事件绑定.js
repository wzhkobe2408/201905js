// jq中提供了两种绑定事件的方法

// 1. 将原生的事件名去掉on，例如onclick，变成jq的click方法，事件函数以回调函数的形式传给对应的事件方法

$('li.active').click(function () {
	// 给类名为active的li元素绑定点击事件，当事件触发时执行这个匿名函数
	// 事件函数中this的jq已经帮我们处理成了绑定当前事件的元素
	console.log(this);
});

// 2. on方法：on方法的参数：
// 第一个：去掉on的事件名，字符串
// 第二个：事件触发时需要执行的事件函数

$('div.active').on('click', function () {
	console.log('一个点击事件');
});

// 3. 用代码触发事件函数执行
// trigger()
$('li.active').trigger('click');

// 4. 移除事件：off(事件名)方法

$('li.active').off('click');


