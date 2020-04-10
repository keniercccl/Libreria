import React from 'react';
import './App.css';
import Menu from './componets/Menu'
// import List from './componets/List'

function App() {
  return (
    <div className="app">
      <Menu 
        tittle="Amozon"
      />
      {/* <List /> */}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
