import './components/navbar.css';
import './views/aboutme.css'
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import AboutMe from './views/aboutme';
import Projects from './views/projects';
import Contact from './views/contact';



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
