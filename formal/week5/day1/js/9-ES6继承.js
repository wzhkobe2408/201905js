// ES6的继承 extends 关键字

class A {
  constructor (a, b) {
    // 给A类的实例添加私有属性
    this.text = 'A类的text';
  }
  // 添加公有方法
  say () {
    console.log('hello world');
  }
}

class B extends A { // class B extends A 让B类继承A类
  constructor () {
    super('x', 'y'); // 在这里调用super(); super就是父类; super() 这一行代码要写在使用this关键字之前，如果不这样就会报错；super执行时还可以传递实参，实参是传递给父类的构造函数的（父类的constructor）；
    this.x = 100;
    this.y = 200;
  }
}

let b = new B();
console.log(b);
b.say(); // hello world 说明，extends关键字继承把父类的公有的变成了子类公有的；

/*
*  {
*   text: "A类的text", text属性时继承的A类的，extends可以把父类私有的变为子类私有的
*   x: 100,
*   y: 200
*  }
*
* */

// extends 关键字继承：
// 1. 声明子类时，就需要 extends 父类，形如 class B extends A；
// 2. 在子类的构造函数中使用this关键字之前，调用 super()；

// extends 关键字的原理使用的寄生组合式继承（原型式继承+call继承）

// 用ES6声明一个类：Student
// 要求：这个类的实例，有name、age、sex（一般1表示男性，2表示女性）score这些私有属性；
// 还要有learn公有方法，learn方法执行输出：'我热爱编程，因为编程使我快乐';

// 继承就是为了让子类的实例能够使用父类上的属性或者方法；

class Human {
  constructor (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  eat () {
    console.log('美食');
  }
  drink () {
    console.log('干杯');
  }
  sleep () {
    console.log('睡觉');
  }
  think () {
    console.log('我是谁，我在哪儿，我要去哪儿');
  }
}

class Student extends Human {
  constructor (name, age, sex) {
    super(name, age, sex);
  }
  learn () {
    console.log('You see see u, one day day 的');
  }
}

let stu = new Student('马宾', 18, '男');

stu.learn();
stu.eat();
stu.drink();
stu.think();

class Assistant extends Human {
  constructor (name, age, sex) {
    super(name, age, sex);
  }
  lock () {
    console.log('锁门');
  }
}

let assis = new Assistant('王五', 40, '男');
assis.lock();
assis.drink();

