class MyPromise {
  constructor (excutor) {
    // this 是构造函数的实例，this.xxx = xxx 向实例上添加私有属性

    this.state = 'pending'; // promise的状态，默认是pending
    this.fulfilledEvent = []; // 成功的事件池
    this.rejectedEvent = []; // 失败的事件池
    this.value = undefined; // 用来记录resolve()或者reject()时传入的值


    let resolve = (result) => {
      // resolve的作用是修改状态为fulfilled，挨个执行成功事件池中的函数
      if (this.state !== 'pending') return; // promise的状态只能修改一次，只能从pending变为fulfilled或者从pending变为rejected，如果this.state 不是pending了，说明这个状态被改过了，后面的代码不能再执行了；
      this.state = 'fulfilled';
      this.value = result;
      // this.fulfilledEvent.forEach(item => item(this.value)); // fulfilledEvent里面收集的是then方法的回调函数，而then方法的回调都应该是异步执行的； 所以这里需要把执行事件池处理成异步的；
      let timer = setTimeout(() => {
        clearTimeout(timer);
        this.fulfilledEvent.forEach(item => item(this.value));
      }, 0);
    };
    let reject = (reason) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.value = reason;
      let timer = setTimeout(() => {
        clearTimeout(timer);
        this.rejectedEvent.forEach(item => item(this.value));
      }, 0);
    };
    try {
      excutor(resolve,reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveFn, rejectedFn) {
    this.fulfilledEvent.push(resolveFn);
    this.rejectedEvent.push(rejectedFn);
  }

}

new MyPromise((resolve, reject) => {
  // resolve('abc');
  console.log(3);
  throw '12333';
  reject('xyz');
}).then((res) => {
  console.log(1);
}, (err) => {
  console.log(2);
});
console.log(4);


