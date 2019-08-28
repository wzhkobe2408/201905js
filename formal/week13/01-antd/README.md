# antd 使用

1. 安装 antd ant-design：

``` shell
yarn add antd --save
```
2. 在主入口 index.js 导入 antd 的 css 样式；

``` javascript
import 'antd/dist/antd.css'
```

3. 利用国际化 （i18n）把组件内的文案设置为 中文
在 index.js 做如下配置：

```jsx
import { ConfigProvider } from 'antd'

import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.render(<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>, document.getElementById('root'));
```
