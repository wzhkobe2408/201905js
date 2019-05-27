/*
* 1. Date： 浏览器中处理日期时间的对象；
*   1.1 获取标准时间 new Date() 是你的电脑上的时间（客户端本地事件）
*   1.2 Date实例方法
*     getFullYear() 获取四位年份
*     getMonth() 获取月份 0 - 11
*     getDate() 获取日期
*     getDay() 获取星期几 0 - 6（周日-周六）
*     getHours() 获取小时 0 - 23
*     getMinutes() 获取分钟 0 - 59
*     getSeconds() 获取秒数
*     getMilliseconds() 获取毫秒
*     getTime() 获取时间戳（时间戳是距离1970.01.01 00:00:00 毫秒数）
*
*     Date.now() 获取当前时刻的时间戳（当前就是此刻）
*
*     两个时间格式对象做差 是求这两个时间的毫秒差
*       var past = new Date('1997-07-01 00:00:00');
*       var now = new Date();
*       var spanTime = now - past; // 获取当前时刻到97年7月1日零时的毫秒差
*
*     +new Date() 把当前时间转换成时间戳，和getTime() 效果一样
*
* 2. 定时器
*   js中有两种定时器：返回定时器ID
*     1. setTimeout(function () {}, 时间间隔毫秒数); 只执行一次；
*     2. setInterval(function () {}, 时间间隔毫秒数); 每隔时间间隔就会执行一次
*   清除定时器：清除定时器，就是让定时器停下来
*     1. clearTimeout(定时器ID)
*     2. clearInterval(定时器ID)
*
* 3. 倒计时
* */
var timeBox = document.getElementById('timeBox');
function countDown() {
  // 1. 计算当前时间和目标时间的毫秒时间差
  var curDate = new Date();
  var targetDate = new Date('2019-05-24 10:10:00');
  var spanTime = targetDate - curDate; // 两个时间对象做差就是求毫秒时间差

  // 判断spanTime小于等于0，如果没有时间了，就该停止倒计时
  if (spanTime <= 0) {
    clearInterval(timerId);
    timeBox.innerHTML = '00:00:00';
    return;
  }

  // 2. 将毫秒时间差换算成小时、分钟、秒
  // 2.1 小时 1小时 = 60 * 60 * 1000 毫秒
  var oneHour = 60 * 60 * 1000; // 一个小时的毫秒数
  var oneMinute = 60 * 1000; // 一分钟的毫秒数
  var hours = Math.floor(spanTime / oneHour);

  // 2.2 分钟
  var hMs = hours * oneHour; // 小时数占用的毫秒数
  var mins = Math.floor((spanTime - hMs) / oneMinute); // 获取分钟数

  // 2.3 秒数
  var minsMs = mins * oneMinute; // 分钟占用的毫秒数
  var secs = Math.floor((spanTime - hMs - minsMs) / 1000); // 获取秒数

  // 3. 判断是否需要补零
  hours = addZero(hours);
  mins = addZero(mins);
  secs = addZero(secs);

  // 4. 把倒计时插入到页面中
  timeBox.innerHTML = `${hours}:${mins}:${secs}`;

}
function addZero(num) {
  return num < 10 ? `0${num}` : num;
}
countDown();
var timerId = setInterval(countDown, 1000);













