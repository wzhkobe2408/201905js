(function (designWidth) {
  function computedFont() {
    let winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
  }
  computedFont();
  window.addEventListener('resize', computedFont);
  // orientationchange 事件时手机横屏竖屏切换时触发
  window.addEventListener('orientationchange', computedFont);
})(750)