let $tabHeader = $('.header > li');
let $tabCard = $('#tabBox > div');

$tabHeader.click(function () {
  $(this).addClass('active') // 为被点击的增加active类名
    .siblings() // 获取被点击元素的兄弟们
    .removeClass('active'); // 移除被点击元素的兄弟们的active类名

  let index = $(this).index(); // 获取当前被点击li的索引
  $tabCard.eq(index) // 获取索引为index的卡片
    .addClass('active') // 给索引为index的卡片增加active类名
    .siblings() // 获取索引为index的卡片的兄弟们
    .removeClass('active') // 移除兄弟们的选中类名
});