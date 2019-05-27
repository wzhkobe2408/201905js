// => 【连接词】：每个文件都要回环变量提升；变量提升：把带var和带function的。。。。。

// 变量提升：
// js代码执行前，对变量进行提前的处理，其中：
// 带var 的进行提升的声明，不赋值（或者说赋值为默认值undefined）
// 带function 的提前声明并且赋值

// 1. 同名变量只会声明一次，代表的值就是最后一次的值
var num;
var num;
var num; // 这些语句没有赋值操作，当代码执行时会略过
var num = 100; // num虽然var了4次，但是并不会声明4次，只会声明一次，同时只有这一次才会将num的值赋值成100；

function fn() {
	console.log(1)
}
function fn() {
	console.log(2)
}
function fn() {
	console.log(3)
}
fn(); // 3

// 2. 变量提升时，function的优先级高于普通变量
console.log(fe); // 函数体
function fe() { // 当代码执行到这里时，直接忽略，因为函数变量赋值已经在变量
	console.log('我是来自珠峰的FE');
}
var fe = 123; // 代码执行到这一行时，将变量fe的值修改为123

// 3. 如果变量名和函数名同名，在执行到变量的赋值语句之前时，这个名字代表函数，但是当执行过变量赋值语句后，

function fe() {
	console.log('FE')
}
var fe = 1;
// fe(); // 报错，因为执行到这里的时候fe不再代表一个函数了，而是一个数字
