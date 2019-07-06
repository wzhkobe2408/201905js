let ary = [12, 0, 5, 3, 9, 100];

// 1. 数组.filter(callback) : 过滤数组，把符合条件的数组项放到新数组中返回，原数组不变；（符合条件：能够使回调函数返回true的；）；数组中有多少项就会执行多少次回调函数，
let lessThan12 = ary.filter((item, index) => {
  // item 是数组中的每一项 
  // index 每一项的索引 
  // console.log(item, index);
  return item < 12; // 把小于12的项过滤出来
});
// console.log(lessThan12);

/*
* course: int 课时数
* price: int 课程单价
* subject: int 科目 1 数学，4 英语，3 物理 5 化学
* */
/*购买的课时数小于等于36的总数计算出来，并且把小于等于36的学科找出来，输出到控制台*/
let mappings = {
  1: '数学',
  4: '英语',
  3: '物理',
  5: '化学'
};
let ary2 = [
  {
    course: 18,
    price: 180,
    subject: 1
  },
  {
    course: 36,
    price: 180,
    subject: 4
  },
  {
    course: 24,
    price: 180,
    subject: 3
  },
  {
    course: 72,
    price: 180,
    subject: 5
  }
];

let total = 0;
let lt36 = ary2.filter((item) => {
  return item.course <= 36
});
// console.log(lt36);
lt36.forEach((item) => {
  total += item.course;
  // console.log(mappings[item.subject] + `: ${item.course}`);
});
// console.log(total);

// 2. 数组.every(callback) 判断数组中所有的项都满足条件（回调函数返回true），如果都满足条件返回true，否则返回false；
let ary3 = [
  {
    name: 'zs',
    age: 17
  },
  {
    name: 'lis',
    age: 19
  },
  {
    name: 'ww',
    age: 19
  },
  {
    name: 'zl',
    age: 16
  }
];
// 判断这个列表中的所有人是否都是成年人；（判断数组中每一项的age属性是否大于等于18）
let allAdult = ary3.every((item) => {
  console.log(item); // item是数组中的每一项，如果数组中有一项不满足条件，后面的就不再执行了
  return item.age >= 18
});
// console.log(allAdult);

let ary4 = [1, 3, 5, 7, 11, 13]; // 判断数组中是否都是奇数？
let isOdd = ary4.every((item) => item % 2 !== 0);
console.log(isOdd);

// 3. 数组.some(callback) 判断数组中是否有符合条件的项；如果有返回true，没有返回false
// 判断ary3中是否有未成年人；
let u18 = ary3.some(function (item) {
  return item.age < 18;
});
console.log(u18);

// 4. 数组.find(callback) 从数组中把满足条件的数组项拿到，如果有多项符合条件，只拿第一个；如果找不到返回undefined；
// 把ary3 中未成年拿一个出来；
let one = ary3.find((item) => item.age < 18);
console.log(one);

// 5. 数组.reduce(function (prev, current) {}, initValue)



















