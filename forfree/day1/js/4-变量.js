/*
* 目标：
*   1. 理解变量意义、作用
*   2. 理解变量声明方法
*   3. 变量的创建步骤
*   4. 掌握变量声明的规范
* */

/*
* 变量：就是一个可以变的量。它不是一个具体的值，js中的变量时一个用来存储值或者代表值的标识符。
* js中创建变量的方式：
*
* var (ES3) 用于声明普通变量
* function (ES3) 用于声明函数变量
* let (ES6) 用于声明普通变量
* const (ES6) 用于声明常量（常量就是不能修改的量）
* import (ES6) 基于ES6的模块规范创建导入信息
* class (ES6) 创建 类
* */

// 2. 创建变量
var box = 1; // 创建一个变量box，box现在就代表1这个值，后面如果使用box就是在使用box代表的值1
box = 100; // 修改变量的值
// alert(box);

function sum () {
  console.log(1 + 1);
}

let boy = '张帅文';
boy = '唐开放';
// alert(boy);

const VALUES = '成就他人，成就自己'; // 常量不可以修改！
// VALUES = '成就客户'; 报错：Uncaught TypeError: Assignment to constant variable （尝试修改常量）
alert(VALUES);

/*
* 创建变量的步骤：var box = 1;
*   1. var box 告诉浏览器声明一个变量 box
*   2. 将box赋值为1（js中一个等号不是比较是否相等，而是赋值），赋值这个步骤又称为定义
* */

/*
* 变量命名规范：
*   1. js中的变量名严格区分大小写， var a = 1; var A = 1; A和a是两个不同的变量
*   2. 驼峰命名法：可以使用字母、数字、下划线(_)，但是数字不能作为开头。除第一个单词的首字母不用大写，其余单词首字母都需要大写；例如 var studentInfoGrade
*   3. 不能使用关键字、保留字；（ECMAScript规定的，如果查看需要查ECMAScript规范）
*     关键字：有特殊含义的单词或者字母组合， var let function class import ...
*     保留字：将来可能成为关键字的单词。
*  建议：变量语义化，用单词尽可能描述这个变量的用途；
* */
var name = '李兵';
var n = '李兵';
var age = 18;




















