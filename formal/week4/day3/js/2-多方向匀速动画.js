// 需求：在2s内，元素匀速运动到top为500px、left为850px的位置；

function linear(curT, begin, change, duration = 2000) {
  return (change / duration) * curT + begin;
}

// 匀速动画：
// 1. 求终点坐标(目标值，如opacity的最终值是1)
// 2. 求起点坐标（起点初始值）
// 3. 求路程：终点坐标 - 起点坐标
// 4. 设置计时curT，记录从开始运动经过的时间
// 5. 设置定时器，累加curT，计算经过curT时间后元素所处的位置，并且把这个位置设置给元素；
// 6. 做过界判断

const { css } = window.utils;
// console.log(box); // 元素id在js中可以当变量用，无需获取，变量代表的带有该id的元素对象，知道有这么回事，不要这么干；
let box = document.getElementById('box');

let duration = 2000;

// 1. 求终点坐标
let targetTop = 400;
let targetLeft = 850;

// 2. 求起点坐标
let beginLeft = css(box, 'left');
let beginTop = css(box, 'top');

// 3. 求路程
let changeLeft = targetLeft - beginLeft;
let changeTop = targetTop - beginTop;

// 4. 设置计时器变量
let curT = 0;

let timerId = setInterval(() => {
  // 4.1 给计时器累加
  curT += 10;
  // 4.2 做过界判断
  if (curT >= duration) {
    clearInterval(timerId); // 到达终点停止动画
    // css(box, 'left', targetLeft); 单个设置
    // css(box, 'top', targetTop); 单个设置
    css(box, {
      left: targetLeft,
      top: targetTop
    }); // 把元素的位置设置到终点（批量设置）
    return;
  }
  // 4.3 经过curT时间后所处位置
  let left = linear(curT, beginLeft, changeLeft); // linear 有duration的默认值
  let top = linear(curT, beginTop, changeTop, duration);

  // 4.4 把计算出来的位置设置给元素
  css(box, {
    left, // 对象的简洁
    top
  })
}, 10);

// 多方向（多属性）的动画其实就是多个单一维度的匀速动画；

