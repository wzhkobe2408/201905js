// 同步是阻塞的，前一个执行不完，后一个不能开始；
// 异步是非阻塞的，后面的执行不用前面的执行完；（异步任务放到等待任务队列中，等待任务队列中的任务谁先达到执行条件谁先执行）

let data = null;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'banner.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    bindHTML(data);
  }
};
xhr.send();

function bindHTML(data) {
  // 绑定数据
  console.log(data);
}
// bindHTML(data); // null 是因为ajax采用的异步的，而异步的已经被放到等待任务队列中；但是这个bindHTML() 是同步任务，需要先执行完bindHTML，才能执行等待任务队列中的ajax；

// 为什么使用异步？

// 现在有5个接口需要请求
// 1. 1s
// 2. 2s
// 3. 3s
// 4. 4s
// 5. 5s

// 如果使用同步，需要用时15s;因为前一个ajax不完，后一个没办法开始；用户等待时间过长；

// 现在改成异步：第一个ajax执行，就把它放到等待任务队列中，第二个不用第一个完，第二个就开始了，第三个也不用等第二个。。。这样做每个接口不用互相等；（使用异步就好像同时发了5个请求）然后总的用时只需要5s就可以了。

// 真实的项目中用异步的多；

// 异步有一个麻烦的问题，当接口互相依赖时，代码组织起来会比较麻烦；比如说有两个接口，第二个接口依赖于第一个接口；
let d1 = null;
let x1 = new XMLHttpRequest();
x1.open('GET', '1.json', true);
x1.onreadystatechange = function () {
  if (x1.readyState === 4 && x1.status === 200) {
    d1 = JSON.parse(x1.responseText);

    let id = d1.id;

    let x2 = new XMLHttpRequest();
    x2.open('GET', '2.json?id=' + id, true);
    x2.onreadystatechange = function () {
      if (x2.readyState === 4 && x2.status === 200) {


      }
    };
    x2.send();
  }
};
x1.send();


