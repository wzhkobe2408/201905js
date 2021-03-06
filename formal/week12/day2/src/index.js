import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from './rdx/react-redux'
import store from './rdx/myStore'

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));


