let flowRender = (function () {
  // 1. 导入工具方法
  const {offset, win, toJSON, arrLikeToAry} = window.utils;

  // 2. 获取元素：
  let flowBox = document.getElementById('flowBox');
  let flowList = flowBox.getElementsByTagName('li');

  // 3. 获取数据
  let page = 0;
  function queryData() {
    // 3.1 给page累加，请求下一页
    page++;
    // 3.2 ajax四步请求数据
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `json/data.json?page=${page}`, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        let data = toJSON(xhr.responseText);
        // 在这里拿到数据了，可以执行绑定数据的方法???
        bindHTML(data);
      }
    };
    xhr.send();
  }

  // 3. 绑定数据的方法
  function bindHTML(imgData) {
    for (let i = 0; i < imgData.length; i += 3) {
      // 1. 每次从数据中取三个
      let dataArr = [
        imgData[i],
        imgData[i + 1],
        imgData[i + 2]
      ];

      // 2. 给页面中的列排序
      let flowListAry = arrLikeToAry(flowList);
      flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight);

      // 3. 按照排好序的顺序给列插入数据
      flowListAry.forEach((liItem, liIndex) => {
        dataArr[liIndex]
          ? liItem.innerHTML += queryHTML(dataArr[liIndex])
          : null;
      })
    }
  }

  function queryHTML({pic, link, title}) {
    return `<a href="${link}">
      <div><img data-src="${pic}" alt=""></div>
      <span>${title}</span>
    </a>`
  }


  // 5. 处理滚动
  let timer = null;
  function handleScroll() {
    window.onscroll = function () {
      lazyLoad();
      let pageH = win('scrollHeight');
      let scrollTop = win('scrollTop');
      let winH = win('clientHeight');
      if (pageH - scrollTop - winH <= 100) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          queryData();
          lazyLoad();
        }, 300);
      }
    }
  }

  // 6. 图片懒加载

  function lazyLoad() {
    // 6.1 获取所有的图片
    let imgList = document.querySelectorAll('img');
    [...imgList].forEach(img => {
      if (img.src) return; // 这是个函数，终止只能用return
      let dataSrc = img.getAttribute('data-src');
      let imgOffsetTop = offset(img).top;
      let winScrollTop = win('scrollTop');
      let winH = win('clientHeight');
      if (imgOffsetTop - winScrollTop - winH <= 100) {
        let newImg = document.createElement('img');
        newImg.src = dataSrc;
        newImg.onload = () => {
          img.src = dataSrc;
          newImg = null;
        }
      }

    })
  }

  return {
    init: function () {
      queryData(); // 请求第一页的数据
      lazyLoad();
      handleScroll();
    }
  }
})();

flowRender.init();