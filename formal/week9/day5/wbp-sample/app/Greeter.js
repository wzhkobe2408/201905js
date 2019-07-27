let config = require('./config.json');
module.exports = function () {
  var greeter = document.createElement('div');
  greeter.innerText = config.textContent;
  return greeter;
};