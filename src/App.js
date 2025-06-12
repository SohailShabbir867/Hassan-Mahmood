import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';


import './App.css';
import './index.css';

function App() {
  return (

      <div>
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
  
  );
}

export default App;
