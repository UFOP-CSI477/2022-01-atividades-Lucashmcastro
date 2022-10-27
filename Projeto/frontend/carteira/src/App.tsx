import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      {/* <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      < Menu />

     
    </div>
  );
}

export default App;
