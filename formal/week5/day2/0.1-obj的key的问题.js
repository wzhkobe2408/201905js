let obj = {
  name: 'mb', // 对象的属性名都是字符串类型的
  id: 17
};

let obj2 = {};

for (let key in obj) {
  obj2[key] = obj[key]; // obj[key] 写在方括号中的key没有引号，就是变量，最终被添加到obj2中的属性是key变量代表的值；第一次遍历obj key代表的是'name'属性，所以第一次给obj2添加了一个'name'属性，值'mb'，第二次key代表'id',所以给obj2添加的属性是 'id'，值是17；所以最后obj2 是{name: 'mb', id: 17}
}

let obj3 = {};

for (let attr in obj) {
  obj3.attr = obj[attr]; // obj3.attr 写在.后面的attr是死的属性，不是变量，表示的就是'attr' 属性，给obj3添加的属性 就是 'attr' ，第一遍历时，给obj3添加了'attr'属性，obj3 就是 {attr: 'mb'}；第二次遍历时，obj3.attr 表示 obj3['attr']，此时obj3['attr']有值，所以本次不是添加是修改，就把obj3 修改成了 {attr: 17};
}

// obj.key 等价于 obj['key']