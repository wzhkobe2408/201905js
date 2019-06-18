// 设置元素对象的CSS样式
// 设置元素对象的样式只能通过 元素对象.style.xxx = xxx的方法来设置（getComputedStyle返回的对象是只读的）

let box = document.getElementById('box');

// box.style.backgroundColor = '#00b38a';
// box.style.color = '#fff';

// 封装一个方法，设置CSS样式
function setCss(ele, attr, val) {
  // 处理单位：css中特殊属性width、height、margin、padding、marginTop、marginBottom...left、top、bottom、right、fontSize
  let reg = /(fontSize|width|height|(margin|padding)?(top|right|bottom|left)?)/i;
  if (reg.test(attr)) {
    // 如果满足这个条件，说明就是这些属性需要单位的属性
    // isNaN('200px') -> true
    if (!isNaN(val)) { // 如果你传过来的val是个带单位的数字，如200px，isNaN检测返回true，再取反就是false，而false不会执行这里面的代码；当传过来的只是数字时，如200，isNaN检测返回false，再取反就返回true；
      val += 'px';
    }
  }
  ele.style[attr] = val;
}
setCss(box, 'backgroundColor', '#00b38a');
setCss(box, 'color', '#fff');
setCss(box, 'width', 200);

setCss(box, 'float', 'right'); // 左浮动

let box2 = document.getElementById('box2');
setCss(box2, 'float', 'right'); // 左浮动

// css中使用连字符-，js中使用驼峰命名法
// css： margin-top padding-top
// js: marginTop、paddingTop

setCss(box2, 'marginTop', 50);

