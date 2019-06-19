## 一、基础知识

1. 页面中有如下元素：
```
<div class="box" id="box">一曲相思</div>
```

请用不少于三种方式获取它；

2. 有如下数组：

```javascript
var ary = [1, 2, 3, 4];
```


    2.1 向数组末尾追加一项
    2.2 删除数组末尾一项
    2.3 给数组中每一项都乘以2，并返回一个新数组
    2.4 从第2项复制到第4项
    2.5 从数组中解构出第3项，并输出到控制台；
    
3. 有如下代码

```javascript
let width = 'world';
var obj = {
  width: 100,
  height: 200,
  backgroundColor: 'red'
};
```

    3.1 遍历对象obj输出属性和属性名
    3.2 将obj的height的值修改为300
    3.3 将width属性从对象中解构并输出
    
4. 有如代码：

```javascript
let str = 'hello2019 zhufeng2018 zhufeng2019 zhufeng2020';
```

    4.1 判断字符串中是否包含 'ILoveU' 字符串
    4.2 从索引12开始复制8个字符
    4.3 获取字符串中hello后面的数字
    4.4 把字符串中zhufeng替换成 珠峰

5. 写一个正则匹配大陆地区的手机号（以1开头的11位数字）

6. 写一个正则匹配23-68的数字

7. 写一个正则匹配最后三位相同的手机号

8. 有如下代码，解构实参

```javascript
function animate(解构实参) {}

animate({
  ele: box, 
  target: { 
    left: 850,
    top: 400
  },
  duration: 2000, 
  after: function () { 
    console.log('终于执行完了');
    this.style.color = 'red'; 
  }
});
```

## 二、执行题

1.
```javascript
function fn(n) {
  return function (a) {
    a++;
    console.log(n += a);
  };
}

var f = fn(10);
f(1);
f(2);
```

2.
```javascript

var num = 20;
var obj = {
  num: 30,
  fn: (function (num) {
    this.num += 5;
    return function (x) {
      num += x;
      console.log(num);
    };
  })(num)
};
obj.fn(this.num);
console.log(num, obj.num);
```

3.

```javascript
var num = 20;
var obj = {
  num: 30,
  fn: function (num) {
    this.num += 5;
    return function (x) {
      this.num += x;
      console.log(num);
    };
  }
};
let fx = obj.fn(this.num);
fx(this.num);
console.log(this.num, obj.num);

```

4.
```javascript
function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  }
}

Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype.getY = function () {
  console.log(this.y);
};

var f1 = new Fn;
var f2 = new Fn;

console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
f1.getX();
f1.__proto__.getX();
f1.getY();
f2.getY();
```

