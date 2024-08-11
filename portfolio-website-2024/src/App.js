import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;
