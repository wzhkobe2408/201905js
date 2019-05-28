/*
* 目标：
*   1. 理解全局对象window
*   2. 带var和function声明的变量会给window增加一个同名属性
*   3. in运算符
*   4. 不带var不参与变量提升
* */
// 页面打开时，会形成一个全局作用域，同时会形成一个全局对象，在浏览器中叫做window，在nodejs中是Global对象；

console.log(window);

