<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 严格模式、错误类型详解、结构赋值、正则

### 一、严格模式

js的默认执行模式是松散模式，为了规范js这门语言，所以引入了严格模式；目的是是为了消除js的一些怪异行为；

+ 使用严格模式：在js脚本中第一行增加 字符串 "user strict"

#### 严格模式下和普通模式下的常见区别

1. 在严格模式下形参 和 arguments 没有映射关系

在松散模式中，形参和arguments有映射关系，如果再函数中修改形参，那么arguments中的对应的值也会跟着修改

``` javascript
function sum(a, b) {
	b = 100; // 普通某事中
	console.log(arguments); // 1 100
}
sum(1, 3);
```

// 严格模式中，形参和arguments不存在映射关系
``` javascript
'use strict';
function sum2(a, b) {
	b = 100;
	console.log(arguments); // 1 2
}
sum2(1, 2);
```

__项目中使用webpack工具打包编译时，会在js脚本头部指定严格模式__

2. 严格模式下的this问题

+ 非严格模式下的call：

``` javascript
function f0() {
	console.log(this);
}
var obj = {
	id: 1
};
f0.call(obj); // this -> obj
f0.call(); // this -> window
f0.call(undefined); // -> window
f0.call(null); // window
```

+ 严格模式下，call方法不指定this时函数中的this就是undefined
+ 严格模式下call指定谁，谁就是this

``` javascript
'use strict';
function f1() {
	console.log(this);
}
f.call(); // this -> undefined
f1.call(undefined); // this -> undefined
f1.call(null); // this -> null
```

3. 严格模式下，不能直接给未声明的变量赋值

``` javascript
'use strict';
aa = 123; // 非严格模式下给window增加属性

aa = 123; // 严格模式下报错： Uncaught Reference：aa is not defined
```

## 二、手动抛出错误

+ throw 关键字 用于手动抛出错误

``` javascript
throw 'hello world';
console.log(123); // 不会输出，因为throw关键字抛出的是错误，js一旦抛出错误后就会停止后面的代码执行；
```

2. 常见的错误类型

+ 2.1. ReferenceError 引用错误 引用了不存在的变量

``` javascript
throw new ReferenceError('某个变量未找到');
```

+ 2.2 TypeError 类型错误 错误使用类型

``` javascript
throw new TypeError('你搞错类型了');
```

+ 2.3 SyntaxError 语法错误
``` javascript
 throw new SyntaxError('你的语法错误');

```
+ 2.4 Error 普通错误
``` javascript
throw new Error('这是一个普通错误');
```

### 三、解构赋值

利用数据结构的对应关系快速对数组和对象进行取值；

#### 1. 数组解构赋值: 

等号左边的变量的位置和等号右边的数组中值位置相同时，变量可以取得数组中该位置的值；

+ 1.1 顺序解构：

``` javascript
let ary = [10, 50, 100, 200];
```

+ 没有解构赋值时
``` javascript
let a = ary[0];

let b = ary[1];

let c = ary[2];

console.log(a, b, c);

```

+ 使用解构赋值

``` javascript
let [a, b, c] = ary; // 等号左边是变量等号右边是数组，要求变量在等号边的位置和想取出的值的索引位置相同
console.log(a, b, c);
```

+ 1.2 取数组中的某一个:

``` javascript
let [,, d] = ary; // 如果只想得到第三个，前面两个空着，但是需要写两个 ,
console.log(d);
```

+ 1.3 取出第一项和第二项，剩余的统一放到一个数组中；

``` javascript
let [e, f, ...arr] = ary;
console.log(e); // 10
console.log(f); // 50
console.log(arr); // [100, 200]
```

+ 1.4 进一步解构：

``` javascript
let ary2 = [10, ['a', 'b']];
let [g, [h, i]] = ary2;
console.log(g); // 10
console.log(h); // 'a'
console.log(i); // 'b'
```

