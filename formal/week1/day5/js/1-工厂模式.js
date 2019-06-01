/*
* 目标：
*   1. 理解工厂模式
*   2. 理解工厂模式解决了单例模式的那些问题
*   3. 理解工厂模式的不足
* */

// 单例模式创建老师的信息记录对象

var t1 = {
  name: '马宾',
  age: 18,
  subject: 'JS',
  from: '珠峰'
};

var t2 = {
  name: '姜文',
  age: 19,
  subject: '架构师课程',
  from: '珠峰'
};

// 单例模式虽然解决了全局变量命名空间互相覆盖的问题，但是效率太低，当大规模创建对象时，就需要写许多重复的代码。怎么解决这个问题？

function teacher(name, age, subject, from = '珠峰') {
  var obj = {}; // 原材料
  obj.name = name; // 加工
  obj.age = age; // 加工
  obj.subject = subject;
  obj.from = from;
  obj.teach = function () {
    console.log(`${this.name} 老师教 ${this.subject}`);
  };
  return obj; // 出厂
}
var t3 = teacher('任金辉', 19, 'JS');
console.log(t3);
var t4 = teacher('薛振翔', 19, 'JS');
console.log(t4);
console.log(t3 === t4);

// 工厂模式：像上面这样，把创建对象的细节封装成一个函数，在函数中为这个对象添加属性，这种创建对象的模式叫做工厂模式；

// 工厂虽然可以批量生产，但是生产出来的对象都一样，没有分类。

var ary = new Array(1, 2, 3, 4); // 我们这样通过new操作符以实例创建方式创建了一个数组的实例？}
console.log(ary);

var t5 = new teacher('马宾', 18, 'JS', '珠峰');
console.log(t5);
// 我们通过new操作符执行工厂模式的函数，和直接执行没有啥区别；我们new Array得到数组实例，但是new teacher只能得到一个普通对象，和不new没区别；这个时候，咱们的teacher函数和Array存在不同。
// 因为Array虽然是函数数据类型的，但是不是普通函数，它叫做构造函数。








