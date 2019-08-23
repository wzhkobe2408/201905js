let fs = require('fs')

let obj = {
	id: 1,
	title: 'React全栈课程',
	video: 'http://7xil5b.com1.z0.clouddn.com/zhufengpeixun.mp4',
	poster: 'http://www.zhufengpeixun.com/react/img/react.jpg',
	url: 'http://www.zhufengpeixun.com/videoCourse/images/video_react.png',
	price: '￥400.00元',
	type: '1'
}

let cls = ['React全栈课程', 'React全栈架构', 'Vue从入门到实战项目']

let urls = [
	'http://www.zhufengpeixun.com/videoCourse/images/video_react.png',
	'http://www.zhufengpeixun.com/videoCourse/images/video_vue.png'
]

let ps = [
	'http://www.zhufengpeixun.com/react/img/react.jpg',
	'http://www.zhufengpeixun.cn/vue/img/vue.png'
]

let ary = []
let ran = () => Math.floor(Math.random() * 100)
let x3 = (i) => i % 3
let x2 = (i) => i % 2
let ts = ['1', '2']
let ms = ['￥400.00', '￥700.00']

for (let i = 1; i < 1000; i++) {
	let r = ran()
	let o = JSON.parse(JSON.stringify(obj))
	o.id = i
	o.title = cls[x3(r)]
	o.poster = ps[x2(r)]
	o.url = urls[x2(r)]
	o.type = ts[x2(r)]
	o.price = ms[x2(r)]
	ary.push(o)
}

fs.writeFileSync('./lessons.json', JSON.stringify(ary), 'utf8')
