// Promise用来管理异步的，Promise本身是同步的，then里面的回调函数是异步的；

let p1 = new Promise((resolve, reject) => {
  // resolve();
  reject('abc');
}).then(result => {
  return result;
}, err => {

}).catch(err => {

})


