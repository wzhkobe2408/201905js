// 瀑布流：宽度相同的多列不规则排布。
// 这些列宽度相同，列中的每一块宽度相同，高度不同。但是最终这些列的高度不能相差太大;
// 当滚动条滚动到页面底部时去加载下一页。
// 页面中所有的图片要延时加载。

// 原理：首先页面中的数据不能是写死的，是动态获取来的（AJAX），接着把数据绑定成HTML。在插入到列之前，先给这些列按照高度进行升序排序，在插入数据时先给高度最矮的插，再给第二矮的插，最后给最高的插。这样就能保证最后高度相差不会太大。

// 页面滚动到底去加载下一页：什么时候计算？页面滚动时，即onscroll事件触发时；
// 怎么计算？页面的scrollHeight - 页面的scrollTop - 浏览器可视窗口的高度 <= 0 表示已经滚到到底了
// 所以就是在页面的onscroll事件中去计算剩余高度，当剩余高度为0就表示要到底了。

// 1. 导入工具方法：
const { offset, win, arrLikeToAry, toJSON } = window.utils;

// 2. 获取元素
let flowBox = document.getElementById('flowBox');
let flowList = flowBox.getElementsByTagName('li'); // 集合，类数组

// 3. 动态获取数据
let imgData = null;
let page = 0;
function queryData() {
  // 因为滑动到底还需要去加载第二页，而服务器需要咱们告诉它我需要第几页的数据，然后服务器接收到这个页数，它会返回给你想要的页数对应的数据。（这种技术叫做分页）一般GET请求通过在url末尾拼接查询参数的方式把这些数据传递给服务器
  // AJAX四步：
  page++; // 当执行这个方法时，page就会加加，
  let xhr = new XMLHttpRequest(); // 创建ajax实例对象
  xhr.open('GET', `json/data.json?page=${page}`, false); // 调用open方法配置请求
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      imgData = toJSON(xhr.responseText); // 把获取回来的数据解析成对象（把字符串解析成数组或者普通对象）
    }
  };
  xhr.send();
}
queryData();
// console.log(imgData);

// 4. 绑定数据：因为滑动到底的时候会请求第二页的数据，请求完数据还需要绑定，所以绑定数据这些代码会执行多次，所以需要封装一个方法。
function bindHTML() {
  // 4.1 遍历获取来数据
  // 现在有20条数据，每次取3条，第一次取的 0，1，2的这三个，下一次再取三个 3 ，4， 5的这三个，所以 i += 3

  // 假如有10条：
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // 9 10 11 最后一次取的时候，后两项不存在；所以在绑定数据时，要判断一下item1、item2、item3是否存在；
  for (let i = 0; i < imgData.length; i += 3) {
    let item1 = imgData[i];
    let item2 = imgData[i + 1];
    let item3 = imgData[i + 2];

    // 2. 为了保证这三列的高度相差不大，在给每一列插数据之前先给这三列按照高度进行排序；
    let flowListAry = arrLikeToAry(flowList); // 把这三个li的集合转成数组
    // 按照真实高度升序排序
    flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight); // 此时排过序后，flowListAry中第一项最矮的，第二个是第二矮的，第三个是最高的

    // 3. 绑定数据、按照排好的顺序插入每一列中
    if (item1) { // item1 不存在时是undefined，undefined转成布尔值是false
      flowListAry[0].innerHTML += `<a href="${item1.link}">
      <div><img src="${item1.pic}" alt=""></div>
      <span>${item1.title}</span>
    </a>`
    }

    if (item2) { // item2 不存在时是undefined，undefined转成布尔值是false
      flowListAry[1].innerHTML += `<a href="${item2.link}">
      <div><img src="${item2.pic}" alt=""></div>
      <span>${item2.title}</span>
    </a>`
    }

    if (item3) { // item1 不存在时是undefined，undefined转成布尔值是false
      flowListAry[2].innerHTML += `<a href="${item3.link}">
      <div><img src="${item3.pic}" alt=""></div>
      <span>${item3.title}</span>
    </a>`
    }
  }
}
bindHTML();








