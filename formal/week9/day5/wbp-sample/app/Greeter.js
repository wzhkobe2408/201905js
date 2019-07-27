/* // CommonJS
let config = require('./config.json');
module.exports = function () {
  var greeter = document.createElement('div');
  greeter.innerText = config.textContent;
  return greeter;
};*/

import config from './config.json'; // 用ESModule 导入JSON文件

export default function () {
  var greeter = document.createElement('div');
  greeter.innerText = config.textContent;
  console.log('刷新');
  return greeter;
}