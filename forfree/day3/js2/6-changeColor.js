/*
* 目标：
*   1. 掌握隔行变色思路
*   2. 练习for循环语法、% 运算符判断奇偶数
*   3. 练习元素获取、元素集合
*   4. 学习通过for循环从元素集合中或去元素
*   5. 操作元素对象的行内样式 style
* */
/*
* 隔行变色：
*   1. 通过ID获取id为liWrapper的ul
*   2. 获取ul下面的li
*   3. for 循环遍历第2步我们得到的li元素集合；在遍历的过程中判断索引是奇数还是偶数，索引为偶数的对应页面中的奇数行，奇数索引页面中的偶数行
*
*/
// 1. 通过ID获取id为liWrapper的ul
var ul = document.getElementById('liWrapper');

// 2. 获取ul下面的所有的li
var liList = ul.getElementsByTagName('li');

// 3. for 循环遍历 liList
for (var i = 0; i < liList.length; i++) {
  // 判断i是奇数还是偶数
  if (i % 2 === 0) {
    liList[i].style.backgroundColor = 'red';
  } else {
    liList[i].style.backgroundColor = 'green'
  }
}

// 作业：通过设置元素的类名实现隔行变色；
// 设置元素的类名：元素对象.className = '类名'; 