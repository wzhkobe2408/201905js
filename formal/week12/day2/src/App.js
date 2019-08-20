import React from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'

import TestContext from './courses/0-复习'

import Todo from './components/Todo'

import Button from './courses/1-Test'

// 如果这个 context 共享的值，在组件尽可能多的地方都能取得到，Context.Provider 在组件树中的层级要放的尽可能的高
import ThemeContext from './courses/ThemeContext'

import Username from './courses/Username'
import Password from './courses/Password'

function App() {
  return (
    <ThemeContext.Provider value={{theme: 'danger'}}>
      <div className="App">
        {/*<Todo />*/}
        {/*<TestContext />*/}
        {/*<Button />*/}
      </div>
      <div>
        <Username />
        <Password />
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
