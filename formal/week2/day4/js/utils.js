// 封装一个工具集：增强代码的可复用性，提升开发效率；
// utils 工具包，这里面提供了常用的方法；

window.utils = (function () {
  /**
   * @desc 类数组转数组
   * @param arrLike 类数组对象
   * @returns {Array} 类数组对象转成的数组
   */
  function arrLikeToAry(arrLike) {
    try {
      return Array.from(arrLike);
    } catch (e) {
      var ary = []; //
      for (var i = 0; i < arrLike.length; i++) {
        ary.push(arrLike[i]);
      }
      return ary;
    }
  }
  function toJson() {

  }
  return {
    arrLikeToAry: arrLikeToAry
    // arrLikeToAry
  }
})();

