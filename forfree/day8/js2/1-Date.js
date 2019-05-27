/*
* 目标：
*   1. 掌握js获取时间的方式
*   2. 掌握Date类型的实例方法
*   3. 掌握Date把时间字符串转化为Date类型的实例对象
* */

// 1. Date 类型；是浏览器中处理时间、日期的类型；
var dateObj = new Date(); // 创建一个Date实例
// console.log(dateObj);
// Thu May 23 2019 11:12:50 GMT+0800 (中国标准时间)
// 星期几 月份 日期 年份 小时:分钟:秒数
// console.log(typeof dateObj); // "object"

// 2. Date的实例方法
// 2.1 getFullYear() 获取四位年份，返回四位年份
var fullYear = dateObj.getFullYear();
// console.log(fullYear); // 2019

// 2.2 getMonth() 获取月份，返回 0 - 11 的数字；0代表1月，11代表12月
var month = dateObj.getMonth();
// console.log(month);

// 2.3 getDate() 获取日期，dateObj的日期是几号就返回几；what date is today?
var date = dateObj.getDate();
// console.log(date); // 23

// 2.4 getDay() 获取星期几；返回 0 - 6；0代表周日，6代表周六； what day is today?
var weekday = dateObj.getDay(); 
// console.log(weekday);

// 2.5 getHours()，返回0 - 23的数字
var hours = dateObj.getHours();
// console.log(hours);

// 2.6 getMinutes() 获取分钟数，dateObj里面的分钟数是几，就返回几
var mins = dateObj.getMinutes();
// console.log(mins);

// 2.7 getSeconds() 获取秒数 返回0-59的数字
var secs = dateObj.getSeconds();
// console.log(secs);

// 2.8 getMilliseconds() 获取毫秒数：1000ms = 1s
var millis = dateObj.getMilliseconds();
console.log(millis);

// 2.9 getTime() 获取时间戳：距离1970年1月1日0:0:0 的毫秒数
var timeStamp = dateObj.getTime();
console.log(timeStamp); // 毫秒数

// Unix 时间戳是秒数，PHP的时间戳就是Unix时间戳。js的时间戳转Unix时间戳需要除以1000，然后再取整；

















