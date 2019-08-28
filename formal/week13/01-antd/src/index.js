import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'antd/dist/antd.css'

// 导入  ConfigProvider
import { ConfigProvider } from 'antd'

import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>, document.getElementById('root'));


