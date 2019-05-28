/*
* 目标：
*   1. 理解变量提升(预解释)机制
*   2. 掌握变量提升对var 和function的不同处理机制
* */
// var num = undefined;
// fe -> aaafff11函数
////////////////
console.log(num); // undefined
var num = 100; // 代码执行到这一行再给num赋值，在这一行num才代表100这个值；
console.log(num); // 100 执行过上面的赋值操作，所以num代表100

console.log(fe); // fe的函数体
fe(); // 因为fe是一个函数，所以可以直接执行
function fe() { // js代码执行到这里时，因为变量提升阶段以及完成了对fe的赋值，执行到这里会忽略这里
  console.log('前端工程师');
}
fe();

/*
* 变量提升（预解释、预处理）：在js代码执行之前，浏览器会对所有带var和function的进行提前的声明或者定义；
* 声明（declaration）：声明一个变量，告诉浏览器有这么一个变量；
* 定义（define）：给变量赋值；
* 对带var的变量只声明不定义，变量声明后不定义其默认值是undefined；
* 对带function的变量（函数名），声明并且定义；
*
* 完成变量提升后，js代码才会从上到下执行。
* 在执行到 var 变量 = 值；才会对带var的变量进行赋值操作，也就是说经过这一行之后变量才代表这个具体的值，在此之前变量的值是undefined。
* 在执行到function 函数名() {....} 浏览器会忽略这些函数定义代码，因为在变量提升阶段已经对函数名定义过了，所以不会重复定义。
*
* 所以，在普通变量赋值之前使用就是undefined，赋值之后才是具体值；
* 而function声明的函数名在声明前使用时函数本身，在声明后使用还是函数本身。
*
*
* */


console.log(getName);
var obj = {
  name: "珠峰培训"
};
console.log(age);
var age = 10;

function getName() {
  console.log('Your Name');
}





















