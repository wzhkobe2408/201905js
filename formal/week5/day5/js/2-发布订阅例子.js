function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}
function fn3() {
  console.log(3);
}

let plan = new Subscribe();

plan.addEvent(fn1).addEvent(fn2).addEvent(fn3);
// plan.addEvent(fn2);
// plan.addEvent(fn3);

// plan.removeEvent(fn2);

setTimeout(() => {
  plan.fire()
}, 3000);

let plan2 = new Subscribe();

plan2.addEvent(function () {
  console.log('a');
});

plan2.addEvent(function () {
  console.log('b');
});

setTimeout(() => {
  plan2.fire()
}, 4000);