+ 1.5 数组解构默认值：只有解构出来的值是undefined时默认值才会生效

``` javascript
let ary3 = [1, 3];

let [j = 2, k = 3, l = 100] = ary3; // j的默认值是2，k的默认值是3，l的默认值是100
console.log(j); // 2
console.log(k); // 3
console.log(l); // 100

// 把a当做b的默认值
let [a, b = a] = [1];
console.log(a); // 1
console.log(b); // 1

```



#### 2. 对象的结构赋值

通常情况下获取一个对象的属性值是通过对象.属性名 或者 对象['属性名']
而对象的解构赋值就是通过变量和对象的属性对应时，就可以取得对象的改属性名的值


``` javascript
let obj = {
	name: '珠峰',
	age: 10
}
```

+ 2.1解构赋值：

``` javascript
let { name, age } = obj;
console.log(name);
console.log(age);
```

+ 2.2 如果只想要对象的某一个属性值：

``` javascript
let obj2 = {
	name: '珠峰',
	age: 10,
	courses: ['js前端', '珠峰架构', 'UI设计师']
};
let {courses} = obj2;
```

+ 2.3 进一步解构：

``` javascript
let obj3 = {
	name: 'zhufeng',
	teacher: {
		js: ['马宾', '牛晓鑫', '....'],
		architect: ['']
	}
};
let { teacher: { js } } = obj3;
console.log(js); // 获取obj3.teacher.js 的值
```

+ 2.4 重命名：为了避免重复声明

``` javascript
let obj4 = {
	title: '高级前端工程师'
};
let title = 100;
// let { title } = obj4; // 如果直接这样解构，相当于重复声明了title变量
let { title: title2 } = obj4; // 从obj4中解构title属性，并且重命名为title2

console.log(title2);
```

+ 2.5 解构赋值的默认值：只有解构出来的值是undefined时默认值是才会生效
``` javascript

let obj5 = {
	name: '马宾',
	age: 18,
	job: 'FE',
	// address: undefined
};
let { address = '河北' } = obj5; // 设置address解构赋值的默认值是 '河北';
console.log(address);

// 3. 字符串解构赋值
let [x, y, z] = 'hello';
console.log(x, y, z);

```

#### 4. 函数参数的解构赋值

``` javascript
function fe({ name: nike, id, num = '18332567506'}) {
	// 把fe执行时传递过来的实参进行解构
	console.log(nike, id, num);
}
fe({
	name: 'zhangsna',
	id: 10
});
```

#### 5. 对象的简洁语法

``` javascript
let config = '110.156.23.24';
let pwd = '4323445';


let obj6 = {
	config: config,
	pwd: pwd
};
// 当你的属性名和变量名一样时，就可以简写为一个变量名

let obj7 = {
	config,
	pwd,
};
```

#### 练习：

``` javascript
let response = {
	code: 0,
	data: {
		list: [
			{
				name: 'a',
				age: 1
			},
			{
				name: 'b',
				age: 2
			}
		],
		page: 1,
		total: 100
	}
};
// 使用解构赋值取出response.list, response.page, response.total
let { data: { list, page, total } } = response;
console.log(list);
console.log(page);
console.log(total);
```

### 正则

正则：（RegExp：Regular Expression）

> 专门用来处理字符串的规则，这个处理包含两方面的：
> 1. 正则匹配，判断某一个字符串是否符合规则
> 2. 正则捕获，把符合规则的字符串捕获到；

+ 学习正则学习编写一个正则：

``` javascript
let reg = /\d/img; // 字面量方式创建
let reg0 = new RegExp('\\d+', 'img'); // 实例的方式创建
```

#### 正则的构成：元字符和修饰符

##### 元字符

