/*
* 目标：
*   1. 理解DOM映射
*   2. 理解常见情形
*
* */


let ulLis = document.getElementById('ulWrapper');
let liList = ulLis.getElementsByTagName('li');

// 需求：按照页面内列表的数字升序排列这些li
// 因为数组才能排序，所以我们需要先把获取回来的类数组集合转变成数组

let ary = utils.arrLikeToAry(liList);

ary.sort(function (a,  b) {
	return a.innerHTML - b.innerHTML;
});

console.log(ary); // 数组中已经排好序了，但是页面中没有发生改变

// 我们需要把这些li重新插入到页面中，页面中的li的顺序才会发生改变
for (let i = 0; i < ary.length; i++) {
	ulLis.appendChild(ary[i]);
}

// ? 页面中的li还是10个，为啥不是20个？原理不是有10个来着？我们又appendChild了10个啊？

// DOM映射：页面中的html元素和我们通过js相关方法（getElementsById、getElementsByTagName/getElementsByXXX）获取的元素对象或者元素集合存在映射关系（一个改另一个跟着改）；

// 常见的DOM映射：
// liList[i].style.backgroundColor = 'red'; 将liList[i]元素对象对应的堆内存下的style属性下的backgroundColor属性修改为red（本质是操作js堆内存空间），但是由于DOM映射机制，页面中的元素和元素对象的堆内存空间是绑定再一起的。所以我们修改了元素对象堆内存空间里的值，页面中的标签会按照最新的值来渲染；

// liList是ul下面的li元素集合，集合中存储的都是元素对象，而对象都是堆内存；所以liList这个类数组中存储的形如，{0: aaafff111, 1: aaafff222, .....,length: 1};然后我们通过类数组转数组的方法将类数组转为数组后数组，数组中存储的也只是元素对象的堆内存地址，形如 [aaafff111, aaafff222, ....,length: 10]，此时虽然是把类数组转成了数组，但是并不是重新创造了10个li元素对象，而是把原来的10个li搞到一个数组中了。然后我们通过appendChild把数组中的元素对象插入到页面中时，其实这些元素对象就是页面中的元素对象，此时appendChild会把这个元素对象移动到容器末尾。

// appendChild：向容器末尾追加元素，如果追加的元素已经存在于容器中，此时不会克隆（按照原来的再造一份一模一样的新的）一份再追加，而是把原来的移动到容器末尾；

// 数据绑定后：数据绑定之前，我们获取的ul下面的li得到一个空集合，但是当我们绑定数据后不需要重新获取，DOM映射机制会把新增加的元素映射到我们之前已经获取的集合中，此时元素集合不再是空集合。但是querySelector和querySelectorAll获取的集合叫做静态集合 staticNodeList，是掐断了DOM映射的，基于这种方式获取元素集合，在数据绑定完成后需要重新获取。


















