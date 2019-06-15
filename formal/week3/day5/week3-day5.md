<div style="text-align: right">
  <a href="http://www.zhufengpeixun.cn/" title="快来看看大牛都在学习什么新技术？">珠峰培训，专注前端</a>
  <span>珠峰·马宾</span>
</div>

## 瀑布流


瀑布流：多列的不规则排列，每一列由很多块构成，每一块宽度固定，高度不固定，按照某种规则排列，最终这些列之间高度不能相差太大。同时当页面滑动到底部时就去加载下一页，并且为图片设置懒加载功能。

+ 思路：首先获取我们需要的数组（假设20条，一共三列）。
+ 每次从数据中取三个，接着把数据绑定成html，插入到每一列中。
+ 为了保证插入数据后这些列的高度相差不大，在插入之前，先按照这些列的现有高度进行升序排列，然后先给最矮的插入数据？？

+ HTML代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>珠峰-瀑布流</title>
	<link rel="stylesheet" href="css/reset.min.css">
	<link rel="stylesheet" href="css/index2.css">
</head>
<body>
<ul class="flowBox clearfix" id="flowBox">
	<li data-height="0">
		<!--<a href="javascript:void 0;">
			<div><img src="img/13.jpg" alt=""></div>
			<span>泰勒·斯威夫特（Taylor Swift），1989年12月13日出生于美国宾州，美国歌手、演员。2006年出道，同年发行专辑《泰勒·斯威夫特》，该专辑获得美国唱片业协会的白金唱片认证</span>
		</a>-->
	</li>
	<li data-height="0"></li>
	<li data-height="0"></li>
</ul>
<script src="js/utils.js"></script>
<script src="js/2-index.js"></script>
</body>
</html>
```

+ css

```css
html, body {
  background: #F4F4F4;
  overflow-x: hidden;
}

.flowBox {
  margin: 20px auto;
  width: 1000px;
}

.flowBox li {
  float: left;
  margin-right: 20px;
  width: 320px;
}

.flowBox li:nth-last-child(1) {
  margin-right: 0;
}

.flowBox li a {
  display: block;
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 0 #666;
  /*box-shadow: 3px 3px 10px 0 #666*/
}

.flowBox li a div {
  background: url("../img/default.gif") no-repeat center center #eee;
  min-height: 50px;
}

.flowBox li a div img {
  display: block;
  width: 100%;
}

.flowBox li a span {
  display: block;
  margin: 10px;
  font-size: 12px;
  color: #555; /*span下的文字颜色555*/
  line-height: 20px;
}
```

+ 分步骤JS代码

``` javascript
// 瀑布流：多列的不规则排列，每一列由很多块构成，每一块宽度固定，高度不固定，按照某种规则排列，最终这些列之间高度不能相差太大。同时当页面滑动到底部时就去加载下一页，并且为图片设置懒加载功能。

// 思路：首先获取我们需要的数组（假设20条，一共三列）。
// 每次从数据中取三个，接着把数据绑定成html，插入到每一列中。
// 为了保证插入数据后这些列的高度相差不大，在插入之前，先按照这些列的现有高度进行升序排列，然后先给最矮的插入数据？？？？


// 从页面中导入方法
const { win, offset, toJSON } = utils;

// 1. 获取元素
let flowBox = document.getElementById('flowBox');
let flowList = flowBox.getElementsByTagName('li');

// 2. 从服务端获取数据
let imgData = null;
let page = 0; // 请求的是第几页

let queryData = () => {
	// 真实项目中，瀑布流第一次打开时只加载第一页的数据，当用户滚动到底部时，我们才需要去请求第二页的数据。服务端的接口需要我们把请求的是第几页的数据这个参数告诉他，然后服务端会把对应页数的内容返回给前端。（分页技术）
	if (page > 10) {
		console.log('已经是最后一页了');
		return;
	}
	page++;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `json/data.json?page=${page}`, false);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
			imgData = toJSON(xhr.responseText);
		}
	};
	xhr.send();
};
queryData();

// 3. 绑定数据
let bindHTML = () => {
	for (let i = 0; i < imgData.length; i += 3) {
		// 每三个一组，如果有10条数据，第一次取三个，取得是索引为 0 1 2的者三个，下一次取得是 3 4 5，所以i += 3（你想几个一组就i+=几）
		// 假设数组一共10条，最大的索引值是9，每次取三个，在最后一次取的时候，索引为10 11的不存在。所以在使用之前还需要验证一次我们取出的是否存在
		let item1 = imgData[i];
		let item2 = imgData[i + 1];
		let item3 = imgData[i + 2];

		let flowListAry = Array.from(flowList);

		flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight);

		// 按照排好序的数组依次给每一列插入数据, flowListAry[0] 是最矮的
		if (item1) {
			flowListAry[0].innerHTML += `<a href="${item1.link}">
      <div>
        <img alt="" data-src="${item1.pic}">
      </div>
      <span>${item1.title}</span>
    </a>`
		}
		if (item2) {
			flowListAry[1].innerHTML += `<a href="${item2.link}">
      <div>
        <img alt="" data-src="${item2.pic}">
      </div>
      <span>${item2.title}</span>
    </a>`
		}

		if (item3) {
			flowListAry[2].innerHTML += `<a href="${item3.link}">
      <div>
        <img alt="" data-src="${item3.pic}">
      </div>
      <span>${item3.title}</span>
    </a>`
		}

	}
};

