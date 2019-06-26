let form = document.querySelector('#login');

// 不使用ajax向服务器发送数据，会用到表单提交
form.onsubmit = function (e) {
  console.log('SUBMIT');
  e.preventDefault(); // 表单提交有默认跳转的默认行为，阻止后就不会跳了
}