<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 数组应用、AJAX

### 一、数组sort应用

``` javascript
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

```

#### sort 原理：

让相邻两项进行比较，如果return的数字【回调函数的返回值】大于0，那么会让这两项叫魂位置；如果return的结果小于等于0，那么不交换；

+ 回调函数的执行次数和数组的成员个数，还跟数组的成员大小有关；

``` javascript
ary.sort(function (a, b) {
	// console.log(a, b);
	// console.log(ary);
	return a - b;
});

console.log(ary);

```

+ 如果数组项是对象，sort排序时交换的是数组项，而不是数组项的某一个具体的值；

``` javascript
ary1.sort(function (a, b) {
	return a.age - b.age;
});
console.log(ary1);
```

### 二、数组的复制

``` javascript

let ary = [1, 2, 3, 4, 5];

let ary2 = [
	{
		name: 1
	},
	{
		name: 2
	},
	{
		name: 3
	}
];

// 复制数组ary和ary2；

let a1 = ary.slice();
a1[1] = 100;
console.log(a1); // [1, 100, 3, 4, 5]
console.log(ary); // [1, 2, 3, 4, 5]

let a2 = ary2.slice();
a2[1].name = 100;
console.log(a2); // [{name: 1}, {name: 100}, {name: 3}]
console.log(ary2); // [{name: 1}, {name: 100}, {name: 3}]
```

+ 一个数组中的数组项是一个基本数据类型的值时，这个数组项存储的就是这个值本身；
+ 如果数组项是一个引用数据类型的值时，这个数组项实际存储的是这个引用数据类型值的堆内存地址
+ 所以在复制数组时，如果数组项是基本数据类型的值，那么复制出来的新数组中的数组项和原数组中的项没关系；
+ 如果复制的项是引用数据类型，再复制这一项时，其实是复制的堆内存地址，所以新复制出来的数组时一个新数组，但是数组项由于是堆内存地址，所以在操作新数组中的这一项时，原数组项也会受到影响；所以这种复制成为浅复制；

### 三、DOM映射

``` javascript
let ulLis = document.getElementById('ulWrapper');
let liList = ulLis.getElementsByTagName('li');
```

+ 需求：按照页面内列表的数字升序排列这些li

__因为数组才能排序，所以我们需要先把获取回来的类数组集合转变成数组__


``` javascript
let ary = utils.arrLikeToAry(liList);

ary.sort(function (a,  b) {
	return a.innerHTML - b.innerHTML;
});

console.log(ary);

```
+ ？ 数组中已经排好序了，但是页面中没有发生改变

+ 我们需要把这些li重新插入到页面中，页面中的li的顺序才会发生改变

``` javascript
for (let i = 0; i < ary.length; i++) {
	ulLis.appendChild(ary[i]);
}
```

+ 思考? 页面中的li还是10个，为啥不是20个？原理不是有10个来着？我们又appendChild了10个啊？

#### DOM映射

页面中的html元素和我们通过js相关方法（getElementsById、getElementsByTagName/getElementsByXXX）获取的元素对象或者元素集合存在映射关系（一个改另一个跟着改）；

#### 常见的DOM映射：

+ liList[i].style.backgroundColor = 'red'; 将liList[i]元素对象对应的堆内存下的style属性下的backgroundColor属性修改为red（本质是操作js堆内存空间），但是由于DOM映射机制，页面中的元素和元素对象的堆内存空间是绑定再一起的。所以我们修改了元素对象堆内存空间里的值，页面中的标签会按照最新的值来渲染；

+ liList是ul下面的li元素集合，集合中存储的都是元素对象，而对象都是堆内存；所以liList这个类数组中存储的形如，{0: aaafff111, 1: aaafff222, .....,length: 1};然后我们通过类数组转数组的方法将类数组转为数组后数组，数组中存储的也只是元素对象的堆内存地址，形如 [aaafff111, aaafff222, ....,length: 10]，此时虽然是把类数组转成了数组，但是并不是重新创造了10个li元素对象，而是把原来的10个li搞到一个数组中了。然后我们通过appendChild把数组中的元素对象插入到页面中时，其实这些元素对象就是页面中的元素对象，此时appendChild会把这个元素对象移动到容器末尾。

+ appendChild：向容器末尾追加元素，如果追加的元素已经存在于容器中，此时不会克隆（按照原来的再造一份一模一样的新的）一份再追加，而是把原来的移动到容器末尾；

+ 数据绑定后：数据绑定之前，我们获取的ul下面的li得到一个空集合，但是当我们绑定数据后不需要重新获取，DOM映射机制会把新增加的元素映射到我们之前已经获取的集合中，此时元素集合不再是空集合。但是querySelector和querySelectorAll获取的集合叫做静态集合 staticNodeList，是掐断了DOM映射的，基于这种方式获取元素集合，在数据绑定完成后需要重新获取。


### 四、JSON数据

#### JSON 数据格式：
JSON数据不是一种数据类型，而是一种数据格式。是一种前后端交互时常用的数据格式；

#### JSON对象
属性名和属性值都是双引号，如果属性值是数字可以不用双引号包裹；

##### 普通对象：

``` javascript
let obj = {
	"name": "珠峰",
	"age": 10
};

```

##### 二维数组：数组中的对象的属性名和属性值都需要使用双引号包裹

``` javascript
let data = [
	{
		"name": "张三",
		"age": 18
	},
	{
		"name": "李四",
		"age": 19
	}
];
```

