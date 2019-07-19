class MyPromise {
  constructor(excutor) {
    this.state = 'pending';
    this.fulfilledEvent = [];
    this.rejectedEvent = [];
    this.value = undefined;

    let resolve = (result) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = result;

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
      excutor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveFn, rejectedFn) {
    // this.fulfilledEvent.push(resolveFn);
    // this.rejectedEvent.push(rejectedFn);
    if (typeof resolveFn !== 'function') {
      resolveFn = result => result;
    }
    if (typeof rejectedFn !== 'function') {
      rejectedFn = reason => {
        throw reason;
      }
    }

    return new MyPromise((resolve, reject) => {
      this.fulfilledEvent.push((result) => {
        try {
          let x = resolveFn(result);
          x instanceof MyPromise
            ? x.then(resolve, reject) // x 是一个promise实例，x的是resolve还是reject决定p2的then哪个回调执行；x如果resolve了，就应该执行p2then的第一个回调，如果x reject了，会执行p2的第二个回调；
            // 我们发现x的状态决定了p2的状态；我们现在把控制p2状态变为resolve的resolve函数添加到x的成功事件池中，把控制p2状态变为rejected的reject方法添加到x的失败事件池中；
            // 如果x 现在变为resolve了，就会执行x成功的事件池中的函数，在x的成功事件池中有一个控制p2 resolve的方法，执行了它，p2就变成resolve了；对应的如果x变为rejected了，就会执行x的失败的事件池，就会把p2的reject方法执行了，p2就变成了rejected；
            : resolve(x);
        } catch (e) {
          reject(e);
        }
      });
      this.rejectedEvent.push((reason) => {
        try {
          let x = rejectedFn(reason);
          x instanceof MyPromise
            ? x.then(resolve, reject)
            : resolve(x);

        } catch (e) {
          reject(e);
        }
      })
    })
  }

  catch(rejectedFn) {
    // catch方法就是then方法的语法糖；
    this.then(null, rejectedFn);
  }
}

let p1 = new MyPromise((resolve, reject) => {

  console.log(3);
  resolve('xyz');
});
let p2 = p1.then((res) => {
  console.log(1);
  return new MyPromise((resolve, reject) => {
    resolve();
    reject();
  })
}, (err) => {
  console.log(2);
});

p2.then((res) => {
  console.log(4);
}, (err) => {
  console.log(5);
});


