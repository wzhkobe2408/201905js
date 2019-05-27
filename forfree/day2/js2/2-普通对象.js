/*
* 目标：
*   1. 理解对象的定义、以及无序性
*   2. 掌握对象属性操作
*     2.1 获取对象的属性值
*     2.2 修改对象的属性值
*     2.3 为对象增加属性
*     2.4 删除对象的属性
* */

// 1. 对象：js中对象是无序的键值对集合。
// 属性时用来描述当前对象特征的，属性值是特征的具体描述；
// var obj = {
//   name: '珠峰培训',
//   age: 10
// };
// console.log(obj);

// var obj2 = {
//   age: 10,
//   name: '珠峰培训'
// };
// console.log(obj2);

// 2. 声明一个对象：
var student = {
  name: '李永杰',
  age: 18,
  character: ['下自习早', '回答问题不积极', '总想发红包'],
  100000: '月薪'
}; // 属性名可以是 数字、字母、下划线的组合

// 3. 对象属性操作

// 3.1 获取对象的属性值: 对象.属性名 或者 对象['属性名'] 返回属性名对应的属性值。访问不存在的属性名会返回undefined
// console.log(student.name);
// console.log(student['name']);
// console.log(student[100000]); // 如果属性名是数字只能使用方括号获取其对应的值
// console.log(student['xyz']); // undefined

// 3.2 增加或者修改对象的属性名: 对象的属性名具有唯一性，不能有有重复的属性名存在。增加或者修改都是通过赋值的方式完成的：
// 3.2.1 如果这个属性名在之前的对象中已经存在了，就是修改这个属性；
// 3.2.2 如果这个属性名在之前的对象中不存在，就是为这个对象增加一个属性；

// student.addressProvince = '河南';
// student['addressCity'] = '保密';
//
// student.character = ['高富帅'];
// console.log(student);

// 3.3 删除对象的属性：
// 3.3.1 软删除：将属性值修改为null。属性名还存在，只不过属性值是null
// 3.3.2 彻底删除：delete 对象.属性名 或者 delete 对象['属性名'] ;删除后，属性名和属性值都不存在了

// student.age = null; // 软删除age属性
// console.log(student);
// delete student.age;
// console.log(student);

// console.log(student.name); // 永杰
// console.log(student['name']); // 永杰

var name = 'name';
console.log(student[name]); //
console.log(student['name']); //
// 'name'是字符串，不带引号的叫做变量。变量时用来存储值或者代表值的，此时name变量代表的就是 'name' ,而把字符串放在方括号里面就是获取对象的属性值的。











