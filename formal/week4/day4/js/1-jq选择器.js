// 类库、插件、UI组件库、框架
// 1. 类库：jq/zepto/lodash....提供一些真实项目中常用的方法，任何项目都可以把类库导入进来，调取里面的方法实现自己需要的业务逻辑。

// 2. 插件：是封装了固定功能的js单元；如轮播图插件，日历插件，模态框插件；

// 3. UI组件库：把html结构、css、js全部都封装好了，我们想实现一个功能，直接引入进来就可以直接使用，如antd（ant-design）Element-UI等

// 4. 框架：具备编程思想，需要我们按照其思想设计、开发应用，最后框架帮我们实现应用。React（React Native）Vue Angular Backbone。。。

// jQuery是一款很优秀的类库，jQuery默认是$作为其类名，使用$就是使用这个类

// jQuery是一个类（函数），在其自身和原型上提供了很多的方法，供我们调取实现业务逻辑；定义在jQuery类型上面的方法只能jQuery自己调用，而定义在jQuery原型上的方法，只要是jQuery的实例都可以调用；


// 1. 用jQuery获取的元素对象，使用jquery获取元素对象一般通过选择器获取；

// 1.1 基本选择器：id、class类名、标签选择器

let idEg = $('#tabBox');
let classEg = $('.tabBox');
let tagName = $('ul');

console.log(idEg);

// 1.2 层级选择器：根据html层级关系获取元素对象
// 后代选择器：#tabBox  div 获取（id为tabBox后代中所有的div）
// 子代选择器：#tabBox > div 获取（id为tabBox所有子级div）
// 兄弟选择器：#tabBox + div 获取id为tabBox紧邻的下一个兄弟div
// 获取所有的弟弟 #tabBxo ~

let generation = $('#tabBox div');
let children = $('#tabBox > div');
let next = $('#tabBox + div');
let nextAll = $('#tabBox ~ p');

console.log(generation);

// 1.3 过滤选择器
// :first 获取第一个
// :last 获取最后一个
// :odd 获取索引为奇数的
// :even 获取索引为偶数的
// :not() 除了xxx的，:not(first) 除了第一个
// :eq(index) 获取索引为index的
// :gt(index) 获取比指定索引大的
// :lt(index) 获取比指定索引小的

let first = $('.header li:first');
let last = $('.header li:last');

// 2. jq对象：通过$()方法获取的都是jQuery的实例，成为jq对象；
// 每个jq对象都是一个类数组对象，其中有索引表示获取的元素对象（原生对象），属性length表示获取到的元素个数；

console.log(first instanceof $)


