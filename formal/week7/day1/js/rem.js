// ; 是前面行的结尾，防止前面不写分号
;(function (designWidth) {
  function computedFont() {
    // 获取视口的宽度
    let winW = document.documentElement.clientWidth;

    // 根据屏幕和设计稿的尺寸关系设置html的fontSize
    // 获取body document.body
    // 获取html document.documentElement
    // 计算已经生效的样式：getComputedStyle(元素对象, 伪类)
    if (winW >= 750) {
      // 当屏幕尺寸超过750的时候，让html的字体大小为100px
      document.documentElement.style.fontSize = '100px';
      return;
    }
    document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
  }
  computedFont(); // 这一次执行是在页面加载的时候就要判断屏幕宽度给出html的fontSize；
  window.addEventListener('resize', computedFont);
  window.addEventListener('orientationchange', computedFont);
})(750);