#### JSON格式的字符串： 长得很像JSON对象的字符串

``` javascript
let str = '{"name": "珠峰", "id": 1, "age": 18}';
let str2 = '[{"name": "张三", "age": 1}, {"name": "李四", "age": 19}]';
```

#### JSON格式的字符串和JSON格式的对象互转：

__Window对象上提供了JSON的对象__

``` javascript
console.log(window.JSON);
```

+ window.JSON.stringify() 方法：把JSON格式的对象转成JSON格式的字符串
+ window.JSON.parse() 方法：把JSON格式的字符串转化成JSON格式的对象

__ window对象上的方法调用时，可以省略window__

``` javascript
let str3 = JSON.stringify(obj); // window.JSON.stringify(obj)
console.log(str3);

let str4 = JSON.stringify(data); // window.JSON.stringify(data)
console.log(str4);

let obj2 = JSON.parse(str);
console.log(obj2);
let obj3 = JSON.parse(str2);
console.log(obj3);
```

+ 注意：IE6/7 没有JSON对象，在低版本浏览器将JSON字符串 转换为JSON对象需要使用eval方法。

``` javascript

let str5 =  '{"name": "珠峰", "id": 1, "age": 18}';
// let obj4 = eval(str5);
// console.log(obj4); // 报错：Unexpected token。。
```
报错的原因是eval把字符串转成代码执行，当遇到对象的花括号时，eval会首先认定花括号时代码块，而不是对象；为了解决这个问题，我们需要给字符串外面多拼接一层小括号；

``` javascript
let obj5 = eval('(' + str5 + ')');
console.log(obj5); // 加小括号后eva会把({...})当成一个对象
```

#### 封装方法json字符串转JSON：

``` javascript

/** desc
 * @desc JSON字符串转JSON
 * @param jsonstr json格式字符串
 * @returns json格式对象
 */
function toJson(jsonstr) {
	if ('JSON' in window) {
		return JSON.parse(jsonstr);
	} else {
		return eval('(' + jsonstr + ')');
	}
}
```

### 五、ajax初步


#### AJAX

Asynchronous javascript and xml 异步的javascript和xml

在我们过往的项目中的数据都是写死的，但是真实项目中，数据都是存储数据库中的。而服务端通过服务端的技术（nodejs、php、java、python...）把数据从数据库中读取出来再处理成客户端需要的数据，然后通过网络技术（ajax、jsonp等）把数据传递给客户端；

#### ajax 四步

##### 第一步：创建一个ajax对象

``` javascript
var xhr = new XMLHttpRequest();
```

##### 第二步：调用ajax对象的open方法设置请求信息：
``` javascript
xhr.open('GET', './data.json', false);

```
参数详解：

+ 请求方式 http method（GET POST PUT DELETE OPTIONS...）
+ 请求的服务端url地址（接口）
+ 同步或异步 true 表示同步，false表示异步


#### 第三步：设置xhr的onreadystatechange事件监听

``` javascript
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// 当xhr.readyState变成4 并且 xhr的status为200时表示当前请求成功
		// 当成功后，xhr的responseText属性会存储着本次请求获取的数据
		console.log(xhr.responseText);
	}
};
```

#### 第四步：发送请求

``` javascript
xhr.send();
```

### 六、数据绑定

+ 页面中的数据通常都不是写死的，大多数情况下都需要动态绑定数据；

``` javascript
let ul = document.getElementById('ul');
```

``` javascript
var ary = [
	{
		name: '张三',
		age: 18
	},
	{
		name: '李四',
		age: 19
	},
	{
		name: '王五',
		age: 20
	}
];

```

#### 1. 创建元素

利用动态创建DOM的方法，动态创建dom对象

``` javascript
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	let newLi = document.createElement('li');
	newLi.innerHTML = 'name: ' + cur.name + ' age:' + cur.age;
	ul.appendChild(newLi); // 所以在这里每次都插入一个新元素，就会引发一次DOM回流，性能开销很大，不推荐这种做法
}
```

+ DOM回流（reflow）： 在页面中某个元素的插入、删除、位置、大小发送变化，那么会重新计算其他元素的位置，这样做非常消耗性能；

+ DOM重绘（repaint）：当页面中的元素的背景、字体颜色发送改变、那么浏览器需要对其进行重新绘制，这种现象称为重绘；

#### 2. 利用文档碎片

文档碎片：一个通过DOM api创建的临时存放DOM元素的容器

``` javascript
let frg = document.createDocumentFragment(); // 创建文档碎片
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	let newLi = document.createElement('li');
	newLi.innerHTML = 'name: ' + cur.name + ' age:' + cur.age;
	frg.appendChild(newLi);
}
ul.appendChild(frg);
frg = null; // 当插入后，手动释放frg的内存（手动释放临存储对象的内存是一种优秀的编程习惯）
```

#### 3. 拼接字符串+innerHTML（元素对象的innerHTML可以识别字符串中的html标签）

``` javascript
let str = '';
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	str += '<li>' + 'name: ' + cur.name + 'age: ' + cur.age + '</li>';
}
console.log(str);
ul.innerHTML = str;
```

#### 4. 模板字符串

``` javascript
let tpl = ``;
for (let i = 0; i < ary.length; i++) {
	let cur = ary[i];
	tpl += `<li>
						 <strong>name: ${cur.name}</strong>
						  <strong>age: ${cur.age}</strong>
						</li>`
}
ul.innerHTML = tpl;
```


<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>