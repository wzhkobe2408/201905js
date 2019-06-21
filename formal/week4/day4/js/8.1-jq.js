(function () {
	var version = '',
	jQuery = function () {};
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery
	};

	// 同时给jq类添加静态方法extend、向原型增加extend方法
	jQuery.extend = jQuery.fn.extend = function (selector, context) {
		new jQuery.fn.init(selector, context);
	};

	// 通过看下面的extend方法作用，讲解extend是把方法扩展到jq或者其原型上

	var init = jQuery.fn.init = function () {

	};
	init.prototype = jQuery.fn;
	// 把init当做一个类，但是让这个类的原型指向了jquery.prototype(所以init的实例最后知道的也是jq类的原型上的方法，所以init的实例也可以理解为jq的实例)
	// => 回去看new jq。fn.init 的

	window.jquery = window.$ = jQuery;

	// 解释为啥绕这么一大圈，避免死递归；
})()
/*z

function Fn() {
	return new Fn();
}

Fn();*/
