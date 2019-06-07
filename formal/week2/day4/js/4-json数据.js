/*
* 目标：
*   1. 理解JSON格式
*   2. 理解JSON对象和字符串互转
*
*
* */
// JSON 数据格式：
// JSON数据不是一种数据类型，而是一种数据格式。是一种前后端交互时常用的数据格式；

// JSON对象
// 属性名和属性值都是双引号，如果属性值是数字可以不用双引号包裹；

// 普通对象：
let obj = {
	"name": "珠峰",
	"age": 10
};

// 二维数组：数组中的对象的属性名和属性值都需要使用双引号包裹

let data = [
	{
		"name": "张三",
		"age": 18
	},
	{
		"name": "李四",
		"age": 19
	}
];

// JSON格式的字符串： 长得很像JSON对象的字符串

let str = '{"name": "珠峰", "id": 1, "age": 18}';
let str2 = '[{"name": "张三", "age": 1}, {"name": "李四", "age": 19}]';

// JSON格式的字符串和JSON格式的对象互转：

// Window对象上提供了JSON的对象
console.log(window.JSON);
// window.JSON.stringify() 方法：把JSON格式的对象转成JSON格式的字符串
// window.JSON.parse() 方法：把JSON格式的字符串转化成JSON格式的对象

// window对象上的方法调用时，可以省略window
let str3 = JSON.stringify(obj); // window.JSON.stringify(obj)
console.log(str3);

let str4 = JSON.stringify(data); // window.JSON.stringify(data)
console.log(str4);

let obj2 = JSON.parse(str);
console.log(obj2);
let obj3 = JSON.parse(str2);
console.log(obj3);


// 注意：IE6/7 没有JSON对象，在低版本浏览器将JSON字符串 转换为JSON对象需要使用eval方法。

let str5 =  '{"name": "珠峰", "id": 1, "age": 18}';
// let obj4 = eval(str5);
// console.log(obj4); // 报错：Unexpected token。。
// 报错的原因是eval把字符串转成代码执行，当遇到对象的花括号时，eval会首先认定花括号时代码块，而不是对象；为了解决这个问题，我们需要给字符串外面多拼接一层小括号；
let obj5 = eval('(' + str5 + ')');
console.log(obj5); // 加小括号后eva会把({...})当成一个对象


// 封装方法json字符串转JSON：
/** desc
 * @desc JSON字符串转JSON
 * @param jsonstr json格式字符串
 * @returns json格式对象
 */
function toJson(jsonstr) {
	if ('JSON' in window) {
		return JSON.parse(jsonstr);
	} else {
		return eval('(' + jsonstr + ')');
	}
}

















