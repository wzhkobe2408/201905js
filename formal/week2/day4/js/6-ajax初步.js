/*
* 目标：
*   1. 掌握ajax基本使用
*
*
* */
// Asynchronous javascript and xml 异步的javascript和xml

// 在我们过往的项目中的数据都是写死的，但是真实项目中，数据都是存储数据库中的。而服务端通过服务端的技术（nodejs、php、java、python...）把数据从数据库中读取出来再处理成客户端需要的数据，然后通过网络技术（ajax、jsonp等）把数据传递给客户端；

// ajax 四步

// 第一步：创建一个ajax对象
var xhr = new XMLHttpRequest();

// 第二步：调用ajax对象的open方法设置请求信息：
// 请求方式 http method（GET POST PUT DELETE OPTIONS...）
// 请求的服务端url地址（接口）
// 同步或异步 true 表示同步，false表示异步

xhr.open('GET', './data.json', false);

// 第三步：设置xhr的onreadystatechange事件监听
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		// 当xhr.readyState变成4 并且 xhr的status为200时表示当前请求成功
		// 当成功后，xhr的responseText属性会存储着本次请求获取的数据
		console.log(xhr.responseText);
	}
};
// 第四步：发送请求
xhr.send();