let ul = document.querySelector('#ulBox');
let box = document.querySelector('.box');

ul.innerHTML += ul.innerHTML; // 为了实现无缝轮播需要把ul里面的所有li复制一份放到ul中；

ul.style.width = '1600px';

let timer = setInterval(() => {
	box.scrollLeft += 1;
	if (box.scrollLeft >= 800) {
		// 当满足这个条件时，说明此时正好滚出去4个li，在box里展示的正是我们复制出来的4个li，这个时候需要把box.scrollLeft设置成0，但是因为设置成0时展示的也是这4张图片，给人的感觉好像没有换，所以还是无缝的轮播的
		box.scrollLeft = 0;
	}
}, 10);