// 在全局中，用var和function声明的变量，也相当于给window上添加一个同名属性

// 在全局作用域中，一个内置全局对象 window
console.log(window);

var num = 2019;
console.log(window.num); // 2019
window.num = 2020;
console.log(num); // 2020 num和window.num是绑定在一起的

// in 运算符 检测对象是否有某个属性，有返回true，否则false
console.log('num' in window);

function fe() {
	console.log('FE')
}
window.fe();
fe();

// 不带var 的不会参与变量提升
console.log(a); // undefined
var a = 1;

console.log(b); // 报错：
b = 2; // 不带var 不会参与变量提升，所以不会提前声明和赋值
console.log(b);
