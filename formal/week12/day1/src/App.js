import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'

import Panel from './courses/2-组合'

import Todo from './components/Todo'

import ContextTest from './courses/4-context'

function App() {
  let header = <h1>这是个Heading</h1>
  let body = <p>这是一段文本主题</p>
  let footer = (<footer>
    <button className="btn btn-danger">删除</button>
    <button className="btn btn-success">添加</button>
  </footer>)


  return (
    <div className="App">
      {/*<Panel>
        <h1>这是个panel</h1>
        <p>这是p标签</p>
      </Panel>*/}
      {/*<Panel head={header}
             body={body}
             footer={footer}>
        <section>
          <p>p1</p>
        </section>
      </Panel>*/}
      {/*<Todo></Todo>*/}
      <ContextTest></ContextTest>
    </div>
  );
}

export default App;
