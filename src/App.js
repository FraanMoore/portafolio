import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {
  return (
    <div>
        <Navbar />
        </div>
   /* <BrowserRouter> 
      
        <Routes>
          <Route path="/AboutMe" element={<AboutMe/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes> 
      </div>
   </BrowserRouter> */
  );
}

export default App;

