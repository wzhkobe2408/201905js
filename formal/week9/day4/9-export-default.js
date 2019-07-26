// 在前面的例子中，我们要想导入，必须知道导出的时候名字都是什么，如果不知道没办法导入；

// ESModule 提供了一个默认导出，其他模块在导入的时候可以不关心导出的名字是什么；

export default function sum(a, b) {
  return a + b;
}

// 一个模块的默认导出只能有一个，多了要报错；
/*
export default function minus(a, b) {
  return a - b;
}*/
