/*
// jq中内置了常见的动画

// 1. show() / hide() 显示或者隐藏，参数是动画持续时间
$('#btn').click(function () {
	$('.animate').hide(300);
});

// 2. slideUp() slideDown() 滑动收起，下滑展开
$('.btn').click(function () {
	$('.animate').slideUp(3000);
});

$('.btn').click(function () {
	$('.animate').slideDown();
});

// 3. fadeIn / fadeOut 淡入 / 淡出
$('.btn').click(function () {
	$('.animate').fadeOut();
});
$('.btn').click(function () {
	$('.animate').fadeIn();
});

// 4. animate() 动画
$('.btn').click(function () {
	$('.animate').animate({height: 300}, 300);
});
*/

// 5. stop方法，在动画开始前调用一次，可以清除上一次动画，不论是否抵达终点都要停止；
$('.btn').click(function () {
	$('.animate').animate({height: 300}, 3000);
	setTimeout(() => {
		$('.animate').stop();
	}, 1000);
});

// 6. finish() 结束本次动画，忽略动画规定的事件，一下到终点

$('.btn').click(function () {
	$('.animate').animate({height: 400}, 30000);
	setTimeout(() => {
		$('.animate').finish();
	}, 1000);
});