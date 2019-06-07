/*
* 目标：
*   1. 理解sort排序原理
*   2. 理解sort排序的常见情况
* */

var ary = [12, 1, 3, 5, 9, 2, 7];
var ary1 = [
	{
		name: 'zhangsan',
		age: 15
	},
	{
		name: 'lisi',
		age: 18
	},
	{
		name: 'wangwu',
		age: 14
	},
	{
		name: 'liuliu',
		age: 19
	}
];
var ary3 = [
	[12],
	[6],
	[3],
	[24]
];


// sort 原理： 让相邻两项进行比较，如果return的数字【回调函数的返回值】大于0，那么会让这两项叫魂位置；如果return的结果小于等于0，那么不交换；

// 回调函数的执行次数和数组的成员个数，还跟数组的成员大小有关；

ary.sort(function (a, b) {
	// console.log(a, b);
	// console.log(ary);
	return a - b;
});

console.log(ary);


// 如果数组项是对象，sort排序时交换的是数组项，而不是数组项的某一个具体的值；

ary1.sort(function (a, b) {
	return a.age - b.age;
});
console.log(ary1);




















