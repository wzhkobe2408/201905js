/*
* qq音乐的功能：
*   1. 响应式布局，采用rem布局解决方案
*   2. 音乐自动播放（audio、video标签）
*   3. 音符按钮用来控制播放，根据播放状态有不同的操作；如果当前是播放的，就暂停播放。如果是暂停的状态，触摸后就是播放；处于播放状态下，这个按钮时旋转的，暂停的状态下是不转的；
*   4. 歌词是跟随播放进度走的，会有高亮样式
*   5. 随着播放，进度条也要更新
*   6. 随着播放，已经播放的时长也要更新。
* */

// zepto是和jq很相似的一款类库，轻量，专门给移动端用的。常用的方法，如获取元素、css、addClass、removeClass等方法都有，用法和jq一样。

// 1. 获取元素：用zepto获取元素和jq获取元素一样；
let musicAudio = $('#audio')[0]; // 用 $(selector) 获取来的是jq对象，需要通过[0] 转成原生对象；
let $header = $('.header');
let $musicBtn = $('.musicBtn'); // 音符按钮
let $main = $('.main'); // 装歌词的容器元素
let $wrapper = $('.wrapper'); // $wrapper 是相对于 $main 定位的
let $footer = $('.footer');
let $current = $('.current');
let $duration = $('.duration');
let $already = $('.already');

// 2. 动态设置main部分的高度
// main部分的高度 = 浏览器可视窗口的高度 - header的高 - footer的高 - 0.6rem的padding值；
function computedMain() {
  let winH = document.documentElement.clientHeight; // 浏览器可视窗口的高
  let headerH = $header[0].offsetHeight; // header的高
  let footerH = $footer[0].offsetHeight; // footer的高
  // winH、headerH、footerH都是以px为单位计量的

  // ? 如何把px换算成rem？获取html的fontSize，然后把这些以px为单位除以fontSize就得到rem数；
  let fontSize = parseFloat(document.documentElement.style.fontSize);
  let curH = (winH - headerH - footerH) / fontSize - 0.6 - .3; // 多减0.3是给footer留一点距离
  $main.css({
    height: curH + 'rem'
  })
}
computedMain();
window.addEventListener('resize', computedMain); // 当页面大小发生改变时重新计算main的高度

// 3. 动态获取歌词，并且绑定到页面中
$.ajax({
  url: 'json/lyric.json',
  type: 'GET', // type 是http method ：get post put delete options
  async: false,
  error (err) {
    console.log(err);
  },
  success ({lyric}) {
    // 处理数据的操作写在success中
    // console.log(lyric);
    bindHTML(lyric)
  }
});

// 4. 绑定数据
function bindHTML(data) {
  // 4.1 分析歌词，解决歌词第一行
  // 我的梦 (华为手机主题曲) - 张靓颖
  // 我的梦&#32;&#40;华为手机主题曲&#41;&#32;&#45;&#32;张靓颖&#10;
  // &#32; -> ' '
  // &#40; -> '('
  // &#41; -> ')'
  // &#45; -> '-'
  let d1 = data.replace(/&#(\d+);/g, function (res, a) {
    // 正则结合replace执行替换，回调函数中的参数：第一个参数res是整个正则捕获到内容，从第二个开始就是分组捕获的内容；
    // 正则结合replace替换，正则能够捕获多少次回调函数就要执行多少次，很像遍历，项目中常用这种方式来遍历字符串；
    // replace写回调函数时用回调函数的返回值替换匹配的内容；

    // 根据分组捕获的数字不同，返回不同内容
    switch (parseFloat(a)) {
      case 32:
        return ' ';
      case 40:
        return '(';
      case 41:
        return ')';
      case 45:
        return '-';
    }
    return res; // 注意，replace使用回调的返回值替换匹配到的内容，但是现阶段我们只处理 32 41 40 45 其他的不处理，所以需要原样返回；
  });

  // 4.1 接着处理每一秒的歌词
  // [00&#58;08&#46;73]一直地一直地往前走&#10;
  // 写在&#58;前的是分钟数
  // 写在&#46;前的是秒数
  // 写在方括号之后 &#10;之前的是歌词
  // 用正则把 分钟数、秒数、及对应的歌词抠下来
  let reg = /\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)&#10;/g;
  let ary = [];
  // 用正则+replace遍历字符串: 正则能捕获到多少次，回调就会执行多少次
  d1.replace(reg, function (res, minute, seconds, value) {
    ary.push({
      minute,
      seconds,
      value
    });
  });
  // console.log(ary);

  // 遍历ary，把数据绑定到页面中
  let str = ``;
  ary.forEach(({minute, seconds, value}) => {
    str += `<p data-min="${minute}" data-sec="${seconds}">${value}</p>`
  });
  $wrapper.html(str);
}




