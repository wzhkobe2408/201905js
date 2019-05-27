/*
* 目标：
*   1. 理解null和undefined的区别
*
* */
/*
* 1. 首先null和undefined是两种不同类型
* 2. typeof null -> "object" 因为null空对象指针；typeof undefined -> "undefined"
* 3. 访问对象、数组不存在的键或者索引返回undefined
* 4. Number(null) -> 0  Number(undefined) -> NaN
* */