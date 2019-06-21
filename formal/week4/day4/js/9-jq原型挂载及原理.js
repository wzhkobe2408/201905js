(function () {
	var version = '1.1.3',
		jQuery = function (selector, context) {
			return new jQuery.prototype.init(selector, context);
		};

	// 函数有三种角色，其中一种是对象，把jQuery当成一个对象，为这个对象增加一个fn属性，这个属性的值是jQuery的原型；
	jQuery.fn = jQuery.prototype = {
		jquery: version,
		constructor: jQuery, // 给原型重定向后需要重新制定constructor属性
		// .... 很多方法
	};

	// 给jQuery自身和jQuery的原型增加一个属性extend，值都是一个函数；
	jQuery.extend = jQuery.fn.extend = function () {
		// .....
	}; // extend是用来给jQuery自身或者原型上增加方法的


	var init = jQuery.fn.init = function () {
		// ...
	};

	init.prototype = jQuery.fn; // 让init的原型也指向了jQuery的原型；此时，init的实例同样可以访问jQuery的原型，此时init的实例相当于是jQuery的原型；

	window.jQuery = window.$ = jQuery;
})();