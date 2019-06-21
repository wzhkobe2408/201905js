// jq的动画：

// 1. animate()
// $(selector).animate(target, duration,easing动画效果, after)

let $btn = $('.btn');
/*$btn.click(function () {
  // 这个事件函数中，如果你要用this，就不要用箭头函数
  $('.animate').animate({
    width: 400,
    height: 400
  }, 2000)
});*/

// 2. stop() 停止元素当前正在执行的动画，不管它是否执行完；（用来清除动画），一般用来动画开始前先清除之前的动画；
/*$btn.click(function () {
  // 这个事件函数中，如果你要用this，就不要用箭头函数
  $('.animate').animate({
    width: 400,
    height: 400
  }, 2000);
  setTimeout(() => {
    $('.animate').stop();
  }, 1000);
});*/

// 3. finish() 结束当前动画，忽略当前动画的时间，直接到终点；

$btn.click(function () {
  // 这个事件函数中，如果你要用this，就不要用箭头函数
  $('.animate').animate({
    width: 400,
    height: 400
  }, 2000);
  setTimeout(() => {
    $('.animate').finish();
  }, 800);
});

// 4.