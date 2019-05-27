/*
* 目标：
*   1. 理解js中基本数据类型和引用数据类型的区别
*
* */
var a = 12;
var b = a;
b = 13;
console.log(a); // 12
console.log(b); // 13


var obj = {
	name: '珠峰培训',
	courses: ['HTML', 'CSS', 'js全栈课程', 'UI设计师']
};

var obj2 = obj;
obj2.name = 'zhufengpeixun';
console.log(obj.name); // ? 汉字
console.log(obj2.name); // 拼音


/*
* 基本数据类型的操作是值类型的操作，就是说变量真的就代表这个本身，var a = 12; 12是基本数据类型，所以这个变量a就真的代表12这个值。所以 var b = a; 其实和var b = 12; 没有区别。所以后面我们改b的时候不会影响到a。
*
* 但是引用数据类型操作的不是值本身，而是这个引用数据类型存储的堆内存空间地址。引用数据类型都是存储在堆内存空间中，而这个堆内存空间有一个唯一的地址，例如 aaafff000。所以我们在声明一个变量存储引用数据时，这个变量最终不是存储这个引用数据本身，而是存储了这个引用数据类型的堆内存地址。obj 其实最后代表的值是 aaafff000;
* 然后 var obj2 = obj; 所以obj2实际上得到是一个堆内存空间地址 aaafff000；所以obj和obj2都指向了同一个堆内存地址。
* 接下来 obj2.name = 'zhufengpeixun'; 浏览器先通过obj2代表的堆内存空间地址找到堆内存空间，然后把里面的name属性修改成 'zhufengpeixun' 这个拼音。又因为obj也用是这个地址，所以当 我们obj.name 时，也是先通过obj存储的堆内存地址找到堆内存空间，然后再把name属性值拿出来。此时这个值已经是拼音了，所以最后obj.name 和obj2.name 都是拼音。
*
*
*
* */









