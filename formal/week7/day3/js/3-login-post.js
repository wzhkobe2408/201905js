// 接口 login.json
// 参数：user_name 用户名  password 密码
// 返回值：
/*
* {
*  code: 0,  // 0 表示登录成功
*  data: {},
*  msg: 'ok'
* }
*
*
* */

// 点击登录时把用户名和密码传递给服务器，如果登录成功，alert提示登录成功，否则alert登录失败，并且把服务器返回的内容一并alert出来

// 1 绑定点击事件
// 2 在点击事件函数中，获取用户输入的密码和用户名
// 3 把获取的数据传递给接口(get请求怎么传？post请求怎么传)
// 4 根据接口返回的code值作出不同的操作：

// 1. 用get请求
let $ = selector =>  document.querySelector(selector);
let submit = $('#submit');
let uName = $('#uName');
let pwd = $('#pwd');

// 2. 用post请求
submit.onclick = function () {
  let nameValue = uName.value;
  let passValue = pwd.value;

  let xhr = new XMLHttpRequest();
  xhr.open('POST','login.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = JSON.parse(xhr.responseText);
      if (res.code === 0) {
        alert('登录成功')
      } else {
        alert('登录失败' + res.msg);
      }
    }
  };
  // 处理post请求需要的数据，但是这个数据中的key同样不可以瞎写，接口文档上规定的参数名就是我们要传递给服务端的key；
  let data = {
    user_name: nameValue,
    password: passValue
  };
  xhr.send(JSON.stringify(data)); // POST通过send方法把数据放到请求体，但是也只能接收字符串形式的，所以需要JSON.stringify把对象转成字符串；
};