bindHTML();
lazyLoad(); // 因为刚刚绑定完数据，一定有一部分数据展示在可视区中，但是此时如果不滚动就不会去加载这些图片，所以需要再绑定数据结束后手动执行lazyLoad方法去加载图片

// 4. 加载更多
// 4.1 什么时候去加载更多？页面滚动到底部时去加载更多。
// 4.2 我们如何知道页面滚动到底了呢？监听页面的滚动条滚动事件，实时计算是否到底
let timer = null;
window.onscroll = function () {
	// 页面滚动就会触发onscroll事件，进而执行这个函数
	// 如何计算页面是否滚动到底了呢？
	// 页面真实的高度 - 滚动条卷去的高度 - 浏览器可视窗口的高度 === 0 表示页面已经滚动到底了
	lazyLoad();
	let pageH = win('scrollHeight');
	let winSctop = win('scrollTop');
	let winH = win('clientHeight');
	if (pageH - winSctop - winH <= 200) {
		// 为了提升用于体验，一般都是距离页面到底还有一段时就去加载，减少用户等待时间

		timer && clearTimeout(timer); // 为了减少对请求次数，采用函数节流和防抖
		timer = setTimeout(function () {
			queryData();
			bindHTML();
			lazyLoad();
		}, 300)
	}
};

// 5. 图片延时加载（多张）
function lazyLoad() {
	// 1. 获取所有的img元素
	let imgList = document.querySelectorAll('img');
	// 2. 遍历imgList，在遍历时计算每一张图片是否进入浏览器的可视窗口。
	for (let i = 0; i < imgList.length; i++) {
		let item = imgList[i];
		if (item.src) continue;
		let {top: imgOffsetTop} = offset(item);
		let winSctp = win('scrollTop');
		let winH = win('clientHeight');
		let dataSrc = item.getAttribute('data-src');
		if (imgOffsetTop - winSctp - winH <= 100) {
			let newImg = document.createElement('img');
			newImg.src = dataSrc;
			newImg.onload = function () {
				item.src = dataSrc;
				newImg = null;
			}
		}
	}
}

