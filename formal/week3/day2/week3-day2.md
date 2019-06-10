<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 正则捕获、正则捕获细节、正则简单应用

### 一、方括号的细节问题

+ [] 正则中的方括号：表示方括号中的元字符中的任意一个

特殊元字符：在正则中有特殊含义的字符串如 . ，在正则中表示匹配除 \n 之外的任意其他字符，原义是 小数点

#### 1. 在方括号中的部分特殊元字符代表的是该字符的原义，不再具有特殊含义
如： [.] [?] [*] [+]

``` javascript
let reg = /./;
let reg1 = /[.]/; // 方括号中的 . 表示普通小数点
console.log(reg.test('abc')); // true
console.log(reg.test('.')); // true
console.log(reg1.test('abc')); // false
console.log(reg1.test('.')); // true
```

``` javascript
let reg2 = /[?]/; // 方括号中的?表示问号，不是两次元字符
console.log(reg2.test('?'));

let reg3 = /[*]/; // 方括号中的*表示星号，不是量词源字符串
console.log(reg.test('*')); // true

let reg4 = /[+]/; // 方括号中的+表示加号，不是量词元字符
console.log(reg4.test('+')); // true
```

#### 2. 方括号不能识别多位数

``` javascript
let reg5x = /^183$/; // 只能匹配183
let reg5 = /^[183]$/; // 代表1或者8或者3中的任意一个数字

console.log(reg5.test('1')); // true
console.log(reg5.test('8')); // true
console.log(reg5.test('3')); // true
console.log(reg5.test('18')); // false
console.log(reg5.test('13')); // false
console.log(reg5.test('183')); // false
```

3. 中括号限制范围 [0-9] [a-z] [A-Z]

``` javascript
let reg6 = /^[23-68]$/; // 这个正则表示匹配 2 或 3-6 或 8
console.log(reg6.test('23')); // false
console.log(reg6.test('34')); // false
console.log(reg6.test('67')); // false
console.log(reg6.test('2')); // true
console.log(reg6.test('4')); // true
console.log(reg6.test('9')); // false
```

` ? 思考：为什么会有这种情况？因为中括号中连续出现的多位数不是表示一个多位数，而是表示多个一位数字；`

+ ? 思考：此时真的需要一个数字范围的话怎么办？

> 我们可以把这个范围拆分，如23-68， 然后再两位数分别表示这些段
> 23 - 29 2[3-9]
> 30-59 [3-5][0-9]
> 60-68 6[0-8]

``` javascript
let reg7 = /^(2[3-9]|[3-5]\d|6[0-8])$/;
console.log(reg7.test('22')); // false
console.log(reg7.test('23')); // true
console.log(reg7.test('34')); // true
console.log(reg7.test('67')); // true
console.log(reg7.test('2')); // false
console.log(reg7.test('4')); // false
console.log(reg7.test('9')); // false
```

### 二、正则捕获

#### 正则的捕获：把正则匹配到内容捕获到：

> RegExp.prototype.exec() 方法

``` javascript
let str = 'hello2019 zhufeng2019 zhufeng9021';
let reg = /zhufeng\d+/;
let execs = reg.exec(str);
console.log(execs);
/*
* [
*   "zhufeng2019", 捕获到的内容
*   index: 10, 捕获的起始索引位置
*   input: "hello2019 zhufeng2019 zhufeng9021", 原始字符串
 *   groups: undefined 命名匹配
 * ]
*
* */
let reg2 = /xxxx/;
console.log(reg2.exec(str)); // null
// 如果捕获不到不到会返回null

```

#### 正则捕获的懒惰性

``` javascript
console.log(reg.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
console.log(reg.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
``` 

+ 正则的懒惰性
 
如果不做特殊处理，正则每次捕获的时候都是从索引0开始，捕获到第一个符合条件的就停止捕获，后面有多少都不去捕获。
// 解决方案：在正则后加修饰符g

``` javascript
let reg3 = /zhufeng\d+/g;
console.log(reg3.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

console.log(reg3.exec(str)); // ["zhufeng9021", index: 22, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

console.log(reg3.exec(str)); // null

console.log(reg3.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

console.log(reg3.exec(str)); // ["zhufeng9021", index: 22, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
console.log(reg3.exec(str)); // null

```

` ? 为啥捕获到最后一次会是null呢？`


#### lastIndex属性

正则对象有一个lastIndex的属性，记录着下一次匹配或者捕获的起始位置，下一次再匹配或者捕获，它会从这个索引位置开始往后查找。

上面之所以是最后一次，是因为最后一次从索引33开始查找，后面没有了，所以会返回null

