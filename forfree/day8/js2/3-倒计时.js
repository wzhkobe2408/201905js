/*
* 目标：
*   1. 理解倒计时原理
*   2. 练习Date实例对象的方法
*   3. 掌握剩余时分秒的计算
* */

// 需求：实现一个距离目标时间的倒计时，每隔一秒钟更新一次。倒计时到0时停止倒计时。把倒计时效果插入到页面中。

// 目标时间：2019-05-23 13:00:00
// 原理：计算从当前时间到目标时间的时间差，然后把这个时间差换算成多少小时，多少分钟，多少秒；

var timeBox = document.getElementById('timeBox');


function countDown() {
  // 1. 计算当前时间距离目标时间的毫秒时间差
  var curDate = new Date(); // 获取当前时间
  var curStamp = curDate.getTime(); // 获取当前时间的时间戳
  var targetDate = new Date('2019-05-23 14:00:00'); // new Date() 可以把时间格式的字符串转换成标准时间格式对象。因为只有标准时间格式的对象才能调用getTime()
  var targetStamp = targetDate.getTime(); // 获取目标时间的时间戳
  var spanStamp = targetStamp - curStamp;  // 目标时间减去当前时间的毫秒差

  // spanStamp 小于等于0，表示已经到达或者超过目标时间了，此时应该停止倒计时。
  if (spanStamp <= 0) {
    // 停止倒计时，并且页面中的倒计时更新成 '00:00:00'，终止后面的代码执行
    clearInterval(timerId);
    timeBox.innerHTML = '00:00:00';
    return;
  }

  // 2. 把毫秒差换算成小时、分钟、秒
  // 2.1 小时
  var hours = Math.floor(spanStamp / (60 * 60 * 1000)); // 用毫秒时间差 除以 一个小时的毫秒数

  // 2.2 分钟
  var hMs = hours * 60 * 60 * 1000; // 小时占用的毫秒数
  var mins = Math.floor((spanStamp - hMs) / (1000 * 60)); // 用总毫秒时间差 - 小时占用的毫秒数 再除以 一分钟的毫秒数

  // 2.3 秒数
  var minsMs = mins * 1000 * 60; // 计算分钟数占用的毫秒数
  var secs = Math.floor((spanStamp - hMs - minsMs) / 1000);

  // 3 判断时分秒是否是各位数字，如果是个位数就需要补零；
  // hours = hours < 10 ? '0' + hours : hours;
  // mins = mins < 10 ? '0' + mins : mins;
  // secs = secs < 10 ? '0' + secs : secs; 当重复代码过多时，就需要封装成一个函数
  hours = addZero(hours);
  mins = addZero(mins);
  secs = addZero(secs);
  timeBox.innerHTML = `${hours}:${mins}:${secs}`;
  // timeBox.innerHTML =  hours + ':' + mins + ':' + secs;
}
function addZero(num) {
  return num < 10 ? '0' + num : num;
}
countDown();

var timerId = setInterval(countDown, 1000);