[珠峰培训，专注前端](http://www.zhufengpeixun.cn/ "点击看看大牛最近都在学什么")
by珠峰-马宾

## 一、普通对象

> js中的普通对象：无序的键值对集合。
> + 由大括号包裹起来的{key: value}
> + 由零到多组属性名和属性值（键值对）组成。属性名可以是数字、字母、或者下划线等，并且属性名都是字符串类型的。

`属性是用来描述当前对象特征的，属性名是当前对象具备的特征，属性值是这个特征的描述，一组属性名和属性值成为一组键值对`

#### 声明对象
```javascript
var feTraining = {
    name: '珠峰培训',
    age: 9,
    characters: '专注前端10年',
    9: 'age'
}
```

#### 对象的操作：键值对的增删改查

+ 获取对象的某个属性的值
    - 对象.属性名
    - 对象['属性名']

```javascript
console.log(feTraining.name);
console.log(feTraining['name']);
var str = 'age';
console.log(feTraining[str]); // 9

```
> 如果用. 后面的属性名不用写引号，如果使用[]，属性名需要用字符串包裹
> 如果属性名是数字，只能使用 []
> 方括号里面还可以写变量或者表达式
> 如果获取一个对象不存在的属性，会得到一个undefined

+ 增加/修改
`js对象中的属性名是不允许重复的，是唯一的`

    如给个一个对象的属性赋值，有两种情况:
    - 如果对象之前不存在这个属性，那么就是给这个对象增加一个属性，值是等号右侧的值
    - 如果对象之前已经存在这个属性了，再赋值就是修改对象中的这个属性的值

```javascript
feTraining.courses = 'JS高级+vue+react+node'; // feTraining之前不存在courses这个属性，所以是增加；
console.log(feTraining);

feTraining.name = 'Everest Training'; // feTraining之前就存在name属性，所以是修改
console.log(feTraining);
```

+ 删除

- 彻底删除：把对象的属性名和属性值都删除。 delete obj['name']
- 软删除：将对象的某个属性的值赋值为null。 obj.name = null

```javascript
delete feTraining.age;
console.log(feTraining);

feTraining.courses = null;
console.log(feTraining); // course属性名还在，只是值为null了
```

### 思考？

```javascript
var obj = {
    name: '珠峰培训',
    age: 10
};
obj.name // '珠峰培训'
obj['name'] // '珠峰培训'
obj[name] ?? => name和 'name'有什么区别？'name'表示的是一个字符串，而name表示一个变量名
```
`对象中的属性名都是字符串类型的`

----

## 二、数组对象

> 数组是【有序】的键值对集合；但是数组的键是浏览器设置的，不需要我们手动设置，并且键都是从0开始的数字，我们称数字属性名为【索引】。数组的第一项的对应的索引是0，第二项对应的索引是1，以此类推，第n项对应的索引是 n - 1。

var ary = [12, 23]; // ? 12和23是都是属性值，属性名呢？
console.log(ary); // 从控制台可以发现是有键的，并且键都是数字

#### 数组的操作

数组的键是数字，所以只能用方括号的方式获取、修改，而且写在方括号里面的属性名不需要用引号包裹；

```javascript
var ary = [12, 23];
console.log(ary[0]);
console.log(ary.0); // 报错
console.log(ary[1]);
console.log(ary[2]); // 访问一个数组不存在的索引，会得到一个undefined
```

## 三、基本数据类型和引用数据类型的区别

```javascript
var a = 12;
var b = a;
b = 13;
console.log(a); // 12
console.log(b); // 13

var obj1 = {
  name: '珠峰',
  age: 10
};
var obj2 = obj1;
obj2.age = 100;
console.log(obj1.age); // 100
console.log(obj2.age); // 100
```

### 为什么会有这种情况？

基本数据类型（也叫做值类型）的操作，直接操作就是这个值，意思就是说变量本身就代表这个值。所以： var b = a;  存储12这个值，然后声明一个变量b，然后让变量b和这个新的12关联起来。这一行和 var b = 12本质上没有任何区别；

引用数据类型都是存放在堆内存空间中的，同时这个堆内存空间有一个十六进制的内存地址。我们在声明一个引用数据类型时，不是直接把对象赋值给变量，而是把对象的堆内存地址赋值给变量。
所以引用数据类型的操作不是直接操作的值，而是操作它的引用数据类型的堆内存地址。所以var obj2 = obj1; 只是把obj1代表的堆内存地址地址赋值给了变量obj2。
所以obj2.age = 100;是通过obj2的堆内存地址找到堆内存地址中的存储的age的值，把它修改成100。同时，我们访问obj1.name 时也是先通过obj1存储的堆内存地址找到内存空间，然后从里面把属性age的值取到，此时这个内存空间中的值已经修改成100了。所以obj.name 也是100



## 四、布尔类型、布尔运算

> 布尔类型值只有两个值，true和false；布尔运算用来测试真假值，即运算结果是真的还是假的，通常结合js的判断语句（if/switch-case/三元表达式）使用。

### 其他数据类型和布尔值进行转换

- Boolean方法

> 语法：Boolean(需要转换的值) ；得到转换后的规则
```javascript
var boo = Boolean(1);
var boo2 = Boolean(0);
console.log(boo, boo2); // true
```

- !运算符（取反运算符）true取反就是false，而false取反就是true
> 运算符是有固定功能的关键字或者符号。它通过操作值也可以得到返回结果，与方法不同的是运算符不需要小括号。
> 语法：!需要取反的值 ；得到 取反后的布尔值。其内部机制是先把其他数据类型转换成布尔值，然后再取反。
转换规律：在js中只有 0/NaN/空字符串''/null/undefined 这5个值转换成布尔值是false，其余的都是true。

```javascript
var str = '珠峰培训，10年专注前端';
var result = !str;
// 内部运作机制：
// 第一步先将str转换成布尔值，str不属于那5个值，所以 Boolean(str) => true
// 然后再取反，true 取反 => false
console.log(result); // false

```

- !! 运算符 等效于 Boolean方法
> 语法：!!需要转换的值；

```javascript
var num1 = !!1;
var num2 = !!0;
console.log(num1, num2); // true false

console.log(!!{}); // true
console.log(!![]); // true
console.log(!!{name: 'zhufeng'}); // true

```

## 五、null和undefined
> null空对象指针；不占内存，通俗理解就是人为的手动先赋值为null，后面程序中我们会再给它赋值为其他值；

> undefined 未定义。多数情况是某些浏览器内置机制设置的默认值，声明一个变量不赋值，这个变量的默认值就是undefined

----


## 六、js中的判断语句

`判断语句是流程控制的重要语句，其作用是当满足某些条件时才能执行某些代码`

### 1、if/else if/else

```javascript
// 单独使用if
if (条件) {
  // 浏览器会对条件进行布尔运算，即求出条件时true还是false。条件为true时，即条件成立的时候才会执行这个花括号里面的代码
}

// 两种情况，结合else
if (条件) {
  // 条件为true时
} else {
  // 不满足条件的时候要执行的代码
}

// 多种情况，结合else if
if (条件) {
  // 条件1为true时
} else if (条件2) {
  // 条件2为true的时候要执行的代码
} else {
    // 上面条件都不满足条件的时候要执行的代码
}

```
示例：
```javascript
var num = 6;
if (num > 6) {
  num++; // => num = num + 1; 在自身上累加一个
} else if (num >=10) {
  num--;
} else {
  num+=2
}
console.log(num);
```

`只要有一个条件成立，后面不管是否还有成立的条件，都不会在执行了`

```javascript
var num = 10;
if (num > 5) {
  num += 2;
} else if (num > 8) {
  // 虽然num满足大于8，但是再上面已经执行过num>5的代码，所以这里不会执行
  num += 3;
} else {
  num += 4;
}
console.log(num); // 12
```

### 2、条件怎么写？

`if (条件) 条件最终需要的是一个布尔值，然后根据是true还是false来判断条件是否成立。如果条件里面写的是可以返回布尔值的表达式，那么就利用这个表达式的返回结果；如果不是返回布尔值，那么浏览器会自动把它转换成布尔值，然后用转换出来的结果判断条件是否成成立`

常见比较运算符：比较运算符都会返回布尔值
+ 大于(>)， a > b， 当a大于b时返回true，否则返回false
+ 大于等于(>=)， a >= b ，当a大于等于b时返回true，否则返回false
+ 小于(<)，a < b
+ 小于等于(<=)
+ 不等于(!=)、
+ 等于(相对比较== 或者 绝对比较===)
    - == 是相对比较，只要两边的值相同就行，不比较类型，如 1 == '1' 返回true
    - === 是绝对比较，两边值相同还不够，还要比较类型。1 === '1' 返回false，因为1是number，而'1'是string，类型不同

```javascript
console.log(1 > 0); // true
console.log(1 < 0); // false
console.log(1 == '1'); // true
console.log(1 === '1'); // false
```

条件常见形式：
+ 使用比较运算符，直接返回布尔值

+ 如果是数学表达式，那么会先运算求值，然后再把运算出来的结果转换成布尔值。
> 在js中，+ - * / % 都是数学运算，除+以外，其余的运算符在运算时，如果遇到非数字类型的值，首先会转成数字类型（Number），然后再进行运算

```javascript
if ('3px' + 3) {
  // + 操作符在两边都是数字时才是加法运算符，如果有一个不是数字，那么加好就是字符串拼接。
  // 所以 '3px' + 3的结果是字符串'3px3'，而字符串 '3px3'转换成布尔值以后是true，所以条件成立
}

if ('3px' - 3) {
  // - 会调用Number()方法把'3px'转成数字，Number('3px') -> NaN，而NaN - 3 -> NaN，而NaN转成布尔值是false，所以条件不成立
}
```

+ 其他情况，均会把条件转成布尔值。

#### 练习

```javascript
var num = parseInt('width: 35.5px');
if (num == 35.5) {
  alert(0);
} else if (num == 35) {
  alert(1);
} else if (num == NaN) {
  alert(2);
} else if (typeof num == 'number') {
  alert(3);
} else {
  alert(4);
}
```

### 2、三元运算符

> 语法： 条件 ? 成立要做的事情 : 不成立要做的事情
> 相当于简单的 if else判断
> 并且三元运算符是有返回值的，当条件成立时三元运算符返回条件成立时的值，不成立时返回不成立的值。

+ 一般情况

```javascript
var num = 12;
if (num < 10) {
  num++;
} else {
  num--;
}

// 改写成三元运算符

num > 10 ? num++ : num--;
```

+  特殊情况：
    - 如果三元运算符中条件成立或者不成立时不需要任何操作，我们用null/undefined/ void 0占位

```javascript
// num > 10就++，否则啥也不做

num > 10 ? num++ : null;
num > 10 ? num++ : undefined;
num > 10 ? num++ : void 0;
```
    - 如果在条件成立（或不成立）时有多条语句，需要用小括号括起来，每条语句；

```javascript
var num = 10;
num >= 10 ? (num++, num*=2) : null;
```

### 3、switch case

语法：
```javascript
switch (变量或者表达式) {
  case 值1:
    变量或者表达式的值是值1的时候执行的代码;
    break;
  case 值2:
     变量或者表达式的值是值2的时候执行的代码;
     break;
  ...
  case 值n:
    变量或者表达式的值是值1的时候执行的代码;
    break;
  default:
    以上情况都不满足时，相当于else
}
```
> switch case应用于变量（表达式）在不同值的情况下的不同操作，每一种case结束后都需要加break（break是结束整个判断）;

```javascript
var num = 12;
if (num == 10) {
  num++;
} else if (num == 5) {
  num--;
} else {
  num = 0;
}

// 改写成switch case
switch (num) {
  case 10:
    num++;
    break;
  case 5:
    num--;
    break;
  default:
    num = 0;
}
```

> 注意：switch case 中每一个case的比较都是基于 === 绝对相等来完成判断的。即 10 === '10' 是false。真实项目中常用绝对比较。


【发上等愿，结中等缘，享下等福；择高处立，寻平处住，向宽处行】