+ 特殊元字符
    + \d 匹配0-9中的任意一位数字
    + \D 匹配除了0-9数字以外的任意字符
    + \w 匹配数字、字母、_ 中的任意一个字符串
    + \s 匹配一个空白符（空格、\t制表符）
    + \b 匹配单词的边界 'zhu-feng' z的左侧，u的右侧，f左侧，g的右侧都是边界
    + \n 匹配一个换行符
    + . 不是小数点，是匹配除 \n 以外的任意字符串
    + \ 转义符，将普通的字符串转义成特殊的元字符，例如\d 就表示 0 -9 之间的字符串；还可以将特殊的元字符转义成普通元字符。如 \. 不再表示除 \n 以外的任意字符，而是表示普通小数点
    + ^ （读作caret符）表示以某个元字符开头
    + $ 表示以某个元字符结尾
    + x | y 表示x或者y中的任意一个
    + [xyz] 表示x/y/z 中的任意一个
    + [a-z] a-z 中的任意一个字母
    + [0-9] 0-9中的任意一个数字
    + [^a-z] 除了a-z以外的任意字符
    + () 正则分组
    + (?:) 当前分组值匹配不捕获
    + (?=) 正向预查
    + (?!) 负向预查

+ 量词元字符：表示出现次数的元字符
	 + \* 出现 0次到多次
	 + ? 出现0次到1次
	 + {n} 出现n次
	 + {n, m} 出现n次到m次
	 + {n,} 至少出现n次


+ 普通元字符：只要在正则中出现，（基于字面量的方式创建），除了有特殊元字符和量词元字符以外，其余的都是普通元字符。

+ 修饰符：
	 + i: ignorecase 忽略大小写
	 + m: multiline 多行匹配
	 + g: global 全局匹配

#### 示例：


``` javascript
let reg2 = /\D/;
console.log(reg2.test('2')); // false
console.log(reg2.test('a')); // true
console.log(reg2.test('_')); // true

let reg3 = /\w/;
console.log(reg3.test('1')); // true
console.log(reg3.test('a')); // true
console.log(reg3.test('_')); // true
console.log(reg3.test('A')); // true

let reg4 = /\n/;
console.log(reg4.test(`
`)); // true 模板字符串中输入了一个回车

let reg5 = /\s/;
console.log(reg5.test('    ')); //true
console.log(reg5.test('   ')); // true

let reg6 = /\b/;
console.log(reg6.test('zhu-feng'));

let reg7 = /./;
console.log(reg7.test('我')); // true
console.log(reg7.test('x')); // true
console.log(reg7.test('12')); // true
console.log(reg7.test('\n')); // false

let reg8 = /^\d/;
console.log(reg8.test('1abc')); // true
console.log(reg8.test('x23c')); // false

let reg9 = /\d$/;
console.log(reg9.test('hell9')); // true
console.log(reg9.test('123hello')); // false

let reg10 = /^\d$/; // 匹配一个数字，这个数字既是开头也是结尾；就是说这个字符串中只能有一个数字
console.log(reg10.test('9')); // true
console.log(reg10.test('99')); // false
console.log(reg10.test('abc1')); // false
console.log(reg10.test('1xyz')); // false

let reg11 = /a|b/;
console.log(reg11.test('a')); // true
console.log(reg11.test('b')); // true
console.log(reg11.test('ab')); // true

let reg12 = /[a-z]/;
console.log(reg12.test('a')); // true
console.log(reg12.test('z')); // true
console.log(reg12.test('xyz')); // true
console.log(reg12.test('A')); // false

let reg13 = /[^0-9]/;
console.log(reg13.test('8')); // false
console.log(reg13.test('ABC')); // true
console.log(reg13.test('\n')); // true
console.log(reg13.test('_')); // true

let reg14 = /\d*/;
console.log(reg14.test('abc')); // true
console.log(reg.test('12133bade')); // true

let reg15 = /\d?/;
console.log(reg15.test('dsjf8lkk')); // true

let reg16 = /\d{3}/;
console.log(reg16.test('666')); // true
console.log(reg16.test('22')); // false
console.log(reg16.test('111')); // true
```

<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>