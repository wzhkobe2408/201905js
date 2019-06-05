/*
*
*
*
* */

// call/apply/bind 修改this关键字

console.log(Function.prototype); // call apply bind 都是Function类的原型上的方法，只能给函数使用；
function fe(a, b) {
	console.log('this', this);
}

let obj = {
	id: 17
};

// call 修改this
fe.call(obj, 1, 2);

// apply 修改this
fe.apply(obj, [1, 2]);

// call 和 apply的区别：
// call和apply都是修改函数this，并且让函数执行
// 但是call和apply给函数传实参方式不同，call是一个一个的传给函数，而apply是把参数放到一个数组中；

// bind bind也是用来修改函数this的，返回一个绑定过this的新函数，并且不会执行函数；
var f1 = fe.bind(obj); // fe没有执行
f1();