// 函数的节流和防抖：降低js代码函数的执行频率；
```


+ 单例模式封装

``` javascript
let flowRender = (function () {
	// 从工具库中导入方法
	const {win, offset, toJSON, arrLikeToAry} = utils;

	let winH = win('clientHeight'); // 获取浏览器屏幕的高度

	// 1. 获取元素
	let flowList = document.querySelectorAll('#flowBox li');

	// 2. 请求数据的方法
	let page = 0;

	function queryData() {
		if (page > 10) {
			console.log('没有更多数据了');
			return;
		}
		page++;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `json/data.json?page=${page}`, false);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
				let data = JSON.parse(xhr.responseText);
				bindHTML(data);
			}
		};
		xhr.send();
	}

	// 3. 数据绑定
	function bindHTML(data) {
		for (let i = 0; i < data.length; i += 3) {
			// 每次从数据中取三个数据
			let dataArr = [
				data[i],
				data[i + 1],
				data[i + 2]
			];

			// 2. 给页面中的三列排序
			let flowListAry = arrLikeToAry(flowList);
			flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight);
			flowListAry.forEach((liItem, liIndex) => {
				dataArr[liIndex]
					? liItem.innerHTML += queryHTML(dataArr[liIndex])
					: null;
			})
		}
	}

	// 3. 拼接模板字符串
	function queryHTML({pic, link, title}) {
		return `<a href="${link}">
      <div>
        <img alt="" data-src="${pic}">
      </div>
      <span>${title}</span>
    </a>`
	}


	// 4. 图片懒加载
	function lazyLoad() {
		let imgList = document.querySelectorAll('img');
		[...imgList].forEach(item => {
			if (item.src) return;
			let dataSrc = item.getAttribute('data-src');
			let {top: imgOffsetTop } = offset(item);
			let winSctp = win('scrollTop');

			if (imgOffsetTop - winH - winSctp <= 100) {
				let newImg = new Image();
				newImg.src = dataSrc;
				newImg.onload = function () {
					item.src = dataSrc;
					newImg = null
				}
			}
		})
	}

	// 5. 加载更多
	function loadMore() {
		let pageH = win('scrollHeight');
		let winSctp = win('scrollTop');
		if (pageH - winSctp - winH <= 100) {
			queryData();
			lazyLoad();
		}
	}

	// 5. 处理滚动
	let timer = null;
	function handleScroll() {
		window.onscroll = function () {
			timer && clearTimeout(timer);
			timer = setTimeout(() => {
				lazyLoad();
				loadMore();
			}, 300);
		}
	}

	return {
		init() {
			queryData();
			lazyLoad();
			loadMore();
			handleScroll();
		}
	}
})();
flowRender.init();
```

+ 异步编程解决图片乱序问题（了解内容）

``` javascript
/*
* 本次优化了瀑布流排列会出现偶尔插入乱序的问题，！！不要求掌握！！！只是告诉大家可以有这样的解决方案。
* Promise + async + await 异步编程解决方案！！！
* */
let flowRender = (function () {
	let timer = null;
  // 获取元素
  let flowList = document.querySelectorAll('#flowBox li');
  // 1. 请求数据的方法
  let page = 0;
  let queryData = () => {
    if (page > 3) {
      alert('没有更多数据了！');
      window.onscroll = null;
      return;
    }
    page++;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `json/data.json?page=${page}`, false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        let data = JSON.parse(xhr.responseText);
        bindHTML(data);
      }
    };
    xhr.send(null);
  };

  let resolveImg = (url) => {
    return new Promise((resolve, reject) => {
      let newImg = document.createElement('img');
      newImg.src = url;
      newImg.onload = function () {
        let {width, height} = newImg;
        let cal = Math.round(300 / width * height); // 按比例计算出最后图片的高度 300是列宽320px减去左右padding 10px，
        resolve(cal);
      };
      newImg.onerror = reject;
    });
  };
  let fetchImg = (ary) => {
    let mappings = ary.map(async (item, index) => {
      if (item) {
        return await resolveImg(item.pic);
      } else {
        return 0;
      }
    });
    return Promise.all(mappings);
  };

  // 2. bindHTML
  async function bindHTML(data) {
    for (let i = 0; i < data.length; i += 3) {
      let dataArr = [
        data[i],
        data[i + 1],
        data[i + 2]
      ];
      let result = await fetchImg(dataArr);
      Array.from(flowList).sort(
        (a, b) => a.getAttribute('data-height') - b.getAttribute('data-height')
      ).forEach((li, liIndex) => {
        if (dataArr[liIndex]) {
          li.innerHTML += queryHTML(dataArr[liIndex]);
          li.setAttribute('data-height', +li.getAttribute('data-height') + result[liIndex])
        }
      });
      // 不使用await
      // fetchImg(dataArr).then((result) => {
      //   // 给三列排序
      //   Array.from(flowList).sort(
      //     (a, b) => a.getAttribute('data-height') - b.getAttribute('data-height')
      //   ).forEach((li, liIndex) => {
      //     if (dataArr[liIndex]) {
      //       li.innerHTML += queryHTML(dataArr[liIndex]);
      //       li.setAttribute('data-height', +li.getAttribute('data-height') + result[liIndex])
      //     }
      //   });
      //   isRun = false;
      //   lazyLoad()
      // });
    }
    lazyLoad();
  }

  // 3. 拼接模板字符串
  function queryHTML({link, pic, title}) {
    return `<a href="${link}">
      <div>
        <img alt="" data-src="${pic}">
      </div>
      <span>${title}</span>
    </a>`
  }

  // 4. 加载更多
  function loadMore() {
    window.onscroll = function () {
      lazyLoad();
      let pageH = document.documentElement.scrollHeight;
      let winScrollTop = document.documentElement.scrollTop;
      let winH = document.documentElement.clientHeight;
      if (pageH - winScrollTop - winH <= 100) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
	        queryData();
        }, 300)
      }
    }
  }

  // 5. 图片懒加载
  function lazyLoad() {
    let imgList = document.getElementsByTagName('img');
    for (let i = 0; i < imgList.length; i++) {
      let item = imgList[i];
      let imgOffsetTop = item.offsetTop;
      let winScrollTop = document.documentElement.scrollTop;
      let winH = document.documentElement.clientHeight;
      let dataSrc = item.getAttribute('data-src');

      if (
        imgOffsetTop - winScrollTop - winH <= 100 &&
        !item.src
      ) {
        //!item.src => 优化点：如果图片没有src属性时，说明img还没进行过懒加载。如果图片已经有src属性说明已经被加载过了，就不需要再进行懒加载处理了。
        let newImg = document.createElement('img');
        newImg.src = dataSrc;
        newImg.onload = function () {
          item.src = dataSrc;
          newImg = null
        }
      }
    }
  }

  return {
    init() {
      queryData();
      loadMore();
    }
  }
})();
flowRender.init();
```


<div style="text-align: right">【发上等愿，结中等缘，享下等福，择高处立，寻平处住，向宽处行】</div>