``` javascript
console.log(reg3.exec(str)); // ["zhufeng2019", index: 10,....]
console.log(reg3.lastIndex); #### 21
console.log(reg3.exec(str));// ["zhufeng9102", index: 22, ....]
console.log(reg3.lastIndex); #### 33
console.log(reg3.exec(str)); // null

console.log(reg3.exec(str)); // ["zhufeng2019", index: 10,....]
```

+ lastIndex属性记录着下一次匹配的开始位置。当匹配或者捕获到达末尾后，下一次再匹配或者捕获会从头再来；

``` javascript
let str2 = 'hello zhufeng2019 zhufeng9201';
let reg5 = /zhufeng\d+/g;
console.log(reg5.test(str2)); // true
console.log(reg5.lastIndex); #### 17
console.log(reg5.test(str2)); // true
console.log(reg5.lastIndex); #### 29
console.log(reg5.test(str2)); // false
```

+ 使用匹配时，也是从lastIndex开始的位置去匹配；最后一次是false是因为从索引29向后查找时没有查找到符合规则的字符串，所以返回false；

#### match 方法配合正则

> String.prototype.match()

``` javascript
let mstr = str.match(reg5);
console.log(mstr); //  ["zhufeng2019", "zhufeng9021"]
let mstrs = str.match(/xxxx/); // null
// match 方法匹配不到是返回null而不是空数组
```

``` javascript
let reg6 = /zhufeng\d+/;
console.log(str.match(reg6)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
console.log(str.match(reg6)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
```

/+ match使用的正则不加g时返回值和exec一样的。但是如果有g时，match方法会一次性把所有符合条件的都匹配到，而exec每次只能匹配到一个；

### 三、正则分组捕获

+正则捕获：正则除了匹配还可以把符合条件的捕获到；

``` javascript
let str = 'hello2019 zhufeng2019 zhufeng9021';
let reg = /zhufeng(\d+)/g; // () 是分组，相当于小正则

// 正则捕获方法：RegExp.prototype.exec() 方法

console.log(reg.exec(str));
//  ["zhufeng2019", "2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]

console.log(reg.exec(str)); // ["zhufeng9021", "9021", index: 22, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined]
```

+ 捕获到的内容是一个数组，数组的第一项是大正则匹配到的内容，如果有分组的话从第二项开始就是分组正则捕获到的内容；所以捕获的内容返回值： ["大正则捕获到的", "分组1捕获内容", "分组2捕获内容".....]


+ 字符串的match方法，匹配符合规则的字符串， 但是match方法不能进行分组匹配

``` javascript
console.log(str.match(reg)); // ["zhufeng2019", "zhufeng9021"]
```

+ 取消分组：(?:) 表示当前小括号改变优先级，而不用作用分组捕获

``` javascript
let reg2 = /zhufeng(?:\d+)/;
console.log(reg2.exec(str)); // ["zhufeng2019", index: 10, input: "hello2019 zhufeng2019 zhufeng9021", groups: undefined] 取消分组捕获后，exec的返回值中不再包含分组捕获的内容
```

#### ? 的作用
+ ? 表示量词元字符 出现0次到1次 可以有可以没有
+ (?:) 取消分组捕获

### 四、小括号的细节问题

#### 1. 分组捕获

``` javascript

let str = 'hello2019 zhufeng2019 zhufeng9021';
let reg = /zhufeng(\d+)/g; // () 是分组，相当于小正则
console.log(reg.exec(str)); // 使用exec方法符合条件的字符串捕获到
```

#### 2. 分组引用 \数字 表示引用前面分组某个分组的内容

``` javascript
let reg2 = /^(\d)\1$/; // 匹配一个数字，个位数和十位数相同; \1 表示引用第一个分组中的内容
console.log(reg2.test('11'));
console.log(reg2.test('99'));
console.log(reg2.test('12'));
```

+ 练习：写一个正则匹配四个字母的单词，其中第二个和第四个字母相同；

``` javascript
let reg3 = /[a-z]([a-z])[a-z]\1/;
console.log(reg3.test('tara'));
```

#### 3. 改变优先级

``` javascript
// 写一个正则匹配18或者19
let reg4 = /^18|19$/;
console.log(reg4.test('18')); // true
console.log(reg4.test('19')); // true
console.log(reg4.test('189')); // true
console.log(reg4.test('1819')); // true
console.log(reg4.test('181223419')); // true
```

+ ? 思考：为什么会这样？因为这个正则不是被识别成一18开头或者以19结尾；

``` javascript

let reg5 = /^(18|19)$/;
console.log(reg5.test('18')); // true
console.log(reg5.test('19')); // true
console.log(reg5.test('189')); // false
console.log(reg5.test('1819')); // false
console.log(reg5.test('181223419')); // false

```

### 五、正则捕获的贪婪性

+ 正则捕获的贪婪性：如果正则匹配到符合规则的字符串，那么捕获的时候会按照最长的捕获；

