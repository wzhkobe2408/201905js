/*
* 
* 
* */

// 常用的数组方法都定义在数组原型上
// push()
// pop()
// slice()
// .....

// push 方法：向数组末尾追加项，返回数组的新长度
let  ary = [1, 3, 5, 7];

var r = ary.push(9);
console.log(ary);
console.log(r);

// push 原理：
Array.prototype.myPush = function () {
	// this 指向数组的实例
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
	}
	return this.length;
};

let r2 = ary.myPush(11);
console.log(ary);
console.log(r2);


// pop 原理：
Array.prototype.myPop = function () {
	// this就是数组实例
	let last = this[this.length - 1];
	this.length--;
	return last;
};

let r3 = ary.myPop();
console.log(r3);

// forEach
Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i);
	}
};
ary.myForEach(function (item, index) {
	console.log(item, index);
});

// map 

Array.prototype.myMap = function (cb) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		let result = cb(this[i], i);
		newArr.push(result);
	}
	return newArr;
};

let r6 = ary.myMap(function (item, idx) {
	return item * 2;
});
console.log(r6);

// 作业：模拟实现slice方法











