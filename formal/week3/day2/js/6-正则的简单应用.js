// 正则简单应用

// 1. 验证中国大陆手机号 以1开头的11位数字
let reg1 = /^1\d{10}$/;
console.log(reg1.test('16601046931')); // true

// 2. 验证某些号段的手机号验证，例如188 170 156
let reg2 = /^1(88|70|56)\d{8}$/;
console.log(reg2.test('18801046931')); // true

// 3. 匹配尾号是连续的三围豹子号 666 777 111
let reg3 = /^1\d{7}(\d)(\1{2})$/;
console.log(reg3.test('15912345666')); // true

// 4. 靓号 中间四位相同后面四位相同

let reg5 = /^1\d{2}(\d)\1{3}(\d)\2{3}$/;
console.log(reg5.test('17733332222'));

// 5. 有效数字验证：
// 10 +10 -10 0.12 10.02
// +或-最多出现一次
// 如果是一位数字可以是0-9
// 多位数不能以0开头
// 如果有小数点，后面必须跟至少一位小数
let reg6 = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;

// 5. 验证数字在某个范围内 18 - 60
// 18 - 19 1[89]|
// 20-59  2[0-9]
// 60 60
let reg7 = /^(1[89]|[2-5]\d|60)$/;
console.log(reg7.test('17')); // true
console.log(reg7.test('18')); // true
console.log(reg7.test('19')); // true
console.log(reg7.test('59')); // true
console.log(reg7.test('60')); // true
console.log(reg7.test('61')); // true
// 6. 匹配中文姓名
// 中文的Unicode编码范围 \u4e00-\u9fa5
// 出现2位到6位
let reg8 = /^[\u4d00-\u9fa5]{2,6}$/;
console.log(reg8.test('马宾')); // true

// 6. 邮箱验证(简单验证)
// 雅虎邮箱：xxxx@yahoo.com.cn
// google xxx@gmain.com
// qq邮箱 xxx@qq.com
// 网易 xxx@163.com
// 网易 xxx@126.com

// 开头部分 [a-zA-Z\d]+
// 中间部分 [-\w]+
// 结尾部分 [a-zA-Z\d]

let reg9 = /^[a-zA-Z\d]+@[a-zA-Z\d]+(\.[a-z]+){1,2}$/;
console.log(reg9.test('mabinbingo@163.com')); // true
console.log(reg9.test('mabinbingo@163@.com')); // false
console.log(reg9.test('1164664451@qq.com')); // true
console.log(reg9.test('1164664451@sina.com.cn')); // true
console.log(reg9.test('1164664451@sina.com.cn.cn')); // false

// 7. 数据类型检测
Object.isTypeOf = function (val) {
	let res = Object.prototype.toString.call(val); // "[object Xxxx]"
	let reg = /^\[object ([a-zA-Z]+)\]$/; // 在正则使用某些特殊元字符的原义时需要转义
	let exec = reg.exec(res)[1];
	return exec.toLowerCase();
};
console.log(Object.isTypeOf(1));



