

// 1. 配合replace使用
// String.prototype.replace(匹配内容, '替换内容');

let str = 'zhufeng2018 zhufeng2019';

// 把字符串中的 zhufeng 替换成 珠峰

let result = str.replace('zhufeng', '珠峰');
console.log(result); // 珠峰2018 zhufeng2019

// 一次只能替换一个，那么有没有什么办法一次都替换掉呢？

// replace(正则, callback); replace配合正则使用时
let i = 0;
let reg = /(zhufeng)/g;
let r2 = str.replace(reg, function (...arg) {
	// 回调函数的参数：
	// 第一个：整个正则匹配到的内容
	// 如果有分组，会从第二个参数
	// 倒数第二个参数是 本次捕获的的起始索引位置
	// 最后一个参数是当前原始字符串
	i++;
	console.log(arg);
	return '珠峰'
});
console.log(r2);
console.log(i); // 2 说明回调函数执行了2次；

// 2. 格式化时间字符串: 按照时间模板格式时间字符串

// "2019/6/30 17:50:23" => '06-30 17:50'

// 2.1 获取时间字符串中所有时间数字
let str2 = "2019/6/30 17:50:23";
let reg2 = /\d+/g;
let ary = str2.match(reg2);
console.log(ary);
// 2.2 判断如果这些数字比10小，需要补0
let addZero = ary.map(item => +item < 10 ? '0' + item : item);
console.log(addZero);

// 2.3 根据模板把时间格式化
let tmp = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
let tmpReg = /\{(\d)\}/g;
let result2 = tmp.replace(tmpReg, function ([, index]) {
	return ary[index];
});
console.log(result2);

// 扩展到原型上
String.prototype.myFormatTime = function (tmp = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
	let ary = this.match(/\d+/g).map(item => +item < 10 ? '0' + item : item);
	return tmp.replace(/\{(\d)\}/g, (...[, index]) => ary[index]);
};

console.log("2018/4/30 17:50:23".myFormatTime('{1}-{2} {3}:{4}:{5}'));


// 3. url查询参数格式化
let url = 'http://www.zhufeng.cn?name=mabin&age=18&form=zf&addre=hebei';

let params = {};
let reg3 = /([^?=&]+)=([^?=&]+)/g;
url.replace(reg3, (str, key, value) => params[key] = value);
console.log(params);

String.prototype.urlSeries = function () {
	let params = {};
	let reg3 = /([^?=&]+)=([^?=&]+)/g;
	this.replace(reg3, (str, key, value) => params[key] = value);
	return params
};
let result3 = url.urlSeries();
console.log(result3);


// 4. 给数字千分符

// 千分符
// '2121345465.12' => 2,121,345,465.12

let str4 = '2121345465';
let reg4 = /\d(?=(\d{3})+(\.\d+)?$)/g;
let r4 = str4.replace(reg4, function (a) {
	return a + ','
});
console.log(r4);
















