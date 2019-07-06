(function (designWidth) {
  function computedFont() {
    let winW = document.documentElement.clientWidth;
    if (winW >= 750) {
      // 当设备的宽度超过750时，把html的fontSize设置为100px
      document.documentElement.style.fontSize = '100px';
      return;
    }
    document.documentElement.style.fontSize = winW / designWidth * 100 + 'px';
  }
  computedFont();
  window.addEventListener('resize', computedFont);
  window.addEventListener('orientationchange', computedFont);
})(750);