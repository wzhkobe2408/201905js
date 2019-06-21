// 原生对象：通过js内置的方法获取的DOM元素对象；

// jq对象：jq的实例对象；一般都是通过 $(selector) 的方式获取jQuery的实例对象；每个jq实例对象都是一个类数组，可以调用jq原型上的方法

// 1. 原生对象转jq对象：用 $(原生对象) 的方式，把原生对象当做参数传递给jq，会返回转换后的jq对象；
let tabBox = document.getElementById('tabBox');
console.log(tabBox);
console.log($(tabBox));

// 2. jq对象转原生对象：jq对象里面的索引对应的就是原生对象，可以使用[索引]或者get(索引获取)
console.log($('.header > li')[0]);
console.log($('.header > li').get(0));