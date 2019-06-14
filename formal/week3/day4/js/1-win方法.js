// 获取或者设置浏览器的窗口的盒模型属性：
let winW = document.documentElement.clientWidth || document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;

function win(attr, val) {
	if (typeof val !== "undefined") {
		// 传2个值的时候是设置，传一个值是获取
		document.documentElement[attr] = document.body[attr] = val;
	}
	return document.documentElement[attr] || document.body[attr];
}
console.log(win('scrollTop'));
console.log(win('screenTop', 1000));
