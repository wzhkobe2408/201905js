// 有两个接口，login.json 和 banner.json；这两个接口并没有什么联系，但是需要都请求完才能渲染数据；

// 同时请求多个接口，这些接口都请求完才能做某件事情；这个时候要用到一个方法：

// Promise.all([promise实例1, promise实例2.....]) 是Promise的静态方法，
// 参数接收一个数组，数组项都是promise实例；
// 返回一个新的Promise实例，如果数组中所有的Promise都resolve了，新返回的Promise实例就是resolve。如果数组中只要有一个reject了，新返回的Promise实例就是reject的；

let p1 = new Promise((resolve, reject) => {
  $.ajax({
    url: 'login.json',
    type: 'GET',
    cache: false,
    dataType: 'json',
    error(err) {
      reject(err)
    },
    success(data) {
      resolve('abc')
    }
  })
});
let p2 = new Promise((resolve, reject) => {
  $.ajax({
    url: 'banner.json',
    type: 'GET',
    cache: false,
    dataType: 'json',
    error(err) {
      reject(err)
    },
    success(data) {
      resolve('xyz');
    }
  })
});

Promise.all([p2, p1]).then(function (result) {
  console.log(result); // result是一个数组，是all方法的数组中所有promise实例在resolve的时候传入的实参，而且是按照顺序的；
}).catch((err) => console.log(err));

// 通常then中只写成功的回调；再最后写一个catch方法，这里面用于处理异常和reject；