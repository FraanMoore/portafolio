
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import BodyCard from './components/bodyCards';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Jumbotron/>
       <BodyCard/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
