let $tabHeader = $('.header li');
let $tabCard = $('.header ~ div');

$tabHeader.click(function () {
	let index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$tabCard.eq(index).addClass('active').siblings().removeClass('active');
});