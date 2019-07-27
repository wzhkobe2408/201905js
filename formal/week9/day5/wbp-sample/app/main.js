/* // CommonJS
let greeter = require('./Greeter');

document.getElementById('root').appendChild(greeter());*/

import axios from 'axios'; // 有了webpack以后，再用axios等第三方的库，用npm安装后，在哪儿用，直接在哪儿import即可；

// ESModule
import greeter from './Greeter'; // 如果用webpack，导入js的时候可以不写.js

let render = () => {
  document.getElementById('root').appendChild(greeter());
};
render();

// 此时webpack-dev-server并没有/api/addUser这个接口，但是配置后，它可以帮你转发到指定的服务上；（代理）

axios.post('/api/addUser', {
  name: '',
  phone: '16601046931'
}).then((res) => {
  console.log(res.data);
});

axios.get('/home/help/search', {
  params: {
    keyword: '存管',
    type: 0,
    limit: 10
  }
}).then((res) => {
  console.log('from itz');
  console.log(res);
});

// 导入css，但是要配置css-loader
import './index.css'; // 向js中导入css文件

import './index.less';