import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './components/MyTable'
import MyForm from './components/MyForm'
import MyModal from './components/MyModal'

function App() {
  return (
    <div className="App">
      <MyForm />
      <MyModal />
    </div>
  );
}

export default App;
