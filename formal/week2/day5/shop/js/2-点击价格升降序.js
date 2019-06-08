// 1. 获取元素对象
let headerBox = document.getElementById('header'); // 按钮的容器元素
let linkList = headerBox.getElementsByTagName('a'); // 按钮集合
let listBox = document.getElementById('list'); // 商品列表的容器元素
let productList = listBox.getElementsByTagName('li'); // 商品列表li

// 获取商品li集合
// console.log(linkList);
// console.log(productList); // productList是一个空集合

let productData = null; // productData 准备存储从服务端获取的数据

// ajax 获取数据
let xhr = new XMLHttpRequest(); // 创建ajax实例对象
xhr.open('GET', 'json/product.json', false); // 调用open方法配置请求
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    productData = JSON.parse(xhr.responseText); // 解析服务端的数据结构，把它处理成对象
  }
}; // 监听xhr的onreadystatechange事件
xhr.send(); // 发送请求

let str = ``;
for (let i = 0; i < productData.length; i++) {
  let {
    img,
    title,
    price,
    time,
    hot
  } = productData[i];
  // 因为后面排序需要使用价格、上架时间、热度，所以在绑定数据时就需要通过html行内属性的方式保存起来；
  str += `<li data-price="${price}" 
              data-time="${time}" 
              data-hot="${hot}">
      <a href="javascript:;">
        <img src="${img}" alt="">
        <p>${title}</p>
        <span>￥${price}</span>
      </a>
    </li>`
}
listBox.innerHTML = str;

// 2. 封装一个处理排序的方法
// let flag = false; //
let flag = -1; // 1 -1 为了实现连续点击价格按钮可以切换升降序，我们设置一个flag开关（一个标识在两个值之间来回切换）。在点击事件中给flag乘等于-1，就可以实现flag在 +1 和 -1 之间来回切换。然后我们把这个flag乘给sort回调函数的返回值
let sortList = function () { // 用let声明的变量必须在声明后才能使用
                             // 1. 我们需要给页面中li进行排序，即给productList集合排序。但是productList是一个类数组集合，如果想用sort方法排序，需要先将其转换成数组；
  let productAry = utils.arrLikeToAry(productList);
  // console.log(productAry);
  // console.log(Array.isArray(productAry));

  // 2. 处理排序（目前阶段按照价格排序）
  productAry.sort((a, b) => {
    // 在这里我们需要根据li的价格进行排序，而a、b就是li元素对象。但是我们目前阶段拿不到价格数据，所以我们需要回到绑定数据的地方想办法把价格数据存起来；
    let aInn = a.getAttribute('data-price');
    let bInn = b.getAttribute('data-price');
   /* if (flag) {
      return aInn - bInn;
    } else {
      return bInn - aInn;
    }*/

    return (aInn - bInn) * flag; // flag在+1和-1来回切换，就可以实现在升降序间来回切换
    // 升序：(aInn - bInn) * -1
    // 降序：(bInn - aInn) * -1
    // 升序：(aInn - bInn) * -1
  });
  
  // console.log(productAry);

  // 3. 数组已经排过序了，但是页面中元素没有排。为了让页面元素也排序，我们需要按照数组中元素顺序，把元素appendChild到ul中
  productAry.forEach(item => listBox.appendChild(item));
};

// 3. 绑定事件
linkList[1].onclick = function () {
  // flag = !flag;
  flag *= -1; // 点击的时候给flag乘等于-1，所以flag会在 +1 和 -1之间来回切换
  sortList();
};