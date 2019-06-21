// jquery的常用方法
// jquery的方法只能jq对象调用，原生的方法只能原生的对象调用

let $tabBox = $('.tabBox');

// 1. height() 不传参时获取，传参是设置
console.log($tabBox.height());
$tabBox.height(100);

// 2. width() 不传参时获取，传参是设置


// 3. offset() 获取当前元素距离body顶部和左侧的距离，返回一个对象
console.log($tabBox.offset());

// 4. scrollTop() / scrollLeft() 不传参时是获取纵向 / 横向滚动条的距离，返回一个对象
console.log($(document.body).scrollLeft());
$(document.documentElement).scrollTop(100);

// 5. innerHeight() / innerWidth() 获取当前元素的clientHeight clientWidth

// 6. outerWidth() outerHeight() 获取元素的offsetWidth/offsetHeight

// 7. hasClass() 当前元素是否有某个类名

// 8. addClass() 给当前元素增加一个类名

// 9. removeClass() 从当前jq对象中移除类名

// 10. append() 向元素末尾追加一个元素

// 11. 元素.remove() 元素是要被移除的元素

// 12. next() 获取当前元素的下一个弟弟; nextAll 获取所有的弟弟

// 13. prev() 获取当前元素的上一个哥哥，prevAll 获取所有的哥哥

// 14. siblings() 获取当前元素的个兄弟们

// 15. children() 获取当前元素的所有元素孩子

// 16. css()

// 17. text() 不传参获取当前元素的innerText，传参是设置当前元素的innerHTML

// 18. html() 不传参时获取当前元素的innerHTML，传参是设置当前元素的innerHTML