``` javascript
let str = '12345678'
let reg = /\d{2,8}/g;
let reg2 = /\d+/;
let reg3= /\d*/;
console.log(reg.exec(str)); // ["12345678", index: 0, input: "12345678", groups: undefined]
console.log(reg2.exec(str)); // ["12345678", index: 0, input: "12345678", groups: undefined]
console.log(reg3.exec(str)); // ["12345678", index: 0, input: "12345678", groups: undefined]
```

+ 如何解决贪婪性？
在两次元字符后面增加 ? 增加问号后会按照最少的匹配

``` javascript
let reg4 = /\d{2,8}?/g;
let reg5 = /\d+?/;
let reg6= /\d*?/;
console.log(reg4.exec(str)); // ["12", index: 0, input: "12345678", groups: undefined]
console.log(reg5.exec(str)); // ["1", index: 0, input: "12345678", groups: undefined]
console.log(reg6.exec(str)); // ["", index: 0, input: "12345678", groups: undefined]
```

### 六、正则简单应用


#### 1. 验证中国大陆手机号 以1开头的11位数字

``` javascript
let reg1 = /^1\d{10}$/;
console.log(reg1.test('16601046931')); // true
```

#### 2. 验证某些号段的手机号验证，例如188 170 156

``` javascript
let reg2 = /^1(88|70|56)\d{8}$/;
console.log(reg2.test('18801046931')); // true
```

#### 3. 匹配尾号是连续的三围豹子号 666 777 111

``` javascript
let reg3 = /^1\d{7}(\d)(\1{2})$/;
console.log(reg3.test('15912345666')); // true
```

#### 4. 靓号 中间四位相同后面四位相同

``` javascript
let reg5 = /^1\d{2}(\d)\1{3}(\d)\2{3}$/;
console.log(reg5.test('17733332222'));
```

#### 5. 有效数字验证：

10 +10 -10 0.12 10.02

+ +或-最多出现一次
+ 如果是一位数字可以是0-9
+ 多位数不能以0开头
+ 如果有小数点，后面必须跟至少一位小数

``` javascript
let reg6 = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;
```
#### 5. 验证数字在某个范围内 18 - 60

+ 18 - 19 1[89]|
+ 20-59  2[0-9]
+ 60 60

``` javascript
let reg7 = /^(1[89]|[2-5]\d|60)$/;
console.log(reg7.test('17')); // true
console.log(reg7.test('18')); // true
console.log(reg7.test('19')); // true
console.log(reg7.test('59')); // true
console.log(reg7.test('60')); // true
console.log(reg7.test('61')); // true
```

#### 6. 匹配中文姓名

+ 中文的Unicode编码范围 \u4e00-\u9fa5
+ 出现2位到6位

``` javascript
let reg8 = /^[\u4d00-\u9fa5]{2,6}$/;
console.log(reg8.test('马宾')); // true
```

#### 6. 邮箱验证(简单验证)

+ 雅虎邮箱：xxxx@yahoo.com.cn
+ google xxx@gmain.com
+ qq邮箱 xxx@qq.com
+ 网易 xxx@163.com
+ 网易 xxx@126.com

+ 开头部分 [a-zA-Z\d]+
+ 中间部分 [-\w]+
+ 结尾部分 [a-zA-Z\d]

``` javascript
let reg9 = /^[a-zA-Z\d]+@[a-zA-Z\d]+(\.[a-z]+){1,2}$/;
console.log(reg9.test('mabinbingo@163.com')); // true
console.log(reg9.test('mabinbingo@163@.com')); // false
console.log(reg9.test('1164664451@qq.com')); // true
console.log(reg9.test('1164664451@sina.com.cn')); // true
console.log(reg9.test('1164664451@sina.com.cn.cn')); // false
```

#### 7. 数据类型检测

``` javascript
Object.isTypeOf = function (val) {
	let res = Object.prototype.toString.call(val); // "[object Xxxx]"
	let reg = /^\[object ([a-zA-Z]+)\]$/; // 在正则使用某些特殊元字符的原义时需要转义
	let exec = reg.exec(res)[1];
	return exec.toLowerCase();
};
console.log(Object.isTypeOf(1));
```

### 七、正向预查和负向预查

+ 正向预查：(?=元字符) 不发生分组捕获
+ 负向预查: (?!元字符) 不发生分组捕获

#### 正向预查：/x(?=y)/ 匹配x，仅当x后面紧跟着y（匹配后面跟着y的x）；

``` javascript
let reg1 = /[a-z](?=3|4)/g;
let str1 = 'a1 b2 c3 d4';
console.log(str1.match(reg1)); // ["c", "d"]
```

#### 负向预查：/x(?!y)/ 匹配x，仅当x后面不是y（匹配后面不是y的x）；

``` javascript
let reg2 = /[a-z](?!3|4)/g;
console.log(str1.match(reg2));
```


<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>