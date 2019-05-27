/*
* 1. 字符串方法
* 2. 数组方法
* 3. Math
* 4. Date
* 5. 定时器
* */

// 1-> 字符串方法
/*
* 1. charAt(索引) 获取指定索引位置的字符
* 2. charCodeAt(索引) 获取指定索引位置的字符的Unicode编码
*
* 3. substr(n, m); 从索引n开始，截取m个
* 4. substring(n, m); 从索引n开始，截取到索引m（不含m）
* 5. slice(n, m) 从索引n开始，截取到索引m（不含m），slice可以使用负数索引
*
* 6. toUpperCase() 小写转大写
* 7. toLowerCase() 大写转小写
*
* 8. indexOf('字符') 获取指定字符在字符串中第一次出现的索引位置，如果没出现过返回-1
* 9. lastIndexOf('字符') 获取指定字符最后一次在字符串中出现的位置，如果没出现过 返回-1
* 10. includes() 判断字符串是否包含某个字符，如果包含返回true，如果不包含返回false
*
* 11. split() 把字符串按照指定的分隔符，拆分成数组（和数组的join方法相反）
*
* 12. replace(被替换的内容, 替换内容) 替换字符串中指定内容
* 13. replace(被替换的内容, function () {return 替换内容}) 替换字符串中指定内容
*
* 14. match(匹配内容或者匹配规则) 匹配：如果匹配到返回一个数组，匹配不到返回null
*
*
*
* */

// 2-> 数组方法

/*
* 1. push() 向数组末尾追加项;
*   splice(ary.length, 0, 数组项); 向数组末尾追加项
*   ary[ary.length] = 数组项; 向数组末尾追加项
* 2. pop() 删除数组末尾一项；
*   ary.splice(ary.length - 1, 1) 也是删除末尾一项
*   ary.length--;
* 3. unshift() 向数组开头追加项
* 4. shift() 删除数组的开头一项
* 5. splice(n, m) 索引索引n开始删除m个
* 6. splice(n, m, x) 从索引n开始，删除m个，用x替换被删除内容
* 7. splice(n, 0, x) 把x插入到索引为n的那一项的前面
*
* 8. slice(n, m) 从索引n开始截取到索引m（不包含m）
* 9. ary.concat() 拼接数组或者数组项，如果拼接的是数组项项，就把数组项拿出来拼接到ary中，返回一个拼接后的新数组
*
* 10. join() 用指定分隔符把数组连接成字符串；
* 11. toString() 把数组转换成字符串（等效于把[]变成引号）
*
* 12. indexOf() 获取数组项在数组中首次出现的索引位置，如果没出现过返回-1；
* 13. lastIndexOf() 获取数组项在数组中最后一次出现的索引位置，如果没出现过返回-1
* 14. includes() 判断数组是否包含某一个数组项，如果包含返回true，不包含返回false
*
* 15. sort(function (a, b) {return a - b}) 升序
* 16. sort(function (a, b) {return b - a}) 降序
* 17. reverse() 把数组翻转过来
*
* 18. forEach(function (item, index) {item 是数组中的每一项，index数组项的索引})
* 19. map(function (item, index) {}) 把原数组映射成一个新数组，新数组是由回调函数的返回值组成的
*
* 20. filter()
* 21. some()
* 22. every()
* 23. find()
*
* */
var ary = [1, 2, 3];
ary.splice(ary.length,0, 4);
ary.splice(n, 0, x);

// 3-> Math
/*
* 3.1 Math.abs() 取绝对值
* 3.2 Math.floor() 向下取整
* 3.3 Math.ceil() 向上取整
* 3.4 Math.round() 四舍五入（负数时五舍六入）
* 3.5 Math.random() 获取 0 -1 随机小数
* 3.6 Math.round(Math.random() * (m - n) + n) 获取n - m的随机整数包含n、m
* 3.7 Math.sqrt() 获取算数平方根
* 3.8 Math.PI 获取圆周率
* 3.9 Math.PI.toFixed(2) 保留两位小数的圆周率
* 3.10 Math.pow(x, n) 获取x的n次方
* 3.11 Math.max() 求最大值
* 3.12 Math.min() 求最小值
* */

// 4-> Date
/*
* var d = new Date()
* 4.1 getFullYear() 返回四位年份
* 4.2 getMonth() 获取月份 0 - 11
* 4.3 getDate() 获取日期
* 4.4 getDay() 获取星期几 0 - 6
* 4.5 getHours() 获取小时 0 - 23
* 4.6 getMinutes() 获取分钟 0 - 59
* 4.7 getSeconds() 获取秒
* 4.8 getMilliseconds() 获取毫秒 1s = 1000ms
*
* 4.9 getTime() 获取时间戳，获取时当前时间距离1970.01.01 00:00:00 的毫秒数
* 4.10 Date.now() 获取此刻的时间戳
* */

// 5 -> 定时器
// setTimeout(callback, 时间间隔毫秒数) 到时间执行一次callback；返回定时器id
// setInterval(callback, 时间间隔) 每隔时间间隔执行一次callback；返回定时器id

// 清除定时器
// clearTimeout(定时器id) 清除timeout
// clearInterval(定时器id) 清除setInterval






