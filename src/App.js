
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Jumbotron/>
      </header>
    </div>
  );
}

export default App;
