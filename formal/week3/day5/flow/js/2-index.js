let flowRender = (function () {
	// 1. 从工具库找中导入方法
	const {win, offset, toJSON, arrLikeToAry} = utils;

	// 2. 获取基本数据值
	let winH = win('clientHeight');

	// 3. 获取元素
	let flowBox = document.getElementById('flowBox');
	let flowList = flowBox.getElementsByTagName('li');
	let flowListAry = arrLikeToAry(flowList);

	// 4. 获取数据
	let page = 0;

	function queryData() {
		if (page > 10) {
			console.log('没有更多数据了');
			return;
		}

		page++;

		let xhr =  new XMLHttpRequest();
		xhr.open('GET', `json/data.json?page=${page}`, false);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
				let data = toJSON(xhr.responseText);
				// 这里拿到数据了，可以进行绑定数据了
				bindHTML(data);
			}
		};
		xhr.send();
	}

	// 5. 绑定数据

	function bindHTML(imgData) {
		for (let i = 0; i < imgData.length; i+=3) {
			// 1. 从数据中每次取三个
			let dataArr = [
				imgData[i],
				imgData[i + 1],
				imgData[i + 2]
			];

			// 2. 给页面中三列按照高度进行排序
			flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight);

			// 3. 按照排好的顺序，依次给flowList中的每个li插入数据

			flowListAry.forEach((item, index) => {
				dataArr[index]
					? item.innerHTML += queryHTML(dataArr[index])
					: null
			})
		}
	}

	// 6. 声明拼接字符串的方法
	function queryHTML({pic, link, title}) {
		return `<a href="${link}">
      <div>
        <img alt="" data-src="${pic}">
      </div>
      <span>${title}</span>
    </a>`
	}


	// 7. 图片懒加载
	function lazyLoad() {
		let imgList = document.querySelectorAll('img');
		[...imgList].forEach(item => {
			if (item.src) return;

			let dataSrc = item.getAttribute('data-src');
			let {top: imgOffsetTop} = offset(item);
			let winScrollTop = win('scrollTop');

			if (imgOffsetTop - winH - winScrollTop <= 100) {
				let newImg = new Image();
				newImg.src = dataSrc
				newImg.onload = function () {
					item.src = dataSrc;
					newImg = null;
				}
			}
		})
	}

	// 9. 加载更多

	function loadMore() {
		let pageH = win('scrollHeight');
		let winScrollTop = win('scrollTop');
		if (pageH - winScrollTop - winH <= 100) {
			queryData();
			lazyLoad();
		}
	}


	// 10. 处理滚动
	let timer = null;
	function handleScroll() {
		window.onscroll = function () {
			timer && clearTimeout(timer);
			timer = setTimeout(() => {
				lazyLoad();
				loadMore();
			}, 300)
		}
	}



	return {
		init () {
			queryData();
			lazyLoad();
			handleScroll();
		}
	}
})();
flowRender.init();